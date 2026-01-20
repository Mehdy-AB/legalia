import { blogPosts } from '@/data/blogPosts'
import PageHero from '@/components/PageHero'
import { Calendar, User, Clock, ArrowRight, Share2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'


interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 text-sm font-medium">
                        {post.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-gray-300 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </PageHero>

            {/* Content Section */}
            <article className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 -mt-32 relative z-20 border border-gray-100">

                    {/* Featured Image */}
                    {post.image && (
                        <div className="relative w-full h-64 md:h-96 mb-10 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    )}

                    {/* Post Content */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-li:text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Divider */}
                    <hr className="my-12 border-gray-100" />

                    {/* Footer Actions */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            </div>
                            العودة للمدونة
                        </Link>

                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                            <Share2 className="w-4 h-4" />
                            مشاركة المقال
                        </button>
                    </div>
                </div>
            </article>

            {/* Newsletter / CTA Section could go here */}
        </main>
    )
}
