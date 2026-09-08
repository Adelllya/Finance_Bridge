import { ArrowUpRight, Menu, X } from "lucide-react";
import { BridgeMark, WaIcon } from "./ui";
import { BRAND, waUrl, type PageId } from "../data/content";
import { useLanguage } from "../i18n";
import { trackContact } from "../utils/tiktokPixel";

interface HeaderProps {
  activePage: PageId;
  onSelectPage: (page: PageId) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrolled: boolean;
}

export function Header({
  activePage,
  onSelectPage,
  menuOpen,
  setMenuOpen,
  scrolled,
}: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="page-container header-inner">
        <button
          type="button"
          className="brand-link"
          onClick={() => {
            onSelectPage("home");
            setMenuOpen(false);
          }}
          aria-label={BRAND}
        >
          <BridgeMark className="brand-icon" />
          <div className="brand-type">
            <span className="brand-name">{BRAND}</span>
            <span className="brand-sub">{t.brandSub}</span>
          </div>
        </button>

        {/* Prominent Desktop Page Switcher Navigation */}
        <div className="desktop-nav-wrap">
          <nav className="page-switcher" aria-label={t.languageLabel}>
            {t.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-tab ${activePage === item.id ? "is-active" : ""}`}
                onClick={() => onSelectPage(item.id)}
                aria-current={activePage === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label={t.languageLabel}>
            <button
              type="button"
              className={`lang-btn ${language === "ru" ? "is-active" : ""}`}
              onClick={() => setLanguage("ru")}
              aria-pressed={language === "ru"}
            >
              RU
            </button>
            <button
              type="button"
              className={`lang-btn ${language === "en" ? "is-active" : ""}`}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <a
            href={waUrl(
              language === "ru"
                ? "Здравствуйте! Хочу проконсультироваться по бухгалтерскому сопровождению."
                : "Hello! I would like a consultation on accounting services in Kazakhstan."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-header-wa"
            onClick={() => {
              trackContact("whatsapp", "header_top_button");
            }}
          >
            <WaIcon style={{ width: 16, height: 16 }} />
            <span>WhatsApp</span>
            <ArrowUpRight style={{ width: 14, height: 14 }} />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? t.closeMenu : t.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav-panel" aria-label="Mobile menu">
          {t.nav.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`mobile-nav-link ${activePage === item.id ? "is-active" : ""}`}
              onClick={() => {
                onSelectPage(item.id);
                setMenuOpen(false);
              }}
            >
              <span>0{idx + 1}</span>
              <span>{item.label}</span>
              <ArrowUpRight size={18} />
            </button>
          ))}
          <a
            href={waUrl(
              language === "ru"
                ? "Здравствуйте! Хочу проконсультироваться по бухгалтерскому сопровождению."
                : "Hello! I would like a consultation on accounting services in Kazakhstan."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 8 }}
            onClick={() => setMenuOpen(false)}
          >
            <WaIcon />
            <span>{t.quickWhatsApp}</span>
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
