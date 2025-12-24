import { Quote } from 'lucide-react'

export default function QuotesSection() {
  const quotes = [
    {
      author: "إريك شميت",
      role: "الرئيس التنفيذي السابق لشركة Google",
      quote: "رغم أن الذكاء الاصطناعي قادر على تحليل البيانات وحمايتها، فإن الكفاءة والأهلية القانونية تتطلب تعاطفًا وحسًا إنسانيًا سيبقيان بيد البشر."
    },
    {
      author: "كارين بولن",
      role: "الرئيسة التنفيذية لشركة Legal.io",
      quote: "يُسهم الذكاء الاصطناعي في توسيع الوصول إلى العدالة من خلال خفض تكلفة الخدمات القانونية."
    },
    {
      author: "ريتشارد سوسكيند",
      role: "أستاذ ومستشار في تقنيات القانون",
      quote: "الذكاء الاصطناعي لن يحل محل المحامين، لكنه سيحل محل كثير من المهام والأساليب التي اعتادوا استخدامها."
    }
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">أقوال الخبراء</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors duration-200">
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{quote.quote}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{quote.author}</h4>
                <p className="text-sm text-gray-500">{quote.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}