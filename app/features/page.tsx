import { Shield, ThumbsUp, Clock, Phone, Award, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'مميزاتنا - عوازل القصيم',
  description: 'تعرف على ما يميز شركة عوازل القصيم عن غيرها في تقديم خدمات العزل',
};

export default function FeaturesPage() {
  return (
    <div className="pt-10 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">مميزاتنا</h1>
          <p className="text-slate-600 text-lg">
            نحن نلتزم بتقديم أفضل الخدمات بأعلى معايير الجودة لضمان رضا عملائنا التام
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Shield className="w-8 h-8" />, title: "ضمان شامل وحقيقي", desc: "نقدم ضماناً حقيقياً يصل إلى 10 سنوات على كافة أعمال العزل، مما يمنحك راحة البال والثقة في جودة خدماتنا." },
            { icon: <ThumbsUp className="w-8 h-8" />, title: "مواد عالية الجودة", desc: "نستخدم أفضل مواد العزل المعتمدة عالمياً والمطابقة للمواصفات القياسية السعودية لضمان أقصى حماية." },
            { icon: <Clock className="w-8 h-8" />, title: "سرعة في الإنجاز", desc: "نلتزم بالمواعيد المحددة وننجز العمل بأسرع وقت ممكن وبدقة متناهية دون تعطيل لمصالحك." },
            { icon: <Phone className="w-8 h-8" />, title: "دعم فني واستشارات", desc: "فريق الدعم الفني متواجد على مدار الساعة للرد على استفساراتكم وتقديم الاستشارات المجانية." },
            { icon: <Award className="w-8 h-8" />, title: "عمالة مدربة", desc: "نمتلك فريق عمل من الفنيين والمهندسين ذوي الخبرة الطويلة والمدربين على أحدث تقنيات العزل." },
            { icon: <Sparkles className="w-8 h-8" />, title: "أجهزة كشف حديثة", desc: "نعتمد على أجهزة كشف تسربات إلكترونية حديثة تحدد مكان الخلل بدقة عالية دون الحاجة لتكسير عشوائي." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="lg:w-1/2 p-10 lg:p-16 text-white">
            <h3 className="text-3xl font-bold mb-6">نهتم بأدق التفاصيل لحماية مبناك</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              في عوازل القصيم، لا نكتفي بتقديم الخدمة فقط، بل نحرص على تقديم حلول جذرية تضمن عدم تكرار المشكلة. من خلال التشخيص الدقيق واختيار المواد الأنسب لكل حالة، نضمن لعملائنا بيئة آمنة وخالية من التسربات والتصدعات.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4 text-white" /></div>
                <span className="text-lg">فحص مبدئي دقيق باستخدام الأجهزة</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4 text-white" /></div>
                <span className="text-lg">تقارير فنية معتمدة لشركة المياه الوطنية</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4 text-white" /></div>
                <span className="text-lg">متابعة دورية واختبارات لضمان الفاعلية بعد التنفيذ</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 h-full min-h-[500px] relative">
            <Image src="/images/services/leak-detection.webp" alt="فحص دقيق لتسرب المياه باستخدام جهاز التصوير الحراري" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
