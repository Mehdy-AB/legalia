import { Check } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
    const pricingData = [
        {
            category: 'الذكاء الاصطناعي القانوني',
            services: [
                { name: 'سؤال قانوني عام (تحليل / توجيه)', credits: 1 },
                { name: 'إجابة قانونية موسعة مع تعليل', credits: 2 },
                { name: 'صياغة وثيقة قانونية بسيطة', credits: 3 },
                { name: 'صياغة عقد / مذكرة قانونية كاملة', credits: 4 },
                { name: 'إعادة صياغة أو تحسين وثيقة', credits: 2 },
                { name: 'تلخيص مستند قانوني', credits: 2 },
                { name: 'مقارنة وثيقتين قانونيتين', credits: 3 },
            ]
        },
        {
            category: 'المستندات والملفات',
            services: [
                { name: 'رفع وتحليل PDF / Word', credits: 2 },
                { name: 'دردشة مخصصة مع مستند واحد', credits: 1 },
                { name: 'تحليل عدة مستندات (حتى 5)', credits: 4 },
                { name: 'استخراج بيانات قانونية', credits: 3 },
                { name: 'تصدير النتيجة (PDF / DOCX)', credits: 1 },
            ]
        },
        {
            category: 'الصور والأدلة',
            services: [
                { name: 'تحليل صورة قانونية', credits: 2 },
                { name: 'استخراج نص + تفسير قانوني', credits: 3 },
                { name: 'ربط الصورة بملف قضية', credits: 1 },
            ]
        },
        {
            category: 'إعادة تمثيل الوقائع',
            services: [
                { name: 'تحويل الوقائع إلى تسلسل بصري', credits: 8 },
                { name: 'اختبار سيناريو قانوني بديل', credits: 3 },
                { name: 'إضافة أدلة جديدة للمحاكاة', credits: 2 },
                { name: 'تصدير العرض (PDF / Visual Report)', credits: 2 },
            ]
        },
        {
            category: 'الأداء والأولوية',
            services: [
                { name: 'Fast Mode (أولوية المعالجة)', credits: '+1' },
                { name: 'نموذج ذكاء اصطناعي متقدم', credits: '+1' },
                { name: 'حفظ الجلسة للرجوع لاحقًا', credits: 1 },
            ]
        }
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">الأسعار</h1>
                        <p className="text-xl text-blue-50 leading-relaxed">
                            نظام تسعير مرن قائم على الأرصدة يتيح لك الدفع حسب الاستخدام
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            كيف يعمل نظام الأرصدة؟
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            تعتمد منصة LegalAI على نظام الأرصدة (Credits) الذي يمنحك المرونة الكاملة في استخدام الخدمات. كل خدمة لها تكلفة محددة بالأرصدة، ويمكنك شراء الأرصدة حسب احتياجاتك.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Tables */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                            جدول تكلفة الخدمات بالأرصدة
                        </h2>

                        <div className="space-y-8">
                            {pricingData.map((category, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4">
                                        <h3 className="text-2xl font-bold">{category.category}</h3>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {category.services.map((service, idx) => (
                                            <div
                                                key={idx}
                                                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{service.name}</span>
                                                </div>
                                                <div className="text-left">
                                                    <span className="text-2xl font-bold text-blue-600">
                                                        {service.credits}
                                                    </span>
                                                    <span className="text-gray-500 mr-2">
                                                        {typeof service.credits === 'string' && service.credits.includes('+') ? '' : 'رصيد'}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscription Plans (Optional) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                            باقات الاشتراك
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                            اختر الباقة المناسبة لاحتياجاتك (قريباً)
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Basic */}
                            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl transition-shadow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">الأساسية</h3>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-gray-900">قريباً</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-600">100 رصيد شهرياً</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-600">الوصول للخدمات الأساسية</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-600">دعم فني</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Pro */}
                            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl border-2 border-blue-600 p-8 text-white transform scale-105 shadow-2xl">
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block mb-4">
                                    <span className="text-sm font-bold">الأكثر شعبية</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">الاحترافية</h3>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold">قريباً</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        <span>500 رصيد شهرياً</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        <span>جميع الخدمات</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        <span>دعم فني أولوية</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        <span>تحليلات متقدمة</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Enterprise */}
                            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl transition-shadow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">المؤسسات</h3>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-gray-900">مخصص</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-600">أرصدة غير محدودة</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-600">حلول مخصصة</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-600">دعم مخصص 24/7</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-600">تدريب الفريق</span>
                                    </li>
                                </ul>
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
                        تواصل معنا لمعرفة المزيد عن الأسعار والباقات المتاحة
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
