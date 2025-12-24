import { ArrowLeft, Shield, FileText, Brain } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="pt-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6">
              <Brain className="w-5 h-5 ml-2" />
              <span className="font-medium">منصة قانونية ذكية</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              تحويل التعقيد القانوني إلى
              <span className="text-blue-400 block">وضوح مرئي</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              منصة قانونية ذكية تجمع بين التحليل القانوني المتقدم، الصياغة الدقيقة، والتمثيل البصري للوقائع، مدعومة ببنية ذكاء اصطناعي متعددة النماذج ونموذج قانوني خاص بالمنصة.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200 flex items-center">
                ابدأ الآن
                <ArrowLeft className="w-5 h-5 mr-2" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-400 hover:text-blue-400 transition-colors duration-200">
                تعرف على المزيد
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">أمن وخصوصية</h3>
              <p className="text-gray-600 text-sm">أعلى معايير الخصوصية والأمن الرقمي</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <FileText className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">صياغة دقيقة</h3>
              <p className="text-gray-600 text-sm">تحويل النصوص إلى مستندات احترافية</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 col-span-2">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">ذكاء اصطناعي متعدد النماذج</h3>
              <p className="text-gray-600 text-sm">نحوّل النصوص والبيانات غير المنظمة إلى فهم واضح</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}