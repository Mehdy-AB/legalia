import PageHero from '@/components/PageHero'
import { Link } from '@/i18n/navigation'
import PricingSection from '@/components/PricingSection'
import { useTranslations } from 'next-intl'

export default function PricingPage() {
    const t = useTranslations('PricingPage')

    const creditCostKeys = ['legalChat', 'docDrafting', 'docAnalysis', 'visualFacts']

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('heroTitle')}</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        {t('heroSubtitle')}
                    </p>
                </div>
            </PageHero>

            {/* Credit Costs Table */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center flex items-center justify-center gap-3">
                        {t('creditCostsTitle')}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {creditCostKeys.map((catKey, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{t(`categories.${catKey}.title`)}</h3>
                                </div>
                                <div className="p-4 space-y-3">
                                    {(t.raw(`categories.${catKey}.items`) as { name: string, cost: string }[]).map((item, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-gray-50 dark:border-gray-800 last:border-0">
                                            <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                                            <span className="font-bold text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">{item.cost}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reusing the Pricing Section Component */}
            <PricingSection />

            <section className="py-16 bg-gradient-to-br from-gray-900 to-slate-800 dark:from-black dark:to-slate-900 text-white text-center transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">{t('customSolutionTitle')}</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('customSolutionDesc')}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all shadow-lg"
                    >
                        {t('contactSales')}
                    </Link>
                </div>
            </section>
        </main>
    )
}
