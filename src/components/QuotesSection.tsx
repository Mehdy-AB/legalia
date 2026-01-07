"use client"
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function QuotesSection() {
  const quotes = [
    {
      author: "إريك شميت",
      role: "الرئيس التنفيذي السابق لشركة Google",
      quote: "رغم أن الذكاء الاصطناعي قادر على تحليل البيانات وحمايتها، فإن الكفاءة والأهلية القانونية تتطلب تعاطفًا وحسًا إنسانيًا سيبقيان بيد البشر.",
      context: "يوضح هذا القول الحدود الراهنة للذكاء الاصطناعي في المجال القانوني، حيث تظل عناصر الفهم الإنساني، والتعاطف، وتقدير السياق الأخلاقي عوامل لا يمكن للأنظمة الآلية أن تحل محلها.",
      image: "/images/eric-schmidt.png"
    },
    {
      author: "كارين بولن",
      role: "الرئيسة التنفيذية لشركة Legal.io",
      quote: "يُسهم الذكاء الاصطناعي في توسيع الوصول إلى العدالة من خلال خفض تكلفة الخدمات القانونية.",
      context: "يُبرز هذا القول دور الذكاء الاصطناعي في تقليل تكاليف تقديم الخدمات القانونية، بما يسمح لشريحة أوسع من الأفراد والمؤسسات بالوصول إلى الدعم القانوني الذي كان في السابق مكلفًا أو محدودًا.",
      image: "/images/karen-pollen.png"
    },
    {
      author: "ريتشارد سوسكيند",
      role: "أستاذ ومستشار في تقنيات القانون",
      quote: "الذكاء الاصطناعي لن يحل محل المحامين، لكنه سيحل محل كثير من المهام والأساليب التي اعتادوا استخدامها.",
      context: "يشير هذا القول إلى أن الذكاء الاصطناعي لا يهدد وجود مهنة المحاماة، بل يعيد تشكيلها من خلال أتمتة المهام الروتينية وتغيير أساليب العمل اليومية.",
      image: "/images/richard-susskind.png"
    },
    {
      author: "أندرو أرينشتاين",
      role: "مؤسس ROSS Intelligence",
      quote: "الذكاء الاصطناعي في المجال القانوني ليس هدفه الاستغناء عن المحامين، بل تمكينهم من استخدام أدوات تجعلهم أكثر إنتاجية.",
      context: "يؤكد هذا القول أن دور الذكاء الاصطناعي يتمثل في دعم المحامين وتزويدهم بأدوات ذكية تُسهّل إدارة القضايا والمستندات.",
      image: "/images/andrew-arruda.png"
    },
    {
      author: "توم جيراردي",
      role: "المحامي الشهير",
      quote: "قد يعتبر عدم استخدام الذكاء الاصطناعي يوماً سوء تصرف قانوني! وهذا سيكون مشابهاً لمحامي في أواخر القرن العشرين الذي لا يزال يفعل كل شيء يدوياً رغم إمكانية استخدام الكمبيوتر.",
      context: "يُشير إلى أن الذكاء الاصطناعي قد يتحول مستقبلاً إلى أداة مهنية أساسية، بحيث يُعد تجاهله تقصيراً في أداء الواجب القانوني.",
      image: "/images/tom-girardi.png"
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
    }, 6000)
    return () => clearInterval(interval)
  }, [quotes.length])

  const next = () => setIndex(prev => (prev + 1) % quotes.length)
  const prev = () => setIndex(prev => (prev - 1 + quotes.length) % quotes.length)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold mb-4 border border-amber-200">
            آراء الخبراء
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ماذا يقول الخبراء عن الذكاء الاصطناعي القانوني؟</h2>
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
                          alt={quote.author}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(quote.author) + '&background=f59e0b&color=fff'
                          }}
                        />
                      </div>
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-4 font-medium relative z-10 min-h-[6rem]">
                      «{quote.quote}»
                    </p>

                    {/* Context (smaller text) */}
                    {quote.context && (
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10 opacity-80">
                        ({quote.context})
                      </p>
                    )}

                    {/* Author Info */}
                    <div className="mt-auto relative z-10 pt-4 border-t border-gray-100 w-full">
                      <h4 className="font-bold text-gray-900 text-lg">{quote.author}</h4>
                      <p className="text-amber-600 text-sm font-medium mt-1">{quote.role}</p>
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