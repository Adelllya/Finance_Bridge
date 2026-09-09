import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PIXEL_ID = "DAG5573C77U3EU7G6ULG";
const ACCESS_TOKEN = "b374e3f60b8683ac57985a85f7b990174abed0a7";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "tiktok-events-api-dev",
      configureServer(server) {
        server.middlewares.use("/api/tiktok-events", async (req, res) => {
          if (req.method === "POST") {
            let body = "";
            req.on("data", (chunk) => (body += chunk));
            req.on("end", async () => {
              try {
                const parsed = JSON.parse(body || "{}");
                const rawEvents = Array.isArray(parsed.events) ? parsed.events : [parsed];
                const dataItems = rawEvents.map((evt: any) => {
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

                  const userObj: Record<string, string> = {
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

                const resp = await fetch("https://business-api.tiktok.com/open_api/v1.3/event/track/", {
                  method: "POST",
                  headers: {
                    "Access-Token": ACCESS_TOKEN,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
                });
                const data = await resp.json();
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(data));
              } catch (err: any) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          } else {
            res.statusCode = 405;
            res.end();
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
