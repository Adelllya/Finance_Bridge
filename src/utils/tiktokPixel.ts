/**
 * TikTok Pixel Event Tracking Utility
 * Pixel ID: DAG5573C77U3EU7G6ULG (loaded in index.html)
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
  }
}

function ttq() {
  if (typeof window !== "undefined" && window.ttq) {
    return window.ttq;
  }
  return null;
}

/** Generate a unique event_id: timestamp_random */
export function generateEventId(): string {
  return `${Date.now()}_${Math.floor(Math.random() * 1000000)}`;
}

/** SHA-256 client-side hash required for TikTok PII */
export async function sha256(input: string): Promise<string> {
  const clean = input.trim().toLowerCase();
  if (!clean) return "";
  try {
    if (window.crypto && window.crypto.subtle) {
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

/** Get or create persistent external_id for anonymous visitor identity */
export function getOrCreateExternalId(): string {
  if (typeof window === "undefined") return "fb_visitor_default";
  const KEY = "fb_tt_external_id";
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = `fb_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
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
 * ttq.identify: Add before event code on pages where PII data postback is expected.
 * All PII values are hashed with SHA-256 on the client side.
 */
export async function ttqIdentify(pii?: PiiData) {
  const pixel = ttq();
  if (!pixel) return;

  const externalRaw = pii?.external_id || getOrCreateExternalId();
  const externalHashed = await sha256(externalRaw);

  const payload: Record<string, string> = {
    external_id: externalHashed,
  };

  if (pii?.email) {
    payload.email = await sha256(pii.email);
  }

  if (pii?.phone_number) {
    // Normalise phone number to standard digits
    const digitsOnly = pii.phone_number.replace(/[^\d+]/g, "");
    payload.phone_number = await sha256(digitsOnly);
  }

  pixel.identify(payload);
}

export interface ContentPayload {
  content_id: string;
  content_type: "product" | "product_group";
  content_name: string;
}

/**
 * ttq.track('ViewContent')
 */
export async function trackViewContent(
  contentId: string,
  contentName: string,
  value: number = 0,
  currency: string = "KZT",
  pii?: PiiData
) {
  await ttqIdentify(pii);
  const pixel = ttq();
  if (!pixel) return;

  pixel.track(
    "ViewContent",
    {
      contents: [
        {
          content_id: contentId,
          content_type: "product_group",
          content_name: contentName,
        },
      ],
      value: value,
      currency: currency,
    },
    {
      event_id: generateEventId(),
    }
  );
}

/**
 * ttq.track('Contact') - for WhatsApp, Phone, Instagram clicks
 */
export async function trackContact(
  channel: "whatsapp" | "phone" | "instagram",
  contentName: string = "Direct Consultation Channel",
  value: number = 0,
  currency: string = "KZT",
  pii?: PiiData
) {
  await ttqIdentify(pii);
  const pixel = ttq();
  if (!pixel) return;

  pixel.track(
    "Contact",
    {
      contents: [
        {
          content_id: `channel_${channel}`,
          content_type: "product",
          content_name: contentName,
        },
      ],
      value: value,
      currency: currency,
    },
    {
      event_id: generateEventId(),
    }
  );
}

/**
 * ttq.track('ClickButton') - for CTAs, navigation, service selection
 */
export async function trackClickButton(
  buttonId: string,
  buttonName: string,
  value: number = 0,
  currency: string = "KZT",
  pii?: PiiData
) {
  await ttqIdentify(pii);
  const pixel = ttq();
  if (!pixel) return;

  pixel.track(
    "ClickButton",
    {
      contents: [
        {
          content_id: buttonId,
          content_type: "product",
          content_name: buttonName,
        },
      ],
      value: value,
      currency: currency,
    },
    {
      event_id: generateEventId(),
    }
  );
}

/**
 * ttq.track('Lead') - for quote requests, calculator inquiries
 */
export async function trackLead(
  contentId: string,
  contentName: string,
  value: number = 45000,
  currency: string = "KZT",
  pii?: PiiData
) {
  await ttqIdentify(pii);
  const pixel = ttq();
  if (!pixel) return;

  pixel.track(
    "Lead",
    {
      contents: [
        {
          content_id: contentId,
          content_type: "product",
          content_name: contentName,
        },
      ],
      value: value,
      currency: currency,
    },
    {
      event_id: generateEventId(),
    }
  );
}
