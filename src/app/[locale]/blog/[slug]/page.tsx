"use client"
import { Link } from '@/i18n/navigation'
import PageHero from '@/components/PageHero'
import { Calendar, User, Clock, ArrowRight, Share2 } from 'lucide-react'
import { notFound, useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function BlogPostPage() {
    const t = useTranslations('BlogSlugPage')
    const tPosts = useTranslations('BlogPosts')
    const params = useParams()
    const slug = params.slug as string

    // Find the post key by matching slug
    const blogPostKeys = ['post1', 'post2', 'post3'] as const
    let postKey: typeof blogPostKeys[number] | null = null

    for (const key of blogPostKeys) {
        if (tPosts(`${key}.slug`) === slug) {
            postKey = key
            break
        }
    }

    if (!postKey) {
        notFound()
    }

    const title = tPosts(`${postKey}.title`)
    const category = tPosts(`${postKey}.category`)
    const date = tPosts(`${postKey}.date`)
    const author = tPosts(`${postKey}.author`)
    const readTime = tPosts(`${postKey}.readTime`)
    const content = tPosts.raw(`${postKey}.content`) as string

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Hero Section */}
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-sm font-medium">
                        {category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            {date}
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            {author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {readTime}
                        </span>
                    </div>
                </div>
            </PageHero>

            {/* Content Section */}
            <article className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 -mt-32 relative z-20 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                    {/* Post Content */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-700 dark:hover:prose-a:text-blue-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />

                    {/* Divider */}
                    <hr className="my-12 border-gray-100 dark:border-gray-800" />

                    {/* Footer Actions */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            </div>
                            {t('backToBlog')}
                        </Link>

                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                            <Share2 className="w-4 h-4" />
                            {t('shareArticle')}
                        </button>
                    </div>
                </div>
            </article>
        </main>
    )
}
