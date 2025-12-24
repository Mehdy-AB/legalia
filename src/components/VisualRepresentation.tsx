import { Eye, Video, Map, Car, Building } from 'lucide-react'

export default function VisualRepresentation() {
  const useCases = [
    { icon: Car, title: "حوادث المرور", color: "bg-blue-100 text-blue-600" },
    { icon: Building, title: "النزاعات العقارية", color: "bg-green-100 text-green-600" },
    { icon: Map, title: "التسلسل الزمني المعقد", color: "bg-purple-100 text-purple-600" },
    { icon: Eye, title: "التدريب القانوني", color: "bg-orange-100 text-orange-600" }
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">إعادة تمثيل الوقائع القانونية بصريًا</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            تحويل البيانات غير المنظمة إلى محاكاة بصرية تجعل الحقيقة مرئية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-8 rounded-2xl text-white mb-8">
              <Video className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">نحن لا نكتفي بعرض الأدلة، بل نجعل الحقيقة مرئية</h3>
              <p className="opacity-90">
                خدمة متقدمة لتحويل البيانات غير المنظمة والسرديات المعقدة إلى محاكاة بصرية تحاكي تسلسل الأحداث
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">المزايا</h3>
            <ul className="space-y-4">
              {[
                "تحويل البيانات غير المنظمة إلى مشهد بصري",
                "فهم أعمق للوقائع والعلاقات الزمنية",
                "اختبار سيناريوهات مختلفة بناءً على نفس المعطيات",
                "كشف التناقضات المحتملة بين الروايات"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-white ml-4 mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">ما يمكن إعادة تمثيله</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className={`${useCase.color} p-6 rounded-xl text-center`}>
                <useCase.icon className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold">{useCase.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}