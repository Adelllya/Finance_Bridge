import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Clock, Instagram, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n";
import { IgIcon, WaIcon } from "./ui";
import { igUrl, phoneUrl, waUrl, PHONE_DISPLAY } from "../data/content";
import { trackClickButton, trackContact, trackLead } from "../utils/tiktokPixel";

interface CalculatorPageProps {
  initialTask?: string;
}

export function CalculatorPage({ initialTask }: CalculatorPageProps) {
  const { t, language } = useLanguage();
  const [selectedTaskId, setSelectedTaskId] = useState<string>("too");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (initialTask) {
      const match = t.calculator.tasks.find((task) => task.id === initialTask);
      if (match) {
        setSelectedTaskId(match.id);
      } else if (initialTask.includes("ved")) {
        setSelectedTaskId("ved");
      } else if (initialTask.includes("ip") || initialTask.includes("start")) {
        setSelectedTaskId("ip");
      } else if (initialTask.includes("recovery")) {
        setSelectedTaskId("recovery");
      }
    }
  }, [initialTask, t.calculator.tasks]);

  const activeTask =
    t.calculator.tasks.find((task) => task.id === selectedTaskId) ||
    t.calculator.tasks[0];

  const greeting =
    language === "ru"
      ? `Здравствуйте, Гульшат!${name.trim() ? ` Меня зовут ${name.trim()}.` : ""}`
      : `Hello, Gulshat!${name.trim() ? ` My name is ${name.trim()}.` : ""}`;

  const detailsLine = details.trim()
    ? language === "ru"
      ? `Детали: ${details.trim()}`
      : `Details: ${details.trim()}`
    : "";

  const fullMessage = [greeting, activeTask.message, detailsLine]
    .filter(Boolean)
    .join(" ");

  const whatsappLink = waUrl(fullMessage);

  return (
    <div className="calculator-view">
      {/* Top Banner */}
      <section className="page-hero-banner">
        <div className="page-container">
          <div className="page-eyebrow">Калькулятор и связь</div>
          <h1 className="page-title">{t.calculator.pageTitle}</h1>
          <p className="page-subtitle">{t.calculator.pageSubtitle}</p>
        </div>
      </section>

      <div className="page-container">
        <div className="calc-page-grid">
          {/* Main Calculator Form */}
          <div className="calc-card-main">
            <label className="calc-section-label">
              {t.calculator.taskLabel}
            </label>
            <div className="calc-chips-grid">
              {t.calculator.tasks.map((task) => (
                <button
                  key={task.id}
                  type="button"
                  className={`calc-chip-btn ${selectedTaskId === task.id ? "is-active" : ""}`}
                  onClick={() => setSelectedTaskId(task.id)}
                >
                  {selectedTaskId === task.id && <Check size={16} />}
                  <span>{task.label}</span>
                </button>
              ))}
            </div>

            <div className="calc-input-group">
              <label className="calc-section-label" htmlFor="client-name">
                {t.calculator.nameLabel}{" "}
                <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>
                  {t.calculator.nameOptional}
                </span>
              </label>
              <input
                id="client-name"
                type="text"
                className="calc-input-text"
                placeholder={t.calculator.namePlaceholder}
                value={name}
                maxLength={80}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="calc-input-group">
              <label className="calc-section-label" htmlFor="client-details">
                {t.calculator.detailsLabel}
              </label>
              <textarea
                id="client-details"
                rows={3}
                className="calc-input-text"
                placeholder={t.calculator.detailsPlaceholder}
                value={details}
                maxLength={800}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            {/* Live Message Preview */}
            <div className="calc-preview-card">
              <div className="calc-preview-header">
                <WaIcon style={{ width: 18, height: 18 }} />
                <span>{t.calculator.previewTitle}</span>
              </div>
              <p className="calc-preview-msg">{fullMessage}</p>
            </div>

            <div style={{ marginTop: 20 }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", padding: "16px 24px", fontSize: "1.05rem" }}
                onClick={() => {
                  trackLead(
                    `calc_${selectedTaskId}`,
                    `Inquiry: ${activeTask.label}`,
                    45000,
                    "KZT"
                  );
                  trackClickButton("calc_submit_whatsapp", "Send Inquiry via WhatsApp");
                }}
              >
                <WaIcon style={{ width: 20, height: 20 }} />
                <span>{t.calculator.actionBtn}</span>
                <ArrowUpRight size={18} />
              </a>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: 10, textAlign: "center" }}>
                {t.calculator.previewNote}
              </p>
            </div>

            <div className="calc-trust-row">
              <div className="calc-trust-pill">
                <Clock />
                <span>{t.calculator.trustItems[0]}</span>
              </div>
              <div className="calc-trust-pill">
                <ShieldCheck />
                <span>{t.calculator.trustItems[1]}</span>
              </div>
              <div className="calc-trust-pill">
                <Sparkles />
                <span>{t.calculator.trustItems[2]}</span>
              </div>
            </div>
          </div>

          {/* Direct Contacts Sidebar */}
          <div className="calc-side-col">
            <div className="direct-contacts-box">
              <h2 className="direct-box-title">{t.calculator.directHeading}</h2>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-link-card"
                onClick={() => {
                  trackContact("whatsapp", "calculator_sidebar");
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div className="advantage-icon-wrap" style={{ margin: 0, width: 42, height: 42 }}>
                    <WaIcon style={{ width: 22, height: 22 }} />
                  </div>
                  <div className="direct-card-info">
                    <span className="direct-card-title">WhatsApp</span>
                    <span className="direct-card-sub">Прямой диалог с главбухом</span>
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: "var(--gold-dark)" }} />
              </a>

              <a
                href={phoneUrl}
                className="direct-link-card"
                onClick={() => {
                  trackContact("phone", "calculator_sidebar");
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div className="advantage-icon-wrap" style={{ margin: 0, width: 42, height: 42 }}>
                    <Phone size={20} />
                  </div>
                  <div className="direct-card-info">
                    <span className="direct-card-title">{PHONE_DISPLAY}</span>
                    <span className="direct-card-sub">{t.calculator.phoneActionLabel}</span>
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: "var(--gold-dark)" }} />
              </a>

              <a
                href={igUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-link-card"
                onClick={() => {
                  trackContact("instagram", "calculator_sidebar");
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div className="advantage-icon-wrap" style={{ margin: 0, width: 42, height: 42 }}>
                    <IgIcon style={{ width: 20, height: 20 }} />
                  </div>
                  <div className="direct-card-info">
                    <span className="direct-card-title">Instagram</span>
                    <span className="direct-card-sub">{t.calculator.instagramHandle}</span>
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: "var(--gold-dark)" }} />
              </a>

              <div style={{ marginTop: 24, padding: "16px 18px", background: "#f8f7f2", borderRadius: 12, border: "1px solid var(--border-light)" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 700, margin: 0, color: "var(--text-dark)" }}>
                  Режим работы:
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: "4px 0 0" }}>
                  Понедельник - Пятница: 9:00 - 19:00 (по времени Алматы).
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "6px 0 0" }}>
                  Работаем онлайн со всеми регионами Казахстана.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
