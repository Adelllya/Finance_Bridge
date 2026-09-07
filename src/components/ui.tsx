import { useCallback, useState, type ReactNode } from "react";
import { Check, Copy, Download } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------- буфер обмена ---------- */
export async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export function downloadTextFile(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ---------- кнопка «копировать» ---------- */
export function CopyButton({
  text,
  label = "копировать",
  copiedLabel = "скопировано",
  className,
  tone = "light",
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  tone?: "light" | "dark" | "green";
}) {
  const [done, setDone] = useState(false);
  const onCopy = useCallback(async () => {
    const ok = await copyText(text);
    if (ok) {
      setDone(true);
      window.setTimeout(() => setDone(false), 1800);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-1.5 text-[12.5px] font-bold transition active:scale-95",
        tone === "light" && "border border-ink-900/10 bg-white text-ink-900 hover:border-brand-600/40 hover:text-brand-700",
        tone === "dark" && "border border-white/15 bg-white/10 text-white hover:bg-white/20",
        tone === "green" && "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
        done && "bg-brand-600 text-white border-transparent",
        className,
      )}
    >
      {done ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {done ? copiedLabel : label}
    </button>
  );
}

/* ---------- кнопка «скачать .txt» ---------- */
export function DownloadButton({
  filename,
  text,
  label = "скачать .txt",
  className,
}: {
  filename: string;
  text: string;
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => downloadTextFile(filename, text)}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-ink-900/10 bg-white px-3 py-1.5 text-[12.5px] font-bold text-ink-900 transition hover:border-brand-600/40 hover:text-brand-700 active:scale-95",
        className,
      )}
    >
      <Download className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}

/* ---------- иконка WhatsApp ---------- */
export function WaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ---------- мелкий бейдж-ярлык ---------- */
export function Tag({
  children,
  tone = "green",
  className,
}: {
  children: ReactNode;
  tone?: "green" | "ink" | "gray" | "wa";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold",
        tone === "green" && "bg-brand-600/10 text-brand-700",
        tone === "ink" && "bg-ink-900 text-white",
        tone === "gray" && "bg-ink-900/5 text-ink-900/60",
        tone === "wa" && "bg-[#25D366]/10 text-[#128C4A]",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------- маркер «экран 01 · название» ---------- */
export function ScreenNo({ no, name }: { no: string; name: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="flex h-6 min-w-6 items-center justify-center rounded-lg bg-ink-900 px-1.5 font-display text-[9px] font-semibold tracking-wide text-white">
        {no}
      </span>
      <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-900/40">{name}</span>
    </div>
  );
}
