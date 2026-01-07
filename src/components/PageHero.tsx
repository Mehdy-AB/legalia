import React from 'react'

interface PageHeroProps {
    children: React.ReactNode
    className?: string
    videoSrc?: string
}

export default function PageHero({ children, className = "", videoSrc = "/home.mp4" }: PageHeroProps) {
    return (
        <section className={`relative py-24 overflow-hidden ${className}`}>
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform scale-105"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
                {/* Modern Overlay - Gradient for better text readability */}
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                {children}
            </div>
        </section>
    )
}
