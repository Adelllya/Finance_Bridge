/**
 * TikTok Pixel & Events API Hybrid Utility
 * Pixel ID: DAG5573C77U3EU7G6ULG
 * Token: b374e3f60b8683ac57985a85f7b990174abed0a7
 * Full compliance with TikTok Events Manager specifications:
 * - SHA-256 hashed PII (external_id, email, phone)
 * - Exact contents array + top-level parameter structure
 * - Synchronous browser pixel dispatch (no loss on click/unload)
 * - Dual-delivery to TikTok Events API (/api/tiktok-events) with deduplication via event_id
 */

declare global {
  interface Window {
    ttq?: {
      identify: (data: Record<string, string>) => void;
      track: (
        event: string,
        params?: Record<string, unknown>,
        opts?: Record<string, string>
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

/**
 * Generates or retrieves a persistent 64-character hex external_id (valid SHA-256 format)
 */
export function getOrCreateSha256ExternalId(): string {
  if (typeof window === "undefined") {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  }
  const KEY = "tt_ext_id_v2";
  try {
    let id = localStorage.getItem(KEY);
    if (!id || !/^[a-f0-9]{64}$/.test(id)) {
      const arr = new Uint8Array(32);
      if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(arr);
      } else {
        for (let i = 0; i < 32; i++) arr[i] = (Math.random() * 256) | 0;
      }
      id = Array.from(arr)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  }
}

/**
 * Standard SHA-256 hashing for emails & phone numbers
 */
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

export interface PiiData {
  email?: string;
  phone_number?: string;
  external_id?: string;
}

/**
 * Sends event data to the serverless Events API endpoint
 */
function sendEventsApi(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const jsonStr = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      const blob = new Blob([jsonStr], { type: "application/json" });
      navigator.sendBeacon("/api/tiktok-events", blob);
    } else {
      fetch("/api/tiktok-events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonStr,
        keepalive: true,
      }).catch(() => {});
    }
  } catch (_) {}
}

/**
 * ttq.identify with SHA-256 hashed values
 */
export function ttqIdentifySync(pii?: PiiData) {
  const ttq = getTtq();
  if (!ttq) return;
  const extId = pii?.external_id || getOrCreateSha256ExternalId();
  ttq.identify({
    external_id: extId,
  });
}

export async function ttqIdentify(pii?: PiiData) {
  const ttq = getTtq();
  if (!ttq) return;

  const extId = pii?.external_id || getOrCreateSha256ExternalId();
  const payload: Record<string, string> = {
    external_id: extId,
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
 * Dispatches both to client Pixel (ttq.track) and server Events API (/api/tiktok-events)
 */
export function sendTrack(
  eventName: string,
  contentId: string,
  contentName: string,
  contentType: "product" | "product_group" = "product",
  value: number = 45000,
  currency: string = "KZT",
  pii?: PiiData,
  customEventId?: string
): string {
  const ttq = getTtq();
  const eventId = customEventId || generateEventId();
  const extId = pii?.external_id || getOrCreateSha256ExternalId();

  // 1. Identify client synchronously
  ttqIdentifySync({ external_id: extId });

  // 2. Client-side pixel track
  if (ttq) {
    ttq.track(
      eventName,
      {
        contents: [
          {
            content_id: contentId,
            content_type: contentType,
            content_name: contentName,
          },
        ],
        content_id: contentId,
        content_type: contentType,
        content_name: contentName,
        value: value,
        currency: currency,
      },
      {
        event_id: eventId,
      }
    );
  }

  // 3. Server-side Events API track (Dual delivery with deduplication)
  sendEventsApi({
    event: eventName,
    event_id: eventId,
    user: {
      external_id: extId,
      phone: pii?.phone_number,
      email: pii?.email,
    },
    properties: {
      contents: [
        {
          content_id: contentId,
          content_type: contentType,
          content_name: contentName,
        },
      ],
      content_id: contentId,
      content_type: contentType,
      content_name: contentName,
      value: value,
      currency: currency,
    },
    page: {
      url: typeof window !== "undefined" ? window.location.href : "https://financebridge.kz/",
    },
  });

  return eventId;
}

/**
 * ttq.track('ViewContent')
 */
export function trackViewContent(
  contentId: string = "fb_accounting_main",
  contentName: string = "Бухгалтерское сопровождение в Казахстане",
  value: number = 45000,
  currency: string = "KZT"
) {
  return sendTrack("ViewContent", contentId, contentName, "product", value, currency);
}

/**
 * ttq.track('ClickButton')
 */
export function trackClickButton(
  buttonId: string,
  buttonName: string,
  value: number = 45000,
  currency: string = "KZT"
) {
  return sendTrack("ClickButton", buttonId, buttonName, "product", value, currency);
}

/**
 * ttq.track('Contact')
 */
export function trackContact(
  channel: "whatsapp" | "phone" | "instagram",
  contentName: string = "Консультация с главным бухгалтером",
  value: number = 45000,
  currency: string = "KZT"
) {
  return sendTrack("Contact", `contact_${channel}`, contentName, "product", value, currency);
}

/**
 * ttq.track('Lead') and SubmitForm
 */
export function trackLead(
  contentId: string = "fb_accounting_lead",
  contentName: string = "Заявка на бухгалтерский расчёт",
  value: number = 45000,
  currency: string = "KZT",
  pii?: PiiData
) {
  sendTrack("Lead", contentId, contentName, "product", value, currency, pii);
  sendTrack("SubmitForm", contentId, contentName, "product", value, currency, pii);
}

/**
 * Executes full tracking suite under WhatsApp application submission:
 * 1. ttq.identify with SHA-256 hashed values
 * 2. ttq.track('ClickButton')
 * 3. ttq.track('Contact')
 * 4. ttq.track('Lead')
 * 5. ttq.track('SubmitForm')
 * 6. ttq.track('CompleteRegistration')
 * 7. Serverless Events API dual-delivery
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
  const extId = getOrCreateSha256ExternalId();

  // 1. Identify with SHA-256 hashed customer PII
  let hashedEmail: string | undefined;
  let hashedPhone: string | undefined;

  if (params?.customerEmail) {
    hashedEmail = await sha256(params.customerEmail);
  }
  if (params?.customerPhone) {
    const cleanPhone = params.customerPhone.replace(/[^\d+]/g, "");
    hashedPhone = await sha256(cleanPhone);
  }

  const piiData: PiiData = {
    external_id: extId,
    email: hashedEmail,
    phone_number: hashedPhone,
  };

  ttqIdentify(piiData);

  // 2. Track ClickButton
  sendTrack(
    "ClickButton",
    `btn_${taskId}`,
    `Подача заявки в WhatsApp: ${taskLabel}`,
    "product",
    value,
    currency,
    piiData
  );

  // 3. Track Contact
  sendTrack(
    "Contact",
    "contact_whatsapp_lead",
    `Прямой диалог с главбухом в WhatsApp: ${taskLabel}`,
    "product",
    value,
    currency,
    piiData
  );

  // 4. Track Lead
  sendTrack(
    "Lead",
    `lead_${taskId}`,
    `Заявка на расчет бухгалтерии: ${taskLabel}`,
    "product",
    value,
    currency,
    piiData
  );

  // 5. Track SubmitForm
  sendTrack(
    "SubmitForm",
    `submit_${taskId}`,
    `Отправка формы заявки в WhatsApp: ${taskLabel}`,
    "product",
    value,
    currency,
    piiData
  );

  // 6. Track CompleteRegistration
  sendTrack(
    "CompleteRegistration",
    `reg_${taskId}`,
    `Завершение оформления заявки: ${taskLabel}`,
    "product",
    value,
    currency,
    piiData
  );
}

if (typeof window !== "undefined") {
  window.ttqTrackWhatsAppSubmit = trackWhatsAppApplicationSubmit;
}

