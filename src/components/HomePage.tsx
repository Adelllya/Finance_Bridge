import { ArrowDown, ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n";
import type { PageId } from "../data/content";
import { trackClickButton } from "../utils/tiktokPixel";

interface HomePageProps {
  onNavigate: (page: PageId, taskParam?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  return (
    <div className="home-view">
      {/* 1. Hero Section with Reference Desk Photography */}
      <section className="home-hero" aria-label="Finance Bridge">
        <img
          src="/images/finance-bridge-hero.jpg"
          alt="Гульшат Аджибаева, главный бухгалтер Finance Bridge"
          className="home-hero-bg-img"
          fetchPriority="high"
        />
        <div className="home-hero-shade" aria-hidden="true" />

        <div className="page-container home-hero-inner">
          <div className="home-hero-content">
            <div className="page-eyebrow">{t.home.heroEyebrow}</div>
            <h1 className="home-hero-headline">
              {t.home.heroTitle}
              <span className="home-hero-accent">{t.home.heroTitleAccent}</span>
            </h1>
            <p className="home-hero-desc">{t.home.heroDescription}</p>

            <div className="home-hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  trackClickButton("home_hero_calc", "Get a Quote");
                  onNavigate("calculator");
                }}
              >
                <Sparkles size={18} />
                <span>{t.home.heroCtaPrimary}</span>
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className="btn btn-outline-gold"
                onClick={() => {
                  trackClickButton("home_hero_services", "View Services");
                  onNavigate("services");
                }}
              >
                <span>{t.home.heroCtaSecondary}</span>
                <ArrowDown size={17} />
              </button>
            </div>

            <div className="home-hero-badges">
              {t.home.heroBadges.map((badge, idx) => (
                <div key={idx} className="hero-stat-box">
                  <span className="hero-stat-num">{badge.number}</span>
                  <span className="hero-stat-text">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Advantages Section */}
      <section className="section-pad">
        <div className="page-container">
          <div className="section-intro-center">
            <div className="page-eyebrow" style={{ justifyContent: "center" }}>
              Преимущества работы
            </div>
            <h2 className="section-heading-dark">{t.home.advantagesTitle}</h2>
            <p className="section-desc-dark">{t.home.advantagesSubtitle}</p>
          </div>

          <div className="advantages-grid">
            {t.home.advantages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="advantage-card">
                  <div className="advantage-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h3 className="advantage-title">{item.title}</h3>
                  <p className="advantage-text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Services Preview Section */}
      <section className="section-pad services-preview-section">
        <div className="page-container">
          <div className="section-intro-center">
            <div className="page-eyebrow" style={{ justifyContent: "center" }}>
              Специализация
            </div>
            <h2 className="section-heading-dark">{t.home.servicesPreviewTitle}</h2>
            <p className="section-desc-dark">{t.home.servicesPreviewSubtitle}</p>
          </div>

          <div className="services-preview-grid">
            {t.services.list.slice(0, 4).map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="service-preview-card">
                  <div>
                    <span className="service-badge">{service.badge}</span>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.summary}</p>
                  </div>
                  <button
                    type="button"
                    className="text-link-arrow"
                    onClick={() => onNavigate("calculator", service.id)}
                  >
                    <span>Рассчитать стоимость</span>
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="preview-actions-center">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => onNavigate("services")}
            >
              <span>{t.home.viewAllServicesBtn}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Client Reviews & Verified Cases */}
      <section className="section-pad reviews-section">
        <div className="page-container">
          <div className="section-intro-center">
            <div className="page-eyebrow" style={{ justifyContent: "center" }}>
              Репутация и опыт
            </div>
            <h2 className="section-heading-dark">{t.home.reviewsTitle}</h2>
            <p className="section-desc-dark">{t.home.reviewsSubtitle}</p>
          </div>

          <div className="reviews-grid">
            {t.home.reviews.map((rev, idx) => (
              <div key={idx} className="review-box">
                <div>
                  <div className="review-stars">
                    {"★".repeat(rev.rating)}
                  </div>
                  <p className="review-quote">"{rev.text}"</p>
                </div>
                <div className="review-footer">
                  <div className="review-author-name">{rev.author}</div>
                  <div className="review-company-info">
                    {rev.company} · {rev.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action Banner */}
      <section style={{ paddingBottom: 88 }}>
        <div className="page-container">
          <div className="cta-banner-card">
            <div>
              <h2 className="cta-banner-title">{t.home.quoteBannerTitle}</h2>
              <p className="cta-banner-text">{t.home.quoteBannerText}</p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate("calculator")}
            >
              <span>{t.home.quoteBannerBtn}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
