import Image from "next/image";
import { CheckCircle, Users, Target, Award } from "lucide-react";

export const metadata = {
  title: 'من نحن - عوازل القصيم',
  description: 'تعرف على شركة عوازل القصيم الرائدة في مجال العزل المائي والحراري',
};

export default function AboutPage() {
  return (
    <div className="pt-10 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">من نحن</h1>
          <p className="text-slate-600 text-lg">
            تعرف على مسيرتنا وخبرتنا الطويلة في مجال العزل وحماية المباني في منطقة القصيم.
          </p>
        </div>
        
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop" alt="فريق العمل" width={800} height={600} className="rounded-2xl shadow-2xl object-cover h-[500px]" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl hidden md:block border-4 border-white">
                <div className="text-5xl font-black mb-2">15+</div>
                <div className="font-medium text-blue-100 text-lg">عاماً من الخبرة<br/>في مجال العزل</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-blue-600 font-bold mb-2">قصتنا</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">الشركة الرائدة في مجال العزل بمنطقة القصيم</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              نحن شركة متخصصة في تقديم جميع خدمات العزل المائي والحراري وعزل الفوم وكشف تسربات المياه بأحدث التقنيات والأجهزة الحديثة. نفخر بخدمة عملائنا في جميع مدن القصيم (بريدة، عنيزة، الرس، البكيرية، البدائع، والمذنب).
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              على مدار أكثر من 15 عاماً، التزمنا بتقديم أعلى معايير الجودة والموثوقية، مما جعلنا الخيار الأول للعديد من المشاريع السكنية والتجارية. نؤمن بأن الحماية السليمة للمبنى تبدأ من العزل الدقيق.
            </p>
            <ul className="space-y-4 mb-10">
              {["فريق عمل مدرب ومؤهل على أعلى مستوى", "استخدام مواد عزل معتمدة وعالية الجودة", "إنجاز العمل في الوقت المحدد بكل دقة", "أسعار تنافسية تناسب جميع الميزانيات", "ضمان حقيقي يصل إلى 10 سنوات"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Values / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Target className="w-8 h-8" /></div>
            <h3 className="text-xl font-bold mb-4">رؤيتنا</h3>
            <p className="text-slate-600">أن نكون الشركة المرجعية الأولى والأكثر ثقة في تقديم حلول العزل المتكاملة والمبتكرة على مستوى المملكة.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Award className="w-8 h-8" /></div>
            <h3 className="text-xl font-bold mb-4">رسالتنا</h3>
            <p className="text-slate-600">حماية مباني عملائنا من العوامل الجوية وتسربات المياه من خلال تقديم خدمات عزل احترافية بضمانات حقيقية.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Users className="w-8 h-8" /></div>
            <h3 className="text-xl font-bold mb-4">قيمنا</h3>
            <p className="text-slate-600">الشفافية في التعامل، الجودة في التنفيذ، الالتزام بالمواعيد، والحرص الدائم على رضا العملاء التام.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
