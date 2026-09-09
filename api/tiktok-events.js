/**
 * Serverless handler for TikTok Events API (Vercel / Node)
 * Pixel ID: DAG5573C77U3EU7G6ULG
 * Token: b374e3f60b8683ac57985a85f7b990174abed0a7
 */

const PIXEL_ID = "DAG5573C77U3EU7G6ULG";
const ACCESS_TOKEN = "b374e3f60b8683ac57985a85f7b990174abed0a7";
const TIKTOK_API_URL = "https://business-api.tiktok.com/open_api/v1.3/event/track/";

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }
    }
    body = body || {};

    const rawEvents = Array.isArray(body.events) ? body.events : [body];
    const dataItems = rawEvents.map((evt) => {
      const p = evt.properties || {};
      const contentId = p.content_id || "fb_service_inquiry";
      const contentType = p.content_type || "product";
      const contentName = p.content_name || "Бухгалтерское сопровождение Finance Bridge";
      const contents =
        Array.isArray(p.contents) && p.contents.length > 0
          ? p.contents
          : [
              {
                content_id: contentId,
                content_type: contentType,
                content_name: contentName,
              },
            ];

      const userObj = {
        external_id:
          evt.user?.external_id || "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      };
      if (evt.user?.phone) userObj.phone = evt.user.phone;
      if (evt.user?.email) userObj.email = evt.user.email;

      return {
        event: evt.event || "ViewContent",
        event_time: evt.event_time || Math.floor(Date.now() / 1000),
        event_id: evt.event_id || `evt_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
        user: userObj,
        properties: {
          contents: contents,
          content_id: contentId,
          content_type: contentType,
          content_name: contentName,
          value: typeof p.value === "number" ? p.value : 45000,
          currency: p.currency || "KZT",
        },
        page: {
          url: evt.page?.url || "https://financebridge.kz/",
        },
      };
    });

    const payload = {
      event_source: "web",
      event_source_id: PIXEL_ID,
      data: dataItems,
    };

    const response = await fetch(TIKTOK_API_URL, {
      method: "POST",
      headers: {
        "Access-Token": ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("TikTok Events API Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
