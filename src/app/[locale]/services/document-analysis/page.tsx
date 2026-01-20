import PageHero from '@/components/PageHero'
import { FileText, MessageSquare, Search, Layers, Image as ImageIcon, GitCompare, Lock, CheckCircle, Upload, Brain, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function DocumentAnalysisPage() {
    const howItWorks = [
        "يقوم المستخدم برفع المستندات أو المواد البصرية داخل خانة الدردشة المخصصة.",
        "يتولى النموذج القانوني قراءة المحتوى كاملًا وفهمه ضمن سياقه القانوني، ثم يتيح للمستخدم التفاعل معه عبر أسئلة طبيعية أو أوامر محددة (تلخيص، مقارنة، استخراج عناصر).",
        "تُقدَّم النتائج بصياغة قانونية منظمة، مع الحفاظ على سرية البيانات وعدم مشاركتها أو استخدامها خارج نطاق الطلب مع حذف المعلومات الحساسة والشخصية بواسطة النموذج الوسيط."
    ]

    const capabilities = [
        "تحليل المستند كاملًا دون قراءة يدوية",
        "تلخيص، مقارنة، استخراج نقاط جوهرية",
        "طرح أسئلة مباشرة على محتوى الملف",
        "ربط الصور والسندات بالنص القانوني"
    ]

    const features = [
        {
            icon: MessageSquare,
            title: "دردشة مباشرة مع الملفات",
            description: "طرح أسئلة قانونية على المستند نفسه دون قراءة كل صفحة"
        },
        {
            icon: Search,
            title: "تحليل دقيق وسريع",
            description: "فهم فوري للملفات المعقّدة وتوفير الوقت والجهد"
        },
        {
            icon: Sparkles,
            title: "تلخيص واستخراج ذكي",
            description: "تحديد الوقائع، المطالبات، الأطراف، والتواريخ الأساسية"
        },
        {
            icon: ImageIcon,
            title: "تحليل الأدلة البصرية",
            description: "التعامل مع الصور والمواد المصورة وربطها بالوقائع القانونية"
        },
        {
            icon: GitCompare,
            title: "مقارنة المستندات",
            description: "إبراز الفروقات والتشابهات بين نسخ متعددة أو ملفات مختلفة"
        },
        {
            icon: Lock,
            title: "تحكم كامل في البيانات",
            description: "يحتفظ المستخدم بالسيطرة الكاملة على ملفاته، دون استخدامها في التدريب أو مشاركتها مع أطراف ثالثة"
        }
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white" videoSrc="https://res.cloudinary.com/dywcowkoy/video/upload/v1768749683/images/document-analysis.mp4">
                <div className="max-w-4xl mx-auto text-center">
                    <FileText className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        تحليل المستندات والأدلة الرقمية
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                        في نفس خانة الدردشة المنفصلة المعتمدة على النموذج القانوني، يمكن الدردشة المباشرة مع المستندات القانونية والمواد البصرية، بما يشمل الملفات النصية والصور والأدلة.
                    </p>
                </div>
            </PageHero>

            {/* Main Description */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-amber-100 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-amber-500 pr-4">
                                دردشة مخصصة للمستندات والصور
                            </h2>
                            <div className="flex justify-center mb-8">
                                <img
                                    src="/images/دردشة مخصصة للمستندات والصورp.jpg"
                                    alt="Document Analysis"
                                    className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-md"
                                />
                            </div>
                            <p className="text-lg text-gray-700 leading-loose mb-6">
                                خدمة متقدمة تتيح الدردشة المباشرة مع المستندات القانونية والمواد البصرية ضمن خانة دردشة منفصلة تعتمد على النموذج القانوني الخاص بالمنصة. تمكّن هذه الخدمة المستخدمين من فهم الملفات القانونية المعقّدة بسرعة ودقة، دون الحاجة إلى مراجعة يدوية مطوّلة، مع الحفاظ على التحكم الكامل في البيانات والخصوصية.
                            </p>
                            <p className="text-lg text-gray-700 leading-loose">
                                يمكن للمستخدم تحليل المحتوى، تلخيصه، مقارنته، واستخراج عناصره الجوهرية، مع ربط المستندات بالسياق القانوني للقضية دون الحاجة إلى مراجعة يدوية مطوّلة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section REMOVED - moved to Hero */}

            {/* Supported Formats */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">مخصص للتفاعل المباشر مع</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">المستندات القانونية</h3>
                                </div>
                                <p className="text-gray-600">PDF – Word – Scans</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                        <ImageIcon className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">الصور والأدلة البصرية</h3>
                                </div>
                                <p className="text-gray-600">صور حوادث، مستندات مصورة، خرائط</p>
                            </div>
                        </div>

                        {/* Capabilities */}
                        <div className="mt-12 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">القدرات</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {capabilities.map((cap, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{cap}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف تعمل الخدمة؟</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            {howItWorks.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-6 bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
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

            {/* Features Grid */}
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
                    <h2 className="text-4xl font-bold mb-6">تحدث مع مستنداتك</h2>
                    <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
                        حلّل وافهم ملفاتك القانونية في ثوانٍ معدودة
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-lg"
                        >
                            ابدأ الآن
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
