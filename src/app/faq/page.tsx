"use client"
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'ما هي منصة LegalAI؟',
            answer: 'LegalAI هي منصة تكنولوجية قانونية تعتمد على الذكاء الاصطناعي لدعم التحليل القانوني، صياغة الوثائق، التفاعل مع المستندات، وإعادة تمثيل الوقائع القانونية بصريًا، مع الالتزام بالمعايير المهنية وحماية الخصوصية.'
        },
        {
            question: 'هل تحل LegalAI محل المحامين؟',
            answer: 'لا. LegalAI منصة مساعدة ولا تُعد بديلاً عن المحامي أو القرار البشري. تهدف المنصة إلى دعم المهنيين القانونيين بأدوات تحليل وصياغة وتوضيح تساعدهم على العمل بكفاءة أعلى.'
        },
        {
            question: 'ما الفرق بين الدردشة القانونية الوسيطة والنموذج القانوني الخاص؟',
            answer: 'الدردشة الوسيطة تقوم بتوجيه الطلبات بين عدة نماذج ذكاء اصطناعي لاختيار الأنسب لكل مهمة، بينما تعتمد الدردشة القانونية الخاصة على نموذج قانوني مملوك للمنصة ومهيأ خصيصًا للتحليل والصياغة القانونية المتقدمة.'
        },
        {
            question: 'ما المقصود بإعادة تمثيل الوقائع القانونية بصريًا؟',
            answer: 'هي خدمة تقوم بتحويل البيانات غير المنظمة مثل التقارير والشهادات والأدلة إلى محاكاة بصرية توضّح تسلسل الأحداث، بهدف دعم الفهم والتحليل القانوني وتعزيز قوة الدليل البصري.'
        },
        {
            question: 'من يمكنه استخدام منصة LegalAI؟',
            answer: 'المنصة موجهة للممارسين القانونيين، مكاتب المحاماة، الباحثين القانونيين، الأكاديميين، وطلبة القانون، إضافة إلى الفرق القانونية داخل المؤسسات.'
        },
        {
            question: 'هل تتوافق المنصة مع المعايير الأوروبية والدولية للخصوصية؟',
            answer: 'تم تصميم المنصة وفق مبادئ صارمة لحماية البيانات والحوكمة الرقمية، بما يتماشى مع متطلبات الخصوصية والامتثال المعمول بها في السياق الأوروبي والدولي.'
        },
        {
            question: 'هل تتطلب المنصة خبرة تقنية متقدمة؟',
            answer: 'لا. تم تصميم واجهة LegalAI لتكون بسيطة وسهلة الاستخدام، بحيث يمكن للمهنيين القانونيين الاستفادة من قدراتها دون الحاجة إلى معرفة تقنية متقدمة.'
        },
        {
            question: 'كيف يمكن البدء باستخدام المنصة؟',
            answer: 'يمكن البدء بإنشاء حساب، ثم اختيار الخدمة المناسبة ورفع المستندات أو إدخال الوقائع، لتبدأ المنصة في تقديم الدعم التحليلي والصياغي المطلوب.'
        },
        {
            question: 'كيف يتم حماية بياناتي؟',
            answer: 'نطبق أعلى معايير التشفير والأمان على جميع البيانات. نوفر خدمات بريد إلكتروني مشفّر، VPN آمن، وتخزين سحابي محمي. بياناتك لا تُستخدم في تدريب النماذج ولا تُشارك مع أطراف ثالثة.'
        },
        {
            question: 'ما هو نظام الأرصدة؟',
            answer: 'نظام الأرصدة (Credits) هو نظام تسعير مرن يتيح لك الدفع حسب الاستخدام. كل خدمة لها تكلفة محددة بالأرصدة، ويمكنك شراء الأرصدة حسب احتياجاتك.'
        }
    ]

    return (
        <main className=""min-h-screen>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">الأسئلة الشائعة</h1>
                        <p className="text-xl text-blue-50 leading-relaxed">
                            إجابات على أكثر الأسئلة شيوعاً حول منصة LegalAI
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-6 py-5 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 ml-4">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            {openIndex === index ? (
                                                <ChevronUp className="w-6 h-6 text-blue-600" />
                                            ) : (
                                                <ChevronDown className="w-6 h-6 text-gray-400" />
                                            )}
                                        </div>
                                    </button>

                                    {openIndex === index && (
                                        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl border border-blue-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                لم تجد إجابة لسؤالك؟
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                فريقنا جاهز لمساعدتك والإجابة على جميع استفساراتك
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                            >
                                تواصل معنا
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Resources */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                            موارد إضافية
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/about" className="group">
                                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                                        من نحن
                                    </h3>
                                    <p className="text-gray-600">
                                        تعرف على فريقنا ومهمتنا ورؤيتنا
                                    </p>
                                </div>
                            </Link>

                            <Link href="/services" className="group">
                                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                                        خدماتنا
                                    </h3>
                                    <p className="text-gray-600">
                                        اكتشف جميع الخدمات التي نقدمها
                                    </p>
                                </div>
                            </Link>

                            <Link href="/pricing" className="group">
                                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                                        الأسعار
                                    </h3>
                                    <p className="text-gray-600">
                                        تعرف على خطط الأسعار والباقات
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
