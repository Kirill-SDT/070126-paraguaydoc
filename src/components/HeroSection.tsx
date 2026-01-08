'use client'

import Image from 'next/image'
import { HERO_CONTENT, IMAGES, BRAND } from '@/lib/constants'

export default function HeroSection() {
  return (
    <main className="relative flex-grow flex items-center overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-32">
      {/* Background Gradients - CRITICAL POSITIONING */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-transparent dark:from-blue-900/20 dark:via-purple-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-secondary-green/10 via-accent-amber/10 to-transparent rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4" />

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-secondary-green text-xl">
                  check_circle
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {HERO_CONTENT.trustBadge}
                </span>
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-gray-900 dark:text-white">
                Получите <span className="text-primary">ВНЖ</span> или{' '}
                <span className="text-primary">ПМЖ</span> Парагвая с{' '}
                <span className="text-gradient">прозрачными сроками</span> и ценами
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {HERO_CONTENT.subheadline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-primary hover:bg-blue-700 text-white text-base font-bold shadow-xl shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                {HERO_CONTENT.ctaPrimary}
                <span className="material-symbols-outlined ml-2 text-xl">
                  arrow_forward
                </span>
              </button>
              <button className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-base font-bold shadow-sm transition-all hover:border-primary/50 group">
                <span className="material-symbols-outlined mr-2 text-primary group-hover:scale-110 transition-transform">
                  send
                </span>
                {HERO_CONTENT.ctaSecondary}
              </button>
            </div>

            {/* Avatar Stack + Time */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 opacity-80">
              <div className="flex -space-x-3">
                {IMAGES.avatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 overflow-hidden"
                    style={{
                      backgroundImage: `url('${avatar}')`,
                      backgroundSize: 'cover',
                    }}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {HERO_CONTENT.averageTime}
              </p>
            </div>
          </div>

          {/* Right Visual (5 columns) - Desktop Only */}
          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Decorative blur elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-amber/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-green/20 rounded-full blur-2xl z-0" />

            {/* Main Image Card */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="aspect-[4/5] w-full bg-gray-100 relative">
                <Image
                  src={IMAGES.heroMain}
                  alt="Happy family enjoying sunny day in Encarnación Paraguay"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Floating Location Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Локация
                      </p>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {HERO_CONTENT.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Rating Badge */}
            <div className="absolute -top-6 -left-12 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-[bounce_3s_infinite]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-500">star</span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {HERO_CONTENT.rating}
                </span>
                <span className="text-gray-400 text-sm">
                  {HERO_CONTENT.ratingSource}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Image Fallback */}
          <div className="lg:hidden w-full aspect-video rounded-2xl overflow-hidden shadow-lg relative">
            <Image
              src={IMAGES.heroMobile}
              alt="Happy family in Paraguay"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {HERO_CONTENT.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
