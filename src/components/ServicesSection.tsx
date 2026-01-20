import { MessageSquare, FileText, Eye, Shield, Brain, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ServicesSection() {
  const t = useTranslations('ServicesSection')

  const services = [
    {
      key: 's1',
      icon: MessageSquare
    },
    {
      key: 's2',
      icon: Brain
    },
    {
      key: 's3',
      icon: FileText
    },
    {
      key: 's4',
      icon: Eye
    },
    {
      key: 's5',
      icon: Shield
    },
    {
      key: 's6',
      icon: Zap
    }
  ]

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`${service.key}.title`)}</h3>
              <p className="text-gray-600 mb-4">{t(`${service.key}.description`)}</p>
              <ul className="space-y-2">
                {(t.raw(`${service.key}.features`) as string[]).map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}