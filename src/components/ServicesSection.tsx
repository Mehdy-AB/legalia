import { MessageSquare, FileText, Eye, Shield, Brain, Zap } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: MessageSquare,
      title: "الدردشة الذكية متعددة النماذج",
      description: "نظام دردشة قانونية متقدم يعمل عبر نموذج وسيط خاص بالمنصة",
      features: ["ربط ذكي بين نماذج متعددة", "تحسين الدقة وجودة النتائج", "حماية الخصوصية"]
    },
    {
      icon: Brain,
      title: "النموذج القانوني الخاص",
      description: "نموذج ذكاء اصطناعي قانوني مملوك للمنصة للتحليل والصياغة",
      features: ["تحليل الوقائع القانونية", "صياغة الوثائق المهنية", "بحث قانوني متقدم"]
    },
    {
      icon: FileText,
      title: "تحليل المستندات والأدلة",
      description: "دردشة مباشرة مع المستندات القانونية والمواد البصرية",
      features: ["تحليل PDF وWord", "استخراج البيانات القانونية", "تلخيص ذكي"]
    },
    {
      icon: Eye,
      title: "تمثيل الوقائع بصريًا",
      description: "تحويل البيانات إلى محاكاة بصرية توضح تسلسل الأحداث",
      features: ["تحويل النصوص إلى مشاهد", "اختبار سيناريوهات", "تعزيز الدليل البصري"]
    },
    {
      icon: Shield,
      title: "الأمن والخصوصية",
      description: "خدمات رقمية آمنة تشمل البريد المشفر والتخزين السحابي",
      features: ["بريد إلكتروني مشفر", "VPN آمن", "تخزين سحابي مشفر"]
    },
    {
      icon: Zap,
      title: "أداء متميز",
      description: "معالجة سريعة مع أولوية للأعمال العاجلة",
      features: ["معالجة أولوية", "نماذج متقدمة", "حفظ الجلسات"]
    }
  ]

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات القانونية المدعومة بالذكاء الاصطناعي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}