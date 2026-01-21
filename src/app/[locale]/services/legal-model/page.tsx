"use client"
import PageHero from '@/components/PageHero'
import { Link } from '@/i18n/navigation'
import { Brain, PenTool, FileText, RefreshCw, BookOpen, Scale, Sparkles, Database, GraduationCap, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function LegalModelPage() {
    const t = useTranslations('LegalModelPage')

    const functionKeys = ['analysis', 'drafting', 'templates', 'rewriting', 'research', 'context'] as const
    const functionIcons = {
        analysis: Brain,
        drafting: PenTool,
        templates: FileText,
        rewriting: RefreshCw,
        research: BookOpen,
        context: Scale
    }

    const featureKeys = ['specialized', 'knowledge', 'precision', 'updates', 'support', 'timeSaving'] as const
    const featureIcons = {
        specialized: Sparkles,
        knowledge: Database,
        precision: PenTool,
        updates: RefreshCw,
        support: GraduationCap,
        timeSaving: Clock
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Section */}
            <PageHero className="text-white" videoSrc="https://res.cloudinary.com/dywcowkoy/video/upload/v1768749753/images/legal-model.mp4">
                <div className="max-w-4xl mx-auto text-center">
                    <Brain className="w-20 h-20 mx-auto mb-6 text-amber-400" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>
            </PageHero>

            {/* Main Description */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-amber-50 to-blue-50 dark:from-amber-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 border border-amber-100 dark:border-amber-900/30 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-s-4 border-amber-500 ps-4">
                                {t('mainDescTitle')}
                            </h2>
                            <div className="flex justify-center mb-8">
                                <img
                                    src="/images/الدردشة القانونية بنموذج Legal AI        الخاص.jpg"
                                    alt="Legal AI Model"
                                    className="w-full max-w-2xl h-auto object-cover rounded-xl shadow-md"
                                />
                            </div>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-loose mb-6">
                                {t('mainDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('howItWorks')}</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            {(t.raw('howItWorksSteps') as string[]).map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:translate-x-2"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed pt-2">
                                        {step}
                                    </p>
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

            {/* Core Functions */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('coreFunctions')}</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {functionKeys.map((key) => {
                            const Icon = functionIcons[key]
                            return (
                                <div
                                    key={key}
                                    className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-2 h-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t(`functions.${key}.title`)}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{t(`functions.${key}.desc`)}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Features */}
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
                                <div
                                    key={key}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
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
                            {t('tryService')}
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
