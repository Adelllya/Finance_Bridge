import { useState } from "react";
import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n";
import type { PageId } from "../data/content";

interface AboutPageProps {
  onNavigate: (page: PageId, taskParam?: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="about-view">
      {/* Top Banner */}
      <section className="page-hero-banner">
        <div className="page-container">
          <div className="page-eyebrow">О компании</div>
          <h1 className="page-title">{t.about.pageTitle}</h1>
          <p className="page-subtitle">{t.about.pageSubtitle}</p>
        </div>
      </section>

      <div className="page-container">
        {/* Founder Story Section */}
        <section className="about-story-section">
          <div className="about-story-grid">
            <div className="about-photo-wrapper">
              <img
                src="/images/accounting-detail.jpg"
                alt="Рабочий процесс Finance Bridge: бухгалтерские документы, блокнот и калькулятор"
                className="about-main-img"
                loading="lazy"
              />
              <div className="about-caption-bar">
                <span>Finance Bridge</span>
                <span>Внимание к каждой детали и строгий учёт</span>
              </div>
            </div>

            <div className="about-story-content">
              <h2 className="about-story-heading">{t.about.storyTitle}</h2>
              <p className="about-story-p">{t.about.storyText}</p>

              <div className="about-quote-box">{t.about.quoteText}</div>

              <div className="credentials-list">
                {t.about.credentials.map((cred, idx) => (
                  <div key={idx} className="credential-item">
                    <div className="cred-title">{cred.title}</div>
                    <div className="cred-val">{cred.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 Standards of Work */}
        <section className="section-pad" style={{ paddingTop: 0 }}>
          <div className="section-intro-center">
            <div className="page-eyebrow" style={{ justifyContent: "center" }}>
              Стандарты надёжности
            </div>
            <h2 className="section-heading-dark">{t.about.valuesTitle}</h2>
          </div>

          <div className="standards-grid">
            {t.about.values.map((val, idx) => (
              <div key={idx} className="standard-card">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <ShieldCheck style={{ width: 22, height: 22, color: "var(--gold-dark)" }} />
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 750, margin: 0 }}>
                    {val.title}
                  </h3>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-pad" style={{ paddingTop: 0 }}>
          <div className="section-intro-center">
            <div className="page-eyebrow" style={{ justifyContent: "center" }}>
              Вопросы и ответы
            </div>
            <h2 className="section-heading-dark">{t.about.faqTitle}</h2>
            <p className="section-desc-dark">{t.about.faqSubtitle}</p>
          </div>

          <div className="faq-wrap">
            {t.about.faq.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-card ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.25s ease",
                        color: isOpen ? "var(--gold-dark)" : "#8a94a2",
                      }}
                    />
                  </button>
                  {isOpen && <div className="faq-body">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </section>

        {/* Transition box */}
        <div className="page-transition-box" style={{ marginTop: 0, marginBottom: 88 }}>
          <div>
            <h3 className="trans-box-title">Готовы обсудить вашу бухгалтерию?</h3>
            <p className="trans-box-text">
              Рассчитайте примерную стоимость в интерактивном калькуляторе.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onNavigate("calculator")}
          >
            <span>Перейти к калькулятору</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
