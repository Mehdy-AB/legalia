import { Mail, Phone, MapPin, Brain } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">LegalAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              منصة قانونية ذكية تجمع بين التحليل القانوني المتقدم، الصياغة الدقيقة، والتمثيل البصري للوقائع
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/ai-chat" className="hover:text-blue-400 transition-colors">الدردشة الذكية</Link></li>
              <li><Link href="/services/legal-model" className="hover:text-blue-400 transition-colors">النموذج القانوني</Link></li>
              <li><Link href="/services/document-analysis" className="hover:text-blue-400 transition-colors">تحليل المستندات</Link></li>
              <li><Link href="/services/visual-facts" className="hover:text-blue-400 transition-colors">تمثيل الوقائع</Link></li>
              <li><Link href="/services/security" className="hover:text-blue-400 transition-colors">الأمن والخصوصية</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">من نحن</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">الأسعار</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">المدونة</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">اتصل بنا</h3>
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
                  <p className="font-medium text-white mt-2 mb-1">🇩🇿 Sétif, Algeria</p>
                  <p className="text-xs">Blair, Sétif / ⴰⵙⴷⵉⴼ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LegalAI. جميع الحقوق محفوظة.</p>
          <p className="mt-2">LegalAI كيان تقني مستقل، لا يقدم استشارات قانونية ملزمة، ولا يتدخل في اتخاذ القرار القضائي أو المهني</p>
        </div>
      </div>
    </footer>
  )
}
