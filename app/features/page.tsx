import { Shield, ThumbsUp, Clock, Phone, Award, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'مميزاتنا - عوازل القصيم',
  description: 'تعرف على ما يميز شركة عوازل القصيم عن غيرها في تقديم خدمات العزل',
};

export default function FeaturesPage() {
  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "ضمان شامل وحقيقي", desc: "نقدم ضماناً حقيقياً يصل إلى 10 سنوات على كافة أعمال العزل، مما يمنحك راحة البال والثقة في جودة خدماتنا." },
    { icon: <ThumbsUp className="w-8 h-8" />, title: "مواد عالية الجودة", desc: "نستخدم أفضل مواد العزل المعتمدة عالمياً والمطابقة للمواصفات القياسية السعودية لضمان أقصى حماية." },
    { icon: <Clock className="w-8 h-8" />, title: "سرعة في الإنجاز", desc: "نلتزم بالمواعيد المحددة وننجز العمل بأسرع وقت ممكن وبدقة متناهية دون تعطيل لمصالحك." },
    { icon: <Phone className="w-8 h-8" />, title: "دعم فني واستشارات", desc: "فريق الدعم الفني متواجد على مدار الساعة للرد على استفساراتكم وتقديم الاستشارات المجانية." },
    { icon: <Award className="w-8 h-8" />, title: "عمالة مدربة", desc: "نمتلك فريق عمل من الفنيين والمهندسين ذوي الخبرة الطويلة والمدربين على أحدث تقنيات العزل." },
    { icon: <Sparkles className="w-8 h-8" />, title: "أجهزة كشف حديثة", desc: "نعتمد على أجهزة كشف تسربات إلكترونية حديثة تحدد مكان الخلل بدقة عالية دون الحاجة لتكسير عشوائي." }
  ];

  return (
    <div className="page-content pt-10 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="page-intro text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">مميزاتنا</h1>
          <p className="text-lg">نحن نلتزم بتقديم أفضل الخدمات بأعلى معايير الجودة لضمان رضا عملائنا التام</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, idx) => (
            <div key={idx} className="surface-card border p-8 rounded-2xl text-center transition-shadow">
              <div className="icon-well w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="dark-surface flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden shadow-2xl">
          <div className="lg:w-1/2 p-10 lg:p-16">
            <h3 className="text-3xl font-bold mb-6">نهتم بأدق التفاصيل لحماية مبناك</h3>
            <p className="text-lg leading-relaxed mb-8">
              في عوازل القصيم، لا نكتفي بتقديم الخدمة فقط، بل نحرص على تقديم حلول جذرية تضمن عدم تكرار المشكلة. من خلال التشخيص الدقيق واختيار المواد الأنسب لكل حالة، نضمن لعملائنا بيئة آمنة وخالية من التسربات والتصدعات.
            </p>
            <ul className="space-y-4">
              {[
                "فحص مبدئي دقيق باستخدام الأجهزة",
                "تقارير فنية معتمدة لشركة المياه الوطنية",
                "متابعة دورية واختبارات لضمان الفاعلية بعد التنفيذ"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0"><CheckCircle className="w-4 h-4 text-[#a9d66c]" /></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 min-h-[500px] relative">
            <Image src="/images/services/leak-detection.webp" alt="فحص دقيق لتسرب المياه باستخدام جهاز التصوير الحراري" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d0e63]/35 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>
        </div>
      </div>
    </div>
  );
}
