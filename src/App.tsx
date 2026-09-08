import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { PricingPage } from "./components/PricingPage";
import { AboutPage } from "./components/AboutPage";
import { CalculatorPage } from "./components/CalculatorPage";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/ui";
import { LanguageProvider, useLanguage } from "./i18n";
import type { PageId } from "./data/content";
import { trackViewContent } from "./utils/tiktokPixel";

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace("#/", "").replace("#", "").toLowerCase();
  if (hash === "services") return "services";
  if (hash === "pricing") return "pricing";
  if (hash === "about") return "about";
  if (hash === "calculator" || hash === "contacts" || hash === "consultation") return "calculator";
  return "home";
}

function MainApp() {
  const { language } = useLanguage();
  const [activePage, setActivePage] = useState<PageId>(getPageFromHash);
  const [selectedTaskParam, setSelectedTaskParam] = useState<string | undefined>(undefined);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const pg = getPageFromHash();
      setActivePage(pg);
      trackViewContent(pg, `Page: ${pg}`);
    };
    // initial page view
    trackViewContent(activePage, `Page: ${activePage}`);
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavigate(page: PageId, taskParam?: string) {
    if (taskParam) {
      setSelectedTaskParam(taskParam);
    }
    setActivePage(page);
    trackViewContent(page, `Page: ${page}`);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }

  const floatingMessage =
    language === "ru"
      ? "Здравствуйте! Хочу проконсультироваться по бухгалтерскому сопровождению."
      : "Hello! I would like a consultation regarding business accounting in Kazakhstan.";

  return (
    <div className="site-wrapper">
      <Header
        activePage={activePage}
        onSelectPage={(p) => handleNavigate(p)}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
      />

      <main id="main-content">
        {activePage === "home" && <HomePage onNavigate={handleNavigate} />}
        {activePage === "services" && <ServicesPage onNavigate={handleNavigate} />}
        {activePage === "pricing" && <PricingPage onNavigate={handleNavigate} />}
        {activePage === "about" && <AboutPage onNavigate={handleNavigate} />}
        {activePage === "calculator" && <CalculatorPage initialTask={selectedTaskParam} />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <FloatingWhatsAppButton message={floatingMessage} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
