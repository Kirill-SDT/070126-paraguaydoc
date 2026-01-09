export const COLORS = {
  primary: '#2463eb',
  primaryDark: '#1d4ed8',
  secondaryGreen: '#10b981',
  accentAmber: '#f59e0b',
  backgroundLight: '#f6f6f8',
  backgroundDark: '#111621',
  cardDark: '#1a2333',  // Dark mode card background for PriceList section
} as const

export const HERO_CONTENT = {
  trustBadge: 'Обслужили 100+ клиентов',
  headline: 'Получите ВНЖ или ПМЖ Парагвая с прозрачными сроками и ценами',
  gradientWords: 'прозрачными сроками', // Words to apply gradient
  subheadline: 'Помогаем русскоязычным семьям и предпринимателям легально переехать в Парагвай. Работаем из Encarnación, знаем каждый шаг процесса.',
  ctaPrimary: 'Оставить заявку',
  ctaSecondary: 'Наш Telegram',
  averageTime: 'Среднее время получения: 3-4 месяца',
  location: 'Encarnación, Paraguay',
  rating: '4.9/5',
  ratingSource: '(Google Reviews)',
} as const

export const NAV_LINKS = [
  { text: 'Главная', href: '#' },
  { text: 'Услуги', href: '#' },
  { text: 'Цены', href: '#' },
  { text: 'FAQ', href: '#' },
] as const

export const BRAND = {
  name: 'Paraguaydoc',
  telegram: '@Paraguaydoc',
  telegramUrl: 'https://t.me/Paraguaydoc',
} as const

// Placeholder images from hero.html
export const IMAGES = {
  heroMain: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABeFHvc0i6bOFQv4_BYyhCsV6ASxkhvfDJwmD-BTBuXblZqIXrNDlfK3x1SGDauHKWpQmDR5FTZMgjwnkvMoFvg1bFYU0uyphwq9CJuWPRmkLBEjRIivdv3rClAA9BnkXm_BzlWf0rvOQOR0eHCeoh7FDUw9V1c2Hlbv9bjwVoBgHJQr43ngRQxRaidRPbPEkQYM2KjdvowqlhK1oj6p-5wPLtlgSTNnR2ROWGK2HuTQvr2MSvLa-SgJ0mAIsn6MBBwcq2lGHUD4Q',
  heroMobile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFzhszzs8nwOUtjAeJPsiLD-dQm3pw6ta1jg6BISVGCCc8MlQ41O5XDij294dE1MlBAv9COxPhHU2tvNQdMRbzL5vRKniiQqI5XhyN85DTAOSGcuZMSX4gFSQV0ndPHOH0U9-s5JnRTkREdMTl8LovfoY2Sw4cPDqk7Q5IMZH-plw7XiDF3e6PAsJ09IusLHZN0pFLnk7zEZcIDmRDDhpPREDsa9pswXVAErYD8lZhi4HxRgeN6DUk6roFvnI0Udml70kdYgjIlcQ',
  avatars: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBdIcEmBPhOg7Q0P9NZORh-sQGB0xG110roQvLe_QEO3UImc1eWydSlXLz_GAHSA3ynPh36Hu03Sgfo2WdLJa5xjd4kfBzdXxb4k5FwlmLYKRSMWf7HJURF0hUwDIErpSQC3SbbTRDITbucYTQjstJEX76YMaGZfG_LhDo0Z7S8gmG8bxxhYuJAxOJeKzf7CXegdR0VvQLQ4houyd79XOzyZAT0ZIF0N2TFCpt6OmF888cyqluT0q0gsAuFEwCsTdVciIllh45Npw0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDPx-7nvN-htatAHtJ17p3x4x0HSBDdO0_XDFyR7GRECd9_EZriZvHbKNZEBqIXmDt-EYByJucbnvC0ucsC3M7d0sx5iYsckVgVRcKqPNRIrGBHQHRpcMvylUp8JfpvWAUKaT5tE4HrGN7QuBqud6qaJuNrLvaB1CRmhAtdlfNSXUQmBLW1DBxPtdLSnfXljGDNO0BoNFrRMsX0mmL9wwTLgH2mLgw02720ON5gubrvkVz5gpBRNjsaVNAeyorCbvx5rQYNutcKFbQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCVDbRNF_vgksybKR_nSqQQtnlRc6WMOPuVi81Shd5s68Q6B_60GTLQa3Zh7V0T-DneJjJdgYir4JOTNKJKSg0QjD0d2fwbVK9LtthYILSTCzY3soGG4Yn4zug4J_wyeZlBXuZLYrpRFDJ6iQ3ravJokN3VbR27eLmukjWSNFGXea_UKwzBizoDK6Gbjk3cLWWG2ITDav1aD2fiMi5rgHWq9mTIizgfKY5Ype8oXRc11i5iSoCmiLKSgyBdOk8bPldVf5mqBqBsJx8',
  ],
} as const

// Pricing services data
export const SERVICES = [
  {
    id: 'vnzh_basic',
    badge: { text: 'Базовый', bgColor: 'bg-gray-100 dark:bg-gray-800', textColor: 'text-gray-600 dark:text-gray-300' },
    title: 'ВНЖ Базовый',
    price: '$1,400',
    timeline: '6-7 месяцев',
    bestFor: 'Семьи и удаленные специалисты',
    features: [
      'Admisión Temporaria: 3-4 месяца',
      'Cédula: 2-3 месяца',
      'Один визит в миграционное управление',
      'Получение Cédula по доверенности',
    ],
    iconColor: 'text-primary',
    highlighted: false,
  },
  {
    id: 'vnzh_fast',
    badge: { text: 'Рекомендуем', bgColor: 'bg-gradient-to-r from-primary to-blue-500', textColor: 'text-white' },
    title: 'ВНЖ Ускоренный',
    price: '$2,200',
    timeline: '2.5-4 месяца',
    bestFor: 'Быстрое получение документов',
    features: [
      'Admisión Temporaria: 1.5-2 месяца',
      'Cédula: 1.5-2 месяца',
      'Ускоренное рассмотрение',
      'Получение Cédula по доверенности',
    ],
    iconColor: 'text-primary',
    highlighted: true,
    highlightBadge: 'Популярный выбор',
  },
  {
    id: 'pmzh_full',
    badge: { text: 'Премиум', bgColor: 'bg-purple-50 dark:bg-purple-900/20', textColor: 'text-purple-600 dark:text-purple-300' },
    title: 'ПМЖ под ключ',
    price: '$9,500',
    timeline: '1 месяц + подготовка',
    bestFor: 'Предприниматели с капиталом $70k+',
    features: [
      'Открытие компании (EAS)',
      'Ведение бухгалтерии 6 месяцев',
      'Бизнес-проект под SUACE',
      'Ускоренная Cédula (2-3 дня)',
      'Оформление 5 работников',
    ],
    iconColor: 'text-purple-500',
    highlighted: false,
  },
  {
    id: 'pmzh_existing',
    badge: { text: 'Для бизнеса', bgColor: 'bg-amber-50 dark:bg-amber-900/20', textColor: 'text-amber-700 dark:text-amber-400' },
    title: 'ПМЖ с компанией',
    price: '$6,000',
    timeline: '1 месяц',
    bestFor: 'Уже есть компания в Парагвае',
    features: [
      'Сопровождение SUACE',
      'Оформление ПМЖ',
      'Подача на Cédula',
      'Юридическая поддержка',
    ],
    iconColor: 'text-amber-500',
    highlighted: false,
  },
] as const

export const PRICING_CONTENT = {
  title: 'Наши услуги',
  subtitle: 'Выберите подходящий вариант для вашей ситуации',
} as const

// Timeline section content
export const TIMELINE_CONTENT = {
  title: 'Как проходит процесс',
  subtitle: 'Прозрачный путь от заявки до получения документов. Мы берем на себя всю бюрократию.',
  toggleVnzh: 'ВНЖ (Временный вид)',
  togglePmzh: 'ПМЖ (Постоянный вид)',
  ctaText: 'Начать консультацию',
  presenceBadge: 'Личное присутствие',
  importantBadge: 'Важно',
} as const

// Timeline data structure
export interface TimelineStep {
  step_number: number
  title: string
  description: string
  duration: string
  isImportant?: boolean
  requiresPresence?: boolean
  icon?: string
  markerType?: 'number' | 'icon'
  markerIcon?: string
  markerColor?: 'blue' | 'orange' | 'green'
}

export const TIMELINE_DATA = {
  vnzh: [
    {
      step_number: 1,
      title: 'Заявка и консультация',
      description: 'Оставляете заявку на сайте, мы связываемся в Telegram, уточняем детали вашей ситуации',
      duration: '1-2 дня',
      markerType: 'number' as const,
      markerColor: 'blue' as const,
      icon: 'chat',
    },
    {
      step_number: 2,
      title: 'Подготовка документов',
      description: 'Вы собираете документы (паспорт, свидетельства, справка о судимости). Мы готовим местные документы за 2 дня',
      duration: '2 недели',
      markerType: 'number' as const,
      markerColor: 'blue' as const,
      icon: 'folder_open',
    },
    {
      step_number: 3,
      title: 'Первый визит',
      description: 'Приезжаете в Encarnación, встреча с юристом в миграционном управлении (1 час)',
      duration: '1 день',
      isImportant: true,
      requiresPresence: true,
      markerType: 'icon' as const,
      markerIcon: 'flight_land',
      markerColor: 'orange' as const,
      icon: 'location_on',
    },
    {
      step_number: 4,
      title: 'Ожидание Admisión Temporaria',
      description: 'Базовый: 3-4 месяца. Ускоренный: 1.5-2 месяца. Можете уехать из Парагвая',
      duration: '1.5-4 месяца',
      markerType: 'number' as const,
      markerColor: 'blue' as const,
      icon: 'domain',
    },
    {
      step_number: 5,
      title: 'Подача на Cédula',
      description: 'Второй визит для подачи документов на удостоверение личности',
      duration: '1 день',
      markerType: 'number' as const,
      markerColor: 'blue' as const,
      icon: 'hourglass_top',
    },
    {
      step_number: 6,
      title: 'Получение Cédula',
      description: 'Базовый: 2-3 месяца. Ускоренный: 1.5-2 месяца. Забираем по доверенности и отправляем вам',
      duration: '1.5-3 месяца',
      markerType: 'icon' as const,
      markerIcon: 'check',
      markerColor: 'green' as const,
      icon: 'badge',
    },
  ],
  pmzh: [
    {
      step_number: 1,
      title: 'Консультация и планирование',
      description: 'Обсуждаем ваш бизнес-план, инвестиции ($70k+), открытие или использование компании',
      duration: '1 неделя',
      markerType: 'number' as const,
      markerColor: 'blue' as const,
      icon: 'chat',
    },
    {
      step_number: 2,
      title: 'Первый приезд (2 недели)',
      description: 'Вступление в SUACE, подача документов на ПМЖ, открытие компании (если нужно)',
      duration: '2 недели',
      isImportant: true,
      requiresPresence: true,
      markerType: 'icon' as const,
      markerIcon: 'flight_land',
      markerColor: 'orange' as const,
      icon: 'location_on',
    },
    {
      step_number: 3,
      title: 'Реализация проекта',
      description: 'Ведем бухгалтерию, согласовываем проект, оформляем работников. Вы можете быть за границей',
      duration: 'До 24 месяцев',
      markerType: 'number' as const,
      markerColor: 'blue' as const,
      icon: 'domain',
    },
    {
      step_number: 4,
      title: 'Получение ПМЖ и Cédula',
      description: 'ПМЖ готово через 1 месяц. Cédula ускоренно (2-3 дня) или по доверенности',
      duration: '1-2 месяца',
      markerType: 'icon' as const,
      markerIcon: 'check',
      markerColor: 'green' as const,
      icon: 'badge',
    },
  ],
} as const

// Additional Services section content
export const ADDITIONAL_SERVICES_CONTENT = {
  sectionLabel: 'Дополнительно',
  title: 'Дополнительные услуги',
  subtitle: 'Мы позаботимся о всех нюансах вашего переезда, чтобы вы могли сосредоточиться на главном.',
  ctaQuestion: 'Нужна индивидуальная услуга?',
  ctaLink: 'Свяжитесь с нами для консультации',
} as const

// Additional Service interface
export interface AdditionalService {
  id: string
  icon: string
  title: string
  price: string
  priceType: 'fixed-green' | 'fixed-blue' | 'request'
  description: string
  details: string[]
  buttonText: string
  buttonStyle: 'primary' | 'outline'
}

// Additional Services data
export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: 'police_clearance',
    icon: 'gavel',
    title: 'Справка об отсутствии судимости в Asunción',
    price: '$150',
    priceType: 'fixed-green',
    description: 'Полное сопровождение в Интерполе и департаменте полиции для получения необходимой справки. Мы берем на себя взаимодействие с госорганами.',
    details: [
      'Включает все госпошлины',
      'Официальный перевод документов',
      'Срок выполнения: 1-2 рабочих дня',
    ],
    buttonText: 'Добавить',
    buttonStyle: 'primary',
  },
  {
    id: 'airport_pickup',
    icon: 'airport_shuttle',
    title: 'Встреча из аэропорта Asunción',
    price: '$50',
    priceType: 'fixed-blue',
    description: 'Персональная встреча в зоне прилета. Водитель поможет с багажом и доставит вас до места проживания в черте города.',
    details: [
      'Ожидание рейса (даже при задержке)',
      'Помощь с покупкой местной SIM-карты',
      'Комфортабельный автомобиль с кондиционером',
    ],
    buttonText: 'Добавить',
    buttonStyle: 'primary',
  },
  {
    id: 'accommodation',
    icon: 'apartment',
    title: 'Размещение на период оформления',
    price: 'По запросу',
    priceType: 'request',
    description: 'Мы поможем найти безопасное и комфортное жилье на время подачи документов. У нас есть база проверенных отелей и апартаментов.',
    details: [
      'Районы с развитой инфраструктурой',
      'Близость к миграционному центру',
      'Варианты на любой бюджет',
    ],
    buttonText: 'Узнать цену',
    buttonStyle: 'outline',
  },
]

// Checklist section content
export const CHECKLIST_CONTENT = {
  sectionLabel: 'Документы',
  title: 'Что нужно для подачи',
  subtitle: 'Мы подготовили для вас полный список обязательных документов для оформления вида на жительство.',
  toggleVnzh: 'ВНЖ (Временный)',
  togglePmzh: 'ПМЖ (Постоянный)',
  sidebarTitle: 'Важно знать',
  sidebarText: 'Процесс получения ВНЖ в Парагвае один из самых быстрых в Латинской Америке. Главное — правильно подготовить пакет документов с апостилем.',
  sidebarItems: [
    { icon: 'translate', text: 'Перевод на испанский' },
    { icon: 'history_edu', text: 'Нотариальное заверение' },
    { icon: 'gavel', text: 'Легализация' },
  ],
  helpTitle: 'Нужна помощь?',
  helpText: 'Напишите нам в чат',
  infoNote: 'Все документы должны быть переведены на испанский язык лицензированным переводчиком в Парагвае. Наши юристы помогут вам с организацией перевода.',
  infoNoteLabel: 'Обратите внимание:',
  ctaTitle: 'Хотите получить полный список со всеми нюансами?',
  ctaSubtitle: 'Скачайте подробный PDF-файл, где мы расписали каждый шаг и требования к каждому документу.',
  ctaButton: 'Скачать полный список (PDF)',
  ctaNote: 'Бесплатно • Обновлено в 2024',
} as const

// Checklist item interface
export interface ChecklistItem {
  id: string
  title: string
  description: string
  badge: {
    text: string
    type: 'required' | 'original' | 'copy' | 'conditional'
  }
  isRequired: boolean
}

// Checklist data for VNZ and PMZ
export const CHECKLIST_DATA = {
  vnzh: [
    {
      id: 'criminal_record',
      title: 'Справка о несудимости',
      description: 'Оригинал справки. Срок действия строго от 3 до 6 месяцев на момент подачи.',
      badge: { text: 'Апостиль обязателен', type: 'required' as const },
      isRequired: true,
    },
    {
      id: 'birth_certificate',
      title: 'Свидетельство о рождении',
      description: 'Документ должен быть в хорошем состоянии, читаемым, с проставленным апостилем.',
      badge: { text: 'Оригинал', type: 'original' as const },
      isRequired: true,
    },
    {
      id: 'passport',
      title: 'Загранпаспорт',
      description: 'Срок действия паспорта должен быть не менее 6 месяцев с даты въезда в страну.',
      badge: { text: 'Копия всех страниц', type: 'copy' as const },
      isRequired: true,
    },
    {
      id: 'marriage_certificate',
      title: 'Свидетельство о браке',
      description: 'Требуется только для семейных пар. Также необходим апостиль на оригинале.',
      badge: { text: 'Если применимо', type: 'conditional' as const },
      isRequired: false,
    },
  ],
  pmzh: [
    {
      id: 'investment',
      title: 'Подтверждение инвестиций',
      description: 'Документы, подтверждающие инвестиции от $70,000 в экономику Парагвая.',
      badge: { text: 'Обязательно', type: 'required' as const },
      isRequired: true,
    },
    {
      id: 'business_plan',
      title: 'Бизнес-проект',
      description: 'Разрабатываем вместе под требования SUACE. Включает план найма работников.',
      badge: { text: 'Оригинал', type: 'original' as const },
      isRequired: true,
    },
    {
      id: 'company_docs',
      title: 'Документы компании',
      description: 'Регистрация EAS или существующей компании в Парагвае.',
      badge: { text: 'Оригинал', type: 'original' as const },
      isRequired: true,
    },
    {
      id: 'criminal_record_pmzh',
      title: 'Справка о несудимости',
      description: 'Оригинал справки с апостилем. Срок действия от 3 до 6 месяцев.',
      badge: { text: 'Апостиль обязателен', type: 'required' as const },
      isRequired: true,
    },
    {
      id: 'passport_pmzh',
      title: 'Загранпаспорт',
      description: 'Срок действия не менее 6 месяцев. Копии всех страниц с отметками.',
      badge: { text: 'Копия всех страниц', type: 'copy' as const },
      isRequired: true,
    },
  ],
} as const

// Trust section content
export const TRUST_CONTENT = {
  title: 'Почему нам доверяют',
  subtitle: 'Мы ценим ваше доверие и строим работу на принципах честности и открытости. Наш опыт — ваша безопасность.',
} as const

// Trust signal interface
export interface TrustSignal {
  id: string
  icon: string
  title: string
  description: string
}

// Trust signals data (from UCO.json trust_elements)
export const TRUST_SIGNALS: TrustSignal[] = [
  {
    id: 'transparency',
    icon: 'visibility',
    title: 'Прозрачность на каждом этапе',
    description: 'Вы всегда знаете, на каком этапе находятся ваши документы, сколько времени осталось, что происходит дальше',
  },
  {
    id: 'real_people',
    icon: 'business',
    title: 'Реальные люди, реальный офис',
    description: 'Мы живем в Encarnación, вы встречаетесь с нами лично, общаемся через Telegram без посредников',
  },
  {
    id: 'clear_pricing',
    icon: 'payments',
    title: 'Никаких скрытых платежей',
    description: 'Цена, которую вы видите — финальная. Все дополнительные услуги опциональны и указаны отдельно',
  },
  {
    id: 'step_by_step',
    icon: 'handshake',
    title: 'Сопровождение от начала до конца',
    description: 'От первой консультации до получения Cédula — мы с вами на каждом шаге',
  },
]

// Telegram CTA content
export const TELEGRAM_CTA = {
  title: 'Посмотрите наши реальные обновления и отзывы',
  subtitle: 'Присоединяйтесь к нашему сообществу в Telegram, чтобы быть в курсе последних новостей иммиграционного законодательства и читать истории успеха наших клиентов.',
  buttonText: 'Перейти в Telegram-канал',
  buttonIcon: 'send',
} as const