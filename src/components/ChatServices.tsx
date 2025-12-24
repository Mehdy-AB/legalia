import { MessageSquare, Cpu, Filter, Shield } from 'lucide-react'

export default function ChatServices() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Multi-Model Chat */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-blue-400 ml-3" />
              <h3 className="text-2xl font-bold text-gray-900">الدردشة الذكية متعددة النماذج</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              توفر المنصة نظام دردشة قانونية متقدم قائم على بنية وسيطة خاصة يعمل على الربط المنهجي بين عدة نماذج ذكاء اصطناعي
            </p>
            
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <Cpu className="w-5 h-5 ml-2 text-blue-400" />
                كيف تعمل
              </h4>
              <p className="text-gray-600 text-sm">
                يقوم النموذج الوسيط بتحليل طبيعة السؤال أو الطلب القانوني، ثم يوجّه المعالجة إلى النموذج الأكثر ملاءمة
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Filter className="w-5 h-5 text-green-500 ml-2" />
                <span className="text-gray-700">تصفية البيانات الحساسة وحماية الخصوصية</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 ml-2" />
                <span className="text-gray-700">طبقة عزل وأمان بين المستخدم والنماذج الخارجية</span>
              </div>
            </div>
          </div>

          {/* Legal AI Model */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <Cpu className="w-8 h-8 text-blue-400 ml-3" />
              <h3 className="text-2xl font-bold text-gray-900">النموذج القانوني الخاص</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              نموذج ذكاء اصطناعي قانوني مملوك للمنصة، ومهيأ خصيصًا لتحليل الوقائق، صياغة النصوص، وإنشاء النماذج
            </p>
            
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">الوظائف الأساسية</h4>
              <ul className="space-y-2">
                {["تحليل الوقائع القانونية وتفكيكها منطقيًا", "صياغة النصوص والوثائق القانونية", "إنشاء النماذج القانونية والعرائض", "دعم البحث القانوني والتحليل الأكاديمي"].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-bold text-blue-800 mb-2">المزايا</h5>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• نموذج قانوني متخصص وليس عامًا</li>
                <li>• قاعدة معرفية قانونية واسعة</li>
                <li>• تحديث مستمر وفق أحدث التشريعات</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}