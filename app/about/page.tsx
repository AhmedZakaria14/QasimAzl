import Image from "next/image";
import { CheckCircle, Users, Target, Award } from "lucide-react";

export const metadata = {
  title: 'من نحن - عوازل القصيم',
  description: 'تعرف على شركة عوازل القصيم الرائدة في مجال العزل المائي والحراري',
};

export default function AboutPage() {
  return (
    <div className="page-content pt-10 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="page-intro text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-lg">
            تعرف على مسيرتنا وخبرتنا الطويلة في مجال العزل وحماية المباني في منطقة القصيم.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <Image src="/images/insulation-team.webp" alt="فريق عوازل القصيم يراجع جودة العزل على سطح مبنى" width={800} height={600} sizes="(max-width: 1024px) 100vw, 50vw" className="rounded-2xl shadow-2xl object-cover h-[500px]" />
              <div className="image-badge absolute -bottom-8 -right-8 p-8 rounded-2xl hidden md:block border-4 border-white">
                <div className="text-5xl font-black mb-2">15+</div>
                <div className="font-medium text-lg">عاماً من الخبرة<br/>في مجال العزل</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="section-eyebrow mb-2">قصتنا</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">الشركة الرائدة في مجال العزل بمنطقة القصيم</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              نحن شركة متخصصة في تقديم جميع خدمات العزل المائي والحراري وعزل الفوم وكشف تسربات المياه بأحدث التقنيات والأجهزة الحديثة. نفخر بخدمة عملائنا في جميع مدن القصيم (بريدة، عنيزة، الرس، البكيرية، البدائع، والمذنب).
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              على مدار أكثر من 15 عاماً، التزمنا بتقديم أعلى معايير الجودة والموثوقية، مما جعلنا الخيار الأول للعديد من المشاريع السكنية والتجارية. نؤمن بأن الحماية السليمة للمبنى تبدأ من العزل الدقيق.
            </p>
            <ul className="space-y-4 mb-10">
              {["فريق عمل مدرب ومؤهل على أعلى مستوى", "استخدام مواد عزل معتمدة وعالية الجودة", "إنجاز العمل في الوقت المحدد بكل دقة", "أسعار تنافسية تناسب جميع الميزانيات", "ضمان حقيقي يصل إلى 10 سنوات"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="surface-card p-8 rounded-2xl border text-center transition-shadow">
            <div className="icon-well w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><Target className="w-8 h-8" /></div>
            <h3 className="text-xl font-bold mb-4">رؤيتنا</h3>
            <p>أن نكون الشركة المرجعية الأولى والأكثر ثقة في تقديم حلول العزل المتكاملة والمبتكرة على مستوى المملكة.</p>
          </div>
          <div className="surface-card p-8 rounded-2xl border text-center transition-shadow">
            <div className="icon-well w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><Award className="w-8 h-8" /></div>
            <h3 className="text-xl font-bold mb-4">رسالتنا</h3>
            <p>حماية مباني عملائنا من العوامل الجوية وتسربات المياه من خلال تقديم خدمات عزل احترافية بضمانات حقيقية.</p>
          </div>
          <div className="surface-card p-8 rounded-2xl border text-center transition-shadow">
            <div className="icon-well w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"><Users className="w-8 h-8" /></div>
            <h3 className="text-xl font-bold mb-4">قيمنا</h3>
            <p>الشفافية في التعامل، الجودة في التنفيذ، الالتزام بالمواعيد، والحرص الدائم على رضا العملاء التام.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
