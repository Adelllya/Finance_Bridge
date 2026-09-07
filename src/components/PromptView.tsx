import { ArrowRight, Check } from "lucide-react";
import {
  COPY_RULES,
  FULL_PROMPT,
  HEROES,
  SCREEN_COPIES,
  TOKENS,
  TYPE_RULES,
  VISUAL_RULES,
  msgFinal,
  type HeroVariant,
} from "../data/content";
import { CopyButton, DownloadButton, Tag } from "./ui";

const heroCopy = (h: HeroVariant) =>
  `Вариант ${h.id} · ${h.label} (${h.formula})

Заголовок: ${h.lines.join(" ")}
Подзаголовок: ${h.sub}
Чипы доверия: ${h.chips.join(" · ")}
Кнопка: Получить консультацию в WhatsApp
Микротекст: Бесплатно · ответ за 10 минут

Зачем: ${h.note}`;

const BULLET = "•";

export default function PromptView({ onOpenLanding }: { onOpenLanding: () => void }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 lg:px-6 lg:pt-12">
      {/* ───── верхний блок ───── */}
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
            готовый пакет для упаковки
          </p>
          <h1 className="mt-3 max-w-2xl text-[30px] font-extrabold leading-[1.12] tracking-tight text-ink-900 lg:text-[38px]">
            Промпт, тексты и структура лендинга — под трафик из TikTok
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-900/65">
            Слева — живой прототип, собранный по этому промпту. Ниже — готовый промпт для нейросети и все
            тексты по 8 экранам: копируйте и переносите в Tilda, Taplink или Webflow без переписывания.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenLanding}
              className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-2xl bg-brand-600 px-5 text-[14.5px] font-extrabold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700 active:scale-[0.98]"
            >
              Живой лендинг
              <ArrowRight className="h-4 w-4" />
            </button>
            <CopyButton text={FULL_PROMPT} label="копировать полный промпт" tone="light" className="h-12 px-5 text-[14px]" />
            <DownloadButton filename="prompt-gulshat-buhgalter.txt" text={FULL_PROMPT} label="скачать .txt" className="h-12 px-4 text-[14px]" />
          </div>

          {/* ответ про конструктор */}
          <div className="mt-6 rounded-2xl border border-ink-900/8 bg-white p-5 shadow-card">
            <p className="flex items-center gap-2 text-[13px] font-extrabold text-ink-900">
              <Check className="h-4 w-4 text-brand-600" />
              На чём собирать? Рекомендация
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-900/65">
              Превью выше собрано на кастомном коде (React + Tailwind), поэтому структура платформо-независимая.
              Под прод: <b>Taplink</b> — если нужен запуск за вечер и переход в WhatsApp в один клик;{" "}
              <b>Tilda</b> — если нужен полноценный сайт с доменом (тексты переносятся 1-в-1, кнопки уже ведут на
              wa.me с готовым сообщением); <b>кастомный код</b> — если планируете A/B-тесты офферов и пиксель TikTok.
            </p>
          </div>

          {/* 3 варианта оффера */}
          <section className="mt-12">
            <p className="font-display text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brand-700">
              блок 1 · первый экран
            </p>
            <h2 className="mt-2 text-[22px] font-extrabold tracking-tight text-ink-900">
              3 варианта сильного оффера
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {HEROES.map((h) => (
                <article key={h.id} className="flex flex-col rounded-3xl border border-ink-900/8 bg-white p-5 shadow-card">
                  <div className="flex items-center justify-between gap-2">
                    <Tag tone="ink">{h.id}</Tag>
                    <CopyButton text={heroCopy(h)} label="копировать" />
                  </div>
                  <p className="mt-4 font-display text-[16px] font-semibold leading-[1.35] text-ink-900">
                    {h.lines[0]} <span className="text-brand-700">{h.lines[1]}</span>
                  </p>
                  <p className="mt-2 text-[12.5px] font-semibold text-ink-900/45">{h.formula}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-900/65">{h.sub}</p>
                  <p className="mt-auto border-t border-ink-900/6 pt-3 text-[12px] leading-relaxed text-ink-900/50">
                    {h.note}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* тексты по экранам */}
          <section className="mt-14">
            <p className="font-display text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brand-700">
              структура · 8 экранов
            </p>
            <h2 className="mt-2 text-[22px] font-extrabold tracking-tight text-ink-900">
              Тексты и разметка по блокам
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink-900/60">
              В каждом тексте — заголовок, подзаголовок, буллеты, кнопка и визуальные рекомендации. Готово к
              вставке в блоки Tilda / Taplink.
            </p>
            <div className="mt-5 space-y-3">
              {SCREEN_COPIES.map((s, i) => (
                <details
                  key={s.id}
                  open={i < 2}
                  className="group overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 [&::-webkit-details-marker]:hidden lg:px-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-900 font-display text-[12px] font-semibold text-white">
                      {s.id}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[15px] font-extrabold text-ink-900">{s.name}</span>
                      <span className="mt-0.5 block text-[12px] font-medium text-ink-900/50">{s.purpose}</span>
                    </span>
                    <span className="hidden shrink-0 sm:block" onClick={(e) => e.stopPropagation()}>
                      <CopyButton text={s.copy} />
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className="h-4 w-4 shrink-0 text-ink-900/40 transition group-open:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="border-t border-ink-900/6 px-4 pb-4 pt-3 lg:px-5">
                    <div className="mb-3 flex justify-end sm:hidden">
                      <CopyButton text={s.copy} />
                    </div>
                    <pre className="whitespace-pre-wrap rounded-xl bg-ink-900 p-4 font-sans text-[12.5px] leading-relaxed text-white/85">
                      {s.copy}
                    </pre>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* ───── правая колонка ───── */}
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          {/* дизайн-система */}
          <div className="rounded-3xl border border-ink-900/8 bg-white p-5 shadow-card">
            <p className="text-[14px] font-extrabold text-ink-900">Дизайн-система</p>
            <div className="mt-4 space-y-2.5">
              {TOKENS.map((t) => (
                <div key={t.hex} className="flex items-center gap-3">
                  <span
                    className="h-8 w-8 shrink-0 rounded-lg border border-ink-900/10"
                    style={{ backgroundColor: t.hex }}
                  />
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-bold text-ink-900">
                      {t.name} <span className="font-semibold text-ink-900/40">{t.hex}</span>
                    </p>
                    <p className="truncate text-[11px] text-ink-900/55">{t.use}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1.5 border-t border-ink-900/6 pt-4">
              {TYPE_RULES.map((r) => (
                <p key={r} className="flex gap-2 text-[12px] leading-relaxed text-ink-900/65">
                  <span className="text-brand-600">{BULLET}</span>
                  {r}
                </p>
              ))}
            </div>
          </div>

          {/* правила текста */}
          <div className="rounded-3xl border border-ink-900/8 bg-white p-5 shadow-card">
            <p className="text-[14px] font-extrabold text-ink-900">Правила текста</p>
            <div className="mt-3 space-y-2.5">
              {COPY_RULES.map((r) => (
                <p key={r} className="flex gap-2 text-[12.5px] leading-relaxed text-ink-900/65">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {r}
                </p>
              ))}
            </div>
            <div className="mt-4 border-t border-ink-900/6 pt-4">
              <p className="text-[13px] font-extrabold text-ink-900">Визуал</p>
              <div className="mt-2.5 space-y-2.5">
                {VISUAL_RULES.map((r) => (
                  <p key={r} className="flex gap-2 text-[12.5px] leading-relaxed text-ink-900/65">
                    <span className="text-brand-600">{BULLET}</span>
                    {r}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* форма заявки */}
          <div className="rounded-3xl bg-ink-900 p-5 text-white shadow-card">
            <p className="text-[14px] font-extrabold">Форма: правило одного клика</p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">
              Вместо длинной формы — кнопка WhatsApp с готовым сообщением:
            </p>
            <div className="mt-3 rounded-xl bg-white/8 p-3 text-[12px] leading-relaxed text-white/85">
              {msgFinal()}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <CopyButton text={msgFinal()} label="копировать сообщение" tone="green" />
              <CopyButton
                text={`https://wa.me/77001234567?text=${encodeURIComponent(msgFinal())}`}
                label="копировать ссылку"
                tone="dark"
              />
            </div>
          </div>

          {/* чек-лист перед запуском */}
          <div className="rounded-3xl border border-amber-600/25 bg-amber-50 p-5">
            <p className="text-[14px] font-extrabold text-amber-900">Чек-лист перед запуском</p>
            <div className="mt-3 space-y-2">
              {[
                "реальное фото Гульшат вместо демо",
                "реальный номер WhatsApp (+7 …)",
                "актуальные цены в тенге",
                "реквизиты и юридическая информация",
                "политика обработки данных",
                "пиксель TikTok и UTM-метки на кнопки",
              ].map((c) => (
                <p key={c} className="flex gap-2 text-[12.5px] font-medium leading-relaxed text-amber-900/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  {c}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ───── полный промпт ───── */}
      <section className="mt-14">
        <div className="rounded-3xl bg-ink-950 p-5 shadow-pop lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-400">
                копируйте целиком
              </p>
              <h2 className="mt-2 text-[22px] font-extrabold tracking-tight text-white">
                Полный промпт для нейросети
              </h2>
              <p className="mt-1.5 text-[13px] text-white/50">
                Вставьте в ChatGPT, Claude или Gemini — на выходе получите структуру и тексты в этом же стиле.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <CopyButton text={FULL_PROMPT} label="копировать промпт" tone="green" className="h-11 px-5 text-[14px]" />
              <DownloadButton filename="prompt-gulshat-buhgalter.txt" text={FULL_PROMPT} className="h-11 border-white/15 bg-white/5 px-4 text-[14px] text-white hover:text-white" />
            </div>
          </div>
          <pre className="mt-6 max-h-[560px] overflow-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-5 font-sans text-[13px] leading-relaxed text-white/85">
            {FULL_PROMPT}
          </pre>
        </div>
      </section>
    </div>
  );
}
