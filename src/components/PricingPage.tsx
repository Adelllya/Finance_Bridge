import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n";
import { waUrl, type PageId } from "../data/content";
import { trackClickButton, trackContact } from "../utils/tiktokPixel";

interface PricingPageProps {
  onNavigate: (page: PageId, taskParam?: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const { t } = useLanguage();

  return (
    <div className="pricing-view">
      {/* Top Banner */}
      <section className="page-hero-banner">
        <div className="page-container">
          <div className="page-eyebrow">Тарифные планы</div>
          <h1 className="page-title">{t.pricing.pageTitle}</h1>
          <p className="page-subtitle">{t.pricing.pageSubtitle}</p>
        </div>
      </section>

      <div className="page-container">
        {/* Plans Grid */}
        <div className="pricing-cards-grid">
          {t.pricing.plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && (
                <div className="featured-badge">Рекомендуемый выбор</div>
              )}

              <div>
                <h2 className="plan-name">{plan.name}</h2>
                <div className="plan-price-tag">{plan.priceNote}</div>
                <p className="plan-audience">{plan.audience}</p>

                <ul className="plan-features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="plan-feature-item">
                      <Check />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href={waUrl(plan.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${plan.featured ? "btn-primary" : "btn-outline-dark"}`}
                  onClick={() => {
                    trackClickButton(`plan_${plan.id}`, `Select Plan: ${plan.name}`);
                    trackContact("whatsapp", `plan_${plan.id}`);
                  }}
                >
                  <span>Выбрать тариф</span>
                  <ArrowUpRight size={17} />
                </a>
                <button
                  type="button"
                  className="text-link-arrow"
                  style={{ justifyContent: "center" }}
                  onClick={() => onNavigate("calculator", plan.id)}
                >
                  <span>Индивидуальный расчёт</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="cta-banner-card" style={{ marginTop: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <ShieldCheck style={{ width: 28, height: 28, color: "var(--gold)" }} />
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, margin: 0, color: "#fff" }}>
                Полная финансовая ответственность
              </h3>
            </div>
            <p className="cta-banner-text">
              {t.pricing.note} Вся ответственность за своевременность и точность отчётов прямо зафиксирована в официальном договоре.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onNavigate("calculator")}
          >
            <span>{t.pricing.calcButton}</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Transition box */}
        <div className="page-transition-box">
          <div>
            <h3 className="trans-box-title">Хотите узнать больше о наших стандартах?</h3>
            <p className="trans-box-text">
              Познакомьтесь с главным бухгалтером и прочитайте ответы на частые вопросы.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => onNavigate("about")}
          >
            <span>О компании и эксперте</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
