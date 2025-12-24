import { FileText, Image as ImageIcon, Download, Diff } from 'lucide-react'

export default function DocumentAnalysis() {
  const capabilities = [
    { icon: FileText, text: "تحليل المستندات (PDF - Word - Scans)" },
    { icon: ImageIcon, text: "الصور والأدلة البصرية" },
    { icon: Diff, text: "مقارنة المستندات وإبراز الفروقات" },
    { icon: Download, text: "تصدير النتائج بصيغ مختلفة" }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">تحليل المستندات والأدلة الرقمية</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            دردشة مباشرة مع المستندات القانونية والمواد البصرية لفهم الملفات المعقدة بسرعة ودقة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">كيف تعمل الخدمة؟</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0">1</span>
                <p className="text-gray-600">يقوم المستخدم برفع المستندات أو المواد البصرية داخل خانة الدردشة المخصصة</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0">2</span>
                <p className="text-gray-600">يتولى النموذج القانوني قراءة المحتوى وفهمه ضمن سياقه القانوني</p>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0">3</span>
                <p className="text-gray-600">يتيح للمستخدم التفاعل معه عبر أسئلة طبيعية أو أوامر محددة</p>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">القدرات</h3>
            <div className="space-y-4">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
                  <cap.icon className="w-6 h-6 text-blue-400 ml-3" />
                  <span className="text-gray-700">{cap.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}