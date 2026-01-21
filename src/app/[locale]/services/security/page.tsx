"use client"
import PageHero from '@/components/PageHero'
import { Link } from '@/i18n/navigation'
import { Shield, Mail, Globe, Cloud, CheckCircle, Lock, Key, Eye, Server } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function SecurityPage() {
    const t = useTranslations('SecurityPage')

    const principleKeys = ['dataControl', 'noTraining', 'noSharing', 'compliance'] as const
    const principleIcons = {
        dataControl: Lock,
        noTraining: Eye,
        noSharing: Key,
        compliance: Server
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Section */}
            <PageHero className="text-white" videoSrc="https://res.cloudinary.com/dywcowkoy/video/upload/v1768750048/images/security-home.mp4">
                <div className="max-w-4xl mx-auto text-center">
                    <Shield className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">{t('subtitle')}</p>
                </div>
            </PageHero>

            {/* Overview Section */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">{t('overview')}</p>

                        {/* Core Functions */}
                        <div className="bg-gradient-to-br from-blue-50 to-amber-50 dark:from-blue-900/20 dark:to-amber-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('coreFunctions')}</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {(t.raw('coreFunctionsList') as string[]).map((func, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{func}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('howItWorks')}</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{t('howItWorksDesc')}</p>
                        <p className="text-gray-600 dark:text-gray-400">{t('howItWorksDesc2')}</p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('servicesTitle')}</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Text Content */}
                        <div className="space-y-16">
                            {/* Email Service */}
                            <div>
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                                    <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-s-4 border-amber-500 ps-4">
                                    {t('emailService.title')}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{t('emailService.desc')}</p>
                                <div className="space-y-3">
                                    {(t.raw('emailService.features') as string[]).map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* VPN Service */}
                            <div>
                                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6">
                                    <Globe className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-s-4 border-blue-500 ps-4">
                                    {t('vpnService.title')}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{t('vpnService.desc')}</p>
                                <div className="space-y-3">
                                    {(t.raw('vpnService.features') as string[]).map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cloud Storage */}
                            <div>
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                                    <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-s-4 border-amber-500 ps-4">
                                    {t('cloudService.title')}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{t('cloudService.desc')}</p>
                                <div className="space-y-3">
                                    {(t.raw('cloudService.features') as string[]).map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Single Image Section */}
                        <div className="sticky top-24">
                            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-700">
                                <img src="/images/scurity.jpg" alt="Security Overview" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-6 text-center">{t('principlesTitle')}</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-12" />

                        <div className="grid md:grid-cols-2 gap-6">
                            {principleKeys.map((key, idx) => {
                                const Icon = principleIcons[key]
                                const colorClass = idx % 2 === 0 ? 'text-amber-400' : 'text-blue-400'
                                return (
                                    <div key={key} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Icon className={`w-6 h-6 ${colorClass}`} />
                                            <h4 className="text-lg font-bold text-white">{t(`principles.${key}.title`)}</h4>
                                        </div>
                                        <p className="text-gray-300">{t(`principles.${key}.desc`)}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Video */}
            <section className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover filter brightness-50">
                        <source src="https://res.cloudinary.com/dywcowkoy/video/upload/v1768749983/images/services-page-howitwork.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
                    <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">{t('ctaSubtitle')}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-lg">
                            {t('contactUs')}
                        </Link>
                        <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30">
                            {t('backToServices')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
