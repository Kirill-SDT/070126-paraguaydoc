'use client'

import { useState } from 'react'
import { CHECKLIST_CONTENT, CHECKLIST_DATA, type ChecklistItem } from '@/lib/constants'

// Badge style mapping based on type
const badgeStyles = {
  required: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-100 dark:border-red-800/50',
  original: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-100 dark:border-blue-800/50',
  copy: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
  conditional: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-100 dark:border-amber-800/50',
}

// Single checklist item component
function ChecklistItemCard({ item }: { item: ChecklistItem }) {
  return (
    <div className="group flex flex-col sm:flex-row items-start sm:items-center p-5 bg-white dark:bg-[#1f2937] rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-md transition-all duration-300">
      {/* Icon */}
      <div className="flex-shrink-0 mr-4 mb-3 sm:mb-0">
        {item.isRequired ? (
          <div className="h-10 w-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center border border-green-100 dark:border-green-800">
            <span className="material-symbols-outlined">check</span>
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined">info</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
          <h4 className="text-lg font-bold text-[#111318] dark:text-white group-hover:text-primary transition-colors">
            {item.title}
          </h4>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${badgeStyles[item.badge.type]}`}>
            {item.badge.text}
          </span>
        </div>
        <p className="text-sm text-[#616e89] dark:text-slate-400">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function ChecklistSection() {
  const [activeTab, setActiveTab] = useState<'vnzh' | 'pmzh'>('vnzh')

  const currentItems = activeTab === 'vnzh' ? CHECKLIST_DATA.vnzh : CHECKLIST_DATA.pmzh

  return (
    <section className="relative py-12 px-4 md:px-10 lg:px-20 bg-[#f6f6f8] dark:bg-[#111621]">
      {/* Background dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40 dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-[960px] mx-auto gap-10">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-4">
          {/* Section badge */}
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-2">
            {CHECKLIST_CONTENT.sectionLabel}
          </div>

          {/* Title */}
          <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
            {CHECKLIST_CONTENT.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[#616e89] dark:text-slate-400 text-lg max-w-2xl font-medium">
            {CHECKLIST_CONTENT.subtitle}
          </p>
        </header>

        {/* Toggle Control */}
        <div className="flex justify-center w-full">
          <div className="bg-white dark:bg-[#1f2937] p-1.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-full max-w-lg flex">
            {/* VNZ Option */}
            <button
              onClick={() => setActiveTab('vnzh')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg text-sm md:text-base font-bold transition-all duration-200 ${
                activeTab === 'vnzh'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-[#616e89] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <span className="material-symbols-outlined text-[20px] mr-2">schedule</span>
              {CHECKLIST_CONTENT.toggleVnzh}
            </button>

            {/* PMZ Option */}
            <button
              onClick={() => setActiveTab('pmzh')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg text-sm md:text-base font-bold transition-all duration-200 ${
                activeTab === 'pmzh'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-[#616e89] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <span className="material-symbols-outlined text-[20px] mr-2">verified</span>
              {CHECKLIST_CONTENT.togglePmzh}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4 w-full">
          {/* Left Column: Sidebar (hidden on mobile) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 border border-primary/10 h-full flex flex-col justify-between relative overflow-hidden group">
              {/* Decorative background circle */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-4">
                  {CHECKLIST_CONTENT.sidebarTitle}
                </h3>
                <p className="text-[#616e89] dark:text-slate-400 leading-relaxed mb-6">
                  {CHECKLIST_CONTENT.sidebarText}
                </p>
                <ul className="space-y-3">
                  {CHECKLIST_CONTENT.sidebarItems.map((item, index) => (
                    <li key={index} className="flex items-center text-sm font-semibold text-primary dark:text-blue-400">
                      <span className="material-symbols-outlined text-[18px] mr-2">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help section */}
              <div className="relative z-10 mt-8 pt-6 border-t border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm text-primary">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div className="text-xs text-[#616e89] dark:text-slate-400">
                    <span className="block font-bold text-[#111318] dark:text-white">
                      {CHECKLIST_CONTENT.helpTitle}
                    </span>
                    {CHECKLIST_CONTENT.helpText}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Checklist Items */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {currentItems.map((item) => (
              <ChecklistItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Info Note */}
        <div className="w-full bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 flex items-start gap-3 border border-blue-100 dark:border-blue-900/30">
          <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">info</span>
          <p className="text-sm text-[#616e89] dark:text-slate-300 leading-relaxed">
            <strong className="text-primary dark:text-blue-400">{CHECKLIST_CONTENT.infoNoteLabel}</strong>{' '}
            {CHECKLIST_CONTENT.infoNote}
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center py-8 gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-[#111318] dark:text-white text-center max-w-[720px]">
            {CHECKLIST_CONTENT.ctaTitle}
          </h3>
          <p className="text-[#616e89] dark:text-slate-400 text-center max-w-[600px] mb-2">
            {CHECKLIST_CONTENT.ctaSubtitle}
          </p>
          <button className="group relative flex items-center justify-center gap-3 bg-primary hover:bg-[#1d4ed8] text-white text-base font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
            <span className="material-symbols-outlined group-hover:animate-bounce">download</span>
            <span>{CHECKLIST_CONTENT.ctaButton}</span>
          </button>
          <p className="text-xs text-slate-400 dark:text-slate-600 mt-2">
            {CHECKLIST_CONTENT.ctaNote}
          </p>
        </div>
      </div>
    </section>
  )
}
