'use client'

import { useState } from 'react'
import { TIMELINE_DATA, TIMELINE_CONTENT, type TimelineStep } from '@/lib/constants'

export default function TimelineSection() {
  const [selectedProcess, setSelectedProcess] = useState<'vnzh' | 'pmzh'>('vnzh')
  const steps = TIMELINE_DATA[selectedProcess]

  return (
    <section className="bg-background-light dark:bg-background-dark py-12">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
        <div className="flex flex-col max-w-[960px] flex-1">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h1 className="text-[#111318] dark:text-white tracking-tight text-3xl md:text-5xl font-extrabold leading-tight">
              {TIMELINE_CONTENT.title}
            </h1>
            <p className="text-[#616e89] dark:text-gray-400 text-base md:text-lg font-normal leading-normal max-w-2xl">
              {TIMELINE_CONTENT.subtitle}
            </p>
          </div>

          {/* Toggle Control */}
          <div className="flex justify-center mb-16">
            <div className="flex p-1 bg-white dark:bg-card-dark border border-[#e5e7eb] dark:border-[#2a3441] rounded-xl shadow-sm">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="process_type"
                  value="vnzh"
                  checked={selectedProcess === 'vnzh'}
                  onChange={(e) => setSelectedProcess(e.target.value as 'vnzh' | 'pmzh')}
                  className="peer sr-only"
                />
                <div className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md">
                  {TIMELINE_CONTENT.toggleVnzh}
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="process_type"
                  value="pmzh"
                  checked={selectedProcess === 'pmzh'}
                  onChange={(e) => setSelectedProcess(e.target.value as 'vnzh' | 'pmzh')}
                  className="peer sr-only"
                />
                <div className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md">
                  {TIMELINE_CONTENT.togglePmzh}
                </div>
              </label>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative px-4">
            {/* Vertical Gradient Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:-ml-[1px]"></div>

            {/* Timeline Steps */}
            {steps.map((step, index) => (
              <TimelineStepComponent
                key={`${selectedProcess}-${step.step_number}`}
                step={step}
                index={index}
                totalSteps={steps.length}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-20">
            <button className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary hover:bg-primary-dark transition-all duration-300 text-white text-lg font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center gap-2">
                {TIMELINE_CONTENT.ctaText}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Timeline Step Component
function TimelineStepComponent({
  step,
  index,
  totalSteps,
}: {
  step: TimelineStep
  index: number
  totalSteps: number
}) {
  const isLeft = index % 2 === 0
  const isLast = index === totalSteps - 1

  // Determine marker styling
  const markerBgColor =
    step.markerColor === 'orange'
      ? 'bg-accent-amber'
      : step.markerColor === 'green'
      ? 'bg-secondary-green'
      : step.markerType === 'number'
      ? 'bg-primary'
      : 'bg-white dark:bg-card-dark'

  const markerTextColor =
    step.markerType === 'number' || step.markerColor === 'orange' || step.markerColor === 'green'
      ? 'text-white'
      : 'text-primary'

  const markerBorder =
    step.markerType === 'icon' && step.markerColor === 'blue'
      ? 'border-2 border-primary'
      : ''

  const markerShadow =
    step.markerColor === 'orange'
      ? 'shadow-lg shadow-orange-500/30'
      : step.markerColor === 'green'
      ? 'shadow-lg shadow-green-500/30'
      : 'shadow-lg shadow-blue-500/30'

  // Determine card border
  const cardBorder = step.isImportant
    ? 'border-2 border-orange-200 dark:border-orange-900/50'
    : isLast
    ? 'border-2 border-green-100 dark:border-green-900/30'
    : 'border border-[#e5e7eb] dark:border-[#2a3441]'

  const cardHoverBorder = step.isImportant
    ? 'hover:border-orange-400'
    : isLast
    ? 'hover:border-green-400'
    : 'hover:border-primary/30'

  // Determine badge color
  const badgeColor = step.isImportant
    ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
    : index === 0
    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 mb-12 group">
      {/* Left Content (Desktop) */}
      <div
        className={`hidden md:flex flex-1 ${
          isLeft ? 'justify-end pr-10 text-right' : 'justify-start pl-10'
        }`}
      >
        {isLeft ? (
          // Card on left
          <div
            className={`bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm ${cardBorder} w-full max-w-sm ${cardHoverBorder} transition-colors relative overflow-hidden`}
          >
            {step.isImportant && (
              <div className="absolute top-0 right-0 bg-accent-amber text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold uppercase tracking-wider">
                {TIMELINE_CONTENT.importantBadge}
              </div>
            )}
            <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-[#616e89] dark:text-gray-400 text-sm mb-3">
              {step.description}
            </p>
            <div className="flex flex-wrap justify-end gap-2">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColor}`}
              >
                {step.duration}
              </span>
              {step.requiresPresence && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                  <span className="material-symbols-outlined text-[14px]">
                    person_pin_circle
                  </span>
                  {TIMELINE_CONTENT.presenceBadge}
                </span>
              )}
            </div>
          </div>
        ) : (
          // Icon on left
          <div className="flex items-center text-primary/40 group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-4xl">{step.icon}</span>
          </div>
        )}
      </div>

      {/* Center Marker */}
      <div className="absolute left-0 md:left-1/2 md:-ml-6 flex items-center justify-center z-10">
        <div
          className={`w-12 h-12 ${markerBgColor} rounded-lg ${markerShadow} ${markerBorder} flex items-center justify-center ${markerTextColor} font-bold text-xl ring-4 ring-white dark:ring-background-dark`}
        >
          {step.markerType === 'icon' ? (
            <span className="material-symbols-outlined text-2xl">{step.markerIcon}</span>
          ) : (
            step.step_number
          )}
        </div>
      </div>

      {/* Right Content (Mobile & Desktop) */}
      <div className={`pl-16 md:pl-0 w-full md:w-auto flex-1 ${!isLeft ? 'md:pl-10' : ''}`}>
        {!isLeft || true ? ( // Always show on mobile
          <div
            className={`bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm ${cardBorder} ${
              !isLeft ? 'w-full max-w-sm' : 'md:hidden'
            } ${cardHoverBorder} transition-colors relative overflow-hidden`}
          >
            {step.isImportant && (
              <div className="absolute top-0 right-0 bg-accent-amber text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold uppercase tracking-wider">
                {TIMELINE_CONTENT.importantBadge}
              </div>
            )}
            <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-[#616e89] dark:text-gray-400 text-sm mb-3">
              {step.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColor}`}
              >
                {step.duration}
              </span>
              {step.requiresPresence && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                  <span className="material-symbols-outlined text-[14px]">
                    person_pin_circle
                  </span>
                  {TIMELINE_CONTENT.presenceBadge}
                </span>
              )}
            </div>
          </div>
        ) : (
          // Icon on right (desktop)
          <div className="hidden md:flex items-center text-primary/40 group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-4xl">{step.icon}</span>
          </div>
        )}
      </div>
    </div>
  )
}
