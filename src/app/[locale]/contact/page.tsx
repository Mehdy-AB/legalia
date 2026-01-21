'use client'

import PageHero from '@/components/PageHero'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { submitToGoogleSheet } from '@/lib/googleSheets'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
    const t = useTranslations('ContactPage')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: null, message: '' })

        const formData = new FormData(e.currentTarget)
        const data = {
            type: 'contact' as const,
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        }

        try {
            await submitToGoogleSheet(data)
            setStatus({ type: 'success', message: t('successMessage') })
            e.currentTarget.reset()
        } catch (error) {
            console.error('Submission error:', error)
            setStatus({ type: 'error', message: t('errorMessage') })
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Section */}
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        {t('subtitle')}
                    </p>
                </div>
            </PageHero>

            {/* Contact Information & Form */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('contactInfo')}</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-colors">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('email')}</h3>
                                        <a href="mailto:lai-info@proton.me" className="text-blue-600 dark:text-blue-400 hover:underline">
                                            lai-info@proton.me
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-colors">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('phone')}</h3>
                                        <a href="tel:+213549031698" className="text-blue-600 dark:text-blue-400 hover:underline">
                                            +213 549 031 698
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-colors">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('offices')}</h3>
                                        <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                            <p>🇪🇪 Tallinn, Estonia</p>
                                            <p className="text-sm">Harju maakond, Tallinn, Kesklinna linnaosa, Pärnu mnt 139b, 11317</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mt-8 p-4 ">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.9834866434435!2d24.736513900000002!3d59.40848510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294c1134ed73f%3A0x15fcabd9c58e4752!2sP%C3%A4rnu%20mnt.%20139b%2C%2011317%20Tallinn%2C%20Estonia!5e1!3m2!1sen!2sdz!4v1767820230256!5m2!1sen!2sdz" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-lg grayscale dark:invert dark:grayscale-0"></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('sendMessage')}</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="name">
                                        {t('fullName')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                                        placeholder={t('fullNamePlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="email">
                                        {t('email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                                        placeholder={t('emailPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="phone">
                                        {t('phoneOptional')}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                                        placeholder="+213 XXX XXX XXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="subject">
                                        {t('subject')}
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                                        placeholder={t('subjectPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="message">
                                        {t('message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 resize-none placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                                        placeholder={t('messagePlaceholder')}
                                    />
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full px-8 py-4 bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <Send className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                                    {loading ? t('sending') : t('sendButton')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 text-white transition-colors duration-300">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
                    <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                        {t('ctaSubtitle')}
                    </p>
                </div>
            </section>
        </main>
    )
}
