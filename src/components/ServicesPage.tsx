import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n";
import type { PageId } from "../data/content";

interface ServicesPageProps {
  onNavigate: (page: PageId, taskParam?: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t } = useLanguage();

  return (
    <div className="services-view">
      {/* Top Banner */}
      <section className="page-hero-banner">
        <div className="page-container">
          <div className="page-eyebrow">Каталог услуг</div>
          <h1 className="page-title">{t.services.pageTitle}</h1>
          <p className="page-subtitle">{t.services.pageSubtitle}</p>
        </div>
      </section>

      {/* Services List */}
      <div className="page-container">
        <div className="services-full-list">
          {t.services.list.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.id} className="service-full-card" id={service.id}>
                <div className="service-card-left">
                  <div className="service-num-tag">{service.number} // НАПРАВЛЕНИЕ</div>
                  <span className="service-badge" style={{ marginBottom: 12 }}>
                    {service.badge}
                  </span>
                  <h2 className="service-full-title">{service.title}</h2>
                  <p className="service-full-summary">{service.summary}</p>
                  <div className="service-for-whom">
                    <strong>Кому подходит:</strong> {service.forWhom}
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ alignSelf: "flex-start", marginTop: "auto" }}
                    onClick={() => onNavigate("calculator", service.id)}
                  >
                    <span>{t.services.ctaCalculate}</span>
                    <ArrowRight size={17} />
                  </button>
                </div>

                <div className="service-card-right">
                  <h3 className="service-deliverables-title">Что входит в сопровождение:</h3>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="deliverable-item">
                        <CheckCircle2 className="deliverable-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Transition box to next page */}
        <div className="page-transition-box">
          <div>
            <h3 className="trans-box-title">Интересуют готовые пакетные решения?</h3>
            <p className="trans-box-text">
              Сравните наши базовые и расширенные тарифы для ТОО и ИП.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => onNavigate("pricing")}
          >
            <span>Перейти к тарифам</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
