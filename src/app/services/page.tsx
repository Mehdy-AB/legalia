import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { Brain, FileText, Image as ImageIcon, Video, Shield } from 'lucide-react'

export default function ServicesPage() {
    const services = [
        {
            id: 'ai-chat',
            icon: Brain,
            title: 'دردشة ذكاء اصطناعي متعددة النماذج',
            description: 'نظام دردشة قانونية متقدم يعمل عبر نموذج وسيط خاص بالمنصة، يربط بين عدة نماذج ذكاء اصطناعي ويختار الأنسب تلقائياً',
            features: ['التوجيه الذكي للنماذج', 'تحسين جودة الإجابة', 'تصفية البيانات الحساسة'],
            gradient: 'from-blue-500 to-blue-600',
            bgGradient: 'from-blue-50 to-blue-100',
            borderColor: 'border-blue-200'
        },
        {
            id: 'legal-model',
            icon: FileText,
            title: 'نموذج Legal AI الخاص',
            description: 'نموذج ذكاء اصطناعي قانوني مملوك للمنصة، مصمم خصيصاً للتحليل والصياغة القانونية وإنشاء الوثائق',
            features: ['تحليل الوقائع القانونية', 'صياغة الوثائق', 'قاعدة معرفية واسعة'],
            gradient: 'from-purple-500 to-purple-600',
            bgGradient: 'from-purple-50 to-purple-100',
            borderColor: 'border-purple-200'
        },
        {
            id: 'document-analysis',
            icon: ImageIcon,
            title: 'تحليل المستندات والصور',
            description: 'دردشة مباشرة مع المستندات القانونية والمواد البصرية لفهم الملفات المعقدة بسرعة ودقة',
            features: ['تحليل PDF وWord', 'معالجة الصور', 'مقارنة المستندات'],
            gradient: 'from-green-500 to-green-600',
            bgGradient: 'from-green-50 to-green-100',
            borderColor: 'border-green-200'
        },
        {
            id: 'visual-facts',
            icon: Video,
            title: 'إعادة تمثيل الوقائع بصرياً',
            description: 'تحويل البيانات غير المنظمة والسرديات المعقدة إلى محاكاة بصرية تحاكي تسلسل الأحداث',
            features: ['محاكاة الأحداث', 'اختبار السيناريوهات', 'تعزيز الدليل البصري'],
            gradient: 'from-orange-500 to-orange-600',
            bgGradient: 'from-orange-50 to-orange-100',
            borderColor: 'border-orange-200'
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
                                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Image Placeholder */}
                                <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                                    <div className={`bg-gradient-to-br ${service.bgGradient} rounded-2xl border-2 border-dashed ${service.borderColor} min-h-[350px] flex items-center justify-center relative overflow-hidden group`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="text-center z-10">
                                            <service.icon className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500 font-medium">صورة توضيحية للخدمة</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`order-${index % 2 === 0 ? '2' : '1'}`}>
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
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
                                                <div className={`w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full`} />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className={`inline-block px-6 py-3 bg-gradient-to-br ${service.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                                    >
                                        اكتشف المزيد ←
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Service */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    الأمن والخصوصية الرقمية
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    منظومة متكاملة من الخدمات الرقمية الآمنة: بريد مشفّر، VPN، وتخزين سحابي محمي بالكامل
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gray-700 rounded-full" />
                                    <span className="text-gray-700">بريد إلكتروني مشفّر</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gray-700 rounded-full" />
                                    <span className="text-gray-700">خدمة VPN آمنة</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gray-700 rounded-full" />
                                    <span className="text-gray-700">تخزين سحابي مشفّر</span>
                                </div>
                                <Link
                                    href="/services/security"
                                    className="inline-block px-6 py-3 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                                >
                                    اكتشف المزيد ←
                                </Link>
                            </div>

                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-dashed border-gray-300 min-h-[350px] flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="text-center z-10">
                                    <Shield className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500 font-medium">صورة توضيحية للأمان</p>
                                </div>
                            </div>
                        </div>
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
