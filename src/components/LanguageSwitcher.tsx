"use client"
import { Globe, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { routing, isRtlLocale } from '@/i18n/routing'

const languageNames: Record<string, string> = {
    en: 'English',
    ar: 'العربية',
    fr: 'Français',
    zh: '中文',
    bn: 'বাংলা',
    be: 'Беларуская',
    bg: 'Български',
    ca: 'Català',
    et: 'Eesti',
    nl: 'Nederlands',
    ru: 'Русский',
    es: 'Español',
    pt: 'Português',
    pl: 'Polski',
    de: 'Deutsch',
    sv: 'Svenska'
}

interface LanguageSwitcherProps {
    isScrolled?: boolean
}

export default function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const locale = useLocale()
    const pathname = usePathname()
    const t = useTranslations('Common')

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLocaleChange = (newLocale: string) => {
        // Set the NEXT_LOCALE cookie
        document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`

        // Update the dir attribute on the html element immediately for visual feedback
        const newDir = isRtlLocale(newLocale) ? 'rtl' : 'ltr'
        document.documentElement.setAttribute('dir', newDir)
        document.documentElement.setAttribute('lang', newLocale)

        // Force a full page reload to ensure server-side rendering with new locale
        window.location.reload()

        setIsOpen(false)
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${isScrolled
                    ? 'text-gray-600 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                    }`}
                aria-label={t('selectLanguage')}
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">{languageNames[locale]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 end-0 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[160px] max-h-[300px] overflow-y-auto z-50">
                    {routing.locales.map((loc) => (
                        <button
                            key={loc}
                            onClick={() => handleLocaleChange(loc)}
                            className={`w-full px-4 py-2 text-left text-sm transition-colors ${loc === locale
                                ? 'bg-amber-50 text-amber-700 font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            {languageNames[loc]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
