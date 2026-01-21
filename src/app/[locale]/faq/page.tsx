"use client"
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function FAQPage() {
    const t = useTranslations('FAQPage')
    const tCommon = useTranslations('Header')
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
                        <p className="text-xl text-blue-50 leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {faqKeys.map((key, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white ml-4 text-left">
                                            {t(`${key}.question`)}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            {openIndex === index ? (
                                                <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                            ) : (
                                                <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                                            )}
                                        </div>
                                    </button>

                                    {openIndex === index && (
                                        <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4 text-left">
                                            {t(`${key}.answer`)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-12 rounded-2xl border border-blue-100 dark:border-gray-700 transition-colors">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                {t('noAnswer')}
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                {t('teamReady')}
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                            >
                                {tCommon('contact')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Resources */}
            <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                            {t('additionalResources')}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/about" className="group">
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        {tCommon('about')}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {t('aboutDesc')}
                                    </p>
                                </div>
                            </Link>

                            <Link href="/services" className="group">
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        {tCommon('services')}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {t('servicesDesc')}
                                    </p>
                                </div>
                            </Link>

                            <Link href="/pricing" className="group">
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        {tCommon('pricing')}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {t('pricingDesc')}
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
