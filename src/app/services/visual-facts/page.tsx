import PageHero from '@/components/PageHero'
import { Video, Eye, Layers, TestTube, Lightbulb, AlertTriangle, Users, Car, Building, Clock, GraduationCap, CheckCircle, Play } from 'lucide-react'
import Link from 'next/link'

export default function VisualFactsPage() {
    const howItWorks = [
        "يبدأ المستخدم بتزويد النظام بالبيانات المتاحة حول القضية، مثل التقارير، الشهادات، الصور، الخرائط، والبيانات المكانية.",
        "يقوم الذكاء الاصطناعي بتحليل هذه المعطيات وفهم العلاقات بين الأشخاص، الأماكن، الأزمنة، والأحداث، ثم يعمل كمخرج ومصور وممثل رقمي لبناء تصور بصري متسلسل.",
        "يمكن للمستخدم مراجعة المحاكاة الناتجة، واختبار سيناريوهات بديلة من خلال تعديل الفرضيات، مما يتيح فهماً أعمق للواقعة من زوايا مختلفة."
    ]

    const features = [
        {
            icon: Layers,
            title: "تحويل البيانات غير المنظمة إلى مشهد بصري",
            description: "من تقارير وشهادات متفرقة إلى سرد بصري متكامل"
        },
        {
            icon: Eye,
            title: "فهم أعمق للوقائع",
            description: "تسهيل استيعاب العلاقات الزمنية والمكانية بين الأحداث"
        },
        {
            icon: TestTube,
            title: "اختبار السيناريوهات",
            description: "مقارنة فرضيات مختلفة بناءً على نفس المعطيات"
        },
        {
            icon: Lightbulb,
            title: "تعزيز قوة الدليل البصري",
            description: "فالصورة أبلغ من ألف كلمة، خاصة في القضايا المعقّدة"
        },
        {
            icon: AlertTriangle,
            title: "كشف التناقضات المحتملة",
            description: "إبراز التعارضات المنطقية أو الفيزيائية بين الروايات المختلفة"
        },
        {
            icon: Users,
            title: "أداة دعم قانوني",
            description: "تُستخدم كمساعدة تحليلية وتوضيحية ضمن الإطار المهني، وليست بديلًا عن القرار البشري"
        }
    ]

    const useCases = [
        { icon: Car, title: "حوادث المرور", description: "إعادة بناء مسرح الحادث بصرياً" },
        { icon: Building, title: "النزاعات العقارية والإنشائية", description: "تصور المخالفات والتجاوزات" },
        { icon: Clock, title: "التسلسل الزمني المعقد", description: "القضايا التي تعتمد على ترتيب الأحداث" },
        { icon: GraduationCap, title: "الأغراض التعليمية", description: "التدريب القانوني والمحاكاة الأكاديمية" }
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white" videoSrc="/images/visual-facts.mp4">
                <div className="max-w-4xl mx-auto text-center">
                    <Video className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        إعادة تمثيل الوقائع القانونية بصريًا
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                        خدمة متقدمة لتحويل البيانات غير المنظمة والسرديات المعقدة — مثل تقارير الشرطة، شهادات الشهود، الأدلة المادية، الصور، الخرائط، والبيانات المكانية — إلى محاكاة بصرية تحاكي تسلسل الأحداث كما يُفترض حدوثها.
                    </p>
                </div>
            </PageHero>

            {/* Video Section REMOVED - moved to Hero */}

            {/* Main Description */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-amber-100 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-amber-500 pr-4 flex items-center gap-4">
                                <img
                                    src="/images/visual.bmp"
                                    alt="Visual Facts"
                                    className="w-16 h-16 object-contain"
                                />
                                محاكاة بصرية للوقائع والأحداث
                            </h2>
                            <p className="text-lg text-gray-700 leading-loose mb-6">
                                يعمل الذكاء الاصطناعي في هذه الخدمة كمخرج ومصور وممثل رقمي، مع إمكانية اختبار سيناريوهات مختلفة استنادًا إلى المعطيات المتاحة، مما يساعد على فهم أعمق للديناميكيات الواقعية ويعزز قوة الدليل البصري.
                            </p>
                            <p className="text-lg text-gray-700 leading-loose mb-6">
                                تمكّن هذه الخدمة الممارسين القانونيين من الانتقال من الوصف النصي المجرد إلى تصور بصري واضح يساعد على الفهم والتحليل والتفسير القانوني الدقيق.
                            </p>
                            <div className="text-center pt-4">
                                <p className="text-2xl font-bold text-amber-700 italic">
                                    «نحن لا نكتفي بعرض الأدلة، بل نجعل الحقيقة مرئية»
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف تعمل؟</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            {howItWorks.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-6 bg-slate-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed pt-2">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* How It Works Video */}
                        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/images/services-page-howitwork.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">المزايا / ماذا تشمل</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-2 h-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-7 h-7 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ماذا يمكن إعادة تمثيله؟</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <useCase.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{useCase.title}</h3>
                                        <p className="text-gray-300 text-sm">{useCase.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Video */}
            <section className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover filter brightness-50"
                    >
                        <source src="/images/services-pages-footer.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">اجعل الحقيقة مرئية</h2>
                    <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
                        حوّل قضاياك المعقدة إلى محاكاة بصرية واضحة ومقنعة
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-lg"
                        >
                            احجز استشارة مجانية
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
                        >
                            تصفح باقي الخدمات
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
