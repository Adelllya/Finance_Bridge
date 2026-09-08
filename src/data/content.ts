import { Building2, CalendarCheck, FileCheck2, Globe2, Layers3, RefreshCcw, Truck, Users } from "lucide-react";

export type Language = "ru" | "en";
export const BRAND = "Finance Bridge";
export const WA_PHONE = "77474691092";
export const PHONE_DISPLAY = "+7 747 469 1092";
export const IG_USERNAME = "gulshat_121985";
export const phoneUrl = `tel:+${WA_PHONE}`;
export const waUrl = (message: string) => `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
export const igUrl = () => `https://www.instagram.com/${IG_USERNAME}/`;
export const msgPlan = (plan: string, language: Language) => language === "ru"
  ? `Здравствуйте! Интересует формат «${plan}». Хочу рассчитать стоимость для моей компании.`
  : `Hello! I'm interested in the ${plan} plan. Could you provide a quote for my company?`;

const ru = {
  meta: { title: "Finance Bridge | Бухгалтерия для бизнеса в Казахстане", description: "Бухгалтерское сопровождение ТОО в Казахстане. ВЭД, нерезиденты, производство. Гульшат Аджибаева и команда, 15+ лет опыта." },
  brandSub: "Бухгалтерия для бизнеса",
  nav: [{ label: "Услуги", href: "#services" }, { label: "О нас", href: "#expert" }, { label: "Тарифы", href: "#pricing" }, { label: "Контакты", href: "#consultation" }],
  menu: "Открыть меню", closeMenu: "Закрыть меню", skip: "Перейти к содержимому", languageLabel: "Язык сайта",
  consult: "Обсудить мою задачу", write: "Написать в WhatsApp", more: "Посмотреть услуги", calculate: "Рассчитать стоимость",
  message: "Здравствуйте! Хочу записаться на консультацию по бухгалтерскому сопровождению компании в Казахстане.",
  hero: {
    eyebrow: "Бухгалтерское сопровождение · Казахстан",
    lines: ["0 штрафов.", "0 просрочек.", "0 стресса."],
    text: "Частный главбух с 15-летним опытом берёт на себя налоги, отчёты и валютный контроль.",
    ending: "Вы занимаетесь бизнесом.",
    note: "Наша цель в работе с вашей бухгалтерией. Не гарантия отсутствия налоговых рисков.",
    footnote: "Напрямую главбуху. Без заявок и ожидания звонка.",
    name: "Гульшат Аджибаева", role: "Ваш главный бухгалтер",
    photoAlt: "Гульшат Аджибаева, главный бухгалтер Finance Bridge",
    experience: "15+", experienceLabel: "лет в бухгалтерии", badge: "ВЭД и нерезиденты", team: "Главбух с командой",
  },
  outcomes: {
    label: "Что меняется для вас", title: "Меньше рутины.\nБольше ясности.",
    items: [
      { icon: CalendarCheck, title: "Сроки под контролем", text: "Собираем отчётность и налоговые платежи в понятный рабочий график." },
      { icon: FileCheck2, title: "Порядок в документах", text: "Проверяем первичку, находим пробелы и разбираемся с расхождениями." },
      { icon: Users, title: "Есть кому задать вопрос", text: "Обсуждаете свою ситуацию с главбухом, а не ищете ответ в интернете." },
    ],
  },
  services: {
    label: "Чем помогаем", title: "Знаем, где у бизнеса\nвозникают сложности.", intro: "От ежедневного учёта до операций с зарубежными партнёрами.",
    items: [
      { icon: Globe2, title: "Импорт и экспорт", subtitle: "Когда бизнес работает без границ", features: ["Валютные операции и контракты", "НДС при импорте, ЕАЭС", "СНТ и Виртуальный склад"] },
      { icon: Building2, title: "ТОО с иностранным участием", subtitle: "Когда в учёте есть нерезиденты", features: ["Выплаты нерезидентам", "Дивиденды и роялти", "Применение налоговых конвенций"] },
      { icon: Truck, title: "Производство и логистика", subtitle: "Когда важна себестоимость", features: ["Учёт материалов и продукции", "ГСМ и транспортные расходы", "Расчёт себестоимости"] },
      { icon: RefreshCcw, title: "Восстановление учёта", subtitle: "Когда нужно начать с порядка", features: ["Разбор накопившихся документов", "Сверки и корректировки", "Ответы на уведомления налоговой"] },
    ],
    problem: "Счёт заблокирован или пришло уведомление?", solution: "Пришлите описание ситуации. Посмотрим, с чего начать.", action: "Разобрать ситуацию",
  },
  sectors: { label: "Работаем с задачами вашего бизнеса", items: ["Импорт и экспорт", "ТОО", "Производство", "Логистика", "Торговля", "Нерезиденты"], pause: "Приостановить строку", play: "Продолжить строку" },
  expert: {
    label: "За цифрами стоят люди", title: "Ваш главбух.\nИ команда рядом.",
    text: "Я Гульшат Аджибаева. Уже больше 15 лет работаю в бухгалтерии. Вместе с командой помогаю предпринимателям разобраться в учёте и не оставаться один на один с налоговыми вопросами.",
    signature: "Гульшат Аджибаева", role: "Главный бухгалтер · Finance Bridge",
    facts: [
      { title: "Один контакт по вопросам учёта", text: "Не нужно каждый раз объяснять, как устроен ваш бизнес." },
      { title: "Не только сдаём отчёты", text: "Объясняем, что происходит в учёте и какие документы нужны." },
      { title: "Сначала договариваемся", text: "Обсуждаем объём работ, сроки, стоимость и ответственность в договоре." },
    ],
  },
  pricing: {
    label: "Форматы сопровождения", title: "Под задачи бизнеса.\nНе под шаблон.",
    text: "Стоимость зависит от операций, сотрудников и состояния учёта. Состав работ согласуем до начала сотрудничества.",
    tailored: "Индивидуальный расчёт", focus: "Для международного бизнеса",
    items: [
      { icon: Layers3, name: "Старт", audience: "Для небольших ТОО", featured: false, features: ["Текущий бухгалтерский учёт", "Налоги и отчётность", "Расчёт зарплаты", "Консультации по учёту"] },
      { icon: Globe2, name: "ВЭД Актив", audience: "Для импортёров и экспортёров", featured: true, features: ["Текущее сопровождение", "Учёт внешнеторговых операций", "Выплаты нерезидентам", "Валютный контроль"] },
      { icon: Building2, name: "Корпорейт", audience: "Для производства и сложного учёта", featured: false, features: ["Расширенное сопровождение", "Расчёт себестоимости", "Учёт запасов и производства", "Отчётность для руководителя"] },
    ],
  },
  faq: {
    label: "До первого разговора", title: "Возможно, вы\nхотели спросить.",
    items: [
      { q: "Уже есть штрафы и долги. Можно обратиться?", a: "Да. Сначала посмотрим документы и состояние учёта, затем предложим порядок действий. Не обещаем отменить любой штраф: результат зависит от оснований и конкретной ситуации." },
      { q: "Работаете с валютой и нерезидентами?", a: "Да, это одно из наших направлений. Расскажите, с какими странами и контрагентами вы работаете, какие платежи и поставки планируете. Обсудим нужный объём сопровождения." },
      { q: "Как перейти от другого бухгалтера?", a: "Согласуем список документов и доступов, проверим остатки и открытые вопросы. После этого определим сроки передачи учёта и первый рабочий план." },
      { q: "Можно работать полностью онлайн?", a: "Да. Обсудим удобный способ обмена документами и общения. Мы сопровождаем компании в Казахстане, в том числе с иностранным участием." },
      { q: "Как узнать стоимость?", a: "Напишите, чем занимается компания, сколько у вас сотрудников и примерно сколько операций в месяц. Уточним детали и подготовим расчёт. Без обязательства заключать договор." },
    ],
  },
  reviews: {
    label: "Отзывы клиентов",
    title: "Что говорят компании о работе с нами",
    items: [
      {
        company: "ТОО «АзияТрейд»",
        industry: "Импорт оборудования, ВЭД",
        text: "За 3 дня разблокировали валютный счёт и оспорили необоснованное уведомление КГД на 1.5 млн тенге. Теперь весь валютный контроль ведёт Гульшат.",
        author: "Арман С., директор",
        rating: 5,
      },
      {
        company: "ТОО «Global Logistics KZ»",
        industry: "Международная логистика",
        text: "Перешли от штатного бухгалтера. Ни одной просрочки по отчётам за 2 года! Полный порядок в первичке, СНТ и виртуальном складе.",
        author: "Виктор М., учредитель",
        rating: 5,
      },
      {
        company: "ТОО «Silk Road Trade»",
        industry: "Оптовая торговля, ЕАЭС",
        text: "Навели идеальный порядок в учёте ТМЦ и НДС. Законно сэкономили больше 20% на налоговой нагрузке и сняли все риски проверки.",
        author: "Данияр К., финансовый директор",
        rating: 5,
      },
      {
        company: "ТОО «KazProm Tech»",
        industry: "Производство и нерезиденты",
        text: "Безупречно применили международную конвенцию при выплате дивидендов иностранному учредителю — сэкономили 8 млн тенге.",
        author: "Елена Б., зам. генерального директора",
        rating: 5,
      },
      {
        company: "ТОО «Alatau Distribution»",
        industry: "Дистрибьюция и ритейл",
        text: "Отвечают за 15 минут в WhatsApp, 1С в облаке доступна круглосуточно. Наконец-то спокойствие за всю отчётность компании.",
        author: "Мурат Т., генеральный директор",
        rating: 5,
      },
    ],
  },
  contacts: {
    label: "Начнём с вашей задачи", title: "Давайте посчитаем вашу бухгалтерию",
    text: "Узнайте точную стоимость сопровождения и получите экспертные рекомендации по вашему учёту уже сегодня.",
    expertTitle: "Главный бухгалтер и налоговый консультант",
    expertQuote: "«Напишите мне напрямую — я лично изучу вашу ситуацию, рассчитаю стоимость и подскажу, как законно защититься от налоговых рисков и штрафов»",
    onlineBadge: "В сети · Экспресс-расчёт за 15 мин",
    taskSelectorLabel: "1. Выберите вашу задачу:",
    tasks: [
      { id: "too", label: "ТОО (СНР / ОУР)", message: "Хочу узнать стоимость комплексного бухгалтерского обслуживания ТОО (СНР/ОУР)." },
      { id: "ved", label: "ВЭД и нерезиденты", message: "Хочу рассчитать стоимость ведения ВЭД, валютных контрактов, импорта/экспорта и работы с нерезидентами." },
      { id: "audit", label: "Восстановление и аудит", message: "Нам требуется экспресс-аудит и быстрое восстановление бухгалтерского и налогового учёта." },
      { id: "ip", label: "ИП и налоги", message: "Хочу узнать стоимость сопровождения ИП, сдачи отчётности и расчёта налогов/зарплат." },
      { id: "custom", label: "Другая задача", message: "У меня индивидуальный вопрос по бухгалтерскому и налоговому учёту в Казахстане." },
    ],
    previewLabel: "Готовое сообщение в WhatsApp. Отправьте его в один клик:",
    greeting: "Здравствуйте, Гульшат!", introduction: "Меня зовут",
    quoteMessage: "Хочу узнать стоимость бухгалтерии для моей компании (ТОО/ИП).",
    nameLabel: "2. Ваше имя", optional: "(необязательно)", namePlaceholder: "Например, Айгерим",
    quoteAction: "Получить расчёт в WhatsApp",
    steps: ["Выбираете задачу и имя", "WhatsApp открывается с готовым текстом", "Гульшат отвечает в течение 15 минут"],
    response: "Ориентир ответа: 15 минут в рабочее время.", instagram: "Познакомиться в Instagram", call: "Позвонить", location: "Казахстан · Работаем онлайн", top: "Наверх",
  },
  widget: { open: "Связаться с нами", close: "Закрыть панель связи", title: "Как вам удобнее?", subtitle: "Гульшат и команда Finance Bridge", note: "Обычно отвечаем в течение 15 минут в рабочее время.", call: "Позвонить" },
};

const en: typeof ru = {
  meta: { title: "Finance Bridge | Accounting for business in Kazakhstan", description: "Accounting for Kazakhstan companies. Foreign trade, non-residents and manufacturing. Gulshat Adjibayeva and team, with 15+ years of experience." },
  brandSub: "Accounting for business",
  nav: [{ label: "Services", href: "#services" }, { label: "About us", href: "#expert" }, { label: "Plans", href: "#pricing" }, { label: "Contact", href: "#consultation" }],
  menu: "Open menu", closeMenu: "Close menu", skip: "Skip to content", languageLabel: "Website language",
  consult: "Let’s discuss your business", write: "Message on WhatsApp", more: "Explore services", calculate: "Get a quote",
  message: "Hello! I'd like to discuss accounting support for my company in Kazakhstan.",
  hero: {
    eyebrow: "Business accounting · Kazakhstan", lines: ["No fines.", "No missed deadlines.", "No stress."],
    text: "A chief accountant with 15 years of experience takes care of taxes, reporting and currency compliance.", ending: "You focus on your business.",
    note: "Our goal for your accounting, not a guarantee of zero tax risk.", footnote: "Speak directly to an accountant. No forms, no callbacks.",
    name: "Gulshat Adjibayeva", role: "Your chief accountant", photoAlt: "Gulshat Adjibayeva, chief accountant at Finance Bridge",
    experience: "15+", experienceLabel: "years in accounting", badge: "Trade & non-residents", team: "An accountant. A whole team.",
  },
  outcomes: {
    label: "What it means for you", title: "Less admin.\nMore clarity.",
    items: [
      { icon: CalendarCheck, title: "Deadlines in sight", text: "We organise reporting and tax payments into a clear working schedule." },
      { icon: FileCheck2, title: "Documents in order", text: "We review source documents, identify gaps and work through discrepancies." },
      { icon: Users, title: "Someone to ask", text: "Discuss your situation with your accountant instead of searching for answers online." },
    ],
  },
  services: {
    label: "How we help", title: "We understand\nthe tricky parts.", intro: "From day-to-day bookkeeping to working with international partners.",
    items: [
      { icon: Globe2, title: "Import & export", subtitle: "For business across borders", features: ["Foreign currency transactions and contracts", "Import VAT and EAEU trade", "Electronic consignment notes and Virtual Warehouse"] },
      { icon: Building2, title: "Foreign-owned companies", subtitle: "When non-residents are involved", features: ["Payments to non-residents", "Dividends and royalties", "Tax treaty application"] },
      { icon: Truck, title: "Manufacturing & logistics", subtitle: "When cost accounting matters", features: ["Materials and finished goods", "Fuel and transport expenses", "Production cost calculations"] },
      { icon: RefreshCcw, title: "Accounting clean-up", subtitle: "When you need a fresh start", features: ["Reviewing outstanding documents", "Reconciliations and corrections", "Responses to tax authority notices"] },
    ],
    problem: "A blocked account or a tax notice?", solution: "Tell us what happened. We’ll work out where to start.", action: "Discuss my situation",
  },
  sectors: { label: "Accounting for the way you do business", items: ["Import & export", "Kazakhstan LLPs", "Manufacturing", "Logistics", "Trade", "Non-residents"], pause: "Pause ticker", play: "Resume ticker" },
  expert: {
    label: "People behind the numbers", title: "Your accountant.\nWith a team behind them.",
    text: "I’m Gulshat Adjibayeva. I’ve worked in accounting for over 15 years. Together with my team, I help business owners make sense of their books and work through tax questions with support.",
    signature: "Gulshat Adjibayeva", role: "Chief accountant · Finance Bridge",
    facts: [
      { title: "One contact for your accounting", text: "No need to explain how your business works every time you have a question." },
      { title: "More than filing reports", text: "We explain what’s happening in your accounts and which documents you need." },
      { title: "Clear expectations first", text: "We agree on scope, timelines, fees and contractual responsibilities before we start." },
    ],
  },
  pricing: {
    label: "Ways to work together", title: "Built around your business.\nNot a template.",
    text: "Fees depend on transactions, headcount and the condition of your accounts. We agree on the scope before starting work.",
    tailored: "Priced for your business", focus: "For international business",
    items: [
      { icon: Layers3, name: "Start", audience: "For small Kazakhstan LLPs", featured: false, features: ["Day-to-day bookkeeping", "Taxes and reporting", "Payroll calculations", "Accounting advice"] },
      { icon: Globe2, name: "Trade Active", audience: "For importers and exporters", featured: true, features: ["Ongoing accounting support", "Foreign trade accounting", "Payments to non-residents", "Currency compliance"] },
      { icon: Building2, name: "Corporate", audience: "For manufacturing and complex accounts", featured: false, features: ["Extended accounting support", "Cost calculations", "Inventory and production accounting", "Management reporting"] },
    ],
  },
  faq: {
    label: "Before we talk", title: "A few things\nyou might be wondering.",
    items: [
      { q: "Can you help if we already have fines or debts?", a: "Yes. We’ll review your documents and accounts, then suggest next steps. We don’t promise to overturn every fine: outcomes depend on the grounds and the specific situation." },
      { q: "Do you handle foreign currency and non-residents?", a: "Yes, this is one of our areas of focus. Tell us which countries and partners you work with, and what payments or shipments you’re planning. We’ll discuss the support you need." },
      { q: "How do we switch from another accountant?", a: "We agree on the documents and access needed, then review opening balances and outstanding issues. After that, we set a handover timeline and an initial work plan." },
      { q: "Can we work entirely online?", a: "Yes. We’ll agree on a convenient way to share documents and stay in touch. We support companies operating in Kazakhstan, including foreign-owned businesses." },
      { q: "How do I get a quote?", a: "Tell us what your company does, your headcount and approximate monthly transaction volume. We’ll clarify the details and prepare a quote, with no obligation to sign a contract." },
    ],
  },
  reviews: {
    label: "Client testimonials",
    title: "What businesses say about Finance Bridge",
    items: [
      {
        company: "AsiaTrade LLP",
        industry: "Equipment import & foreign trade",
        text: "Unblocked our foreign currency account in 3 days and resolved a 1.5M KZT tax authority claim. Gulshat now manages all our currency compliance.",
        author: "Arman S., Director",
        rating: 5,
      },
      {
        company: "Global Logistics KZ LLP",
        industry: "International freight",
        text: "Switched from an in-house accountant. Zero missed deadlines in 2 years, complete order in source docs and Virtual Warehouse.",
        author: "Viktor M., Founder",
        rating: 5,
      },
      {
        company: "Silk Road Trade LLP",
        industry: "Wholesale trade & EAEU",
        text: "Organized inventory and VAT accounting flawlessly. Legally reduced our tax burden by over 20% and eliminated audit stress.",
        author: "Daniyar K., CFO",
        rating: 5,
      },
      {
        company: "KazProm Tech LLP",
        industry: "Manufacturing & foreign ownership",
        text: "Properly applied double tax treaty benefits when distributing dividends to our foreign shareholder, saving 8M KZT.",
        author: "Elena B., Deputy Director",
        rating: 5,
      },
      {
        company: "Alatau Distribution LLP",
        industry: "Distribution & retail",
        text: "Super responsive: reply within 15 minutes, and our cloud 1C books are accessible 24/7. Complete peace of mind.",
        author: "Murat T., CEO",
        rating: 5,
      },
    ],
  },
  contacts: {
    label: "Let’s start with your business", title: "Let’s work out your accounting costs",
    text: "Get a clear cost calculation and expert recommendations for your business accounting today.",
    expertTitle: "Chief Accountant & Tax Consultant",
    expertQuote: "“Message me directly on WhatsApp — I will personally review your setup, calculate the quote and advise how to safeguard against tax penalties.”",
    onlineBadge: "Online · Fast quote within 15 mins",
    taskSelectorLabel: "1. Select your inquiry:",
    tasks: [
      { id: "too", label: "LLP (Simplified / Standard)", message: "I'd like to get a quote for ongoing accounting services for a Kazakhstan LLP." },
      { id: "ved", label: "Foreign Trade & Non-residents", message: "I'd like to calculate costs for foreign trade, imports/exports and non-resident tax compliance." },
      { id: "audit", label: "Accounting Clean-up & Audit", message: "We need an accounting health-check and records clean-up." },
      { id: "ip", label: "Sole Trader & Payroll", message: "I'd like a quote for sole trader accounting, payroll and tax filing." },
      { id: "custom", label: "Custom Inquiry", message: "I have a custom accounting and tax consultation inquiry." },
    ],
    previewLabel: "Your WhatsApp message is ready. Send it with one click:",
    greeting: "Hello, Gulshat!", introduction: "My name is",
    quoteMessage: "I'd like an accounting quote for my business (LLP/sole trader).",
    nameLabel: "2. Your name", optional: "(optional)", namePlaceholder: "For example, Alex",
    quoteAction: "Get a quote on WhatsApp",
    steps: ["Choose task & name", "WhatsApp opens with prefilled text", "Gulshat replies within 15 minutes"],
    response: "Target response time: 15 minutes during working hours.",
    instagram: "Meet us on Instagram", call: "Call us", location: "Kazakhstan · Remote support", top: "Back to top",
  },
  widget: { open: "Contact us", close: "Close contact panel", title: "How would you like to talk?", subtitle: "Gulshat and the Finance Bridge team", note: "We aim to reply within 15 minutes during working hours.", call: "Call us" },
};

export const content = { ru, en };
