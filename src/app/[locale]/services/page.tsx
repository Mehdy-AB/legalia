import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { Brain, FileText, Image as ImageIcon, Video, Shield, ArrowRight, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
    const services = [
    {
      id: 'ai-chat',
      icon: Brain,
      title: 'دردشة ذكاء اصطناعي متعددة النماذج',
      description: 'نظام دردشة قانونية متقدم يعمل عبر نموذج وسيط خاص بالمنصة، يربط بين عدة نماذج ذكاء اصطناعي ويختار الأنسب تلقائياً',
      features: ['التوجيه الذكي للنماذج', 'تحسين جودة الإجابة', 'تصفية البيانات الحساسة'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749672/images/ai-chat.mp4'
    },
    {
      id: 'legal-model',
      icon: FileText,
      title: 'نموذج Legal AI الخاص',
      description: 'نموذج ذكاء اصطناعي قانوني مملوك للمنصة، مصمم خصيصاً للتحليل والصياغة القانونية وإنشاء الوثائق',
      features: ['تحليل الوقائع القانونية', 'صياغة الوثائق', 'قاعدة معرفية واسعة'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749753/images/legal-model.mp4'
    },
    {
      id: 'document-analysis',
      icon: ImageIcon,
      title: 'تحليل المستندات والصور',
      description: 'دردشة مباشرة مع المستندات القانونية والمواد البصرية لفهم الملفات المعقدة بسرعة ودقة',
      features: ['تحليل PDF وWord', 'معالجة الصور', 'مقارنة المستندات'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749683/images/document-analysis.mp4'
    },
    {
      id: 'visual-facts',
      icon: Video,
      title: 'إعادة تمثيل الوقائع بصرياً',
      description: 'تحويل البيانات غير المنظمة والسرديات المعقدة إلى محاكاة بصرية تحاكي تسلسل الأحداث',
      features: ['محاكاة الأحداث', 'اختبار السيناريوهات', 'تعزيز الدليل البصري'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768750089/images/visual-facts.mp4'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'الأمن والخصوصية الرقمية',
      description: 'تولي LegalAI أهمية قصوى لحماية البيانات وسرية المعلومات، وتوفر لمستخدميها خدمات رقمية آمنة ، وتشمل:',
      features: ['بريدًا إلكترونيًا مشفرًا ', 'خدمة VPN لحماية الهوية الرقمية ومنع التتبع', 'تخزينًا سحابيًا مشفرًا لحفظ القضايا والملفات الحساسة'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768750048/images/security-home.mp4'
    }
  ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">خدماتنا</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        اكتشف مجموعة شاملة من الخدمات القانونية المدعومة بالذكاء الاصطناعي
                    </p>
                </div>
            </PageHero>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Video Content */}
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div className={`bg-white rounded-2xl border border-gray-100 shadow-xl h-[300px] md:h-[350px] relative overflow-hidden group hover:border-amber-400/30 transition-colors duration-500`}>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-white border border-amber-200 text-amber-700 rounded-lg font-semibold hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 group`}
                  >
                    اكتشف المزيد
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">جاهز للبدء؟</h2>
                    <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                        تواصل معنا اليوم واكتشف كيف يمكن لخدماتنا تحويل عملك القانوني
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                        تواصل معنا
                    </Link>
                </div>
            </section>
        </main>
    )
}
