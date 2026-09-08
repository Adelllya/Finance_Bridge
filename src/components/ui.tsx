import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, MessageCircle, Phone, X } from "lucide-react";
import { cn } from "../utils/cn";
import { waUrl, igUrl, phoneUrl } from "../data/content";
import { useLanguage } from "../i18n";

export function BridgeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="13" fill="currentColor" />
      <path d="M10 32V17m28 15V17M10 21c9 0 8 9 14 9s5-9 14-9M8 33h32M16 25v8m8-3v3m8-8v8" stroke="#35d68b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function IgIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FloatingBadge({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("floating-badge", className)}>{children}</div>;
}

export function GoldDivider({ className }: { className?: string }) {
  return <div className={cn("gold-divider", className)} aria-hidden="true" />;
}

export function SectionDivider({ className }: { className?: string }) {
  return <GoldDivider className={className} />;
}

export function ChatWidget({ avatarSrc }: { avatarSrc: string }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [nearContacts, setNearContacts] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const widget = useRef<HTMLDivElement>(null);

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !widget.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.querySelector(".reviews-section") || document.getElementById("contacts");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      setNearContacts(rect.top <= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={widget} className={cn("contact-widget", nearContacts && !open && "at-contacts")} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <div ref={panel} id="contact-panel" className="contact-panel" role="region" aria-label={t.widget.title} hidden={!open}>
        <div className="contact-panel-heading">
          <span className="eyebrow">Finance Bridge</span>
          <button type="button" className="icon-button" onClick={close} aria-label={t.widget.close}><X /></button>
        </div>
        <h2>{t.widget.title}</h2>
        <p>{t.widget.subtitle}</p>
        <a className="contact-option whatsapp-option" href={waUrl(t.message)} target="_blank" rel="noopener noreferrer"><WaIcon /> WhatsApp <ArrowUpRight /></a>
        <a className="contact-option" href={igUrl()} target="_blank" rel="noopener noreferrer"><IgIcon /> Instagram <ArrowUpRight /></a>
        <a className="contact-option" href={phoneUrl}><Phone />{t.widget.call}<ArrowUpRight /></a>
        <p className="small-print">{t.widget.note}</p>
      </div>
      <button ref={trigger} type="button" className="contact-trigger" aria-expanded={open} aria-controls="contact-panel" aria-label={open ? t.widget.close : t.widget.open} onClick={() => setOpen(!open)}>
        <span className="avatar"><img src={avatarSrc} width="183" height="580" alt="" /></span>
        <span className="trigger-text">{t.widget.open}</span>
        {open ? <X /> : <MessageCircle />}
      </button>
    </div>
  );
}
