"use client"
import PageHero from '@/components/PageHero'
import { FileText, Calendar, User, ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function BlogPage() {
    const t = useTranslations('BlogPage')
    const tPosts = useTranslations('BlogPosts')

    // Define blog post keys
    const blogPostKeys = ['post1', 'post2', 'post3'] as const

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

            {/* Blog Posts */}
            <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    {/* Posts Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {blogPostKeys.map((key) => {
                            const slug = tPosts(`${key}.slug`)
                            const image = tPosts(`${key}.image`)
                            const imageGradient = tPosts(`${key}.imageGradient`)
                            return (
                                <Link href={`/blog/${slug}`} key={key} className="group block h-full">
                                    <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        <div className={`h-48 bg-gradient-to-br ${imageGradient} flex items-center justify-center relative overflow-hidden`}>
                                            {image ? (
                                                <img
                                                    src={image}
                                                    alt={tPosts(`${key}.title`)}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <>
                                                    <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300" />
                                                    <FileText className="w-16 h-16 text-gray-400/50 group-hover:scale-110 transition-transform duration-300" />
                                                </>
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {tPosts(`${key}.date`)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    {tPosts(`${key}.author`)}
                                                </span>
                                            </div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                                {tPosts(`${key}.title`)}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                                                {tPosts(`${key}.excerpt`)}
                                            </p>
                                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-auto group-hover:gap-3 transition-all">
                                                {t('readMore')} <ArrowLeft className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )
                        })}
                    </div>

                    {/* Coming Soon Message */}
                    <div className="text-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-12 rounded-2xl border border-blue-100 dark:border-gray-700 transition-colors">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('comingSoon')}</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {t('comingSoonDesc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 text-white transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">{t('newsletterTitle')}</h2>
                        <p className="text-xl text-blue-50 mb-8">
                            {t('newsletterSubtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder={t('emailPlaceholder')}
                                className="flex-1 px-6 py-4 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-blue-400 border-none"
                            />
                            <button className="px-8 py-4 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                                {t('subscribeNow')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
