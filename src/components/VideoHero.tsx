"use client"

import { useState, useEffect } from "react"
import { Building2, Globe, GraduationCap, Scale } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function VideoHero() {
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)
    const t = useTranslations('HomePage')

    const words = t.raw('heroWords') as string[]

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length
            const fullText = words[i]

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 30 : 150)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500)
            } else if (isDeleting && text === "") {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed, words])

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="https://res.cloudinary.com/dywcowkoy/video/upload/v1768754478/images/home.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay - adjusted for better mobile readability */}
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto md:mx-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            {t('heroTitle')} <br className="hidden md:block" />
                            <span className="text-blue-400 inline-block min-h-[1.2em]">
                                {text}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-2xl">
                            {t('heroDescription')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 text-lg group"
                            >
                                {t('startNow')}
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Trusted By Section */}
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6">{t('trustedBy')}</p>
                            <div className="flex flex-wrap items-center gap-6 sm:gap-10 md:gap-12 opacity-70">
                                <div className="flex items-center gap-2 text-white/80 font-bold text-sm sm:text-lg">
                                    <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span>GlobalLaw</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/80 font-bold text-sm sm:text-lg">
                                    <Scale className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span>JusticeNet</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/80 font-bold text-sm sm:text-lg">
                                    <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span>CorpLegis</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/80 font-bold text-sm sm:text-lg">
                                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span>EduLegal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
