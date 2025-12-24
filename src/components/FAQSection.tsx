import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "ما هي منصة LegalAI؟",
    answer: "LegalAI هي منصة تكنولوجية قانونية تعتمد على الذكاء الاصطناعي لدعم التحليل القانوني، صياغة الوثائق، التفاعل مع المستندات، وإعادة تمثيل الوقائع القانونية بصريًا، مع الالتزام بالمعايير المهنية وحماية الخصوصية."
  },
  {
    question: "هل تحل LegalAI محل المحامين؟",
    answer: "لا. LegalAI منصة مساعدة ولا تُعد بديلاً عن المحامي أو القرار البشري. تهدف المنصة إلى دعم المهنيين القانونيين بأدوات تحليل وصياغة وتوضيح تساعدهم على العمل بكفاءة أعلى."
  },
  {
    question: "ما الفرق بين الدردشة القانونية الوسيطة والنموذج القانوني الخاص؟",
    answer: "الدردشة الوسيطة تقوم بتوجيه الطلبات بين عدة نماذج ذكاء اصطناعي لاختيار الأنسب لكل مهمة، بينما تعتمد الدردشة القانونية الخاصة على نموذج قانوني مملوك للمنصة ومهيأ خصيصًا للتحليل والصياغة القانونية المتقدمة."
  },
  {
    question: "هل تتوافق المنصة مع المعايير الأوروبية والدولية للخصوصية؟",
    answer: "تم تصميم المنصة وفق مبادئ صارمة لحماية البيانات والحوكمة الرقمية، بما يتماشى مع متطلبات الخصوصية والامتثال المعمول بها في السياق الأوروبي والدولي."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                className="w-full p-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}