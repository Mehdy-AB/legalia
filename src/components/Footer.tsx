import { Mail, Phone, MapPin, Brain } from 'lucide-react'

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
              <li><a href="#services" className="hover:text-blue-400 transition-colors">الدردشة الذكية</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">تحليل المستندات</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">تمثيل الوقائع</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">الأمن والخصوصية</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">من نحن</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">الأسعار</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">اتصل بنا</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 ml-3 text-blue-400" />
                <span>Harju maakond, Tallinn, Kesklinna linnaosa, Pärnu mnt 139b, 11317</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 ml-3 text-blue-400" />
                <span>lai-info@proton.me</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 ml-3 text-blue-400" />
                <span>+213 549 031 698</span>
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