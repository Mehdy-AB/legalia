"use client"
import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import NewsletterForm from './NewsletterForm'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const tHeader = useTranslations('Header')

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="relative w-10 h-10">
                <img
                  src="/logo.png"
                  alt="LegalAI Logo"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">LegalAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('companyDescription')}
            </p>
            <NewsletterForm />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('services')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/ai-chat" className="hover:text-blue-400 transition-colors">{t('aiChat')}</Link></li>
              <li><Link href="/services/legal-model" className="hover:text-blue-400 transition-colors">{t('legalModel')}</Link></li>
              <li><Link href="/services/document-analysis" className="hover:text-blue-400 transition-colors">{t('documentAnalysis')}</Link></li>
              <li><Link href="/services/visual-facts" className="hover:text-blue-400 transition-colors">{t('visualFacts')}</Link></li>
              <li><Link href="/services/security" className="hover:text-blue-400 transition-colors">{t('security')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">{tHeader('about')}</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">{tHeader('faq')}</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">{tHeader('pricing')}</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">{tHeader('blog')}</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">{tHeader('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t('contact')}</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400 mt-0.5" />
                <a href="mailto:lai-info@proton.me" className="hover:text-blue-400 transition-colors">
                  lai-info@proton.me
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400 mt-0.5" />
                <a href="tel:+213549031698" className="hover:text-blue-400 transition-colors">
                  +213 549 031 698
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-1">🇪🇪 Tallinn, Estonia</p>
                  <p className="text-xs">Pärnu mnt 139b, 11317</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LegalAI. {t('copyright')}.</p>
          <p className="mt-2">LegalAI is an independent technology entity that does not provide binding legal advice.</p>
        </div>
      </div>
    </footer>
  )
}

