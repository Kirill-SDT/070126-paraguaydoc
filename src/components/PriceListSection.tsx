'use client'

import { SERVICES, PRICING_CONTENT } from '@/lib/constants'

interface Service {
  id: string
  badge: { text: string; bgColor: string; textColor: string }
  title: string
  price: string
  timeline: string
  bestFor: string
  features: readonly string[]
  iconColor: string
  highlighted: boolean
  highlightBadge?: string
}

export default function PriceListSection() {
  return (
    <section className="w-full bg-background-light dark:bg-background-dark py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {PRICING_CONTENT.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {PRICING_CONTENT.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service: Service) => (
            <div
              key={service.id}
              className={`
                group relative flex flex-col rounded-2xl bg-white dark:bg-card-dark p-6
                transition-all duration-300 h-full
                ${
                  service.highlighted
                    ? 'border-2 border-primary shadow-2xl shadow-primary/20 hover:-translate-y-2 transform scale-100 lg:scale-105 z-10'
                    : 'border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }
              `}
            >
              {/* Floating Badge for Highlighted Card */}
              {service.highlighted && service.highlightBadge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  {service.highlightBadge}
                </div>
              )}

              {/* Top Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block ${service.badge.bgColor} ${service.badge.textColor} text-xs font-bold px-3 py-1.5 rounded-full`}
                >
                  {service.badge.text}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span
                  className={`${
                    service.highlighted ? 'text-5xl' : 'text-4xl'
                  } font-black text-gray-900 dark:text-white`}
                >
                  {service.price}
                </span>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2 mb-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-[20px] text-secondary-green">
                  schedule
                </span>
                <span>{service.timeline}</span>
              </div>

              {/* Best For */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {service.bestFor}
              </p>

              {/* Features List */}
              <div className="flex-grow mb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[20px] text-secondary-green flex-shrink-0">
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              {service.highlighted ? (
                <button className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                  <span>Оставить заявку</span>
                  <span className="material-symbols-outlined text-[18px] transition-all">
                    arrow_forward
                  </span>
                </button>
              ) : (
                <button className="w-full py-3 px-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold text-sm transition-colors flex items-center justify-center gap-2">
                  <span>Узнать подробнее</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
