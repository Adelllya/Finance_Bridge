import { useState, useEffect } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Globe2, Pause, Phone, Play, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND, PHONE_DISPLAY, igUrl, msgPlan, phoneUrl, waUrl } from "../data/content";
import { useLanguage } from "../i18n";
import { BridgeMark, ChatWidget, GoldDivider, IgIcon, WaIcon } from "./ui";
import { trackClickButton, trackContact, trackLead, trackViewContent, trackWhatsAppApplicationSubmit } from "../utils/tiktokPixel";
import gulshatPhoto from "../assets/gulshat-new.png";
import gulshatPortrait from "../assets/gulshat_portrait.png";
import avatarViktor from "../assets/avatar_viktor.jpg";
import avatarDaniyar from "../assets/avatar_daniyar.jpg";
import avatarElena from "../assets/avatar_elena.jpg";
import avatarMurat from "../assets/avatar_murat.jpg";

const clientAvatars = [avatarViktor, avatarDaniyar, avatarElena, avatarMurat];

function SpecialtiesMarquee() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  return (
    <div className="specialties">
      <div className="container specialties-heading">
        <p>{t.sectors.label}</p>
        <button
          type="button"
          className="icon-button ticker-toggle"
          aria-label={paused ? t.sectors.play : t.sectors.pause}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play /> : <Pause />}
        </button>
      </div>
      <div className="marquee-window">
        <div className={`marquee-track${paused ? " is-paused" : ""}`}>
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-group" aria-hidden={copy === 1 ? true : undefined}>
              {t.sectors.items.map((item) => (
                <span key={item}>
                  <span className="marquee-star" aria-hidden="true">✳</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewsMarquee() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <div className="container reviews-heading-row">
        <div className="reviews-heading-left">
          <span className="reviews-tag">
            <Sparkles style={{ width: 13, height: 13, color: "#e5b869" }} />
            {t.reviews.label} · 4.9 ★★★★★
          </span>
          <h2 id="reviews-heading">{t.reviews.title}</h2>
        </div>
        <button
          type="button"
          className="icon-button ticker-toggle"
          aria-label={paused ? t.sectors.play : t.sectors.pause}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play /> : <Pause />}
        </button>
      </div>

      <div className="reviews-marquee-window">
        <div className={`reviews-marquee-track${paused ? " is-paused" : ""}`}>
          {[0, 1].map((copy) => (
            <div key={copy} className="reviews-marquee-group" aria-hidden={copy === 1 ? true : undefined}>
              {t.reviews.items.map((item, idx) => (
                <article key={`${copy}-${idx}`} className="review-card">
                  <div className="review-header">
                    <img
                      src={clientAvatars[idx % clientAvatars.length]}
                      alt={item.author}
                      className="review-avatar"
                      width="40"
                      height="40"
                      loading="eager"
                    />
                    <div className="review-header-info">
                      <div className="review-header-top">
                        <span className="review-stars">
                          {"★".repeat(item.rating)}
                        </span>
                        <span className="review-verified">
                          <Check style={{ width: 11, height: 11 }} />
                          Проверенный клиент
                        </span>
                      </div>
                      <span className="review-company">{item.company}</span>
                    </div>
                  </div>
                  <p className="review-text">"{item.text}"</p>
                  <div className="review-meta">
                    <span className="review-author">{item.author}</span>
                    <span className="review-industry">{item.industry}</span>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  useEffect(() => {
    trackViewContent("fb_main_landing", "Бухгалтерское сопровождение ТОО и ИП в Казахстане", 45000, "KZT");
  }, []);

  const activeTask = t.contacts.tasks[selectedTaskIndex] || t.contacts.tasks[0];
  const namePart = name.trim() ? `${t.contacts.introduction} ${name.trim()}.` : "";
  const quoteMessage = [t.contacts.greeting, namePart, activeTask.message].filter(Boolean).join(" ");

  function scrollToConsultation(taskIndex?: number) {
    if (typeof taskIndex === "number") {
      setSelectedTaskIndex(taskIndex);
    }
    const target = document.getElementById("consultation");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      const input = document.getElementById("quote-name");
      if (input) input.focus({ preventScroll: true });
    }
  }

  return (
    <>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-spotlight hero-spotlight-1" aria-hidden="true" />
        <div className="hero-spotlight hero-spotlight-2" aria-hidden="true" />
        <div className="hero-lines" aria-hidden="true">
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
        </div>

        <div className="container">
          <div className="hero-layout">
            <div className="hero-left">
              <div className="hero-status">
                <span className="status-indicator" />
                <span className="status-text">Работаем онлайн · Казахстан</span>
              </div>

              <h1 id="hero-title" className={language === "en" ? "english-heading" : undefined}>
                <span className="hero-headline-item">{t.hero.lines[0]}</span>
                <span className="hero-headline-item">{t.hero.lines[1]}</span>
                <span className="hero-headline-item hero-headline-accent">{t.hero.lines[2]}</span>
              </h1>

              <div className="hero-lead-block">
                <p className="hero-lead-text">
                  {t.hero.text}
                </p>
                <p className="hero-lead-emphasis">
                  {t.hero.ending}
                </p>
              </div>

              <div className="hero-actions-block">
                <a
                  className="hero-btn hero-btn-primary"
                  href="#services"
                  onClick={() => trackClickButton("hero_services_btn", "Explore Services")}
                >
                  <span className="btn-bg" />
                  <Sparkles style={{ width: 18, height: 18 }} />
                  <span>{t.more}</span>
                  <ArrowDown />
                </a>
                <a
                  className="hero-btn hero-btn-ghost"
                  href="#consultation"
                  onClick={(e) => {
                    e.preventDefault();
                    trackClickButton("hero_quote_btn", "Get a Quote");
                    scrollToConsultation();
                  }}
                >
                  <span>{t.calculate}</span>
                  <ArrowDown />
                </a>
              </div>

              <div className="hero-trust-line">
                <div className="trust-mark">
                  <Check />
                  <span>15 минут</span>
                </div>
                <div className="trust-divider" />
                <div className="trust-mark">
                  <Check />
                  <span>Прямой контакт</span>
                </div>
                <div className="trust-divider" />
                <div className="trust-mark">
                  <Check />
                  <span>Без NDA</span>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-visual-frame">
                <div className="frame-border frame-border-tl" />
                <div className="frame-border frame-border-tr" />
                <div className="frame-border frame-border-bl" />
                <div className="frame-border frame-border-br" />

                <div className="visual-content">
                  <img
                    className="hero-image"
                    src={gulshatPhoto}
                    alt={t.hero.photoAlt}
                    width="642"
                    height="1050"
                    fetchPriority="high"
                  />

                  <div className="stat-card stat-card-1">
                    <div className="stat-card-inner">
                      <div className="stat-number">15+</div>
                      <div className="stat-label">лет опыта</div>
                    </div>
                  </div>

                  <a className="stat-card stat-card-2" href="#services">
                    <div className="stat-card-inner">
                      <div className="stat-icon">
                        <Globe2 />
                      </div>
                      <div className="stat-text">ВЭД и нерезиденты</div>
                    </div>
                  </a>

                  <div className="expert-nameplate">
                    <div className="nameplate-inner">
                      <div className="nameplate-title">{t.hero.name}</div>
                      <div className="nameplate-subtitle">{t.hero.role}</div>
                      <div className="nameplate-proof">
                        <Check />
                        <span>100+ проектов без нареканий</span>
                      </div>
                      <a className="nameplate-link" href="#expert">
                        <span>{language === "en" ? "About expert & cases" : "Опыт и кейсы эксперта"}</span>
                        <ArrowRight style={{ width: 14, height: 14 }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Gold Divider: Hero (Navy) -> Cases (Alabaster) */}
      <GoldDivider />

      <section id="cases" className="section outcomes-section" tabIndex={-1}>
        <div className="container">
          <div className="section-heading compact-heading">
            <p className="eyebrow">{t.outcomes.label}</p>
            <h2>{t.outcomes.title}</h2>
          </div>
          <div className="outcomes-grid">
            {t.outcomes.items.map(({ icon: Icon, title, text }) => (
              <article className="outcome" key={title}>
                <span className="outline-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Gold Divider: Cases (Alabaster) -> Services (Platinum) */}
      <GoldDivider />

      <section id="services" className="section services-section" tabIndex={-1}>
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{t.services.label}</p>
              <h2>{t.services.title}</h2>
            </div>
            <p className="section-intro">{t.services.intro}</p>
          </div>
          <div className="services-grid">
            {t.services.items.map(({ icon: Icon, title, subtitle, features }) => (
              <article className="service-card" key={title}>
                <div className="service-card-top">
                  <span className="outline-icon"><Icon /></span>
                  <ArrowUpRight className="decorative-arrow" aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <ul>
                  {features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="situation-banner">
            <div>
              <h3>{t.services.problem}</h3>
              <p>{t.services.solution}</p>
            </div>
            <a
              className="button button-outline"
              href="#consultation"
              onClick={(e) => {
                e.preventDefault();
                trackClickButton("situation_discuss_btn", "Discuss Situation");
                scrollToConsultation(2);
              }}
            >
              {t.services.action}
              <ArrowDown />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Gold Divider: Services (Platinum) -> Specialties strip (Navy) */}
      <GoldDivider />

      <SpecialtiesMarquee />

      {/* 4. Gold Divider: Specialties strip (Navy) -> Expert (Alabaster) */}
      <GoldDivider />

      <section id="expert" className="section expert-section" tabIndex={-1}>
        <div className="container expert-grid">
          <div className="expert-story">
            <p className="eyebrow">{t.expert.label}</p>
            <h2>{t.expert.title}</h2>
            <p className="expert-text">{t.expert.text}</p>
            <div className="expert-signature">
              <span className="avatar">
                <img src={gulshatPortrait} alt={t.expert.signature} width="84" height="84" loading="eager" />
              </span>
              <div>
                <strong>{t.expert.signature}</strong>
                <span>{t.expert.role}</span>
              </div>
            </div>
          </div>
          <div className="expert-facts">
            {t.expert.facts.map((fact) => (
              <div key={fact.title}>
                <span className="fact-check"><Check aria-hidden="true" /></span>
                <div>
                  <h3>{fact.title}</h3>
                  <p>{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gold Divider: Expert (Alabaster) -> Pricing (Platinum) */}
      <GoldDivider />

      <section id="pricing" className="section pricing-section" tabIndex={-1}>
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{t.pricing.label}</p>
              <h2>{t.pricing.title}</h2>
            </div>
            <p className="section-intro">{t.pricing.text}</p>
          </div>
          <div className="pricing-grid">
            {t.pricing.items.map(({ icon: Icon, name: planName, audience, featured, features }) => (
              <article className={`plan-card${featured ? " featured-plan" : ""}`} key={planName}>
                <div className="plan-top">
                  <Icon aria-hidden="true" />
                  {featured && <span>{t.pricing.focus}</span>}
                </div>
                <h3>{planName}</h3>
                <p className="plan-audience">{audience}</p>
                <p className="plan-price">{t.pricing.tailored}</p>
                <ul>
                  {features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`button ${featured ? "button-accent" : "button-outline"}`}
                  href={waUrl(msgPlan(planName, language))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppApplicationSubmit({
                      taskId: `plan_${planName.toLowerCase().replace(/\s+/g, "_")}`,
                      taskLabel: `Тариф ${planName}`,
                      value: 45000,
                      currency: "KZT",
                    });
                  }}
                >
                  {t.calculate}
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gold Divider: Pricing (Platinum) -> FAQ (Alabaster) */}
      <GoldDivider />

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-heading">
            <p className="eyebrow">{t.faq.label}</p>
            <h2>{t.faq.title}</h2>
          </div>
          <div className="faq-list">
            {t.faq.items.map(({ q, a }, i) => (
              <div className="faq-item" key={i}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {q}
                    <ChevronDown aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  hidden={openFaq !== i}
                >
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="consultation-section" tabIndex={-1}>
        <ReviewsMarquee />

        <div id="contacts" className="contacts-section">
          <div className="container contacts-grid">
            <div className="contact-left-col">
              <div className="contact-intro">
                <p className="eyebrow">{t.contacts.label}</p>
                <h2>{t.contacts.title}</h2>
                <p className="contact-description">{t.contacts.text}</p>

                {/* Expert Profile Card with Gulshat */}
                <div className="expert-consult-card">
                  <div className="expert-consult-avatar-wrap">
                    <img
                      src={gulshatPortrait}
                      alt={t.hero.name}
                      className="expert-consult-avatar"
                      width="80"
                      height="80"
                      loading="eager"
                    />
                    <span className="avatar-online-dot" aria-label="В сети" />
                  </div>
                  <div className="expert-consult-info">
                    <div className="live-status-badge">
                      <span className="live-dot" />
                      <span>{t.contacts.onlineBadge}</span>
                    </div>
                    <h3>{t.hero.name}</h3>
                    <p className="expert-consult-role">{t.contacts.expertTitle}</p>
                    <p className="expert-consult-quote">{t.contacts.expertQuote}</p>
                  </div>
                </div>

                <div className="consult-trust-pills">
                  <div className="consult-pill">
                    <Check />
                    <span>15 мин на ответ</span>
                  </div>
                  <div className="consult-pill">
                    <ShieldCheck style={{ width: 14, height: 14, color: "#e5b869" }} />
                    <span>Без спама</span>
                  </div>
                  <div className="consult-pill">
                    <Sparkles style={{ width: 14, height: 14, color: "#e5b869" }} />
                    <span>Бесплатный разбор</span>
                  </div>
                </div>
              </div>

              <div className="contact-links">
                <a className="contact-social" href={igUrl()} target="_blank" rel="noopener noreferrer">
                  <IgIcon />
                  <span>{t.contacts.instagram}<small>@gulshat_121985</small></span>
                  <ArrowUpRight />
                </a>
                <a className="contact-social" href={phoneUrl}>
                  <Phone />
                  <span>{PHONE_DISPLAY}<small>{t.contacts.call}</small></span>
                  <ArrowUpRight />
                </a>
              </div>
            </div>

            <div className="contacts-vertical-divider" aria-hidden="true" />

            <div className="quote-builder">
              <span className="task-selector-label">{t.contacts.taskSelectorLabel}</span>
              <div className="task-chips-grid">
                {t.contacts.tasks.map((task, idx) => (
                  <button
                    key={task.id}
                    type="button"
                    className={`task-chip${selectedTaskIndex === idx ? " is-active" : ""}`}
                    onClick={() => setSelectedTaskIndex(idx)}
                  >
                    {selectedTaskIndex === idx && <Check className="task-chip-check" />}
                    <span>{task.label}</span>
                  </button>
                ))}
              </div>

              <label className="quote-name-label" htmlFor="quote-name">
                {t.contacts.nameLabel} <span>{t.contacts.optional}</span>
              </label>
              <input
                id="quote-name"
                className="quote-name"
                type="text"
                autoComplete="name"
                maxLength={80}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t.contacts.namePlaceholder}
              />

              <p className="quote-preview-label">{t.contacts.previewLabel}</p>
              <div className="quote-preview">
                <span>
                  <WaIcon />
                  WhatsApp · Прямой диалог
                </span>
                <p>{quoteMessage}</p>
              </div>

              <a
                className="button quote-action"
                href={waUrl(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppApplicationSubmit({
                    taskId: activeTask.id,
                    taskLabel: activeTask.label,
                    customerName: name.trim() || undefined,
                    value: 45000,
                    currency: "KZT",
                  });
                }}
              >
                <WaIcon />
                <span>{t.contacts.quoteAction}</span>
                <ArrowRight />
              </a>

              <p className="quote-guarantee">
                <span>⚡ {language === "en" ? "Reply within 15 minutes" : "Ответ за 15 минут в рабочее время"}</span>
                <small> · {language === "en" ? "Direct contact with chief accountant" : "Без спама и навязанных услуг"}</small>
              </p>
            </div>
          </div>

          <footer className="container site-footer">
            <a className="brand footer-brand" href="#top">
              <BridgeMark />
              <strong>{BRAND}</strong>
            </a>
            <p>{t.contacts.location}</p>
            <a className="text-link" href="#top">
              {t.contacts.top}
              <ArrowRight className="back-top-arrow" />
            </a>
          </footer>
        </div>
      </section>

      <ChatWidget avatarSrc={gulshatPortrait} />
    </>
  );
}
