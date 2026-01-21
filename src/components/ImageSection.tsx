import { ImageIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ImageSectionProps {
    title: string
    description: string
    imagePosition?: 'left' | 'right'
    children?: React.ReactNode
    className?: string
}

export default function ImageSection({
    title,
    description,
    imagePosition = 'right',
    children,
    className = ''
}: ImageSectionProps) {
    const t = useTranslations('ImageSection')

    const imageContent = (
        <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-900/10 dark:to-gray-900/10 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 min-h-[400px] relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center z-10">
                <ImageIcon className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4 transition-colors" />
                <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors">{t('placeholder')}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2 transition-colors">{t('pending')}</p>
            </div>
        </div>
    )

    const textContent = (
        <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                {title}
            </h2>
            <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line transition-colors">
                    {description}
                </p>
            </div>
            {children && <div className="mt-6">{children}</div>}
        </div>
    )

    return (
        <section className={`py-16 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {imagePosition === 'left' ? (
                        <>
                            <div>{imageContent}</div>
                            <div>{textContent}</div>
                        </>
                    ) : (
                        <>
                            <div>{textContent}</div>
                            <div>{imageContent}</div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
