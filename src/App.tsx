import { useCallback, useEffect, useState } from "react";
import Landing from "./components/Landing";
import PromptView from "./components/PromptView";
import { cn } from "./utils/cn";

type Tab = "landing" | "prompt";

function tabFromHash(): Tab {
  return window.location.hash.replace("#", "") === "prompt" ? "prompt" : "landing";
}

export default function App() {
  const [tab, setTab] = useState<Tab>(tabFromHash);

  useEffect(() => {
    const onHash = () => setTab(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = useCallback((next: Tab) => {
    window.location.hash = next === "prompt" ? "prompt" : "";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setTab(next);
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      {/* ─── шапка-переключатель ─── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/92 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-3 px-3 lg:h-16 lg:px-6">
          <button
            type="button"
            onClick={() => go("landing")}
            className="flex cursor-pointer items-center gap-2.5 text-left"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 shadow-md shadow-brand-600/30 lg:h-9 lg:w-9">
              <span className="font-display text-[14px] font-bold text-white lg:text-[15px]">Б</span>
            </span>
            <span>
              <span className="block text-[13px] font-extrabold leading-none text-white lg:text-[14px]">
                Лендинг-кит
              </span>
              <span className="mt-1 hidden text-[10px] font-semibold leading-none text-white/45 sm:block">
                Гульшат Аджибаева · главбух · Казахстан
              </span>
            </span>
          </button>

          <nav className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            {(
              [
                ["landing", "Лендинг"],
                ["prompt", "Промпт и тексты"],
              ] as [Tab, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => go(key)}
                className={cn(
                  "cursor-pointer rounded-lg px-3 py-1.5 text-[12px] font-bold transition lg:px-4 lg:text-[13px]",
                  tab === key ? "bg-white text-ink-900 shadow" : "text-white/60 hover:text-white",
                )}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── контент ─── */}
      <main>{tab === "landing" ? <Landing /> : <PromptView onOpenLanding={() => go("landing")} />}</main>

      {/* ─── подвал ─── */}
      <footer className="border-t border-white/10 bg-ink-950 py-7 text-center">
        <p className="px-4 text-[12px] font-medium leading-relaxed text-white/40">
          Прототип собран на React + Tailwind: тексты и структуру можно перенести в Tilda, Taplink или Webflow.
        </p>
        <p className="mt-1.5 px-4 text-[11px] text-white/30">
          Демо: номер WhatsApp, фото и цены — заглушки. Замените перед публикацией.
        </p>
      </footer>
    </div>
  );
}
