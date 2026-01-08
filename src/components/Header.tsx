'use client'

import { BRAND, NAV_LINKS } from '@/lib/constants'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#111621]/80 backdrop-blur-md">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-primary size-8 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <span className="material-symbols-outlined text-2xl">public</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {BRAND.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.text}
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                href={link.href}
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center h-10 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-sm font-semibold transition-colors">
              RU/EN
            </button>
            <button className="flex items-center justify-center h-10 px-5 rounded-lg bg-primary hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5">
              Связаться
            </button>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
