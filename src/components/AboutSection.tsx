import { Target, Users, Eye, Shield } from 'lucide-react'

export default function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: "احترام أخلاقيات المهنة القانونية",
      description: "نلتزم بالمعايير الأخلاقية والمهنية في جميع خدماتنا"
    },
    {
      icon: Target,
      title: "تطوير تقنيات تحترم أثرها القانوني والاجتماعي",
      description: "نتأكد من أن تقنياتنا تخدم المجتمع بشكل إيجابي"
    },
    {
      icon: Users,
      title: "دعم القرار البشري لا مصادرته",
      description: "التكنولوجيا تخدم الفهم القانوني، لا تحل محله"
    },
    {
      icon: Eye,
      title: "حماية البيانات كأولوية لا كخيار",
      description: "أمن بياناتك هو مسؤوليتنا الأولى"
    }
  ]

  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            تسريع الإتقان المهني من خلال الجمع بين البحث القانوني المعمق والابتكار المتطور
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">مهمتنا</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              نؤمن بأن العمل القانوني يجب أن يكون ديناميكياً بقدر ديناميكية العالم الذي يخدمه. نستفيد من أحدث تقنيات الذكاء الاصطناعي لتحويل المهام اليومية - كالبحث وإدارة المستندات والصياغة - إلى عمليات متكاملة وذكية.
            </p>
            <p className="text-gray-600 leading-relaxed">
              نتجاوز التعقيدات الإدارية، ونكشف عن رؤى عميقة، ونركز على ما يهم حقاً: تقديم خدمات قانونية متميزة.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">نهجنا</h3>
            <p className="text-gray-600 leading-relaxed">
              نعتمد نهجًا تشاركيًا يقوم على التعاون الوثيق مع المستخدمين والجهات المستفيدة، لفهم احتياجاتهم بدقة وسياق عملهم القانوني. ويُمكّننا هذا النهج من تطوير حلول مدروسة ومصممة بعناية لتتوافق مع أهدافهم المهنية والأكاديمية.
            </p>
          </div>
        </div>

        <div className="mb-16 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">فريق العمل</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["القانون والممارسة القانونية", "هندسة البرمجيات والأنظمة", "الذكاء الاصطناعي ومعالجة البيانات", "أمن المعلومات وحماية الخصوصية"].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-bold text-gray-900">{item}</h4>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">قيمنا</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors duration-200">
                <value.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}