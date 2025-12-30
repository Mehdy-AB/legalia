import ImageSection from '@/components/ImageSection'
import { Target, Users, Eye, Heart } from 'lucide-react'

export default function AboutPage() {
    return (
        <main className="min-h-screen
        ">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن</h1>
                        <p className="text-xl text-blue-50 leading-relaxed">
                            تأسس LegalAI لتلبية الحاجة المتزايدة إلى أدوات ذكية تساعد على التعامل مع تعقيدات العمل القانوني الحديث
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <ImageSection
                title="تسريع الإتقان المهني"
                description="من خلال الجمع بين البحث القانوني المعمق والابتكار المتطور، صُممت تقنيات الذكاء الاصطناعي القانوني لمساعدة الممارسين القانونيين على تطوير خبراتهم بشكل أسرع.

يلتزم فريقنا بفهم احتياجاتكم الخاصة، ويسعى جاهداً لإحداث نقلة نوعية من خلال حلول ذكية مدعومة بالذكاء الاصطناعي، مصممة خصيصاً لتلبية احتياجاتكم المهنية والأكاديمية."
                imagePlaceholderText="صورة الفريق"
                imagePosition="right"
                className="bg-white"
            />

            {/* Mission, Approach, Vision */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">مهمتنا</h3>
                            <p className="text-gray-600 leading-relaxed">
                                نؤمن بأن العمل القانوني يجب أن يكون ديناميكياً بقدر ديناميكية العالم الذي يخدمه. نستفيد من أحدث تقنيات الذكاء الاصطناعي لتحويل المهام اليومية إلى عمليات متكاملة وذكية.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">نهجنا</h3>
                            <p className="text-gray-600 leading-relaxed">
                                نعتمد نهجًا تشاركيًا يقوم على التعاون الوثيق مع المستخدمين، لفهم احتياجاتهم بدقة وسياق عملهم القانوني، مع الالتزام بالمعايير القانونية ومتطلبات الجودة.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
                            <p className="text-gray-600 leading-relaxed">
                                نسعى إلى المساهمة في بناء منظومة قانونية رقمية حديثة، يكون فيها الذكاء الاصطناعي أداة دعم وتحليل، وليس بديلاً عن المحامين أو الهيئات القضائية.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">فريق العمل</h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-12" />
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            يتكوّن فريق LegalAI من مختصين قانونيين وتقنيين ذوي خبرة، يجمعهم فهم مشترك للتحديات التي تواجه الممارسة القانونية في العصر الرقمي.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-gray-900 mb-2">القانون والممارسة القانونية</h4>
                                <p className="text-gray-600">خبراء في الممارسة القانونية والبحث القانوني</p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                                <h4 className="font-bold text-gray-900 mb-2">هندسة البرمجيات والأنظمة</h4>
                                <p className="text-gray-600">مطورون ومهندسون متخصصون</p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                                <h4 className="font-bold text-gray-900 mb-2">الذكاء الاصطناعي ومعالجة البيانات</h4>
                                <p className="text-gray-600">خبراء في تقنيات الذكاء الاصطناعي</p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                                <h4 className="font-bold text-gray-900 mb-2">أمن المعلومات وحماية الخصوصية</h4>
                                <p className="text-gray-600">متخصصون في الأمن السيبراني</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">قيمنا</h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-12" />

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-blue-400">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">احترام أخلاقيات المهنة القانونية</h4>
                                <p className="text-gray-600">الالتزام الكامل بالمعايير المهنية والأخلاقية</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-purple-400">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">تطوير تقنيات مسؤولة</h4>
                                <p className="text-gray-600">تطوير تقنيات تحترم أثرها القانوني والاجتماعي</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-green-400">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">حماية البيانات كأولوية</h4>
                                <p className="text-gray-600">حماية البيانات كأولوية لا كخيار</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-orange-400">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">دعم القرار البشري</h4>
                                <p className="text-gray-600">دعم القرار البشري لا مصادرته</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Heart className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-6">التزامنا</h2>
                        <p className="text-xl text-blue-50 leading-relaxed">
                            LegalAI كيان تقني مستقل، لا يقدم استشارات قانونية ملزمة، ولا يتدخل في اتخاذ القرار القضائي أو المهني. دورنا يقتصر على البحث والتطوير وبناء أدوات مساعدة تُحسّن جودة العمل القانوني ضمن إطار مؤسسي مسؤول.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
