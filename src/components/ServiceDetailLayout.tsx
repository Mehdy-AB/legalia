import { ImageIcon, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ServiceDetailLayoutProps {
    title: string
    subtitle: string
    description: string
    extendedDescription?: string
    imageSrc?: string
    imageAlt?: string
    themeColor?: 'blue' | 'purple' | 'green' | 'orange' | 'gray' | 'gold'
    howItWorks: {
        title: string
        steps: string[]
        imagePlaceholder?: string
    }
    features: string[]
    benefits: string[]
    useCases?: string[]
}

const themeStyles = {
    blue: {
        gradient: 'from-blue-600 via-blue-500 to-blue-400',
        lightGradient: 'from-blue-50 to-white',
        border: 'border-blue-500',
        text: 'text-blue-600',
        bg: 'bg-blue-400',
        icon: 'text-blue-400',
        benefitIcon: 'text-green-500',
        button: 'bg-blue-600 hover:bg-blue-700',
        ctaGradient: 'from-blue-600 to-blue-500'
    },
    purple: {
        gradient: 'from-purple-600 via-purple-500 to-purple-400',
        lightGradient: 'from-purple-50 to-white',
        border: 'border-purple-500',
        text: 'text-purple-600',
        bg: 'bg-purple-400',
        icon: 'text-purple-400',
        benefitIcon: 'text-green-500',
        button: 'bg-purple-600 hover:bg-purple-700',
        ctaGradient: 'from-purple-600 to-purple-500'
    },
    green: {
        gradient: 'from-green-600 via-green-500 to-green-400',
        lightGradient: 'from-green-50 to-white',
        border: 'border-green-500',
        text: 'text-green-600',
        bg: 'bg-green-400',
        icon: 'text-green-400',
        benefitIcon: 'text-green-500',
        button: 'bg-green-600 hover:bg-green-700',
        ctaGradient: 'from-green-600 to-green-500'
    },
    orange: {
        gradient: 'from-orange-600 via-orange-500 to-orange-400',
        lightGradient: 'from-orange-50 to-white',
        border: 'border-orange-500',
        text: 'text-orange-600',
        bg: 'bg-orange-400',
        icon: 'text-orange-400',
        benefitIcon: 'text-green-500',
        button: 'bg-orange-600 hover:bg-orange-700',
        ctaGradient: 'from-orange-600 to-orange-500'
    },
    gray: {
        gradient: 'from-gray-700 via-gray-600 to-gray-500',
        lightGradient: 'from-gray-50 to-white',
        border: 'border-gray-700',
        text: 'text-gray-700',
        bg: 'bg-gray-700',
        icon: 'text-gray-700',
        benefitIcon: 'text-green-500',
        button: 'bg-gray-700 hover:bg-gray-800',
        ctaGradient: 'from-gray-800 to-gray-700'
    },
    gold: {
        gradient: 'from-amber-600 via-amber-500 to-amber-400',
        lightGradient: 'from-amber-50 to-white',
        border: 'border-amber-500',
        text: 'text-amber-700',
        bg: 'bg-amber-500',
        icon: 'text-amber-500',
        benefitIcon: 'text-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700',
        ctaGradient: 'from-slate-800 to-slate-900'
    }
}

export default function ServiceDetailLayout({
    title,
    subtitle,
    description,
    extendedDescription,
    imageSrc,
    imageAlt = 'Service Illustration',
    themeColor = 'blue',
    howItWorks,
    features,
    benefits,
    useCases = []
}: ServiceDetailLayoutProps) {
    const theme = themeStyles[themeColor]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className={`bg-gradient-to-br ${theme.gradient} text-white py-20`}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-blue-100 text-lg mb-4 font-medium">{subtitle}</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto">
                            {description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Image & Extended Description */}
            <section className="py-16 -mt-10 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white mb-16">
                            {imageSrc ? (
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px]">
                                    <div className="text-center">
                                        <ImageIcon className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                                        <p className="text-gray-500 font-medium text-lg">صورة توضيحية للخدمة</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {extendedDescription && (
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                                <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>نظرة عميقة على الخدمة</h3>
                                <div className="text-gray-700 text-lg leading-loose space-y-6">
                                    {extendedDescription.split('\n').map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                <span className={`border-r-4 ${theme.border} pr-4 inline-block`}>{howItWorks.title}</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                {howItWorks.steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-x-2"
                                    >
                                        <div className={`flex-shrink-0 w-12 h-12 ${theme.bg} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md`}>
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 text-lg leading-relaxed pt-2">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Process Image Placeholder */}
                            <div className="relative">
                                <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-200 aspect-[4/3] flex items-center justify-center overflow-hidden group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.lightGradient} opacity-50`} />
                                    <div className="relative text-center p-8">
                                        <div className={`w-20 h-20 ${theme.bg} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <ImageIcon className={`w-10 h-10 ${theme.icon}`} />
                                        </div>
                                        <p className="text-gray-500 font-medium text-lg mb-2">مخطط سير العمليات</p>
                                        <p className="text-sm text-gray-400">{howItWorks.imagePlaceholder || "مساحة مخصصة لرسم توضيحي للعملية"}</p>
                                    </div>
                                </div>
                                <div className={`absolute -bottom-6 -left-6 w-24 h-24 ${theme.bg} rounded-full opacity-10 blur-2xl z-0`} />
                                <div className={`absolute -top-6 -right-6 w-32 h-32 ${theme.bg} rounded-full opacity-10 blur-3xl z-0`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Features */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-r-4 border-gray-300 pr-4">
                                    محاور الخدمة التقنية
                                </h2>
                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4"
                                        >
                                            <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 mt-1`}>
                                                <CheckCircle className={`w-5 h-5 ${theme.icon}`} />
                                            </div>
                                            <p className="text-gray-700 font-medium pt-1">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h2 className={`text-3xl font-bold text-gray-900 mb-8 border-r-4 ${theme.border} pr-4`}>
                                    القيمة المضافة
                                </h2>
                                <div className="space-y-6">
                                    {benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                                                <CheckCircle className={`w-5 h-5 ${theme.benefitIcon}`} />
                                            </div>
                                            <p className="text-gray-700 font-medium pt-1">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            {useCases.length > 0 && (
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                <span className={`border-r-4 ${theme.border} pr-4 inline-block`}>تطبيقات عملية</span>
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {useCases.map((useCase, index) => (
                                    <div
                                        key={index}
                                        className={`group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
                                    >
                                        <div className={`absolute top-0 right-0 w-2 h-full ${theme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        <p className="text-gray-800 font-medium text-lg leading-relaxed relative z-10">{useCase}</p>
                                        <div className={`absolute -bottom-10 -left-10 w-24 h-24 ${theme.bg} rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className={`py-20 bg-gradient-to-br ${theme.ctaGradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        ارتقِ بممارستك القانونية اليوم
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        فريقنا جاهز لتخصيص هذه الخدمة لتناسب احتياجات مؤسستك
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            احجز استشارة مجانية
                        </Link>
                        <Link
                            href="/services"
                            className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 border border-white/20"
                        >
                            تصفح باقي الخدمات
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
