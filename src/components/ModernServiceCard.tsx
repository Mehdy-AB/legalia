"use client"
import Link from 'next/link'
import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

interface ModernServiceCardProps {
    href: string
    title: string
    description: string
    gradientFrom: string
    gradientTo: string
    borderColor: string
    icon: LucideIcon
    bgColor: string
    imageSrc?: string
    imageAlt?: string
}

export default function ModernServiceCard({
    href,
    title,
    description,
    gradientFrom,
    gradientTo,
    borderColor,
    icon: Icon,
    bgColor,
    imageSrc,
    imageAlt = title
}: ModernServiceCardProps) {
    return (
        <Link href={href} className="group block h-full">
            <div className={`relative bg-gradient-to-br ${gradientFrom} ${gradientTo} p-8 rounded-3xl border ${borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }} />
                </div>

                {/* Image or Icon */}
                <div className="relative mb-6">
                    {imageSrc ? (
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    ) : (
                        <div className={`w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                            <Icon className="w-10 h-10 text-white" />
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
            </div>
        </Link>
    )
}
