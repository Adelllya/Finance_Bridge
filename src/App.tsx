import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Landing from "./components/Landing";
import { BridgeMark, WaIcon } from "./components/ui";
import { BRAND, waUrl } from "./data/content";
import { LanguageProvider, useLanguage } from "./i18n";
import { trackContact, trackWhatsAppApplicationSubmit } from "./utils/tiktokPixel";

function Website() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#main" className="skip-link">{t.skip}</a>
      <header ref={header} className="site-header" onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}>
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label={BRAND} onClick={() => setMenuOpen(false)}>
            <BridgeMark />
            <span><strong>{BRAND}</strong><small>{t.brandSub}</small></span>
          </a>
          <nav className="desktop-nav" aria-label={language === "ru" ? "Основная навигация" : "Main navigation"}>
            {t.nav.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <div className="header-actions">
            <div className="language-switch" role="group" aria-label={t.languageLabel}>
              {(["ru", "en"] as const).map((value) => (
                <button key={value} type="button" lang={value} aria-label={value === "ru" ? "Русский" : "English"} aria-pressed={language === value} onClick={() => setLanguage(value)}>{value.toUpperCase()}</button>
              ))}
            </div>
            <a
              className="header-whatsapp"
              href={waUrl(t.message)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() => {
                trackWhatsAppApplicationSubmit({
                  taskId: "header_whatsapp",
                  taskLabel: "Кнопка WhatsApp в шапке",
                });
              }}
            >
              <WaIcon />
              <span>WhatsApp</span>
            </a>
            <button ref={menuButton} type="button" className="icon-button menu-toggle" aria-label={menuOpen ? t.closeMenu : t.menu} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        <nav id="mobile-nav" className="mobile-nav" aria-label={language === "ru" ? "Мобильная навигация" : "Mobile navigation"} hidden={!menuOpen}>
          <div className="container">{t.nav.map((link) => <a key={link.href} href={link.href} onClick={() => {
            setMenuOpen(false);
            document.querySelector<HTMLElement>(link.href)?.focus({ preventScroll: true });
          }}>{link.label}<span aria-hidden="true">↗</span></a>)}</div>
        </nav>
      </header>
      <main id="main" tabIndex={-1}><Landing /></main>
    </>
  );
}

export default function App() {
  return <LanguageProvider><Website /></LanguageProvider>;
}
