import { useState } from "react";
import { BadgeCheck, Check, ChevronDown, Phone, Quote, RefreshCcw } from "lucide-react";
import {
  FAQS,
  FACTS,
  HEROES,
  IMG,
  MSG_HERO,
  PAINS,
  PHONE_DISPLAY,
  PLANS,
  SERVICES,
  STATS,
  STEPS,
  msgFinal,
  msgPlan,
  waUrl,
} from "../data/content";
import { ScreenNo, WaIcon } from "./ui";

/* ───────────────────────── статус-бар телефона ───────────────────────── */
function StatusBar() {
  return (
    <div className="hidden h-11 shrink-0 select-none items-end justify-between px-7 pb-1.5 text-ink-900 lg:flex">
      <span className="text-[13px] font-bold">9:41</span>
      <span className="flex items-center gap-1.5 pb-[3px]">
        <svg className="h-[11px] w-[17px]" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="7" width="3" height="5" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.35" />
        </svg>
        <svg className="h-[12px] w-[24px]" viewBox="0 0 26 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="16" height="8" rx="1.6" fill="currentColor" />
          <path d="M23.5 3.5v5a2.5 2.5 0 0 0 0-5Z" fill="currentColor" opacity="0.5" />
        </svg>
      </span>
    </div>
  );
}

/* ───────────────────────── переключатель вариантов hero ───────────────────────── */
function VariantSwitcher({ idx, setIdx }: { idx: number; setIdx: (i: number) => void }) {
  return (
    <div className="mb-4 hidden flex-col items-center gap-2 lg:flex">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
        превью · 3 варианта оффера первого экрана
      </p>
      <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur">
        {HEROES.map((h, i) => (
          <button
            key={h.id}
            type="button"
            onClick={() => setIdx(i)}
            className={
              "cursor-pointer rounded-xl px-4 py-2 text-[13px] font-bold transition " +
              (i === idx
                ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                : "text-white/60 hover:text-white")
            }
          >
            {h.id} · {h.label}
          </button>
        ))}
      </div>
      <p className="text-[11px] text-white/35">{HEROES[idx].formula}</p>
    </div>
  );
}

/* ───────────────────────── главный компонент лендинга ───────────────────────── */
export default function Landing() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [name, setName] = useState("");
  const hero = HEROES[heroIdx];

  const finalMsg = msgFinal(name.trim());

  return (
    <div className="bg-grid-dark relative flex min-h-[calc(100dvh-3rem)] w-full flex-col items-center overflow-x-hidden bg-ink-950 lg:min-h-[calc(100dvh-4rem)] lg:pb-10">
      {/* декоративные свечения */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/25 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-[8%] h-64 w-64 rounded-full bg-emerald-400/10 blur-[100px]" />

      <VariantSwitcher idx={heroIdx} setIdx={setHeroIdx} />

      {/* ─────────── корпус «телефона» ─────────── */}
      <div className="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-[430px] flex-col overflow-hidden bg-white shadow-2xl lg:h-[min(800px,calc(100dvh-225px))] lg:max-w-[400px] lg:rounded-[2.75rem] lg:border-[10px] lg:border-ink-900 lg:shadow-[0_50px_140px_-30px_rgb(0_0_0/0.7)]">
        <StatusBar />

        {/* прокручивающийся экран */}
        <div className="device-scroll relative flex-1 overflow-y-auto overscroll-contain">
          {/* ═══ ЭКРАН 01 · HERO ═══ */}
          <header className="bg-white px-5 pb-7 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 shadow-md shadow-brand-600/25">
                  <span className="font-display text-[15px] font-bold text-white">Б</span>
                </div>
                <div>
                  <p className="text-[13px] font-extrabold leading-none text-ink-900">Гульшат Аджибаева</p>
                  <p className="mt-1 text-[10.5px] font-semibold text-ink-900/45">главный бухгалтер · Казахстан</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-brand-600/20 bg-brand-50 px-2.5 py-1.5 text-[10.5px] font-bold text-brand-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
                приём заявок
              </span>
            </div>

            <div key={hero.id} className="rise-in mt-6">
              <ScreenNo no="01" name="hero" />
              <h1 className="mt-3 font-display text-[26px] font-semibold leading-[1.28] tracking-[-0.01em] text-ink-900">
                {hero.lines[0]}
                <br />
                <span className="text-brand-700">{hero.lines[1]}</span>
              </h1>
              <p className="mt-3.5 text-[15px] leading-relaxed text-ink-900/65">{hero.sub}</p>
            </div>

            {/* доверие: фото + имя */}
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-ink-900/5 bg-paper p-3">
              <img
                src={IMG.portrait}
                alt="Гульшат Аджибаева"
                className="h-12 w-12 rounded-xl object-cover object-top ring-2 ring-brand-200"
              />
              <div className="min-w-0">
                <p className="flex items-center gap-1 text-[13px] font-extrabold text-ink-900">
                  Гульшат Аджибаева
                  <BadgeCheck className="h-4 w-4 shrink-0 text-brand-600" />
                </p>
                <p className="text-[11.5px] font-medium text-ink-900/55">
                  15+ лет опыта · команда помощников · личная проверка отчётов
                </p>
              </div>
            </div>

            <a
              href={waUrl(MSG_HERO)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] text-[16px] font-extrabold text-white shadow-lg shadow-[#25D366]/35 transition hover:bg-[#1fb959] active:scale-[0.98]"
            >
              <WaIcon className="h-5 w-5" />
              Получить консультацию в WhatsApp
            </a>
            <p className="mt-2 text-center text-[11.5px] font-semibold text-ink-900/45">
              Бесплатно · ответ за 10 минут · без спама
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {hero.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/8 bg-white px-3 py-1.5 text-[12px] font-bold text-ink-900/70"
                >
                  <Check className="h-3.5 w-3.5 text-brand-600" />
                  {c}
                </span>
              ))}
            </div>
          </header>

          {/* ═══ ЭКРАН 02 · БОЛИ ═══ */}
          <section className="bg-paper px-5 py-8">
            <ScreenNo no="02" name="боли" />
            <h2 className="mt-3 text-[23px] font-extrabold leading-[1.2] tracking-tight text-ink-900">
              Узнаёте себя?
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-900/60">
              Ситуации, из-за которых владельцы бизнеса в Казахстане теряют деньги и сон.
            </p>
            <div className="mt-4 space-y-2.5">
              {PAINS.map((p) => {
                const Ic = p.icon;
                return (
                  <div key={p.text} className="flex items-start gap-3 rounded-2xl bg-white p-3.5 shadow-card">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                      <Ic className="h-5 w-5" />
                    </span>
                    <p className="pt-1 text-[14px] font-semibold leading-snug text-ink-900/85">{p.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white shadow-lg shadow-brand-700/25">
              <p className="text-[14.5px] font-extrabold leading-snug">
                Слишком знакомо? Пора передать бухгалтерию тем, кто отвечает за сроки.
              </p>
              <a
                href={waUrl(MSG_HERO)}
                target="_blank"
                rel="noreferrer"
                className="mt-3.5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-[14.5px] font-extrabold text-brand-800 transition active:scale-[0.98]"
              >
                <WaIcon className="h-4.5 w-4.5 text-[#25D366]" />
                Разобрать мою ситуацию бесплатно
              </a>
              <p className="mt-2 text-center text-[11px] font-semibold text-white/80">
                ответим за 10 минут · без навязчивых звонков
              </p>
            </div>
          </section>

          {/* ═══ ЭКРАН 03 · О СПЕЦИАЛИСТЕ ═══ */}
          <section className="bg-white px-5 py-8">
            <ScreenNo no="03" name="о специалисте" />
            <h2 className="mt-3 text-[23px] font-extrabold leading-[1.2] tracking-tight text-ink-900">
              Ваш главный бухгалтер отвечает за результат лично
            </h2>

            <div className="relative mt-4 overflow-hidden rounded-3xl">
              <img src={IMG.portrait} alt="Гульшат Аджибаева, главный бухгалтер" className="aspect-[4/5] w-full object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950/80 to-transparent" />
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl bg-white/95 p-3 backdrop-blur">
                <div>
                  <p className="text-[14px] font-extrabold text-ink-900">Гульшат Аджибаева</p>
                  <p className="text-[11.5px] font-medium text-ink-900/55">главный бухгалтер · Алматы, РК</p>
                </div>
                <span className="ml-auto flex items-center gap-1 rounded-full bg-brand-600/10 px-2.5 py-1 text-[11px] font-bold text-brand-700">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  15+ лет
                </span>
              </div>
            </div>

            <div className="mt-3.5 grid grid-cols-2 gap-2.5">
              {FACTS.map((f) => {
                const Ic = f.icon;
                return (
                  <div key={f.title} className="rounded-2xl bg-paper p-3.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600/10 text-brand-700">
                      <Ic className="h-4.5 w-4.5" />
                    </span>
                    <p className="mt-2.5 text-[13.5px] font-extrabold leading-none text-ink-900">{f.title}</p>
                    <p className="mt-1.5 text-[11.5px] leading-snug text-ink-900/60">{f.text}</p>
                  </div>
                );
              })}
            </div>

            <figure className="mt-3.5 rounded-2xl border border-brand-600/15 bg-brand-50 p-4">
              <Quote className="h-4 w-4 text-brand-600" />
              <blockquote className="mt-2 text-[14px] font-medium leading-relaxed text-ink-900/85">
                Моя задача — чтобы вы не думали о налогах и спали спокойно. За отчёты и риски отвечаю я.
              </blockquote>
            </figure>

            <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 rounded-3xl bg-ink-900 py-4 text-center">
              {STATS.map((s) => (
                <div key={s.label} className="px-1">
                  <p className="font-display text-[21px] font-semibold text-brand-400">{s.value}</p>
                  <p className="mx-auto mt-1 max-w-[86px] text-[10px] font-semibold leading-tight text-white/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ ЭКРАН 04 · УСЛУГИ ═══ */}
          <section className="bg-paper px-5 py-8">
            <ScreenNo no="04" name="услуги" />
            <h2 className="mt-3 text-[23px] font-extrabold leading-[1.2] tracking-tight text-ink-900">
              Что входит в сопровождение
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-900/60">
              Полный контур бухгалтерии — от первички до ответов налоговой. Ничего лишнего, всё по делу.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {SERVICES.map((s) => {
                const Ic = s.icon;
                return (
                  <div key={s.title} className="rounded-2xl bg-white p-3.5 shadow-card">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                      <Ic className="h-[18px] w-[18px]" />
                    </span>
                    <p className="mt-2.5 text-[13px] font-extrabold leading-tight text-ink-900">{s.title}</p>
                    <p className="mt-1 text-[11.5px] leading-snug text-ink-900/55">{s.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-brand-600/20 bg-brand-600/8 p-3.5">
              <RefreshCcw className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-700" />
              <p className="text-[12.5px] font-bold leading-snug text-ink-900">
                Переход от другого бухгалтера — за 2 дня, без простоя и потери базы.
              </p>
            </div>
          </section>

          {/* ═══ ЭКРАН 05 · КАК РАБОТАЕМ ═══ */}
          <section className="bg-white px-5 py-8">
            <ScreenNo no="05" name="как работаем" />
            <h2 className="mt-3 text-[23px] font-extrabold leading-[1.2] tracking-tight text-ink-900">
              3 шага до спокойной бухгалтерии
            </h2>
            <div className="mt-5">
              {STEPS.map((s, i) => {
                const Ic = s.icon;
                const last = i === STEPS.length - 1;
                return (
                  <div key={s.title} className="flex gap-3.5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-[11px] font-semibold text-white">
                        0{i + 1}
                      </span>
                      {!last && <span className="mt-1 w-px flex-1 bg-ink-900/10" />}
                    </div>
                    <div className={last ? "pb-1" : "pb-6"}>
                      <div className="flex items-center gap-2 pt-1">
                        <p className="text-[15px] font-extrabold text-ink-900">{s.title}</p>
                        <span className="ml-auto rounded-full bg-paper px-2.5 py-1 text-[10.5px] font-bold text-ink-900/55">
                          {s.time}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-900/60">{s.text}</p>
                      <Ic className="mt-2 h-4.5 w-4.5 text-brand-600" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl bg-paper p-3.5">
              {["Договор", "Фиксированная цена", "Отчётность по графику"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-bold text-ink-900/75 shadow-sm"
                >
                  <Check className="h-3.5 w-3.5 text-brand-600" />
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* ═══ ЭКРАН 06 · ТАРИФЫ ═══ */}
          <section className="bg-paper px-5 py-8">
            <ScreenNo no="06" name="тарифы" />
            <h2 className="mt-3 text-[23px] font-extrabold leading-[1.2] tracking-tight text-ink-900">
              Прозрачные тарифы
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-900/60">
              Цена зависит от режима и количества операций. После аудита фиксируем её в договоре.
            </p>
            <div className="mt-6 space-y-4">
              {PLANS.map((p) => (
                <div
                  key={p.name}
                  className={
                    "relative rounded-3xl bg-white p-5 shadow-card " +
                    (p.popular ? "border-2 border-brand-600" : "border border-ink-900/6")
                  }
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-3 py-1 text-[10.5px] font-bold text-white shadow-md">
                      выбирают чаще всего
                    </span>
                  )}
                  <p className="text-[17px] font-extrabold text-ink-900">{p.name}</p>
                  <p className="mt-0.5 text-[11.5px] font-semibold text-ink-900/50">{p.audience}</p>
                  <p className="mt-3 flex items-baseline gap-1.5">
                    <span className="font-display text-[25px] font-semibold tracking-tight text-ink-900">
                      {p.price}
                    </span>
                    <span className="text-[12px] font-bold text-ink-900/45">/мес</span>
                  </p>
                  <ul className="mt-3.5 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] font-medium text-ink-900/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waUrl(msgPlan(p.name))}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      "mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-[14.5px] font-extrabold transition active:scale-[0.98] " +
                      (p.popular
                        ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700"
                        : "border border-brand-600/40 bg-brand-600/5 text-brand-700 hover:bg-brand-600/10")
                    }
                  >
                    <WaIcon className="h-4 w-4" />
                    {p.name === "ВЭД и МСФО" ? "Обсудить задачу" : "Выбрать тариф"}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-[11.5px] font-semibold text-ink-900/45">
              Точную цену называем после бесплатного аудита. Без скрытых доплат.
            </p>
          </section>

          {/* ═══ ЭКРАН 07 · FAQ ═══ */}
          <section className="bg-white px-5 py-8">
            <ScreenNo no="07" name="вопросы" />
            <h2 className="mt-3 text-[23px] font-extrabold leading-[1.2] tracking-tight text-ink-900">
              Вопросы, которые задают до старта
            </h2>
            <div className="mt-4 space-y-2.5">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className={"overflow-hidden rounded-2xl border bg-paper transition " + (open ? "border-brand-600/40" : "border-ink-900/6")}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left"
                    >
                      <span className="text-[13.5px] font-bold leading-snug text-ink-900">{f.q}</span>
                      <span
                        className={
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition " +
                          (open ? "rotate-180 bg-brand-600 text-white" : "bg-ink-900/8 text-ink-900/60")
                        }
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                    {open && (
                      <p className="animate-[rise-in_0.3s_ease] px-4 pb-4 text-[13px] leading-relaxed text-ink-900/65">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-brand-600/15 bg-brand-50 px-4 py-3.5">
              <p className="text-[13px] font-extrabold leading-tight text-brand-900">
                Не нашли свой вопрос?
                <span className="block text-[11px] font-semibold text-brand-800/60">напишите — ответим за 10 минут</span>
              </p>
              <a
                href={waUrl(MSG_HERO)}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-brand-600 px-3.5 text-[13px] font-extrabold text-white shadow-md shadow-brand-600/25"
              >
                <WaIcon className="h-4 w-4" />
                в WhatsApp
              </a>
            </div>
          </section>

          {/* ═══ ЭКРАН 08 · ФИНАЛ + ФОРМА ═══ */}
          <section className="relative overflow-hidden bg-ink-900 px-5 pb-24 pt-9">
            <img src={IMG.office} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-[0.13]" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/80 to-ink-950/95" />
            <div className="relative">
              <div className="inline-flex items-center gap-2">
                <span className="flex h-6 min-w-6 items-center justify-center rounded-lg bg-white/10 px-1.5 font-display text-[9px] font-semibold tracking-wide text-white">
                  08
                </span>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/45">финал · заявка</span>
              </div>
              <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-tight text-white">
                Давайте посчитаем вашу бухгалтерию
              </h2>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/60">
                За 10 минут поймёте, сколько стоит спокойствие и что нужно поправить в учёте уже сейчас.
              </p>

              <div className="mt-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/45">
                  готовое сообщение — вы отправите его в один клик
                </p>
                <div className="flex w-fit max-w-full flex-col rounded-3xl rounded-br-md bg-[#25D366]/90 px-4 py-3 shadow-lg shadow-black/20">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-white/80">
                    <WaIcon className="h-3 w-3" /> WhatsApp
                  </span>
                  <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-white">{finalMsg}</p>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="lead-name" className="mb-1.5 block text-[12px] font-bold text-white/60">
                  ваше имя <span className="font-semibold text-white/35">(необязательно)</span>
                </label>
                <input
                  id="lead-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Например, Айгерим"
                  className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-[15px] font-medium text-white outline-none transition placeholder:text-white/35 focus:border-brand-400 focus:bg-white/15"
                />
              </div>

              <a
                href={waUrl(finalMsg)}
                target="_blank"
                rel="noreferrer"
                className="wa-pulse mt-3 flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] text-[16px] font-extrabold text-white shadow-xl shadow-[#25D366]/25 transition hover:bg-[#1fb959] active:scale-[0.98]"
              >
                <WaIcon className="h-5 w-5" />
                Получить расчёт в WhatsApp
              </a>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {["нажимаете кнопку", "открывается WhatsApp", "отправляете сообщение"].map((t, i) => (
                  <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-center">
                    <p className="font-display text-[11px] font-semibold text-brand-400">{i + 1}</p>
                    <p className="mt-1 text-[10px] font-semibold leading-tight text-white/60">{t}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-[11px] font-semibold text-white/40">
                Бесплатно · отвечаем в рабочее время 9:00–19:00 (Алматы)
              </p>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[11.5px] text-white/55">
                <Phone className="h-3.5 w-3.5" />
                <a href="tel:+77001234567" className="font-bold underline decoration-white/25 underline-offset-2">
                  {PHONE_DISPLAY}
                </a>
              </p>

              <footer className="mt-8 border-t border-white/10 pt-4 text-center">
                <p className="text-[11px] font-semibold text-white/45">
                  © 2026 · Гульшат Аджибаева · частный главный бухгалтер
                </p>
                <p className="mt-1 text-[10px] text-white/30">
                  Алматы · вся Республика Казахстан — онлайн. Прототип: фото и цены — демо.
                </p>
              </footer>
            </div>
          </section>

          {/* липкая CTA-панель внизу экрана */}
          <div className="sticky bottom-0 z-30 border-t border-ink-900/5 bg-white/92 px-4 py-2.5 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-[12.5px] font-extrabold text-ink-900">Сколько стоит сопровождение?</p>
                <p className="text-[10.5px] font-semibold text-ink-900/50">бесплатный расчёт · ответ за 10 минут</p>
              </div>
              <a
                href={waUrl(MSG_HERO)}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 shrink-0 items-center gap-2 rounded-xl bg-[#25D366] px-4 text-[14px] font-extrabold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#1fb959] active:scale-95"
              >
                <WaIcon className="h-4.5 w-4.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 hidden text-center text-[11.5px] font-semibold text-white/30 lg:block">
        все тексты, промпт и разметка для сборки — во вкладке «Промпт и тексты»
      </p>
    </div>
  );
}
