"use client"
import PageHero from '@/components/PageHero'
import { Link } from '@/i18n/navigation'
import { FileText, MessageSquare, Search, Image as ImageIcon, GitCompare, Lock, CheckCircle, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function DocumentAnalysisPage() {
    const t = useTranslations('DocumentAnalysisPage')

    const featureKeys = ['directChat', 'fastAnalysis', 'smartExtraction', 'visualAnalysis', 'comparison', 'dataControl'] as const
    const featureIcons = {
        directChat: MessageSquare,
        fastAnalysis: Search,
        smartExtraction: Sparkles,
        visualAnalysis: ImageIcon,
        comparison: GitCompare,
        dataControl: Lock
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Section */}
            <PageHero className="text-white" videoSrc="https://res.cloudinary.com/dywcowkoy/video/upload/v1768749683/images/document-analysis.mp4">
                <div className="max-w-4xl mx-auto text-center">
                    <FileText className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">{t('subtitle')}</p>
                </div>
            </PageHero>

            {/* Main Description */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-amber-50 to-blue-50 dark:from-amber-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 border border-amber-100 dark:border-amber-900/30 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-s-4 border-amber-500 ps-4">{t('mainDescTitle')}</h2>
                            <div className="flex justify-center mb-8">
                                <img src="/images/دردشة مخصصة للمستندات والصورp.jpg" alt="Document Analysis" className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-md" />
                            </div>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-loose mb-6">{t('mainDesc')}</p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-loose">{t('mainDesc2')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Formats */}
            <section className="py-16 bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('designedFor')}</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('legalDocs')}</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">{t('legalDocsFormats')}</p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                                        <ImageIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('visualEvidence')}</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">{t('visualFormats')}</p>
                            </div>
                        </div>

                        {/* Capabilities */}
                        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t('capabilities')}</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {(t.raw('capabilitiesList') as string[]).map((cap, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{cap}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('howItWorks')}</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            {(t.raw('howItWorksSteps') as string[]).map((step, index) => (
                                <div key={index} className="flex items-start gap-6 bg-gradient-to-r from-slate-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed pt-2">{step}</p>
                                </div>
                            ))}
                        </div>

                        {/* How It Works Video */}
                        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('features')}</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featureKeys.map((key) => {
                            const Icon = featureIcons[key]
                            return (
                                <div key={key} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t(`featuresList.${key}.title`)}</h3>
                                    <p className="text-gray-300">{t(`featuresList.${key}.desc`)}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Footer Video */}
            <section className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover filter brightness-50">
                        <source src="https://res.cloudinary.com/dywcowkoy/video/upload/v1768750193/images/services-pages-footer.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
                    <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">{t('ctaSubtitle')}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-lg">
                            {t('startNow')}
                        </Link>
                        <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30">
                            {t('browseServices')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
