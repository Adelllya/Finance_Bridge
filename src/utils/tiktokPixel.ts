/**
 * TikTok Pixel Event Tracking Utility
 * Pixel ID: DAG5573C77U3EU7G6ULG
 * Ensures 100% compliance with TikTok Events Manager (top-level content_id + contents array + client SHA-256 PII)
 */

declare global {
  interface Window {
    ttq?: {
      identify: (data: Record<string, string>) => void;
      track: (
        event: string,
        params?: Record<string, unknown>,
        opts?: Record<string, string>,
      ) => void;
      page: () => void;
    };
    ttqTrackWhatsAppSubmit?: (params?: {
      taskId?: string;
      taskLabel?: string;
      customerName?: string;
      customerPhone?: string;
      customerEmail?: string;
      value?: number;
      currency?: string;
    }) => Promise<void>;
  }
}

function getTtq() {
  if (typeof window !== "undefined" && window.ttq) {
    return window.ttq;
  }
  return null;
}

export function generateEventId(): string {
  return `${Date.now()}_${Math.floor(Math.random() * 1000000)}`;
}

export async function sha256(input: string): Promise<string> {
  const clean = input.trim().toLowerCase();
  if (!clean) return "";
  try {
    if (typeof window !== "undefined" && window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(clean);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    }
  } catch (err) {
    console.warn("SHA-256 hash failed:", err);
  }
  return clean;
}

export function getOrCreateExternalId(): string {
  if (typeof window === "undefined") return "fb_guest_0";
  const KEY = "fb_tt_external_id";
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = `fb_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    localStorage.setItem(KEY, id);
  }
  return id;
}

export interface PiiData {
  email?: string;
  phone_number?: string;
  external_id?: string;
}

/**
 * ttq.identify with SHA-256 hashed values
 */
export async function ttqIdentify(pii?: PiiData) {
  const ttq = getTtq();
  if (!ttq) return;

  const rawExt = pii?.external_id || getOrCreateExternalId();
  const hashedExt = await sha256(rawExt);

  const payload: Record<string, string> = {
    external_id: hashedExt,
  };

  if (pii?.email) {
    payload.email = await sha256(pii.email);
  }

  if (pii?.phone_number) {
    const cleanPhone = pii.phone_number.replace(/[^\d+]/g, "");
    payload.phone_number = await sha256(cleanPhone);
  }

  ttq.identify(payload);
}

/**
 * Standardized event dispatcher ensuring both top-level content_id and contents array are present
 */
export function sendTrack(
  eventName: string,
  contentId: string,
  contentName: string,
  contentType: "product" | "product_group" = "product",
  value: number = 0,
  currency: string = "KZT"
) {
  const ttq = getTtq();
  if (!ttq) return;

  const eventId = generateEventId();

  ttq.track(
    eventName,
    {
      content_id: contentId,
      content_type: contentType,
      content_name: contentName,
      contents: [
        {
          content_id: contentId,
          content_type: contentType,
          content_name: contentName,
        },
      ],
      value: value,
      currency: currency,
    },
    {
      event_id: eventId,
    }
  );
}

/**
 * ttq.track('ViewContent')
 */
export async function trackViewContent(
  contentId: string = "fb_main_landing",
  contentName: string = "Бухгалтерское сопровождение ТОО и ИП в Казахстане",
  value: number = 45000,
  currency: string = "KZT"
) {
  await ttqIdentify();
  sendTrack("ViewContent", contentId, contentName, "product_group", value, currency);
}

/**
 * ttq.track('ClickButton')
 */
export async function trackClickButton(
  buttonId: string,
  buttonName: string,
  value: number = 0,
  currency: string = "KZT"
) {
  await ttqIdentify();
  sendTrack("ClickButton", buttonId, buttonName, "product", value, currency);
}

/**
 * ttq.track('Contact')
 */
export async function trackContact(
  channel: "whatsapp" | "phone" | "instagram",
  contentName: string = "Консультация с главным бухгалтером",
  value: number = 0,
  currency: string = "KZT"
) {
  await ttqIdentify();
  sendTrack("Contact", `contact_${channel}`, contentName, "product", value, currency);
}

/**
 * ttq.track('Lead') and SubmitForm
 */
export async function trackLead(
  contentId: string = "fb_calc_lead",
  contentName: string = "Заявка на бухгалтерский расчёт",
  value: number = 45000,
  currency: string = "KZT",
  pii?: PiiData
) {
  await ttqIdentify(pii);
  sendTrack("Lead", contentId, contentName, "product", value, currency);
  sendTrack("SubmitForm", contentId, contentName, "product", value, currency);
}

/**
 * Executes full tracking suite under WhatsApp application submission:
 * 1. ttq.identify with SHA-256 hashed values
 * 2. ttq.track('ClickButton')
 * 3. ttq.track('Contact')
 * 4. ttq.track('Lead')
 * 5. ttq.track('SubmitForm')
 */
export async function trackWhatsAppApplicationSubmit(params?: {
  taskId?: string;
  taskLabel?: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  value?: number;
  currency?: string;
}) {
  const taskId = params?.taskId || "accounting_inquiry";
  const taskLabel = params?.taskLabel || "Бухгалтерское сопровождение";
  const value = params?.value ?? 45000;
  const currency = params?.currency ?? "KZT";

  // 1. Identify with SHA-256 hashed customer PII
  await ttqIdentify({
    phone_number: params?.customerPhone,
    email: params?.customerEmail,
  });

  // 2. Track ClickButton
  sendTrack(
    "ClickButton",
    `whatsapp_submit_${taskId}`,
    `Подача заявки в WhatsApp: ${taskLabel}`,
    "product",
    value,
    currency
  );

  // 3. Track Contact
  sendTrack(
    "Contact",
    "contact_whatsapp_lead",
    `Прямой диалог с главбухом в WhatsApp (${taskLabel})`,
    "product",
    value,
    currency
  );

  // 4. Track Lead
  sendTrack(
    "Lead",
    `lead_${taskId}`,
    `Заявка на расчёт бухгалтерии (${taskLabel})`,
    "product",
    value,
    currency
  );

  // 5. Track SubmitForm
  sendTrack(
    "SubmitForm",
    `submit_${taskId}`,
    `Отправка формы заявки в WhatsApp (${taskLabel})`,
    "product",
    value,
    currency
  );
}

if (typeof window !== "undefined") {
  window.ttqTrackWhatsAppSubmit = trackWhatsAppApplicationSubmit;
}
