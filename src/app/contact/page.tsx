import PageHero from '@/components/PageHero'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">اتصل بنا</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        نحن هنا للإجابة على أسئلتك ومساعدتك في تحويل عملك القانوني
                    </p>
                </div>
            </PageHero>

            {/* Contact Information & Form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">معلومات الاتصال</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
                                        <a href="mailto:lai-info@proton.me" className="text-blue-600 hover:underline">
                                            lai-info@proton.me
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">الهاتف</h3>
                                        <a href="tel:+213549031698" className="text-blue-600 hover:underline">
                                            +213 549 031 698
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">المكاتب</h3>
                                        <div className="space-y-2 text-gray-600">
                                            <p>🇪🇪 Tallinn, Estonia</p>
                                            <p className="text-sm">Harju maakond, Tallinn, Kesklinna linnaosa, Pärnu mnt 139b, 11317</p>
                                            <p className="mt-3">ⴰⵙⴷⵉⴼ</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 p-4 ">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.9834866434435!2d24.736513900000002!3d59.40848510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294c1134ed73f%3A0x15fcabd9c58e4752!2sP%C3%A4rnu%20mnt.%20139b%2C%2011317%20Tallinn%2C%20Estonia!5e1!3m2!1sen!2sdz!4v1767820230256!5m2!1sen!2sdz" width="100%" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">أرسل لنا رسالة</h2>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                        الاسم الكامل
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="أدخل اسمك الكامل"
                                        dir="rtl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                        البريد الإلكتروني
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="example@email.com"
                                        dir="rtl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                                        رقم الهاتف (اختياري)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="+213 XXX XXX XXX"
                                        dir="rtl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                                        الموضوع
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="موضوع الرسالة"
                                        dir="rtl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                        الرسالة
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                                        placeholder="اكتب رسالتك هنا..."
                                        dir="rtl"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    إرسال الرسالة
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
                    <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                        دعنا نساعدك في تحويل عملك القانوني بقوة الذكاء الاصطناعي
                    </p>
                </div>
            </section>
        </main>
    )
}
