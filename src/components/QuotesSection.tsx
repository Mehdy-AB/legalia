"use client"
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function QuotesSection() {
  const quotes = [
    {
      author: "إريك شميت",
      role: "الرئيس التنفيذي السابق لشركة Google",
      quote: "رغم أن الذكاء الاصطناعي قادر على تحليل البيانات وحمايتها، فإن الكفاءة والأهلية القانونية تتطلب تعاطفًا وحسًا إنسانيًا سيبقيان بيد البشر.",
      image: "/images/quote-1.jpg"
    },
    {
      author: "كارين بولن",
      role: "الرئيسة التنفيذية لشركة Legal.io",
      quote: "يُسهم الذكاء الاصطناعي في توسيع الوصول إلى العدالة من خلال خفض تكلفة الخدمات القانونية.",
      image: "/images/quote-2.jpg"
    },
    {
      author: "ريتشارد سوسكيند",
      role: "أستاذ ومستشار في تقنيات القانون",
      quote: "الذكاء الاصطناعي لن يحل محل المحامين، لكنه سيحل محل كثير من المهام والأساليب التي اعتادوا استخدامها.",
      image: "/images/quote-3.jpg"
    },
    {
      author: "د. أحمد العلي",
      role: "مستشار قانوني أول",
      quote: "تقنيات التحليل الآلي للمستندات وفرت علينا ساعات طويلة من العمل الروتيني، مما سمح لنا بالتركيز على استراتيجيات القضايا.",
      image: "/images/quote-4.jpg"
    },
    {
      author: "سارة جونسون",
      role: "شريكة في شركة محاماة دولية",
      quote: "الدقة التي يوفرها هذا النظام في استخراج المعلومات من العقود المعقدة لا تصدق. إنه مساعد قانوني لا ينام.",
      image: "/images/quote-5.jpg"
    },
    {
      author: "القاضي مايكل تشانغ",
      role: "خبير في المحاكم الرقمية",
      quote: "أدوات التمثيل البصري للوقائع تجعل الأدلة أكثر وضوحاً وإقناعاً في قاعة المحكمة. إنها مستقبل التقاضي.",
      image: "/images/quote-6.jpg"
    }
  ]

  return <QuoteCarousel quotes={quotes} />
}

function QuoteCarousel({ quotes }: { quotes: any[] }) {
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
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length])

  const next = () => setIndex(prev => (prev + 1) % quotes.length)
  const prev = () => setIndex(prev => (prev - 1 + quotes.length) % quotes.length)

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">أقوال الخبراء</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
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
                    <div className="absolute top-4 right-4 text-blue-50 opacity-20">
                      <Quote className="w-24 h-24" />
                    </div>

                    <div className="relative w-20 h-20 mb-6 flex-shrink-0">
                      <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse-slow"></div>
                      {/* Image Placeholder */}
                      <div className="w-full h-full rounded-full border-4 border-white shadow-md relative z-10 bg-gray-200 overflow-hidden">
                        <img
                          src={quote.image}
                          alt={quote.author}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + quote.author + '&background=random'
                          }}
                        />
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light italic relative z-10 min-h-[5rem]">
                      "{quote.quote}"
                    </p>

                    <div className="mt-auto relative z-10">
                      <h4 className="font-bold text-gray-900 text-lg">{quote.author}</h4>
                      <p className="text-blue-600 text-sm font-medium mt-1">{quote.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute top-1/2 -right-2 md:-right-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all z-20 border border-gray-100"
            aria-label="Previous"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -left-2 md:-left-6 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all z-20 border border-gray-100"
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
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2 hover:bg-blue-400'
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