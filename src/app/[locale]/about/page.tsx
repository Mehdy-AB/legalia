"use client"
import PageHero from '@/components/PageHero'
import { Target, Users, Eye, Shield, Scale } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
    const t = useTranslations('AboutPage')

    const principleKeys = ['respect', 'neutrality', 'ethics', 'accountability'] as const
    const principleIcons = {
        respect: Users,
        neutrality: Scale,
        ethics: Shield,
        accountability: Target
    }
    const principleColors = {
        respect: 'text-blue-600',
        neutrality: 'text-purple-600',
        ethics: 'text-green-600',
        accountability: 'text-orange-600'
    }

    const teamRoleKeys = ['legal', 'software', 'ai', 'security'] as const
    const teamRoleColors = ['border-blue-500', 'border-purple-500', 'border-green-500', 'border-orange-500']
    const teamRoleImages = [
        '/images/about/القانون والممارسة about pالقانونية.png',
        '/images/about/هندسة البرمجيات about pوالأنظمة.png',
        '/images/about/الذكاء الاصطناعي ومعالجة البيانات about p.png',
        '/images/about/أمن المعلومات about pوحماية الخصوصية.bmp'
    ]

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Section */}
            <PageHero videoSrc="https://res.cloudinary.com/dywcowkoy/video/upload/v1768750171/images/Who-home-page.mp4" className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        {t('heroSubtitle')}
                    </p>
                </div>
            </PageHero>

            {/* Transform Work Section */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                {t('transformTitle')}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                {t('transformDesc1')}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                                {t('transformDesc2')}
                            </p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-900/50 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10 text-center">
                                <p className="text-xl text-blue-800 dark:text-blue-300 font-semibold mb-4">
                                    "{t('transformQuote')}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methods Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('methodologyTitle')}</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            {t('methodologySubtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {principleKeys.map((key) => {
                            const Icon = principleIcons[key]
                            return (
                                <div key={key} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                                    <Icon className={`w-10 h-10 ${principleColors[key]} dark:text-blue-400 mb-4`} />
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t(`principles.${key}.title`)}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t(`principles.${key}.desc`)}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-center mt-10">
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 inline-block px-8 py-3 rounded-full shadow-sm border border-gray-200 dark:border-gray-800">
                            {t('methodologyBelief')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
                                <Eye className="w-24 h-24 text-blue-600 dark:text-blue-500 relative z-10 mb-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('visionTitle')}</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                {t('visionDesc1')}
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {t('visionDesc2')}
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-gray-700/50 transform hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src="/images/about/رؤيتناabout--p.jpg"
                                    alt={t('visionTitle')}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('teamTitle')}</h2>
                        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            {t('teamSubtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {teamRoleKeys.map((key, idx) => (
                            <div key={key} className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 ${teamRoleColors[idx]} text-center`}>
                                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md">
                                    <img
                                        src={teamRoleImages[idx]}
                                        alt={t(`teamRoles.${key}.title`)}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t(`teamRoles.${key}.title`)}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{t(`teamRoles.${key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 dark:text-gray-400 mt-8 italic">
                        "{t('teamQuote')}"
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t('valuesTitle')}</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"></div>
                        <div className="space-y-4">
                            {(t.raw('values') as string[]).map((value, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-black dark:to-blue-950 text-white transition-colors duration-300">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-700/30">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full"
                        >
                            <source src="https://res.cloudinary.com/dywcowkoy/video/upload/v1768749660/images/about/%D8%A7%D9%84%D8%AA%D8%B2%D8%A7%D9%85%D9%86%D8%A7-about-p.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">{t('commitmentTitle')}</h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                        {t('commitmentDesc')}
                    </p>
                </div>
            </section>
        </main>
    )
}
