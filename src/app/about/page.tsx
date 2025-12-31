import PageHero from '@/components/PageHero'
import ImageSection from '@/components/ImageSection'
import { Target, Users, Eye, Heart, Shield, Scale, Code, Database, Lock } from 'lucide-react'

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        تأسس LegalAI لتلبية الحاجة المتزايدة إلى أدوات ذكية تساعد على التعامل مع تعقيدات العمل القانوني الحديث، نسعى إلى تعزيز كفاءة العمل القانوني، ورفع جودة التحليل والفهم، دون المساس بالدور الجوهري للخبرة القانونية البشرية أو باستقلالية القرار المهني.
                    </p>
                </div>
            </PageHero>

            {/* Transform Work Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                قم بتحويل عملك باستخدام الذكاء الاصطناعي القائم على محتوى موثوق
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                يتم صيانته بواسطة خبراء يركزون على الحد من عدم الدقة والتحيز الخوارزمي. تم تطوير المنصة بواسطة فريق متعدد التخصصات يضم خبراء في القانون والتقنيات الرقمية والذكاء الاصطناعي، ما يضمن مواءمة الحلول التقنية مع المنطق القانوني، وأخلاقيات المهنة، ومتطلبات الامتثال التنظيمي.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                قم بالعمل بثقة مع العلم أن بياناتك الحساسة آمنة وخاصة ولا يتم استخدامها لتدريب نماذج الذكاء الاصطناعي.
                            </p>
                        </div>
                        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10 text-center">
                                <p className="text-xl text-blue-800 font-semibold mb-4">
                                    "نحن نعمل عند تقاطع القانون والتكنولوجيا، حيث يلتقي الفهم القانوني العميق بالخبرة التقنية المتقدمة، بهدف المساهمة في تطوير بيئة قانونية رقمية أكثر كفاءة ووضوحًا واستدامة."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methods Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">منهجنا</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600">
                            يعتمد عمل LegalAI على منهج مسؤول يقوم على مبادئ راسخة
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Users className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">احترام الإنسان</h3>
                            <p className="text-gray-600 text-sm">احترام دور الإنسان والخبرة القانونية كأساس للعمل.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Scale className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">الحياد والشفافية</h3>
                            <p className="text-gray-600 text-sm">الالتزام بالحياد والدقة والشفافية في جميع العمليات.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Shield className="w-10 h-10 text-green-600 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">الامتثال الأخلاقي</h3>
                            <p className="text-gray-600 text-sm">مراعاة الأطر التنظيمية والمعايير الأخلاقية بصرامة.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Target className="w-10 h-10 text-orange-600 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">المساءلة</h3>
                            <p className="text-gray-600 text-sm">بناء تقنيات قابلة للتفسير وقابلة للمساءلة.</p>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <p className="text-lg font-medium text-gray-700 bg-white inline-block px-8 py-3 rounded-full shadow-sm border border-gray-200">
                            نؤمن بأن التكنولوجيا يجب أن تخدم الفهم القانوني، لا أن تحل محله.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-30"></div>
                                <Eye className="w-24 h-24 text-blue-600 relative z-10 mb-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">رؤيتنا</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                نسعى إلى المساهمة في بناء منظومة قانونية رقمية حديثة، يكون فيها الذكاء الاصطناعي أداة دعم وتحليل، وليس بديلاً عن المحامين أو الهيئات القضائية.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                تركّز رؤيتنا على تمكين المهنيين القانونيين من العمل في بيئة رقمية آمنة، واضحة، ومتوافقة مع المعايير الأوروبية والدولية.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            {/* Placeholder for Vision Image */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl h-80 flex items-center justify-center border-2 border-dashed border-gray-200">
                                <span className="text-gray-400 font-medium">صورة توضيحية للرؤية</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">فريق العمل</h2>
                        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            يتكوّن فريق LegalAI من مختصين قانونيين وتقنيين ذوي خبرة، يجمعهم فهم مشترك للتحديات التي تواجه الممارسة القانونية في العصر الرقمي.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-blue-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <Scale className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">القانون والممارسة القانونية</h3>
                            </div>
                            <p className="text-gray-600">خبراء متمرسون في العمل القانوني والتشريعات.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-purple-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Code className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">هندسة البرمجيات والأنظمة</h3>
                            </div>
                            <p className="text-gray-600">مهندسون محترفون لبناء بنية تحتية قوية.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-green-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <Database className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">الذكاء الاصطناعي ومعالجة البيانات</h3>
                            </div>
                            <p className="text-gray-600">علماء بيانات لضمان دقة النماذج وكفاءتها.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-orange-500">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-orange-100 rounded-lg">
                                    <Lock className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">أمن المعلومات وحماية الخصوصية</h3>
                            </div>
                            <p className="text-gray-600">ضمان أمان البيانات وخصوصية المستخدمين.</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-500 mt-8 italic">
                        "يتيح هذا التنوع المعرفي تطوير حلول مدروسة تجمع بين الدقة القانونية والانضباط التقني."
                    </p>
                </div>
            </section>


            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">قيمنا</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"></div>
                        <div className="space-y-4">
                            {[
                                "احترام أخلاقيات المهنة القانونية",
                                "تطوير تقنيات تحترم أثرها القانوني والاجتماعي",
                                "حماية البيانات كأولوية لا كخيار",
                                "دعم القرار البشري لا مصادرته"
                            ].map((value, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <p className="text-lg font-medium text-gray-800">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <Heart className="w-16 h-16 mx-auto mb-6 text-red-500 animate-pulse" />
                    <h2 className="text-4xl font-bold mb-6">التزامنا</h2>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        LegalAI كيان تقني مستقل، لا يقدم استشارات قانونية ملزمة، ولا يتدخل في اتخاذ القرار القضائي أو المهني.
                        <br className="my-4 block" />
                        دورنا يقتصر على البحث والتطوير وبناء أدوات مساعدة تُحسّن جودة العمل القانوني ضمن إطار مؤسسي مسؤول.
                    </p>
                </div>
            </section>
        </main>
    )
}
