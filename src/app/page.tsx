"use client"
import VideoHero from '@/components/VideoHero'
import ImageSection from '@/components/ImageSection'
import ServicesSection from '@/components/ServicesSection'
import QuotesSection from '@/components/QuotesSection'
import ModernServiceCard from '@/components/ModernServiceCard'
import Link from 'next/link'
import { Brain, FileText, Image as ImageIcon, Shield, Video } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Video Hero Section */}
      <VideoHero
        title="Legal AI"
        subtitle="منصة قانونية ذكية"
        description="منصة قانونية ذكية تجمع بين التحليل القانوني المتقدم، الصياغة الدقيقة، والتمثيل البصري للوقائع، مدعومة ببنية ذكاء اصطناعي متعددة النماذج ونموذج قانوني خاص بالمنصة."
      />

      {/* Overview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              نُحوِّل النصوص والبيانات غير المنظمة إلى فهم واضح
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              نُحوّل النصوص والبيانات غير المنظمة إلى فهم واضح، مستندات احترافية، ومحاكاة بصرية تجعل الحقيقة مرئية، مع توفير أعلى معايير الخصوصية والأمن الرقمي عبر خدمات مشفّرة للبريد الإلكتروني، الاتصال، والتخزين السحابي.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <ImageSection
        title="تسريع الإتقان المهني"
        description="من خلال الجمع بين البحث القانوني المعمق والابتكار المتطور، صُممت تقنيات الذكاء الاصطناعي القانوني لمساعدة الممارسين القانونيين على تطوير خبراتهم بشكل أسرع.

يلتزم فريقنا بفهم احتياجاتكم الخاصة، ويسعى جاهداً لإحداث نقلة نوعية من خلال حلول ذكية مدعومة بالذكاء الاصطناعي، مصممة خصيصاً لتلبية احتياجاتكم المهنية والأكاديمية."
        imagePlaceholderText="صورة الفريق والتطوير"
        imagePosition="left"
        className="bg-gray-50"
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              خدماتنا الرئيسية
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف مجموعة شاملة من الخدمات القانونية المدعومة بالذكاء الاصطناعي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Service 1 - AI Chat */}
            <ModernServiceCard
              href="/services/ai-chat"
              title="دردشة ذكاء اصطناعي متعددة"
              description="نظام دردشة قانونية متقدم يربط بين عدة نماذج ذكاء اصطناعي"
              gradientFrom="from-blue-50"
              gradientTo="to-blue-100"
              borderColor="border-blue-200"
              icon={Brain}
              bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
              imageSrc="/images/ai-chat.png"
              imageAlt="الدردشة الذكاء الاصطناعي"
            />

            {/* Service 2 - Legal Model */}
            <ModernServiceCard
              href="/services/legal-model"
              title="نموذج Legal AI الخاص"
              description="نموذج قانوني مملوك للتحليل والصياغة القانونية المتقدمة"
              gradientFrom="from-purple-50"
              gradientTo="to-purple-100"
              borderColor="border-purple-200"
              icon={FileText}
              bgColor="bg-gradient-to-br from-purple-500 to-purple-600"
              imageSrc="/images/legal-model.png"
              imageAlt="النموذج القانوني"
            />

            {/* Service 3 - Document Analysis */}
            <ModernServiceCard
              href="/services/document-analysis"
              title="تحليل المستندات والصور"
              description="دردشة مباشرة مع المستندات القانونية والمواد البصرية"
              gradientFrom="from-green-50"
              gradientTo="to-green-100"
              borderColor="border-green-200"
              icon={ImageIcon}
              bgColor="bg-gradient-to-br from-green-500 to-green-600"
              imageSrc="/images/document-analysis.png"
              imageAlt="تحليل المستندات"
            />

            {/* Service 4 - Visual Facts */}
            <ModernServiceCard
              href="/services/visual-facts"
              title="التمثيل البصري للوقائع"
              description="تحويل الوقائع القانونية إلى محاكاة بصرية متسلسلة"
              gradientFrom="from-orange-50"
              gradientTo="to-orange-100"
              borderColor="border-orange-200"
              icon={Video}
              bgColor="bg-gradient-to-br from-orange-500 to-orange-600"
              imageSrc="/images/visual-facts.png"
              imageAlt="التمثيل البصري للوقائع"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover-lift transition-all duration-300"
            >
              عرض جميع الخدمات →
            </Link>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                الأمن والخصوصية الرقمية
              </h2>
              <p className="text-xl text-gray-300">
                نحن نولي أهمية قصوى لحماية بياناتك وسرية معلوماتك
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4 border-r-4 border-blue-400 pr-4">بريد مشفّر</h3>
                <p className="text-gray-300 leading-relaxed">
                  خدمة بريد إلكتروني مشفّرة بالكامل للتواصل القانوني الحساس
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4 border-r-4 border-purple-400 pr-4">VPN آمن</h3>
                <p className="text-gray-300 leading-relaxed">
                  حماية الهوية الرقمية ومنع التتبع لبيئة عمل آمنة
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4 border-r-4 border-green-400 pr-4">تخزين مشفّر</h3>
                <p className="text-gray-300 leading-relaxed">
                  تخزين سحابي مشفّر لحفظ القضايا والملفات الحساسة
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services/security"
                className="inline-block px-8 py-4 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300"
              >
                اكتشف المزيد عن الأمان
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <QuotesSection />

      {/* About Preview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  من نحن
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  نجمع بين الخبرة القانونية والابتكار التقني
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  فريق متعدد التخصصات من خبراء القانون ومطوري الذكاء الاصطناعي، نعمل على بناء منظومة قانونية رقمية حديثة تحترم دور الإنسان ولا تحل محله.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                    <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">خصوصية البيانات</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">دعم متواصل</div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
                >
                  اقرأ المزيد عن فريقنا
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-blue-200 group hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">صورة الفريق</p>
                  </div>
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              الأسعار
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              خطط مرنة لكل احتياج
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نظام تسعير قائم على الأرصدة يمنحك المرونة الكاملة
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover-lift">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">الأساسية</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">قريباً</span>
                </div>
                <p className="text-gray-600 mb-6">للاستخدام الشخصي والمحامين الأفراد</p>
                <ul className="space-y-3 mb-8 text-right">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">100 رصيد شهرياً</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">جميع الخدمات الأساسية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">دعم فني</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan - Featured */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden transform md:-translate-y-4 hover-lift">
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold">
                الأكثر شعبية
              </div>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity" />
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold mb-2">الاحترافية</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">قريباً</span>
                </div>
                <p className="text-blue-100 mb-6">للمكاتب القانونية والشركات</p>
                <ul className="space-y-3 mb-8 text-right">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>500 رصيد شهرياً</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>جميع الخدمات المتقدمة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>دعم أولوية 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>تحليلات متقدمة</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 hover-lift">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">المؤسسات</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">مخصص</span>
                </div>
                <p className="text-gray-600 mb-6">للمؤسسات الكبيرة والهيئات</p>
                <ul className="space-y-3 mb-8 text-right">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">أرصدة غير محدودة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">حلول مخصصة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">مدير حساب مخصص</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover-lift transition-all duration-300"
            >
              عرض جميع الخطط والأسعار
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
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
            {/* Blog Post 1 - Blue */}
            <div className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-blue-400 transition-all duration-300 hover-lift">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-3">
                  التكنولوجيا
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  مستقبل الذكاء الاصطناعي في المجال القانوني
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  قريباً - نعمل على إضافة محتوى قيّم ومتخصص...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>قريباً</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Blog Post 2 - Green */}
            <div className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-blue-400 transition-all duration-300 hover-lift">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold mb-3">
                  الأمن
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  أهمية حماية البيانات في العمل القانوني
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  قريباً - نعمل على إضافة محتوى قيّم ومتخصص...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>قريباً</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Blog Post 3 - Purple */}
            <div className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-blue-400 transition-all duration-300 hover-lift">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold mb-3">
                  الإنتاجية
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  كيفية تحسين كفاءة البحث القانوني
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  قريباً - نعمل على إضافة محتوى قيّم ومتخصص...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>قريباً</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
            >
              عرض جميع المقالات
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
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
              <details key={index} className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors ml-4">
                    {faq.q}
                  </h3>
                  <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
            >
              عرض جميع الأسئلة
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            جاهز لتحويل عملك القانوني؟
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            انضم إلى مئات المحامين والمهنيين القانونيين الذين يستخدمون LegalAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
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