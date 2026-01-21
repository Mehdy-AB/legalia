"use client"
import PageHero from '@/components/PageHero'
import { Link } from '@/i18n/navigation'
import { Brain, FileText, Image as ImageIcon, Video, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ServicesPage() {
  const t = useTranslations('ServicesPage')
  const tServices = useTranslations('Services')

  const services = [
    {
      id: 'ai-chat',
      key: 'aiChat',
      icon: Brain,
      gradient: 'from-amber-500 to-amber-600',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749672/images/ai-chat.mp4'
    },
    {
      id: 'legal-model',
      key: 'legalModel',
      icon: FileText,
      gradient: 'from-amber-500 to-amber-600',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749753/images/legal-model.mp4'
    },
    {
      id: 'document-analysis',
      key: 'documentAnalysis',
      icon: ImageIcon,
      gradient: 'from-amber-500 to-amber-600',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749683/images/document-analysis.mp4'
    },
    {
      id: 'visual-facts',
      key: 'visualFacts',
      icon: Video,
      gradient: 'from-amber-500 to-amber-600',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768750089/images/visual-facts.mp4'
    },
    {
      id: 'security',
      key: 'security',
      icon: Shield,
      gradient: 'from-amber-500 to-amber-600',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768750048/images/security-home.mp4'
    }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <PageHero className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-200 leading-relaxed font-light">
            {t('subtitle')}
          </p>
        </div>
      </PageHero>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Video Content */}
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl h-[300px] md:h-[350px] relative overflow-hidden group hover:border-amber-400/30 transition-colors duration-500">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {tServices(`${service.key}.title`)}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {tServices(`${service.key}.description`)}
                  </p>
                  <div className="space-y-2 mb-6">
                    {(tServices.raw(`${service.key}.features`) as string[]).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500" />
                        <span className="text-gray-700 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-400 rounded-lg font-semibold hover:bg-amber-50 dark:hover:bg-gray-700 hover:border-amber-300 transition-all duration-300 group"
                  >
                    {t('discoverMore')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 text-white transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            {t('ctaSubtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </main>
  )
}
