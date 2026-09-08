import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Language } from "./data/content";

const STORAGE_KEY = "finance-bridge-language";

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "en") return saved;
  } catch {
    // Private browsing can make storage unavailable.
  }
  if (typeof navigator === "undefined") return "ru";
  const preferred = navigator.languages?.[0] || navigator.language;
  if (!preferred) return "ru";
  return /^(ru|kk)(-|$)/i.test(preferred) ? "ru" : "en";
}

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof content.ru;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(initialLanguage);
  const t = content[language];

  function setLanguage(next: Language) {
    updateLanguage(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The switch still works without persistence.
    }
  }

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [language, t]);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
