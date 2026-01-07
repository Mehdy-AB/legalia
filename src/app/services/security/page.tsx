import PageHero from '@/components/PageHero'
import { Shield, Mail, Globe, Cloud, CheckCircle, Lock, Key, Eye, Server } from 'lucide-react'
import Link from 'next/link'

export default function SecurityPage() {
    const coreFunctions = [
        "تأمين الاتصالات القانونية الحساسة",
        "حماية الهوية الرقمية ومنع التتبع",
        "حفظ القضايا والملفات القانونية بشكل آمن",
        "ضمان سرية البيانات أثناء التخزين والنقل",
        "تمكين المستخدم من التحكم الكامل في بياناته وحقوق الوصول"
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white" videoSrc="/images/security-home.mp4">
                <div className="max-w-4xl mx-auto text-center">
                    <Shield className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        الأمن والخصوصية الرقمية
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        تولي LegalAI أهمية قصوى لحماية البيانات وسرية المعلومات، انطلاقًا من إدراكها لحساسية العمل القانوني ومتطلبات الثقة والامتثال.
                    </p>
                </div>
            </PageHero>

            {/* Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            توفّر المنصة منظومة متكاملة من الخدمات الرقمية الآمنة، المصممة خصيصًا لحماية الاتصالات والملفات والهوية الرقمية للمستخدمين، ضمن إطار يضمن السيطرة الكاملة على البيانات.
                        </p>

                        {/* Core Functions */}
                        <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">الوظائف الأساسية</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-right">
                                {coreFunctions.map((func, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{func}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section REMOVED - moved to Hero */}

            {/* How It Works */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">كيف تعمل منظومة الأمن والخصوصية؟</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            يتم توفير أدوات رقمية آمنة تعمل بشكل مستقل عن نماذج الذكاء الاصطناعي، مع الالتزام بمبدأ أن البيانات ملك للمستخدم وحده، ولا يتم استخدامها في التدريب أو مشاركتها مع أي طرف ثالث.
                        </p>
                        <p className="text-gray-600">
                            تُدار جميع العمليات وفق سياسات صارمة للخصوصية والتحكم في الوصول.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">ماذا تشمل الخدمة؟</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Text Content */}
                        <div className="space-y-16">
                            {/* Email Service */}
                            <div>
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <Mail className="w-8 h-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-r-4 border-amber-500 pr-4">
                                    البريد الإلكتروني المشفّر
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    بريد إلكتروني مخصص للتواصل القانوني الحساس، مع تشفير كامل للمراسلات والمرفقات وحماية عالية من التتبع أو الوصول غير المصرّح به.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">تشفير كامل للمراسلات والمرفقات</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">حماية عالية من التتبع أو الوصول غير المصرح به</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">مناسب للتواصل المهني والقانوني</span>
                                    </div>
                                </div>
                            </div>

                            {/* VPN Service */}
                            <div>
                                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                                    <Globe className="w-8 h-8 text-amber-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-r-4 border-blue-500 pr-4">
                                    خدمة VPN الآمنة
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    حماية الهوية الرقمية وإخفاء عنوان IP، مع تشفير حركة الإنترنت بالكامل ومنع التتبع والمراقبة لتوفير بيئة عمل قانونية آمنة على الإنترنت.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">حماية الهوية الرقمية وإخفاء عنوان IP</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">تشفير حركة الإنترنت بالكامل</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">منع التتبع والمراقبة</span>
                                    </div>
                                </div>
                            </div>

                            {/* Cloud Storage */}
                            <div>
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <Cloud className="w-8 h-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-r-4 border-amber-500 pr-4">
                                    التخزين السحابي المشفّر
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    حفظ القضايا والملفات الحساسة بتشفير كامل، مع تحكم دقيق في صلاحيات الوصول وإمكانية مشاركة الملفات بشكل آمن عند الحاجة.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">حفظ القضايا والملفات الحساسة بتشفير كامل</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">تحكم دقيق في صلاحيات الوصول</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">إمكانية مشاركة الملفات بشكل آمن عند الحاجة</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Single Image Section */}
                        <div className="sticky top-24">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
                                <img
                                    src="/images/scurity.jpg"
                                    alt="Security Overview"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-6 text-center">
                            مبادئ الحوكمة والخصوصية
                        </h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-12" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <Lock className="w-6 h-6 text-amber-400" />
                                    <h4 className="text-lg font-bold text-white">السيطرة الكاملة على البيانات</h4>
                                </div>
                                <p className="text-gray-300">
                                    المستخدم يحتفظ بالسيطرة الكاملة على بياناته
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <Eye className="w-6 h-6 text-blue-400" />
                                    <h4 className="text-lg font-bold text-white">عدم استخدام البيانات للتدريب</h4>
                                </div>
                                <p className="text-gray-300">
                                    لا يتم استخدام البيانات في تدريب نماذج الذكاء الاصطناعي
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <Key className="w-6 h-6 text-amber-400" />
                                    <h4 className="text-lg font-bold text-white">عدم المشاركة مع أطراف ثالثة</h4>
                                </div>
                                <p className="text-gray-300">
                                    لا تتم مشاركة المعلومات مع أطراف ثالثة
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <Server className="w-6 h-6 text-blue-400" />
                                    <h4 className="text-lg font-bold text-white">احترام المعايير التنظيمية</h4>
                                </div>
                                <p className="text-gray-300">
                                    احترام صارم لمتطلبات السرية والامتثال
                                </p>
                            </div>
                        </div>
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
                        <source src="/images/services-page-howitwork.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">احمِ بياناتك القانونية</h2>
                    <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
                        ابدأ العمل في بيئة آمنة ومشفّرة بالكامل
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-lg"
                        >
                            تواصل معنا
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
                        >
                            عودة للخدمات
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
