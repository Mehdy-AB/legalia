import PageHero from '@/components/PageHero'
import { Brain, MessageSquare, FileText, PenTool, BookOpen, Scale, RefreshCw, GraduationCap, Clock, CheckCircle, Sparkles, Database } from 'lucide-react'
import Link from 'next/link'

export default function LegalModelPage() {
    const howItWorks = [
        "يبدأ النموذج بفهم المدخلات القانونية المقدّمة من المستخدم، سواء كانت وقائع، أسئلة، أو نصوص قانونية.",
        "يقوم بعد ذلك بتحليل المحتوى اعتمادًا على بنيته القانونية والمنطق التحليلي، مع الاستناد إلى قاعدة معرفية قانونية محدثة.",
        "ثم ينتج مخرجات قانونية منظمة، متسقة، وقابلة للاستخدام المهني أو الأكاديمي، مع مراعاة دقة الصياغة ومتطلبات السياق."
    ]

    const coreFunctions = [
        { icon: Brain, title: "تحليل الوقائع القانونية", description: "وتفكيكها منطقيًا" },
        { icon: PenTool, title: "صياغة النصوص والوثائق القانونية", description: "بأسلوب مهني" },
        { icon: FileText, title: "إنشاء النماذج القانونية", description: "والعرائض والمذكرات" },
        { icon: RefreshCw, title: "إعادة الصياغة القانونية الدقيقة", description: "وتحسين الأسلوب" },
        { icon: BookOpen, title: "دعم البحث القانوني", description: "والتحليل الأكاديمي" },
        { icon: Scale, title: "ربط الوقائع بالسياق القانوني", description: "والتشريعي المناسب" }
    ]

    const features = [
        {
            icon: Sparkles,
            title: "نموذج قانوني متخصص",
            description: "مصمم خصيصًا للاستخدام القانوني، وليس نموذجًا عامًا."
        },
        {
            icon: Database,
            title: "قاعدة معرفية قانونية واسعة",
            description: "تشمل القوانين، المراجع الأكاديمية، والدراسات الفقهية المتخصصة."
        },
        {
            icon: PenTool,
            title: "دقة في البنية والصياغة",
            description: "تركيز على المنطق القانوني، التسلسل، والأسلوب المهني."
        },
        {
            icon: RefreshCw,
            title: "تحديث مستمر",
            description: ",مواكبة أحدث التعديلات التشريعية والاتجاهات الفقهية."
        },
        {
            icon: GraduationCap,
            title: "دعم مهني وأكاديمي",
            description: "مناسب الممارسين القانونيين، الباحثين، الأكاديميين، وطلبة القانون."
        },
        {
            icon: Clock,
            title: "توفير الوقت والجهد",
            description: "تقليل الزمن المستغرق في التحليل والصياغة مع الحفاظ على الجودة."
        }
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white" videoSrc="https://res.cloudinary.com/dywcowkoy/video/upload/v1768749753/images/legal-model.mp4">
                <div className="max-w-4xl mx-auto text-center">
                    <Brain className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        الدردشة القانونية بنموذج Legal AI الخاص
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                        تتضمن المنصة خانة دردشة منفصلة تعتمد على نموذج قانوني مملوك لـ Legal AI، ومهيأ خصيصًا لتحليل الوقائع، صياغة النصوص، وإنشاء النماذج والوثائق القانونية.
                    </p>
                </div>
            </PageHero>

            {/* Main Description */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-amber-100 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-amber-500 pr-4">
                                2) دردشة بنموذج Legal AI الخاص (تحليل – صياغة – إنشاء)
                            </h2>
                            <div className="flex justify-center mb-8">
                                <img
                                    src="/images/الدردشة القانونية بنموذج Legal AI        الخاص.jpg"
                                    alt="Legal AI Model"
                                    className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-md"
                                />
                            </div>
                            <p className="text-lg text-gray-700 leading-loose mb-6">
                                خانة دردشة قانونية تعتمد على نموذج ذكاء اصطناعي قانوني مملوك للمنصة، تم تطويره خصيصًا لدعم التحليل والصياغة القانونية وفق منطق مهني منضبط.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section REMOVED - moved to Hero */}

            {/* How It Works */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف يعمل؟</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            {howItWorks.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-x-2"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
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
                                <source src="https://res.cloudinary.com/dywcowkoy/video/upload/v1768749983/images/services-page-howitwork.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Functions */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الوظائف الأساسية</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreFunctions.map((func, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-2 h-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                                    <func.icon className="w-7 h-7 text-amber-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{func.title}</h3>
                                <p className="text-gray-600">{func.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">المزايا / ماذا تشمل الخدمة؟</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
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
                        <source src="https://res.cloudinary.com/dywcowkoy/video/upload/v1768750193/images/services-pages-footer.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">ابدأ التحليل والصياغة الآن</h2>
                    <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
                        استفد من قوة نموذج Legal AI المتخصص في دعم عملك القانوني
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-lg"
                        >
                            جرّب الخدمة
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
