import { ArrowLeft, Shield, FileText, Brain } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="pt-8 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6 transition-colors">
              <Brain className="w-5 h-5 ml-2" />
              <span className="font-medium">منصة قانونية ذكية</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
              تحويل التعقيد القانوني إلى
              <span className="text-blue-400 block">وضوح مرئي</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors">
              منصة قانونية ذكية تجمع بين التحليل القانوني المتقدم، الصياغة الدقيقة، والتمثيل البصري للوقائع، مدعومة ببنية ذكاء اصطناعي متعددة النماذج ونموذج قانوني خاص بالمنصة.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200 flex items-center shadow-lg hover:shadow-blue-500/20">
                ابدأ الآن
                <ArrowLeft className="w-5 h-5 mr-2" />
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium hover:border-blue-400 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-200">
                تعرف على المزيد
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors hover:shadow-md">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">أمن وخصوصية</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">أعلى معايير الخصوصية والأمن الرقمي</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors hover:shadow-md">
              <FileText className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">صياغة دقيقة</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">تحويل النصوص إلى مستندات احترافية</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 col-span-2 transition-colors hover:shadow-md">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">ذكاء اصطناعي متعدد النماذج</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">نحوّل النصوص والبيانات غير المنظمة إلى فهم واضح</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}