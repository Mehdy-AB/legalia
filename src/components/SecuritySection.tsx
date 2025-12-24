import { Mail, Shield, Cloud, Lock } from 'lucide-react'

export default function SecuritySection() {
  const securityServices = [
    {
      icon: Mail,
      title: "البريد الإلكتروني المشفر",
      description: "بريد مخصص للتواصل القانوني الحساس مع تشفير كامل"
    },
    {
      icon: Shield,
      title: "خدمة VPN الآمنة",
      description: "حماية الهوية الرقمية وإخفاء عنوان IP"
    },
    {
      icon: Cloud,
      title: "التخزين السحابي المشفر",
      description: "حفظ القضايا والملفات الحساسة بتشفير كامل"
    },
    {
      icon: Lock,
      title: "مبادئ الحوكمة",
      description: "المستخدم يحتفظ بالسيطرة الكاملة على بياناته"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">الأمن والخصوصية الرقمية</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نولي أهمية قصوى لحماية البيانات وسرية المعلومات مع توفير خدمات رقمية آمنة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <service.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">مبادئ الحوكمة والخصوصية</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "المستخدم يحتفظ بالسيطرة الكاملة على بياناته",
              "لا يتم استخدام البيانات في تدريب نماذج الذكاء الاصطناعي",
              "لا تتم مشاركة المعلومات مع أطراف ثالثة",
              "احترام صارم لمتطلبات السرية والامتثال"
            ].map((principle, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white ml-3">
                  ✓
                </div>
                <span className="text-gray-700 font-medium">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}