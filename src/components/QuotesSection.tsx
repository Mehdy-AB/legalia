"use client"
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

export default function QuotesSection() {
  const t = useTranslations('Quotes')

  const quotes = [
    {
      key: "q1",
      image: "/images/eric-schmidt.png"
    },
    {
      key: "q2",
      image: "/images/karen-pollen.png"
    },
    {
      key: "q3",
      image: "/images/richard-susskind.png"
    },
    {
      key: "q4",
      image: "/images/andrew-arruda.png"
    },
    {
      key: "q5",
      image: "/images/tom-girardi.png"
    }
  ]

  return <QuoteCarousel quotes={quotes} t={t} />
}

function QuoteCarousel({ quotes, t }: { quotes: any[], t: any }) {
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3)
      else if (window.innerWidth >= 768) setVisibleCount(2)
      else setVisibleCount(1)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % quotes.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [quotes.length])

  const next = () => setIndex(prev => (prev + 1) % quotes.length)
  const prev = () => setIndex(prev => (prev - 1 + quotes.length) % quotes.length)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold mb-4 border border-amber-200">
            {t('title')}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('subtitle')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${index * (100 / visibleCount)}%)` }}
            >
              {quotes.map((quote, i) => (
                <div
                  key={i}
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                  className="px-3"
                >
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group relative overflow-hidden">
                    {/* Quote Icon Background */}
                    <div className="absolute top-4 right-4 text-amber-100 opacity-30">
                      <Quote className="w-20 h-20" />
                    </div>

                    {/* Profile Image */}
                    <div className="relative w-24 h-24 mb-6 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full animate-pulse-slow"></div>
                      <div className="w-full h-full rounded-full border-4 border-white shadow-lg relative z-10 bg-gray-200 overflow-hidden ring-2 ring-amber-200">
                        <img
                          src={quote.image}
                          alt={t(`${quote.key}.author`)}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(t(`${quote.key}.author`)) + '&background=f59e0b&color=fff'
                          }}
                        />
                      </div>
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-4 font-medium relative z-10 min-h-[6rem]">
                      «{t(`${quote.key}.quote`)}»
                    </p>

                    {/* Context (smaller text) */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10 opacity-80">
                      ({t(`${quote.key}.context`)})
                    </p>

                    {/* Author Info */}
                    <div className="mt-auto relative z-10 pt-4 border-t border-gray-100 w-full">
                      <h4 className="font-bold text-gray-900 text-lg">{t(`${quote.key}.author`)}</h4>
                      <p className="text-amber-600 text-sm font-medium mt-1">{t(`${quote.key}.role`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute top-1/2 -right-2 md:-right-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-amber-600 hover:scale-110 transition-all z-20 border border-gray-100"
            aria-label="Previous"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -left-2 md:-left-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-amber-600 hover:scale-110 transition-all z-20 border border-gray-100"
            aria-label="Next"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-amber-500 w-8' : 'bg-gray-300 w-2 hover:bg-amber-400'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}