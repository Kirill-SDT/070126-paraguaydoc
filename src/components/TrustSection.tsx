'use client'

import { TRUST_CONTENT, TRUST_SIGNALS, TELEGRAM_CTA, BRAND } from '@/lib/constants'

export default function TrustSection() {
  return (
    <>
      {/* Trust Signals Section */}
      <section className="w-full bg-[#f8f9fa] dark:bg-[#161b26] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                {TRUST_CONTENT.title}
              </h2>
              <p className="text-[#616e89] dark:text-gray-400 text-lg font-normal leading-relaxed max-w-[720px]">
                {TRUST_CONTENT.subtitle}
              </p>
            </div>

            {/* Trust Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRUST_SIGNALS.map((signal) => (
                <div
                  key={signal.id}
                  className="group flex flex-col gap-4 rounded-xl border border-[#dbdee6] dark:border-gray-700 bg-white dark:bg-[#1a202c] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon Container */}
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-3xl">
                      {signal.icon}
                    </span>
                  </div>
                  {/* Card Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">
                      {signal.title}
                    </h3>
                    <p className="text-[#616e89] dark:text-gray-400 text-sm leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Telegram CTA Section */}
      <section className="w-full bg-white dark:bg-[#111621] py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="rounded-2xl bg-primary dark:bg-blue-900 p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative Background Blur Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

            {/* CTA Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex flex-col gap-4 text-center md:text-left max-w-2xl">
                <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  {TELEGRAM_CTA.title}
                </h2>
                <p className="text-white/90 text-lg font-medium leading-relaxed">
                  {TELEGRAM_CTA.subtitle}
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href={BRAND.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-primary hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-transform hover:scale-105"
                >
                  <span className="material-symbols-outlined">{TELEGRAM_CTA.buttonIcon}</span>
                  <span>{TELEGRAM_CTA.buttonText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
