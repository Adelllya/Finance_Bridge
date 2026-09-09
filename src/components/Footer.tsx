import { ArrowUp } from "lucide-react";
import { BridgeMark, IgIcon, WaIcon } from "./ui";
import { BRAND, igUrl, waUrl, type PageId } from "../data/content";
import { useLanguage } from "../i18n";
import { trackContact } from "../utils/tiktokPixel";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t, language } = useLanguage();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-top">
          <button
            type="button"
            className="brand-link"
            onClick={() => onNavigate("home")}
            style={{ textAlign: "left" }}
          >
            <BridgeMark className="brand-icon" />
            <div className="brand-type">
              <span className="brand-name">{BRAND}</span>
              <span className="brand-sub">{t.brandSub}</span>
            </div>
          </button>

          <nav className="footer-nav" aria-label="Footer navigation">
            {t.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                className="footer-nav-link"
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div style={{ display: "flex", gap: 12 }}>
            <a
              href={waUrl(
                language === "ru"
                  ? "Здравствуйте! Хочу обсудить бухгалтерию для моей компании."
                  : "Hello! I'd like to discuss accounting services for my business."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="lang-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,255,255,0.06)",
                color: "var(--gold)",
                padding: "8px 14px",
              }}
              onClick={() => {
                trackContact("whatsapp", "footer_link");
              }}
            >
              <WaIcon style={{ width: 16, height: 16 }} />
              <span>WhatsApp</span>
            </a>
            <a
              href={igUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="lang-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,255,255,0.06)",
                color: "#cbd5e1",
                padding: "8px 14px",
              }}
              onClick={() => {
                trackContact("instagram", "footer_link");
              }}
            >
              <IgIcon style={{ width: 16, height: 16 }} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {BRAND}. {t.footer.rights}
          </div>
          <div>{t.footer.legalNote}</div>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-link-arrow"
            style={{ color: "var(--gold)" }}
          >
            <span>{t.footer.topBtn}</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
