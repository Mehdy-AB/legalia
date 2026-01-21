"use client"
import VideoHero from '@/components/VideoHero'
import ImageSection from '@/components/ImageSection'
import ServicesSection from '@/components/ServicesSection'
import QuotesSection from '@/components/QuotesSection'
import PricingSection from '@/components/PricingSection'
import ModernServiceCard from '@/components/ModernServiceCard'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Brain, CheckCircle, Cloud, FileText, Globe, Image as ImageIcon, Mail, Shield, Video } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')
  const tServices = useTranslations('Services')
  const tFaq = useTranslations('FAQ')

  const services = [
    {
      id: 'ai-chat',
      key: 'aiChat',
      icon: Brain,
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749672/images/ai-chat.mp4'
    },
    {
      id: 'legal-model',
      key: 'legalModel',
      icon: FileText,
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749753/images/legal-model.mp4'
    },
    {
      id: 'document-analysis',
      key: 'documentAnalysis',
      icon: ImageIcon,
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768749683/images/document-analysis.mp4'
    },
    {
      id: 'visual-facts',
      key: 'visualFacts',
      icon: Video,
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768750089/images/visual-facts.mp4'
    },
    {
      id: 'security',
      key: 'security',
      icon: Shield,
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: 'https://res.cloudinary.com/dywcowkoy/video/upload/v1768750048/images/security-home.mp4'
    }
  ]

  const faqs = ['q1', 'q2', 'q3', 'q4']

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Video Hero Section */}
      <VideoHero />

      {/* Overview Section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-4xl h-auto mx-auto mt-10 object-cover transform transition-transform duration-700 hover:scale-105"
      >
        <source src="https://res.cloudinary.com/dywcowkoy/video/upload/v1768749688/images/home-2.mp4" type="video/mp4" />
      </video>

      {/* Mission Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 dark:invert" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Text Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full text-sm font-bold tracking-wide uppercase transition-colors duration-300">
                    {t('whoWeAre')}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    {t('acceleratingMastery')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600">{t('masteryHighlight')}</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                    {t('missionIntro')}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('missionDetail')}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-10 h-1 rounded bg-amber-500"></div> {t('ourMission')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('ourMissionText')}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-10 h-1 rounded bg-slate-800 dark:bg-slate-700"></div> {t('ourApproach')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('ourApproachText')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-500">150+</div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t('clientsServed')}</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                    <div>
                      <div className="text-3xl font-extrabold text-slate-800 dark:text-gray-200">98%</div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t('successRate')}</div>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-amber-600 text-white rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-amber-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {t('moreAboutUs')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Video Content */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-slate-900/20 dark:from-amber-500/10 dark:to-slate-900/40 rounded-[2.5rem] transform rotate-3 scale-105 blur-2xl"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 dark:border-gray-700/50 h-[500px]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  >
                    <source src="https://res.cloudinary.com/dywcowkoy/video/upload/v1768750171/images/Who-home-page.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none flex items-end p-8">
                    <p className="text-white font-medium">{t('collaborating')}</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50 dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              {t('mainServices')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('discoverServices')}
            </p>
            <div className="flex justify-center mb-6">
              <img
                src="/images/خدماتنا الرئيسية.jpg"
                alt={t('mainServices')}
                className="w-64 md:w-96 h-auto object-contain dark:opacity-80 dark:hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Video Content */}
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl h-[300px] md:h-[350px] relative overflow-hidden group hover:border-amber-400/30 transition-colors duration-500`}>
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
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-400 rounded-lg font-semibold hover:bg-amber-50 dark:hover:bg-gray-700 hover:border-amber-300 transition-all duration-300 group`}
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

      {/* Quotes Section */}
      <QuotesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Blog Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 rounded-full text-sm font-semibold mb-4 border border-amber-100 dark:border-amber-800">
              {t('blog')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('latestArticles')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('followNews')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 hover:shadow-xl block h-full"
              >
                <div className={`h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden`}>
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <FileText className="w-16 h-16 text-gray-300 dark:text-gray-500 group-hover:text-amber-500 transition-colors duration-500" />
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-semibold mb-3 border border-amber-100 dark:border-amber-800">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto">
                    <span>{post.date}</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform text-amber-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
            >
              {t('viewAllArticles')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-slate-50 dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-sm font-semibold mb-4">
              {t('faq')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('haveQuestions')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('commonQuestions')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((key, index) => (
              <details key={index} className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors ml-4">
                    {tFaq(`${key}`)}
                  </h3>
                  <div className="w-6 h-6 text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                  {tFaq(`a${key.substring(1)}`)}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-xl font-semibold border border-gray-200 dark:border-gray-800 hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
            >
              {t('viewAllQuestions')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 dark:bg-gray-950 text-white transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500">
            {t('readyToTransform')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('joinHundreds')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
            >
              {t('startNow')}
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}