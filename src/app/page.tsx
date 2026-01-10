"use client"
import VideoHero from '@/components/VideoHero'
import ImageSection from '@/components/ImageSection'
import ServicesSection from '@/components/ServicesSection'
import QuotesSection from '@/components/QuotesSection'
import PricingSection from '@/components/PricingSection'
import ModernServiceCard from '@/components/ModernServiceCard'
import Link from 'next/link'
import { ArrowRight, Brain, CheckCircle, Cloud, FileText, Globe, Image as ImageIcon, Mail, Shield, Video } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'

export default function Home() {
  const services = [
    {
      id: 'ai-chat',
      icon: Brain,
      title: 'دردشة ذكاء اصطناعي متعددة النماذج',
      description: 'نظام دردشة قانونية متقدم يعمل عبر نموذج وسيط خاص بالمنصة، يربط بين عدة نماذج ذكاء اصطناعي ويختار الأنسب تلقائياً',
      features: ['التوجيه الذكي للنماذج', 'تحسين جودة الإجابة', 'تصفية البيانات الحساسة'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: '/images/ai-chat.mp4'
    },
    {
      id: 'legal-model',
      icon: FileText,
      title: 'نموذج Legal AI الخاص',
      description: 'نموذج ذكاء اصطناعي قانوني مملوك للمنصة، مصمم خصيصاً للتحليل والصياغة القانونية وإنشاء الوثائق',
      features: ['تحليل الوقائع القانونية', 'صياغة الوثائق', 'قاعدة معرفية واسعة'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: '/images/legal-model.mp4'
    },
    {
      id: 'document-analysis',
      icon: ImageIcon,
      title: 'تحليل المستندات والصور',
      description: 'دردشة مباشرة مع المستندات القانونية والمواد البصرية لفهم الملفات المعقدة بسرعة ودقة',
      features: ['تحليل PDF وWord', 'معالجة الصور', 'مقارنة المستندات'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: '/images/document-analysis.mp4'
    },
    {
      id: 'visual-facts',
      icon: Video,
      title: 'إعادة تمثيل الوقائع بصرياً',
      description: 'تحويل البيانات غير المنظمة والسرديات المعقدة إلى محاكاة بصرية تحاكي تسلسل الأحداث',
      features: ['محاكاة الأحداث', 'اختبار السيناريوهات', 'تعزيز الدليل البصري'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: '/images/visual-facts.mp4'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'الأمن والخصوصية الرقمية',
      description: 'تولي LegalAI أهمية قصوى لحماية البيانات وسرية المعلومات، وتوفر لمستخدميها خدمات رقمية آمنة ، وتشمل:',
      features: ['بريدًا إلكترونيًا مشفرًا ', 'خدمة VPN لحماية الهوية الرقمية ومنع التتبع', 'تخزينًا سحابيًا مشفرًا لحفظ القضايا والملفات الحساسة'],
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
      video: '/images/security-home.mp4'
    }
  ]
  return (
    <main className="min-h-screen">
      {/* Video Hero Section */}
      <VideoHero
      />

      {/* Overview Section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-4xl h-auto mx-auto mt-10 object-cover transform transition-transform duration-700 hover:scale-105"
      >
        <source src="/images/home-2.mp4" type="video/mp4" />
      </video>

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Text Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-bold tracking-wide uppercase">
                    Who we are
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Accelerating Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Mastery</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    By combining deep legal research with cutting-edge innovation, <span className="font-semibold text-gray-900">LegalAI</span> is designed to help legal practitioners develop their expertise faster.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our team is committed to understanding your specific needs and strives to transform the legal profession with smart, AI-powered solutions built to serve your professional and academic needs.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <div className="w-10 h-1 rounded bg-amber-500"></div> Our Mission
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We find that legal work needs to be as dynamic as the world it serves. We leverage the newest AI technologies to turn everyday tasks—research, document management, and drafting—into integrated, intelligent processes. We cut through administrative complexity, uncover profound insights, and concentrate on what really matters: providing outstanding legal services.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <div className="w-10 h-1 rounded bg-slate-800"></div> Our Approach
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      That’s why we take a collaborative approach, working closely with our clients to deliver tailored solutions that align with their goals. With our devotion to accuracy, security, and innovation, we're spearheading a new age of legal excellence.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-3xl font-extrabold text-amber-600">150+</div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Client Served</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div>
                      <div className="text-3xl font-extrabold text-slate-800">98%</div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Success Rate</div>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    More about us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Video Content */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-slate-900/20 rounded-[2.5rem] transform rotate-3 scale-105 blur-2xl"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[500px]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  >
                    <source src="/images/Who-home-page.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none flex items-end p-8">
                    <p className="text-white font-medium">Collaborating to shape the future of law.</p>
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              خدماتنا الرئيسية
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف مجموعة شاملة من الخدمات القانونية المدعومة بالذكاء الاصطناعي
            </p>
            <div className="flex justify-center mb-6">
              <img
                src="/images/خدماتنا الرئيسية.jpg"
                alt="خدماتنا الرئيسية"
                className="w-64 md:w-96 h-auto object-contain"
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
                  <div className={`bg-white rounded-2xl border border-gray-100 shadow-xl h-[300px] md:h-[350px] relative overflow-hidden group hover:border-amber-400/30 transition-colors duration-500`}>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-white border border-amber-200 text-amber-700 rounded-lg font-semibold hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 group`}
                  >
                    اكتشف المزيد
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-semibold mb-4 border border-amber-100">
              المدونة
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              آخر المقالات والرؤى
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تابع أحدث الأخبار والتطورات في عالم التكنولوجيا القانونية
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-amber-400 transition-all duration-300 hover:shadow-xl block h-full"
              >
                <div className={`h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden`}>
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <FileText className="w-16 h-16 text-gray-300 group-hover:text-amber-500 transition-colors duration-500" />
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold mb-3 border border-amber-100">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
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
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-amber-400 hover:text-amber-600 transition-all duration-300"
            >
              عرض جميع المقالات
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold mb-4">
              الأسئلة الشائعة
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              لديك أسئلة؟ لدينا إجابات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              أكثر الأسئلة شيوعاً حول منصة LegalAI
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: 'ما هي منصة LegalAI؟',
                a: 'LegalAI هي منصة تكنولوجية قانونية تعتمد على الذكاء الاصطناعي لدعم التحليل القانوني، صياغة الوثائق، والتفاعل مع المستندات.'
              },
              {
                q: 'هل تحل LegalAI محل المحامين؟',
                a: 'لا. LegalAI منصة مساعدة تهدف إلى دعم المهنيين القانونيين بأدوات تحليل وصياغة تساعدهم على العمل بكفاءة أعلى.'
              },
              {
                q: 'كيف يتم حماية بياناتي؟',
                a: 'نطبق أعلى معايير التشفير والأمان. بياناتك لا تُستخدم في تدريب النماذج ولا تُشارك مع أطراف ثالثة.'
              },
              {
                q: 'من يمكنه استخدام المنصة؟',
                a: 'المنصة موجهة للممارسين القانونيين، مكاتب المحاماة، الباحثين، الأكاديميين، وطلبة القانون.'
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl border border-gray-200 hover:border-amber-400 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors ml-4">
                    {faq.q}
                  </h3>
                  <div className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border border-gray-200 hover:border-amber-400 hover:text-amber-600 transition-all duration-300"
            >
              عرض جميع الأسئلة
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-500">
            جاهز لتحويل عملك القانوني؟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            انضم إلى مئات المحامين والمهنيين القانونيين الذين يستخدمون LegalAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
            >
              ابدأ الآن
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              تعرف علينا أكثر
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}