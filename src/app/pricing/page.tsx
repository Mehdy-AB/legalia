import PageHero from '@/components/PageHero'
import { Info } from 'lucide-react'
import Link from 'next/link'
import PricingSection from '@/components/PricingSection'

export default function PricingPage() {
    const creditCosts = [
        {
            category: '🧠 الدردشة القانونية',
            items: [
                { name: 'سؤال قانوني بسيط', cost: '1 رصيد' },
                { name: 'تحليل قانوني متوسط', cost: '2 رصيد' },
                { name: 'استشارة معمقة', cost: '3 رصيد' },
            ]
        },
        {
            category: '📄 صياغة ومراجعة الوثائق',
            items: [
                { name: 'إنشاء وثيقة قانونية', cost: '2 رصيد' },
                { name: 'مراجعة وثيقة', cost: '3 رصيد' },
                { name: 'تلخيص / استخراج نقاط', cost: '2 رصيد' },
                { name: 'مقارنة وثيقتين', cost: '3 رصيد' },
            ]
        },
        {
            category: '📁 تحليل المستندات والصور',
            items: [
                { name: 'مستند عادي (PDF)', cost: '4 رصيد' },
                { name: 'ملف قضية كبير', cost: '7 رصيد' },
                { name: 'تحليل صورة / دليل', cost: '3 رصيد' },
            ]
        },
        {
            category: '🎥 إعادة تمثيل الوقائع (High Value)',
            items: [
                { name: 'تحليل تسلسل الوقائع', cost: '7 رصيد' },
                { name: 'محاكاة بصرية', cost: '15 رصيد' },
                { name: 'محاكاة متقدمة', cost: '23 رصيد' },
                { name: 'تقرير منهجية', cost: '+4 رصيد' },
            ]
        }
    ]

    return (
        <main className="min-h-screen bg-gray-50 direction-rtl" dir="rtl">
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">تفاصيل الأسعار والخدمات</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        تعرف على تكلفة الخدمات بالأرصدة ومميزات كل باقة بالتفصيل
                    </p>
                </div>
            </PageHero>

            {/* Credit Costs Table */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-3">
                        {/* Use simple color for icon if needed, or remove as requested. User said remove icons on the page. */}
                        {/* <Info className="w-8 h-8 text-blue-600" />  User explicitly said remove icons */}
                        جدول تكلفة الخدمات بالأرصدة
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {creditCosts.map((cat, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                                    <h3 className="font-bold text-gray-900 text-lg">{cat.category.replace(/[\p{Emoji}\u200d]+/gu, '')}</h3>
                                </div>
                                <div className="p-4 space-y-3">
                                    {cat.items.map((item, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-gray-50 last:border-0">
                                            <span className="text-gray-600">{item.name}</span>
                                            <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{item.cost}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reusing the Pricing Section Component */}
            <PricingSection />

            <section className="py-16 bg-gradient-to-br from-gray-900 to-slate-800 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى حل مخصص؟</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        للمؤسسات الكبرى والهيئات الحكومية، نقدم حلولاً مخصصة تناسب حجم أعمالكم
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all shadow-lg"
                    >
                        تواصل مع المبيعات
                    </Link>
                </div>
            </section>
        </main>
    )
}
