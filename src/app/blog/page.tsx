import { FileText, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
    // Placeholder blog posts
    const posts = [
        {
            id: 1,
            title: 'مستقبل الذكاء الاصطناعي في المجال القانوني',
            excerpt: 'كيف يغير الذكاء الاصطناعي طريقة عمل المحامين والمهنيين القانونيين...',
            date: 'قريباً',
            author: 'فريق Legal AI',
            category: 'التكنولوجيا القانونية'
        },
        {
            id: 2,
            title: 'أهمية حماية البيانات في العمل القانوني',
            excerpt: 'دليل شامل لحماية خصوصية البيانات القانونية الحساسة...',
            date: 'قريباً',
            author: 'فريق Legal AI',
            category: 'الأمن السيبراني'
        },
        {
            id: 3,
            title: 'كيفية تحسين كفاءة البحث القانوني',
            excerpt: 'نصائح وتقنيات لتسريع عملية البحث والتحليل القانوني...',
            date: 'قريباً',
            author: 'فريق Legal AI',
            category: 'الإنتاجية'
        }
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">المدونة</h1>
                        <p className="text-xl text-blue-50 leading-relaxed">
                            أحدث المقالات والرؤى حول التكنولوجيا القانونية والذكاء الاصطناعي
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Image Placeholder */}
                                    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-48 flex items-center justify-center border-b border-gray-200">
                                        <FileText className="w-12 h-12 text-gray-400" />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                                                {post.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Coming Soon Message */}
                        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-white p-12 rounded-2xl border border-blue-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">قريباً</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                نعمل على إنشاء محتوى قيّم وإضافة مقالات متخصصة في مجال التكنولوجيا القانونية والذكاء الاصطناعي
                            </p>
                        </div>
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
