"use client"

import { useState, useEffect } from "react"
import { Building2, Globe, GraduationCap, Scale, Shield } from "lucide-react"

export default function VideoHero() {
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const words = ["Lawyers", "Education", "Judge", "Legal Practices"]

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
                    <source src="/images/home.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Legal Artificial Intelligence for <br />
                            <span className="text-blue-400 min-h-[1.2em] inline-block">
                                {text}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                            Welcome to the Legal AI platform, the ideal solution for legal practitioners and academics seeking to enhance their efficiency and improve their performance. We offer you a set of advanced tools powered by artificial intelligence to facilitate daily work and improve the quality of legal and academic research.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-20">
                            <a
                                href="/services"
                                className="px-10 py-5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                            >
                                Start Now
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>

                        {/* Trusted By Section */}
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-6">Trusted by organizations worldwide</p>
                            <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-70">
                                <div className="flex items-center gap-2 text-white/80 font-bold text-xl">
                                    <Globe className="w-8 h-8" />
                                    <span>GlobalLaw</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/80 font-bold text-xl">
                                    <Scale className="w-8 h-8" />
                                    <span>JusticeNet</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/80 font-bold text-xl">
                                    <Building2 className="w-8 h-8" />
                                    <span>CorpLegis</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/80 font-bold text-xl">
                                    <GraduationCap className="w-8 h-8" />
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
