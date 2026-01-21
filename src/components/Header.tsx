"use client"
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations('Header')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('services'), href: '/services' },
    { label: t('blog'), href: '/blog' },
    { label: t('contact'), href: '/contact' },
  ]

  const showBackground = isScrolled || isMenuOpen

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${showBackground
      ? 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <img
                src="/logo.png"
                alt="LegalAI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-xl font-bold transition-colors ${showBackground ? 'text-gray-800 dark:text-white' : 'text-white'}`}>LegalAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${isScrolled
                  ? 'text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400'
                  : 'text-white hover:text-blue-200'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher isScrolled={isScrolled} />
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher isScrolled={showBackground} />
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${showBackground ? 'text-gray-800 dark:text-white' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${showBackground ? 'text-gray-800 dark:text-white' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-400 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400 px-4 py-2 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
