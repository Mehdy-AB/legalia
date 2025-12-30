"use client"

interface VideoHeroProps {
    videoUrl?: string
    title: string
    subtitle?: string
    description: string
}

export default function VideoHero({
    videoUrl = "/home.mp4",
    title,
    subtitle,
    description
}: VideoHeroProps) {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
                {/* Blur overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        {subtitle && (
                            <p className="text-blue-200 text-lg md:text-xl mb-4 font-medium animate-fade-in">
                                {subtitle}
                            </p>
                        )}
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                            <a
                                href="#services"
                                className="px-8 py-4 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                استكشف الخدمات
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
                            >
                                تواصل معنا
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    )
}
