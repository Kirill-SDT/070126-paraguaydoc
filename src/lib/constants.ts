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
