import { Shield, Mail, Globe, Cloud, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function SecurityPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Shield className="w-20 h-20 mx-auto mb-6 text-blue-400" />
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            الأمن والخصوصية الرقمية
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            نولي أهمية قصوى لحماية البيانات وسرية المعلومات، انطلاقًا من إدراكنا لحساسية العمل القانوني ومتطلبات الثقة والامتثال
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Email Service */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <Mail className="w-8 h-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-r-4 border-blue-500 pr-4">
                                    البريد الإلكتروني المشفّر
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    نظام مراسلات قانونية مؤمن بأعلى معايير التشفير (End-to-End Encryption)، يضمن سرية التواصل بين المحامي والموكل، ويحمي الوثائق المرفقة من أي اختراق أو اعتراض.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">تشفير عسكري للمراسلات (AES-256)</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">تدمير ذاتي للرسائل الحساسة (اختياري)</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">تحقق ثنائي من الهوية عند الدخول</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 p-8 shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px]">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Mail className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800">مساحة عمل آمنة</h4>
                                    <p className="text-gray-500 mt-2 text-sm">PLACEHOLDER</p>
                                </div>
                            </div>
                        </div>

                        {/* VPN Service */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 bg-gradient-to-br from-purple-50 to-white rounded-3xl border border-purple-100 p-8 shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px]">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Globe className="w-10 h-10 text-purple-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800">اتصال محمي</h4>
                                    <p className="text-gray-500 mt-2 text-sm">PLACEHOLDER</p>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                    <Globe className="w-8 h-8 text-purple-600" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-r-4 border-purple-500 pr-4">
                                    شبكة افتراضية خاصة (VPN)
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    تصفح آمن ومنع كامل للتتبع الرقمي، مما يتيح للمحامين العمل على القضايا الحساسة من أي مكان في العالم دون المخاطرة بكشف الهوية أو الموقع الجغرافي.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">إخفاء عنوان IP وتشفير الاتصال</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">خوادم مخصصة للعمل القانوني</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">سياسة عدم الاحتفاظ بالسجلات (No-Logs Policy)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cloud Storage */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                    <Cloud className="w-8 h-8 text-green-600" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-r-4 border-green-500 pr-4">
                                    التخزين السحابي القانوني
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    مساحة تخزين سحابية معزولة ومحمية، تتيح أرشفة ملفات القضايا وتنظيمها ومشاركتها مع الموكلين أو الزملاء ضمن بيئة رقمية محصنة ضد الفقدان أو التسريب.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">نسخ احتياطي تلقائي مشفّر</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">إدارة صلاحيات الوصول بدقة</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">مسار تدقيق كامل للوصول للملفات</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 p-8 shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px]">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Cloud className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800">أرشيف سحابي</h4>
                                    <p className="text-gray-500 mt-2 text-sm">PLACEHOLDER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            مبادئ الحوكمة والخصوصية
                        </h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-12" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-blue-400">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                    السيطرة الكاملة على البيانات
                                </h4>
                                <p className="text-gray-600">
                                    المستخدم يحتفظ بالسيطرة الكاملة على بياناته
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-purple-400">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                    عدم استخدام البيانات للتدريب
                                </h4>
                                <p className="text-gray-600">
                                    لا يتم استخدام البيانات في تدريب نماذج الذكاء الاصطناعي
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-green-400">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                    عدم المشاركة مع أطراف ثالثة
                                </h4>
                                <p className="text-gray-600">
                                    لا تتم مشاركة المعلومات مع أطراف ثالثة
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-orange-400">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                    احترام المعايير التنظيمية
                                </h4>
                                <p className="text-gray-600">
                                    احترام صارم لمتطلبات السرية والامتثال
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">احمِ بياناتك القانونية</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        ابدأ العمل في بيئة آمنة ومشفّرة بالكامل
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300"
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
