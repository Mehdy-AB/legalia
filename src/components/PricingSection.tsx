import { Check, Brain, FileText, Image, Video, Zap } from 'lucide-react'

export default function PricingSection() {
  const pricingCategories = [
    {
      icon: Brain,
      title: "الذكاء الاصطناعي القانوني",
      services: [
        { name: "سؤال قانوني عام (تحليل / توجيه)", credits: 1 },
        { name: "إجابة قانونية موسعة مع تعليل", credits: 2 },
        { name: "صياغة وثيقة قانونية بسيطة", credits: 3 },
        { name: "صياغة عقد / مذكرة قانونية كاملة", credits: 4 },
        { name: "إعادة صياغة أو تحسين وثيقة", credits: 2 }
      ]
    },
    {
      icon: FileText,
      title: "المستندات والملفات",
      services: [
        { name: "رفع وتحليل PDF / Word", credits: 2 },
        { name: "دردشة مخصصة مع مستند واحد", credits: 1 },
        { name: "تحليل عدة مستندات (حتى 5)", credits: 4 },
        { name: "استخراج بيانات قانونية", credits: 3 },
        { name: "تصدير النتيجة (PDF / DOCX)", credits: 1 }
      ]
    },
    {
      icon: Image,
      title: "الصور والأدلة",
      services: [
        { name: "تحليل صورة قانونية", credits: 2 },
        { name: "استخراج نص + تفسير قانوني", credits: 3 },
        { name: "ربط الصورة بملف قضية", credits: 1 }
      ]
    },
    {
      icon: Video,
      title: "إعادة تمثيل الوقائع",
      services: [
        { name: "تحويل الوقائع إلى تسلسل بصري", credits: 8 },
        { name: "اختبار سيناريو قانوني بديل", credits: 3 },
        { name: "إضافة أدلة جديدة للمحاكاة", credits: 2 },
        { name: "تصدير العرض (PDF / Visual Report)", credits: 2 }
      ]
    },
    {
      icon: Zap,
      title: "الأداء والأولوية",
      services: [
        { name: "Fast Mode (أولوية المعالجة)", credits: "+1" },
        { name: "نموذج ذكاء اصطناعي متقدم", credits: "+1" },
        { name: "حفظ الجلسة للرجوع لاحقًا", credits: 1 }
      ]
    }
  ]

  return (
    <section id="pricing" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">جدول تكلفة الخدمات بالأرصدة</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600">اختر الخدمة التي تناسب احتياجاتك القانونية</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pricingCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-blue-400 p-4 text-white">
                <div className="flex items-center">
                  <category.icon className="w-6 h-6 ml-3" />
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="space-y-3">
                  {category.services.map((service, sIndex) => (
                    <div key={sIndex} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 text-sm">{service.name}</span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {service.credits} {!service.credits.toString().startsWith('+') && 'رصيد'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">كيف تبدأ؟</h3>
            <p className="text-gray-600 mb-6">
              يمكنك البدء بإنشاء حساب، ثم اختيار الخدمة المناسبة ورفع المستندات أو إدخال الوقائع
            </p>
            <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200 inline-flex items-center">
              <Check className="w-5 h-5 ml-2" />
              ابدأ تجربتك المجانية الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}