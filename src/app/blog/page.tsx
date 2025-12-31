import PageHero from '@/components/PageHero'
import { FileText, Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero className="text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">المدونة</h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-light">
                        أحدث المقالات والرؤى حول التكنولوجيا القانونية والذكاء الاصطناعي
                    </p>
                </div>
            </PageHero>

            {/* Blog Posts */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Posts Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group block h-full">
                                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className={`h-48 bg-gradient-to-br ${post.imageGradient} flex items-center justify-center relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300" />
                                        <FileText className="w-16 h-16 text-gray-400/50 group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-blue-600 font-medium mt-auto group-hover:gap-3 transition-all">
                                            اقرأ المزيد <ArrowLeft className="w-4 h-4" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Coming Soon Message */}
                    <div className="text-center bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl border border-blue-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">قريباً</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            نعمل على إنشاء محتوى قيّم وإضافة مقالات متخصصة في مجال التكنولوجيا القانونية والذكاء الاصطناعي
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">اشترك في النشرة الإخبارية</h2>
                        <p className="text-xl text-blue-50 mb-8">
                            احصل على آخر التحديثات والمقالات مباشرة في بريدك الإلكتروني
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                                dir="rtl"
                            />
                            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                                اشترك الآن
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
