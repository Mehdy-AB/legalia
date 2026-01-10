import PageHero from '@/components/PageHero'
import { Bot, Network, ShieldCheck, GitMerge, Filter, CheckCircle, Cpu, Zap, Layers } from 'lucide-react'
import Link from 'next/link'

export default function AiChatPage() {
    const howItWorks = [
        "يقوم النموذج الوسيط بتحليل طبيعة السؤال أو الطلب القانوني، ثم يوجّه المعالجة إلى النموذج الأكثر ملاءمة من حيث السياق والدقة، مع تنسيق النتائج ضمن إجابة متماسكة ومتسقة.",
        "و يعمل كطبقة عزل وأمان بين المستخدم ونماذج الذكاء الاصطناعي الخارجية"
    ]

    const coreFunctions = [
        { icon: Network, title: "التوجيه الذكي", description: "للنماذج الافضل و الاكثر دقة وكفاءة" },
        { icon: ShieldCheck, title: "ضمان الجودة", description: " ضمان جودة الاجابات و تقليل الأخطاء الناتجة عن الاعتماد على نموذج واحد " },
        { icon: GitMerge, title: "التحقق المتقاطع", description: "تحسين جودة الإجابة من خلال المقارنة والتحقق المتقاطع" },
        { icon: Filter, title: "حماية الخصوصية", description: "يطبّق سياسات تصفية، إخفاء والحفاظ على استقلالية البيانات وعدم استخدامها للتدريب" }
    ]

    const benefits = [
        {
            icon: Layers,
            title: "ربط ذكي متعدد النماذج",
            description: "ربط ذكي بين نماذج ذكاء اصطناعي متعددة"
        },
        {
            icon: Zap,
            title: "تحسين الدقة وجودة أعلى في النتائج",
            description: "تحسين الدقة وجودة أعلى في النتائج"
        },
        {
            icon: CheckCircle,
            title: "مراجعة وتحسين النتائج",
            description: "مراجعة وتحسين النتائج قبل عرضها للمستخدم"
        },
        {
            icon: ShieldCheck,
            title: "أمان وخصوصية بياناتك",
            description: "تصفية البيانات الحساسة وحماية الخصوصية"
        },
        {
            icon: Bot,
            title: "تجربة استخدام احترافية",
            description: "تجربة استخدام احترافية وموثوقة"
        }
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white" videoSrc="/images/ai-chat.mp4">
                <div className="max-w-4xl mx-auto text-center">
                    <Cpu className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        الدردشة الذكية متعددة النماذج
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                        توفر المنصة نظام دردشة قانونية متقدم قائم على بنية وسيطة خاصة يعمل على الربط المنهجي بين عدة نماذج ذكاء اصطناعي ، مع توجيه كل استفسار أو مهمة إلى النموذج الأنسب. يهدف هذا النهج إلى تحسين دقة النتائج، تقليل الأخطاء، وضمان استجابة قانونية أكثر اتساقًا وموثوقيةمع الحفاط على المعلومات الحساسة والشخصية التي يتم حذفها بواسطة النموذج الوسيط
                    </p>
                </div>
            </PageHero>

            {/* Main Description */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-amber-100 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-amber-500 pr-4">
                                دردشة قانونية وسيطة بين نماذج ذكاء اصطناعي متعددة
                            </h2>
                            <div className="flex justify-center mb-8">
                                <img
                                    src="/images/الدردشة الذكية متعددة النماذج   .jpg"
                                    alt="Multi-Model Chat"
                                    className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-md"
                                />
                            </div>
                            <p className="text-lg text-gray-700 leading-loose mb-6">
                                توفر Legal AI نظام دردشة قانونية متقدم يعمل عبر نموذج وسيط خاص بالمنصة، يقوم بالربط الذكي بين عدة نماذج ذكاء اصطناعي عامة ومتخصصة، ويختار النموذج الأنسب تلقائيًا حسب طبيعة السؤال أو المهمة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section REMOVED - moved to Hero */}

            {/* Core Functions */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الوظائف الأساسية</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreFunctions.map((func, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <func.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{func.title}</h3>
                                <p className="text-gray-600 text-sm">{func.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
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
                                    className="flex items-start gap-6 bg-slate-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 border-r-4 border-r-amber-400"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm mt-1">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
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

            {/* Benefits */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">المزايا / ماذا تشمل</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                                    <benefit.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-300">{benefit.description}</p>
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
                    <h2 className="text-4xl font-bold mb-6">احصل على إجابات أدق وأكثر أمانًا</h2>
                    <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
                        جرّب نظام الدردشة الوسيط الذي يجمع بين ذكاء النماذج المتعددة وأمان البيانات
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-lg"
                        >
                            ابدأ الدردشة
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
