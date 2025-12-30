import { ImageIcon } from 'lucide-react'

interface ImageSectionProps {
    title: string
    description: string
    imagePosition?: 'left' | 'right'
    imagePlaceholderText?: string
    children?: React.ReactNode
    className?: string
}

export default function ImageSection({
    title,
    description,
    imagePosition = 'right',
    imagePlaceholderText = 'صورة توضيحية',
    children,
    className = ''
}: ImageSectionProps) {
    const imageContent = (
        <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300 min-h-[400px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center z-10">
                <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">{imagePlaceholderText}</p>
                <p className="text-sm text-gray-400 mt-2">سيتم إضافة الصورة لاحقاً</p>
            </div>
        </div>
    )

    const textContent = (
        <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {title}
            </h2>
            <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
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
