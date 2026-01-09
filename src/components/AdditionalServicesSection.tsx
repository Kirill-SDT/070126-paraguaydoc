'use client'

import { useState } from 'react'
import {
  ADDITIONAL_SERVICES,
  ADDITIONAL_SERVICES_CONTENT,
  type AdditionalService,
} from '@/lib/constants'

// Price badge styles based on type
const badgeStyles = {
  'fixed-green': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  'fixed-blue': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  'request': 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600',
}

// AccordionItem sub-component
function AccordionItem({
  service,
  isOpen,
  onToggle,
}: {
  service: AdditionalService
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`bg-white dark:bg-card-dark rounded-xl border shadow-sm transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'ring-1 ring-primary/20 border-primary/50'
          : 'border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-primary/50'
      }`}
    >
      {/* Summary / Header */}
      <button
        onClick={onToggle}
        className="w-full flex cursor-pointer items-center justify-between p-6 text-left select-none"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
          <div className="flex items-center gap-4">
            {/* Icon circle */}
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            {/* Title */}
            <h3 className="text-[#111318] dark:text-white text-lg font-bold">
              {service.title}
            </h3>
          </div>
          {/* Price badge */}
          <div className="md:ml-auto md:mr-8 flex items-center">
            <span
              className={`px-3 py-1 text-sm font-bold rounded-full ${badgeStyles[service.priceType]}`}
            >
              {service.price}
            </span>
          </div>
        </div>
        {/* Chevron */}
        <div
          className={`text-gray-400 dark:text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary' : ''
          }`}
        >
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </button>

      {/* Expanded content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Description and details */}
            <div className="flex-1">
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Button */}
            <div className="flex items-end justify-start md:justify-end min-w-[140px]">
              {service.buttonStyle === 'primary' ? (
                <button className="w-full md:w-auto px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-sm active:scale-95">
                  {service.buttonText}
                </button>
              ) : (
                <button className="w-full md:w-auto px-5 py-2.5 bg-white dark:bg-transparent border-2 border-primary text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95">
                  {service.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdditionalServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="w-full bg-background-light dark:bg-background-dark py-16 md:py-20">
      <div className="max-w-[960px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col mb-10 text-left relative">
          {/* Blue accent bar */}
          <div className="w-12 h-1 bg-primary mb-6" />
          {/* Label */}
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">
              add_circle
            </span>
            <p className="text-[#616e89] dark:text-gray-400 text-xs font-bold uppercase tracking-widest">
              {ADDITIONAL_SERVICES_CONTENT.sectionLabel}
            </p>
          </div>
          {/* Title */}
          <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
            {ADDITIONAL_SERVICES_CONTENT.title}
          </h2>
          {/* Subtitle */}
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
            {ADDITIONAL_SERVICES_CONTENT.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-6">
          {ADDITIONAL_SERVICES.map((service) => (
            <AccordionItem
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">
            {ADDITIONAL_SERVICES_CONTENT.ctaQuestion}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            {ADDITIONAL_SERVICES_CONTENT.ctaLink}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
