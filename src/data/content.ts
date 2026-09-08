import {
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  FileCheck2,
  FileSpreadsheet,
  Globe2,
  Layers3,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Language = "ru" | "en";
export type PageId = "home" | "services" | "pricing" | "about" | "calculator";

export const BRAND = "Finance Bridge";
export const WA_PHONE = "77474691092";
export const PHONE_DISPLAY = "+7 747 469 1092";
export const IG_USERNAME = "gulshat_121985";
export const phoneUrl = `tel:+${WA_PHONE}`;
export const waUrl = (message: string) =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
export const igUrl = () => `https://www.instagram.com/${IG_USERNAME}/`;

export interface NavItem {
  id: PageId;
  label: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  badge: string;
  summary: string;
  forWhom: string;
  deliverables: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  priceNote: string;
  audience: string;
  featured?: boolean;
  features: string[];
  ctaMessage: string;
}

export interface ReviewItem {
  company: string;
  industry: string;
  text: string;
  author: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

const ru = {
  meta: {
    title: "Finance Bridge | Бухгалтерское сопровождение бизнеса в Казахстане",
    description:
      "Комплексный бухгалтерский и налоговый учёт для ТОО и ИП. ВЭД, валютные контракты, производство, восстановление учёта. 15+ лет практики.",
  },
  brandSub: "Бухгалтерия для бизнеса",
  skip: "Перейти к основному контенту",
  languageLabel: "Язык сайта",
  menu: "Открыть меню",
  closeMenu: "Закрыть меню",
  quickWhatsApp: "Написать в WhatsApp",

  nav: [
    { id: "home", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "pricing", label: "Тарифы" },
    { id: "about", label: "О компании" },
    { id: "calculator", label: "Калькулятор и контакты" },
  ] as NavItem[],

  common: {
    calculateCta: "Рассчитать стоимость",
    exploreServices: "Все услуги",
    discussTask: "Обсудить задачу",
    backToHome: "На главную",
    nextPageLabel: "Далее",
    openWhatsApp: "Открыть в WhatsApp",
    directCall: "Позвонить",
    hoursNote: "Пн-Пт: 9:00 - 19:00 · Ответ за 15 минут в рабочее время",
    guaranteesPill: "Официальный договор с материальной ответственностью",
  },

  home: {
    heroEyebrow: "БУХГАЛТЕРСКИЙ И НАЛОГОВЫЙ УЧЁТ · КАЗАХСТАН",
    heroTitle: "Бизнес работает спокойно.",
    heroTitleAccent: "Налоги и отчёты под контролем.",
    heroDescription:
      "Команда опытного главного бухгалтера берёт на себя всю рутину: от первичных документов и зарплаты до валютного контроля и налоговых проверок.",
    heroCtaPrimary: "Рассчитать стоимость",
    heroCtaSecondary: "Посмотреть услуги",
    heroBadges: [
      { number: "15+", label: "лет практики в бухучёте" },
      { number: "100+", label: "клиентских проектов без штрафов" },
      { number: "15 мин", label: "среднее время первого ответа" },
      { number: "24/7", label: "доступ к вашей базе 1С в облаке" },
    ],

    advantagesTitle: "Почему бизнесу выгодно работать с Finance Bridge",
    advantagesSubtitle: "Практичный подход без бюрократии и навязанных услуг.",
    advantages: [
      {
        icon: ShieldCheck,
        title: "Финансовая ответственность в договоре",
        text: "Отвечаем рублём и тенге за своевременность отчётов и правильность расчёта налогов. Никаких сюрпризов.",
      },
      {
        icon: Clock,
        title: "Прямая связь с главным бухгалтером",
        text: "Без медленных тикетов и некомпетентных менеджеров. Вы общаетесь напрямую со специалистом, знающим ваш бизнес.",
      },
      {
        icon: FileSpreadsheet,
        title: "Прозрачная база 1С в облаке",
        text: "Ваша база остаётся у вас. Вы видите каждый счёт, накладную и платёж в режиме реального времени.",
      },
      {
        icon: Scale,
        title: "Законная налоговая оптимизация",
        text: "Помогаем выбрать оптимальный режим налогообложения и применить положенные льготы без серых схем.",
      },
    ],

    servicesPreviewTitle: "Основные направления работы",
    servicesPreviewSubtitle: "Закрываем все бухгалтерские и налоговые задачи предпринимателей в Казахстане.",
    viewAllServicesBtn: "Смотреть подробный каталог услуг",

    reviewsTitle: "Что говорят руководители о работе с нами",
    reviewsSubtitle: "Реальный опыт предпринимателей, доверявших нам свою бухгалтерию.",

    reviews: [
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
        text: "Навели идеальный порядок в учёте ТМЦ и НДС. Законно сэкономили больше 20% на налогах при импорте из Китая и России.",
        author: "Данияр К., финансовый директор",
        rating: 5,
      },
      {
        company: "ТОО «KazProm Tech»",
        industry: "Производство и нерезиденты",
        text: "Безупречно применили международную конвенцию при выплате дивидендов учредителям в ЕС. Никаких доначислений и штрафов.",
        author: "Елена Б., зам. генерального директора",
        rating: 5,
      },
    ] as ReviewItem[],

    quoteBannerTitle: "Хотите узнать точную стоимость для вашей компании?",
    quoteBannerText: "Ответьте на несколько коротких вопросов в калькуляторе и получите готовый расчёт с рекомендациями.",
    quoteBannerBtn: "Перейти к онлайн-калькулятору",
  },

  services: {
    pageTitle: "Услуги бухгалтерского сопровождения",
    pageSubtitle: "От регулярного учёта до сложных внешнеэкономических сделок и разблокировки счетов.",
    introText:
      "Каждая компания уникальна. Мы не навязываем стандартные шаблоны, а формируем объём работ под реальные потребности вашего бизнеса.",
    list: [
      {
        id: "too",
        number: "01",
        icon: Building2,
        title: "Комплексное обслуживание ТОО (СНР и ОУР)",
        badge: "Для компаний любого масштаба",
        summary: "Полное ведение бухгалтерии ТОО: обработка первичных документов, расчёт налогов, сдача форм 200.00, 300.00 (НДС), 100.00 (КПН).",
        forWhom: "Подходит для торговых, сервисных и оптовых компаний на общеустановленном режиме или упрощёнке.",
        deliverables: [
          "Приём, проверка и разноска первичных документов (ЭСФ, АВР, накладные)",
          "Расчёт налогов, зарплат и социальных платежей сотрудников",
          "Своевременная сдача всех регулярных налоговых и статистических отчётов",
          "Ведение кадрового учёта (приказы, трудовые договоры, табеля учёта)",
          "Ежеквартальная сверка взаиморасчётов с КГД без расхождений",
        ],
      },
      {
        id: "ved",
        number: "02",
        icon: Globe2,
        title: "ВЭД, импорт, экспорт и нерезиденты",
        badge: "Экспертное направление",
        summary: "Учёт внешнеэкономической деятельности, валютных контрактов, таможенного НДС, отчётов в рамках ЕАЭС и выплат нерезидентам.",
        forWhom: "Для компаний, закупающих товары в Китае, Турции, России, ЕС или поставляющих продукцию на экспорт.",
        deliverables: [
          "Регистрация и сопровождение валютных контрактов, контроль учётных номеров (УН)",
          "Расчёт и подтверждение уплаты НДС при импорте из ЕАЭС (форма 328.00)",
          "Оформление СНТ и контроль остатков на Виртуальном складе",
          "Учёт курсовых разниц и конвертационных валютных операций",
          "Налогообложение доходов нерезидентов и применение конвенций об избежании двойного налогообложения",
        ],
      },
      {
        id: "ip",
        number: "03",
        icon: Layers3,
        title: "Бухгалтерия для ИП (упрощёнка и розничный налог)",
        badge: "Быстрый старт",
        summary: "Полное сопровождение индивидуальных предпринимателей: сдача формы 910.00, розничный налог, налоги за ИП и наёмных работников.",
        forWhom: "Для предпринимателей в сфере IT, услуг, розничной торговли и маркетплейсов.",
        deliverables: [
          "Расчёт обязательных пенсионных, социальных и медицинских отчислений (ОПВ, СО, ВОСМС, ООСМС)",
          "Ведение книги учёта доходов и расходов по установленной форме",
          "Выписка ЭСФ и закрывающих документов покупателям",
          "Формирование и отправка налоговой отчётности без просрочек",
          "Консультации по лимитам оборота и переходу на НДС",
        ],
      },
      {
        id: "production",
        number: "04",
        icon: Truck,
        title: "Производство, склады и транспортная логистика",
        badge: "Сложный учёт",
        summary: "Специализированный учёт материальных запасов, калькуляция фактической себестоимости продукции, списание сырья и ГСМ.",
        forWhom: "Для производственных предприятий, цехов, складов и логистических операторов.",
        deliverables: [
          "Построение номенклатурных справочников и спецификаций списания сырья в 1С",
          "Расчёт прямых и косвенных производственных затрат, калькуляция себестоимости",
          "Учёт поступления и расхода ГСМ, путевых листов и амортизации автотранспорта",
          "Проведение инвентаризаций и сведение расхождений по складам",
          "Формирование управленческой отчётности по маржинальности позиций",
        ],
      },
      {
        id: "recovery",
        number: "05",
        icon: RefreshCcw,
        title: "Восстановление бухгалтерского учёта и аудит",
        badge: "Наведение порядка",
        summary: "Экспресс-аудит текущего состояния базы, выявление отсутствующих документов и ошибок прошлых периодов, исправление учёта.",
        forWhom: "Если предыдущий бухгалтер бросил дела, в базе 1С хаос или накопились претензии от налоговой.",
        deliverables: [
          "Анализ базы 1С и сопоставление данных с выписками банков и порталом ИС ЭСФ",
          "Сверка с лицевыми счетами налоговых органов за последние 3 года",
          "Сбор и восстановление недостающих первичных документов от поставщиков",
          "Подача дополнительных налоговых деклараций с обоснованными корректировками",
          "Передача полностью выверенной базы с понятной структурой остатков",
        ],
      },
      {
        id: "disputes",
        number: "06",
        icon: Scale,
        title: "Налоговые споры, разблокировка счетов и аудит КГД",
        badge: "Защита бизнеса",
        summary: "Профессиональная подготовка ответов на уведомления камерального контроля, обжалование штрафов и снятие арестов со счетов.",
        forWhom: "Когда банк заблокировал операции, пришло уведомление КГД или выставлена высокая степень риска.",
        deliverables: [
          "Анализ сути уведомления КГД и оценка законности предъявленных требований",
          "Подготовка аргументированного пояснения с приложением доказательной базы",
          "Оперативное взаимодействие с налоговым инспектором для снятия ограничений",
          "Снижение категории налогового риска компании в системе управления рисками (СУР)",
          "Защита интересов руководителя при назначении тематических проверок",
        ],
      },
    ] as ServiceDetail[],
    ctaCalculate: "Рассчитать стоимость для этой услуги",
  },

  pricing: {
    pageTitle: "Прозрачные тарифы без скрытых доплат",
    pageSubtitle: "Стоимость рассчитывается от реального объёма операций и специфики бизнеса.",
    note: "В каждый тариф входит облачная 1С, личный контакт с главным бухгалтером и полная финансовая ответственность.",
    plans: [
      {
        id: "start",
        name: "Старт",
        priceNote: "от 45 000 ₸ / месяц",
        audience: "Для ИП и малых ТОО без НДС с небольшим объёмом документов",
        features: [
          "До 30 первичных документов в месяц",
          "До 3 сотрудников в штате",
          "Расчёт зарплат, налогов и отчислений",
          "Сдача полугодовой и квартальной отчётности",
          "Доступ к облачной 1С 24/7",
          "Консультации по текущей деятельности",
        ],
        ctaMessage: "Хочу подключить тариф «Старт». Расскажите подробнее об условиях для моей компании.",
      },
      {
        id: "optima",
        name: "Оптима",
        priceNote: "от 95 000 ₸ / месяц",
        audience: "Для стабильных ТОО с НДС, активной торговлей или услугами",
        featured: true,
        features: [
          "До 100 первичных документов в месяц",
          "До 10 сотрудников в штате",
          "Учёт НДС (форма 300.00) и ЭСФ",
          "Виртуальный склад и СНТ",
          "Кадровый учёт и начисление отпускных/больничных",
          "Сверка с КГД и контроль налоговых рисков",
          "Приоритетная линия связи в WhatsApp",
        ],
        ctaMessage: "Интересует тариф «Оптима» для ТОО с НДС. Давайте обсудим подключение.",
      },
      {
        id: "corporate",
        name: "Корпорейт",
        priceNote: "от 170 000 ₸ / месяц",
        audience: "Для компаний с производством, складами или филиалами",
        features: [
          "От 150 первичных документов в месяц",
          "Расчёт фактической себестоимости продукции",
          "Списание материалов по нормам и учёт ГСМ",
          "Кадровое делопроизводство до 25 сотрудников",
          "Годовой отчёт по КПН (форма 100.00) с приложением регистров",
          "Ежемесячные отчёты для руководителя по расходам",
          "Персональный бухгалтер и контроль главным бухгалтером",
        ],
        ctaMessage: "Интересует тариф «Корпорейт». Нужен расчёт для производственной/складской компании.",
      },
      {
        id: "ved_plan",
        name: "ВЭД Премиум",
        priceNote: "Индивидуальный расчёт",
        audience: "Для импортёров, экспортёров и работы с иностранными контрагентами",
        features: [
          "Валютный контроль и паспорта сделок",
          "Импортный НДС и форма 328.00 в ЕАЭС",
          "СНТ при пересечении границы",
          "Выплаты нерезидентам и расчёт КПН/ИПН у источника выплаты",
          "Консультации по таможенным пошлинам и сертификатам",
          "Защита от валютных и налоговых штрафов",
        ],
        ctaMessage: "Хочу узнать стоимость тарифа «ВЭД Премиум». Работаем с внешнеэкономическими контрактами.",
      },
    ] as PricingPlan[],
    calcButton: "Рассчитать точную стоимость",
  },

  about: {
    pageTitle: "Ваш надёжный бухгалтерский партнёр",
    pageSubtitle: "Более 15 лет бережём покой предпринимателей и порядок в цифрах.",
    storyTitle: "За каждым отчётом стоит персональная ответственность",
    storyText:
      "Меня зовут Гульшат Аджибаева. Я руковожу бухгалтерской практикой Finance Bridge. За 15 лет в профессии я видела самые разные ситуации: от блокировок счетов на миллионы тенге до сложных споров с налоговыми органами по ВЭД. Мой главный принцип в работе прост: предприниматель должен спокойно развивать своё дело, зная, что в бухгалтерии у него железный порядок.",
    quoteText:
      "«Мы не просто заполняем декларации. Мы защищаем ваш бизнес от штрафов, оптимизируем налоги законными путями и всегда говорим на понятном для руководителя языке».",
    credentials: [
      { title: "Опыт работы", value: "15+ лет практики с ТОО и ИП" },
      { title: "Квалификация", value: "Профессиональный бухгалтер РК, сертификаты CAP/CIPA" },
      { title: "Специализация", value: "Сложные налоги, ВЭД, производство, налоговый аудит" },
      { title: "Формат работы", value: "Официальный договор с полной материальной ответственностью" },
    ],

    valuesTitle: "4 стандарта нашей работы",
    values: [
      {
        title: "Договор с финансовой ответственностью",
        desc: "Если по нашей вине возникнет ошибка или штраф, мы возмещаем его в полном объёме согласно договору.",
      },
      {
        title: "Конфиденциальность и NDA",
        desc: "Ваши финансовые показатели, контракты и обороты строго защищены соглашением о неразглашении.",
      },
      {
        title: "Ваша 1С всегда под вашим контролем",
        desc: "Мы не привязываем клиента к себе. База размещается в защищённом облаке, и вы в любой момент имеете к ней полный доступ.",
      },
      {
        title: "Всегда на связи в WhatsApp",
        desc: "Никаких автоответчиков и долгих очередей. Главный бухгалтер оперативно отвечает на любые срочные вопросы.",
      },
    ],

    faqTitle: "Часто задаваемые вопросы",
    faqSubtitle: "Честные ответы на вопросы руководителей перед началом сотрудничества.",
    faq: [
      {
        q: "У компании уже есть блокировка счёта или долги по налогам. Вы поможете?",
        a: "Да. Мы проведём экспресс-анализ ситуации, запросим актуальные выписки и лицевые счета в КГД, выявим причину блокировки и предложим пошаговый план снятия ограничений.",
      },
      {
        q: "Как происходит процесс передачи дел от прошлого бухгалтера?",
        a: "Мы берём передачу дел на себя. Составляем детальный чек-лист необходимых доступов, архивных копий баз 1С и первичных документов, проводим аудит входящих остатков и подписываем акт приёма-передачи.",
      },
      {
        q: "Можно ли работать полностью дистанционно по Казахстану?",
        a: "Да, более 80% наших клиентов работают удалённо. Документооборот ведётся через ИС ЭСФ, Doculite или курьерскую доставку оригиналов, база 1С доступна в облаке, а оперативное общение происходит в выделенном чате WhatsApp.",
      },
      {
        q: "Что входит в финансовую ответственность по договору?",
        a: "Если налоговый орган начислит пеню или штраф из-за ошибки нашего специалиста или несвоевременной сдачи отчёта, мы оплачиваем эти санкции за свой счёт. Это прямо зафиксировано в договоре.",
      },
      {
        q: "Как формируется окончательная стоимость услуг?",
        a: "Базовая стоимость зависит от режима налогообложения (СНР/ОУР), наличия НДС, количества документов в месяц и численности сотрудников. Мы фиксируем стоимость в договоре, поэтому скрытых доплат не возникнет.",
      },
    ] as FaqItem[],
  },

  calculator: {
    pageTitle: "Расчёт стоимости и прямая связь",
    pageSubtitle: "Выберите параметры вашей компании для точного расчёта тарифа за 15 минут.",
    taskLabel: "1. Выберите вашу задачу или форму бизнеса:",
    tasks: [
      { id: "too", label: "ТОО (СНР / ОУР)", message: "Хочу узнать стоимость комплексного бухгалтерского обслуживания ТОО." },
      { id: "ved", label: "ВЭД и нерезиденты", message: "Хочу рассчитать стоимость ведения ВЭД, валютных контрактов и импорта." },
      { id: "ip", label: "ИП и налоги", message: "Хочу узнать стоимость сопровождения ИП, сдачи формы 910 и расчёта налогов." },
      { id: "recovery", label: "Восстановление учёта", message: "Требуется экспресс-аудит и восстановление учёта за прошлые периоды." },
      { id: "custom", label: "Другой вопрос", message: "У меня индивидуальный вопрос по налогам и бухгалтерии в Казахстане." },
    ],
    nameLabel: "2. Ваше имя",
    nameOptional: "(необязательно)",
    namePlaceholder: "Например, Айгерим или Тимур",
    detailsLabel: "3. Дополнительные детали (сфера, число сотрудников, операций):",
    detailsPlaceholder: "Например: ТОО, оптовая торговля, 6 сотрудников, планируем импорт из Китая.",
    previewTitle: "Готовое сообщение в WhatsApp:",
    previewNote: "При нажатии откроется официальный чат в WhatsApp с уже сформированным текстом. Вы сможете дополнить его перед отправкой.",
    actionBtn: "Получить расчёт в WhatsApp",
    trustItems: [
      "Ответ за 15 минут в рабочее время",
      "Без спама и навязчивых звонков",
      "Бесплатный предварительный разбор",
    ],
    directHeading: "Или свяжитесь напрямую с главным бухгалтером",
    instagramLabel: "Instagram эксперта",
    instagramHandle: "@gulshat_121985",
    phoneActionLabel: "Позвонить по телефону",
  },

  footer: {
    rights: "Все права защищены.",
    legalNote: "Бухгалтерские услуги в Республике Казахстан. Официальный договор и безналичный расчёт.",
    topBtn: "Наверх",
  },
};

const en: typeof ru = {
  meta: {
    title: "Finance Bridge | Accounting & Tax Services for Business in Kazakhstan",
    description:
      "Comprehensive accounting and tax support for companies in Kazakhstan. Foreign trade, non-residents, manufacturing, and tax audit support. 15+ years of practice.",
  },
  brandSub: "Accounting for business",
  skip: "Skip to main content",
  languageLabel: "Website language",
  menu: "Open navigation menu",
  closeMenu: "Close navigation menu",
  quickWhatsApp: "Message on WhatsApp",

  nav: [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About Us" },
    { id: "calculator", label: "Calculator & Contacts" },
  ] as NavItem[],

  common: {
    calculateCta: "Get a Quote",
    exploreServices: "Explore Services",
    discussTask: "Discuss Task",
    backToHome: "Back to Home",
    nextPageLabel: "Next",
    openWhatsApp: "Open in WhatsApp",
    directCall: "Call Now",
    hoursNote: "Mon-Fri: 9:00 - 19:00 · Replies within 15 mins during business hours",
    guaranteesPill: "Official contract with full financial liability",
  },

  home: {
    heroEyebrow: "ACCOUNTING & TAX SERVICES · KAZAKHSTAN",
    heroTitle: "Run your business with confidence.",
    heroTitleAccent: "Taxes and reporting under complete control.",
    heroDescription:
      "Led by a chief accountant with 15+ years of practice, our team handles all routine operations: primary documents, payroll, foreign trade contracts, and tax audits.",
    heroCtaPrimary: "Get a Quote",
    heroCtaSecondary: "View Services",
    heroBadges: [
      { number: "15+", label: "years of hands-on practice" },
      { number: "100+", label: "business projects penalty-free" },
      { number: "15 min", label: "average initial response time" },
      { number: "24/7", label: "cloud 1C access anytime" },
    ],

    advantagesTitle: "Why Businesses Choose Finance Bridge",
    advantagesSubtitle: "A practical, business-oriented approach without bureaucracy.",
    advantages: [
      {
        icon: ShieldCheck,
        title: "Financial Liability in the Contract",
        text: "We take direct financial responsibility for timely filings and tax precision. No surprises.",
      },
      {
        icon: Clock,
        title: "Direct Contact with Chief Accountant",
        text: "No slow ticket queues or inexperienced intermediaries. You communicate directly with the expert overseeing your accounts.",
      },
      {
        icon: FileSpreadsheet,
        title: "Transparent Cloud 1C Access",
        text: "Your accounting database remains yours. View every invoice, payment, and balance in real time.",
      },
      {
        icon: Scale,
        title: "Compliant Tax Optimization",
        text: "We help structure tax regimes and claim legitimate incentives strictly within Kazakh law.",
      },
    ],

    servicesPreviewTitle: "Core Areas of Expertise",
    servicesPreviewSubtitle: "Covering all accounting and fiscal requirements for businesses in Kazakhstan.",
    viewAllServicesBtn: "Explore Full Services Catalog",

    reviewsTitle: "What Company Leaders Say",
    reviewsSubtitle: "Real feedback from entrepreneurs who rely on our accounting expertise.",

    reviews: [
      {
        company: "LLP «AsiaTrade»",
        industry: "Equipment Import, FX Trade",
        text: "Unfroze our foreign currency accounts in 3 days and overturned an unsubstantiated 1.5M KZT tax claim. Now Gulshat manages all our FX operations.",
        author: "Arman S., Director",
        rating: 5,
      },
      {
        company: "LLP «Global Logistics KZ»",
        industry: "International Logistics",
        text: "Transitioned from an in-house accountant. Zero late filings over 2 full years! Complete order in documents, SNT, and Virtual Warehouse.",
        author: "Viktor M., Founder",
        rating: 5,
      },
      {
        company: "LLP «Silk Road Trade»",
        industry: "Wholesale, EAEU",
        text: "Established complete precision in inventory and VAT accounting. Legally saved over 20% on taxes when importing from China and Russia.",
        author: "Daniyar K., CFO",
        rating: 5,
      },
      {
        company: "LLP «KazProm Tech»",
        industry: "Manufacturing & Foreign Investment",
        text: "Flawlessly implemented the international double-tax treaty on dividend distributions to EU founders. Zero audit penalties.",
        author: "Elena B., Deputy CEO",
        rating: 5,
      },
    ] as ReviewItem[],

    quoteBannerTitle: "Looking for an exact quote for your company?",
    quoteBannerText: "Answer a few brief questions in our online calculator and receive a tailored proposal.",
    quoteBannerBtn: "Open Online Calculator",
  },

  services: {
    pageTitle: "Accounting & Tax Services",
    pageSubtitle: "From regular compliance to complex foreign trade transactions and account unfreezes.",
    introText:
      "Every business has unique requirements. We structure service scopes around your operational reality rather than rigid templates.",
    list: [
      {
        id: "too",
        number: "01",
        icon: Building2,
        title: "Full Accounting for LLPs (Standard & Simplified)",
        badge: "For Companies of All Sizes",
        summary: "End-to-end accounting support: invoice processing, payroll, statutory tax returns 200.00, 300.00 (VAT), 100.00 (CIT).",
        forWhom: "Ideal for trading, distribution, and service enterprises operating in Kazakhstan.",
        deliverables: [
          "Verification and registration of primary documents (electronic invoices, delivery notes, AVR)",
          "Monthly payroll calculation, salary taxes, and social security payments",
          "Timely preparation and electronic filing of all fiscal and statistical reports",
          "HR administration (labor contracts, onboarding, timesheets)",
          "Quarterly tax reconciliation statements with the State Revenue Committee",
        ],
      },
      {
        id: "ved",
        number: "02",
        icon: Globe2,
        title: "Foreign Trade, Import, Export & Non-Residents",
        badge: "Specialized Practice",
        summary: "Foreign economic activity, cross-border contracts, import VAT, EAEU declarations (328.00), and non-resident withholding taxes.",
        forWhom: "For businesses importing goods from China, Europe, Russia, Turkey, or exporting internationally.",
        deliverables: [
          "Registration and monitoring of FX foreign contracts with commercial banks",
          "Import VAT calculations and Form 328.00 submissions for EAEU shipments",
          "SNT compliance and Virtual Warehouse stock control",
          "Exchange rate differences and currency conversion tracking",
          "Application of double taxation avoidance treaties for non-resident payments",
        ],
      },
      {
        id: "ip",
        number: "03",
        icon: Layers3,
        title: "Sole Proprietorships & Retail Tax",
        badge: "Fast Onboarding",
        summary: "Full support for individual entrepreneurs: Form 910.00, retail tax regime, mandatory contributions, and payroll.",
        forWhom: "For IT consultants, service providers, retail shops, and e-commerce sellers.",
        deliverables: [
          "Calculation of mandatory pension, social, and healthcare contributions",
          "Statutory income and expense ledger maintenance",
          "Issuance of electronic invoices (ESF) to corporate buyers",
          "Zero-penalty submission of regular tax returns",
          "Advisory on turnover thresholds and VAT registration requirements",
        ],
      },
      {
        id: "production",
        number: "04",
        icon: Truck,
        title: "Manufacturing, Warehousing & Logistics",
        badge: "Complex Costing",
        summary: "Cost of goods sold (COGS) calculation, raw material write-offs, warehouse inventory audits, and fuel tracking.",
        forWhom: "For production facilities, assembly workshops, logistics operators, and wholesale warehouses.",
        deliverables: [
          "BOM configuration and raw material write-off specifications in 1C",
          "Accurate cost calculations including direct and overhead manufacturing expenses",
          "Fuel, transportation logbook, and vehicle depreciation tracking",
          "Physical inventory reconciliation and stock variance investigations",
          "Management reporting on gross margins and cost drivers",
        ],
      },
      {
        id: "recovery",
        number: "05",
        icon: RefreshCcw,
        title: "Accounting Reconstruction & Internal Audit",
        badge: "Cleanup & Order",
        summary: "Reviewing database integrity, identifying unrecorded transactions, correcting prior period mistakes, and reconciling ledgers.",
        forWhom: "When prior accountants left unexpectedly, 1C is inconsistent, or tax notices are pending.",
        deliverables: [
          "Comprehensive 1C database diagnostic matched against bank and ESF portal data",
          "Reconciliation with tax office ledgers covering the past 3 statutory years",
          "Obtaining and archiving missing supplier documentation",
          "Submitting revised tax declarations with proper substantiation",
          "Handover of a clean, reconciled 1C database with transparent opening balances",
        ],
      },
      {
        id: "disputes",
        number: "06",
        icon: Scale,
        title: "Tax Notices, Account Unfreezes & Disputes",
        badge: "Business Protection",
        summary: "Expert drafting of formal responses to desk-audit tax notifications, penalty appeals, and lifting bank account restrictions.",
        forWhom: "When accounts are frozen by authorities, high risk ratings are assigned, or audits are launched.",
        deliverables: [
          "Evaluation of the tax authority notice and verification of legal claims",
          "Drafting evidence-backed legal justifications with supporting documentation",
          "Direct representation with revenue officers to remove banking restrictions",
          "Action plan to downgrade company risk rating in the state risk management system",
          "Executive advisory during official tax inspections",
        ],
      },
    ] as ServiceDetail[],
    ctaCalculate: "Request Quote for this Service",
  },

  pricing: {
    pageTitle: "Transparent Pricing Without Hidden Charges",
    pageSubtitle: "Pricing is calculated based on transaction volume, headcount, and specific business needs.",
    note: "All plans include cloud 1C access, direct contact with the chief accountant, and contractual financial liability.",
    plans: [
      {
        id: "start",
        name: "Start",
        priceNote: "from 45 000 ₸ / month",
        audience: "For sole traders and small non-VAT LLPs with moderate transaction flow",
        features: [
          "Up to 30 primary documents per month",
          "Up to 3 staff members on payroll",
          "Salary, tax, and social contribution calculation",
          "Statutory bi-annual or quarterly tax filings",
          "24/7 cloud 1C database access",
          "Ongoing routine advisory",
        ],
        ctaMessage: "I'd like to get started with the Start plan. Please share the details for my company.",
      },
      {
        id: "optima",
        name: "Optima",
        priceNote: "from 95 000 ₸ / month",
        audience: "For established VAT-paying LLPs with active trading or service operations",
        featured: true,
        features: [
          "Up to 100 primary documents per month",
          "Up to 10 staff members on payroll",
          "VAT compliance (Form 300.00) and electronic invoicing",
          "Virtual Warehouse and SNT compliance",
          "Full HR file administration and paid leave calculations",
          "Quarterly tax reconciliations and risk monitoring",
          "Priority WhatsApp communication channel",
        ],
        ctaMessage: "I am interested in the Optima plan for a VAT-paying LLP. Let's discuss onboarding.",
      },
      {
        id: "corporate",
        name: "Corporate",
        priceNote: "from 170 000 ₸ / month",
        audience: "For manufacturing companies, warehousing networks, or multi-branch operations",
        features: [
          "From 150 primary documents per month",
          "Detailed manufacturing COGS calculations",
          "Bill of materials write-offs and vehicle expense accounting",
          "HR administration for up to 25 employees",
          "Annual corporate income tax filing (Form 100.00) with full tax registers",
          "Monthly management cost and expenditure summaries",
          "Dedicated accountant supervised directly by the chief accountant",
        ],
        ctaMessage: "I am interested in the Corporate plan for a manufacturing/logistics business. Please provide a quote.",
      },
      {
        id: "ved_plan",
        name: "Foreign Trade Premium",
        priceNote: "Custom Quote",
        audience: "For cross-border traders, importers, exporters, and non-resident partnerships",
        features: [
          "FX compliance and contract registration numbers",
          "Import VAT accounting and Form 328.00 filings across EAEU",
          "SNT accompaniment on border crossings",
          "Non-resident dividend and royalty withholding taxes",
          "Advisory on customs tariffs and origin certificates",
          "Protection against foreign exchange penalties",
        ],
        ctaMessage: "I need a quote for Foreign Trade Premium. We operate international trade contracts.",
      },
    ] as PricingPlan[],
    calcButton: "Get a Tailored Calculation",
  },

  about: {
    pageTitle: "Your Trusted Accounting Partner",
    pageSubtitle: "Protecting business peace of mind and numerical integrity for over 15 years.",
    storyTitle: "Personal responsibility behind every submitted report",
    storyText:
      "My name is Gulshat Adzhibayeva. I lead Finance Bridge. Throughout my 15 years in accounting, I have navigated virtually every fiscal scenario: from million-tenge account unfreezes to complex cross-border tax audits. My philosophy is straightforward: entrepreneurs should focus on scaling their business with total peace of mind regarding their accounts.",
    quoteText:
      "“We don't just file tax forms. We safeguard your business against penalties, optimize taxes legally, and always speak in clear, practical business terms.”",
    credentials: [
      { title: "Experience", value: "15+ years of active practice with LLPs and sole traders" },
      { title: "Credentials", value: "Certified Professional Accountant (Kazakhstan), CAP/CIPA" },
      { title: "Specialization", value: "Complex corporate taxation, FX trade, manufacturing, tax defense" },
      { title: "Engagement Model", value: "Official legal contract with full financial liability" },
    ],

    valuesTitle: "4 Standards We Stand By",
    values: [
      {
        title: "Contractual Financial Responsibility",
        desc: "Should any penalty arise due to an error on our part, we reimburse it in full as stated in our contract.",
      },
      {
        title: "Confidentiality & Non-Disclosure",
        desc: "Your turnover, financial metrics, and customer agreements are protected under strict NDA terms.",
      },
      {
        title: "You Always Own Your 1C Database",
        desc: "We never lock clients in. Your ledger is stored in a secure cloud environment with direct 24/7 access.",
      },
      {
        title: "Accessible via WhatsApp",
        desc: "No call centers or endless queues. The chief accountant and team answer urgent queries promptly.",
      },
    ],

    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Clear answers to essential questions before beginning cooperation.",
    faq: [
      {
        q: "Our bank account is currently frozen or has tax arrears. Can you assist?",
        a: "Yes. We perform an emergency diagnostic, retrieve state revenue ledgers, identify the root cause of the restriction, and execute a structured resolution plan.",
      },
      {
        q: "How does the handover from our previous accountant work?",
        a: "We manage the entire transition. We assemble a checklist of required 1C access, opening balances, and supporting files, review opening numbers, and sign an official handover protocol.",
      },
      {
        q: "Can we work completely online across Kazakhstan?",
        a: "Yes, over 80% of our clients work remotely. Document workflows run via the state ESF portal, Doculite, or courier services, 1C is hosted in the cloud, and daily communication happens in a dedicated WhatsApp channel.",
      },
      {
        q: "What does contractual financial liability cover?",
        a: "If the tax authorities assess penalties or late interest due to our filing error or deadline delay, we cover those costs in full as legally stipulated in our contract.",
      },
      {
        q: "How is the final monthly fee determined?",
        a: "The baseline fee depends on tax regime, VAT status, monthly document volume, and payroll size. We fix the scope and fee in the contract, preventing unexpected surcharges.",
      },
    ] as FaqItem[],
  },

  calculator: {
    pageTitle: "Online Calculator & Direct Contact",
    pageSubtitle: "Select your company parameters to receive an exact quotation within 15 minutes.",
    taskLabel: "1. Select your company structure or primary task:",
    tasks: [
      { id: "too", label: "LLP (Standard / Simplified)", message: "I'd like to get an accounting quote for our LLP in Kazakhstan." },
      { id: "ved", label: "Foreign Trade & Non-Residents", message: "I'd like a quote for foreign trade accounting, FX contracts, and import VAT." },
      { id: "ip", label: "Sole Trader & Payroll", message: "I'd like an accounting quote for a sole trader (Form 910, payroll, taxes)." },
      { id: "recovery", label: "Accounting Reconstruction", message: "We need an audit and accounting reconstruction for prior business periods." },
      { id: "custom", label: "Custom Inquiry", message: "I have a specific question regarding accounting and tax compliance in Kazakhstan." },
    ],
    nameLabel: "2. Your Name",
    nameOptional: "(optional)",
    namePlaceholder: "For example, Alex or Diana",
    detailsLabel: "3. Additional Details (industry, headcount, transaction volume):",
    detailsPlaceholder: "For example: LLP, wholesale trade, 6 employees, importing goods from abroad.",
    previewTitle: "Your Pre-Formatted WhatsApp Message:",
    previewNote: "Clicking the button opens an official WhatsApp chat with this message already prepared. You can edit it before sending.",
    actionBtn: "Send Inquiry via WhatsApp",
    trustItems: [
      "Replies within 15 minutes during business hours",
      "No spam or unsolicited sales calls",
      "Free initial consultation and setup review",
    ],
    directHeading: "Or Reach Out to the Chief Accountant Directly",
    instagramLabel: "Expert Instagram",
    instagramHandle: "@gulshat_121985",
    phoneActionLabel: "Call Phone Number",
  },

  footer: {
    rights: "All rights reserved.",
    legalNote: "Professional accounting services in Kazakhstan. Official contract and electronic invoices provided.",
    topBtn: "Back to top",
  },
};

export const content = { ru, en };
