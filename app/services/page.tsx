import { Shield, Droplet, CheckCircle } from "lucide-react";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

export const metadata = {
  title: 'خدماتنا - عوازل القصيم',
  description: 'تعرف على خدمات العزل المتكاملة التي نقدمها في عوازل القصيم',
};

const serviceGalleryImages = [
  { src: "/images/services/roof-waterproofing.webp", alt: "تركيب لفائف العزل المائي على سطح خرساني" },
  { src: "/images/services/thermal-insulation.webp", alt: "تركيب ألواح العزل الحراري على سطح مبنى" },
  { src: "/images/services/spray-foam-insulation.webp", alt: "تطبيق عزل فوم البولي يوريثان على سطح معدني" },
  { src: "/images/services/water-tank-waterproofing.webp", alt: "تنفيذ العزل الداخلي لخزان مياه خرساني" },
  { src: "/images/services/pool-waterproofing.webp", alt: "تنفيذ طبقة العزل المائي داخل مسبح" },
  { src: "/images/services/leak-detection.webp", alt: "فني يكشف تسرب مياه بجهاز التصوير الحراري دون تكسير" }
];

const servicesList = [
  { Icon: Shield, title: "عزل مائي للأسطح", desc: "نقدم أفضل حلول العزل المائي للأسطح لمنع تسرب مياه الأمطار والرطوبة وحماية المبنى من التشققات والتصدعات بأفضل المواد. نضمن عدم وصول المياه إلى البنية التحتية للمبنى مما يحافظ على عمره الافتراضي." },
  { Icon: Droplet, title: "عزل حراري", desc: "عزل حراري متطور يعمل على خفض درجات الحرارة داخل المبنى وتقليل استهلاك الكهرباء للمكيفات، لبيئة أكثر راحة واقتصادية. نستخدم مواد عالية الكفاءة في العزل الحراري تناسب أجواء المملكة." },
  { Icon: Shield, title: "عزل فوم بولي يوريثان", desc: "أحدث تقنيات العزل المزدوج (مائي وحراري) باستخدام الفوم، يتميز بخفة وزنه ومقاومته العالية للظروف المناخية القاسية، ويعتبر الخيار الأمثل للأسطح المعدنية والخرسانية لضمان حماية لا مثيل لها." },
  { Icon: Droplet, title: "عزل وتنظيف الخزانات", desc: "عزل داخلي وخارجي لخزانات المياه الأرضية والعلوية لمنع التسربات والحفاظ على نقاء المياه مع خدمة التنظيف والتعقيم لضمان مياه صحية وآمنة لعائلتك." },
  { Icon: Shield, title: "كشف تسربات المياه", desc: "كشف دقيق لتسربات المياه إلكترونياً بدون تكسير باستخدام أحدث الأجهزة والتقنيات الصوتية والحرارية، مع إصلاح الخلل بضمان معتمد وتقارير مفصلة لحل المشكلة من جذورها." },
  { Icon: Droplet, title: "عزل المسابح", desc: "خدمات عزل المسابح باستخدام أفضل مواد الإيبوكسي والمواد العازلة لمنع تسرب المياه وإطالة العمر الافتراضي للمسبح، مع ضمان حماية الهيكل الإنشائي من التآكل." }
];

const eachServiceIncludes = [
  "تنفيذ سريع واحترافي",
  "مواد معتمدة عالمياً",
  "ضمان على جودة العمل",
];

export default function ServicesPage() {
  return (
    <div className="page-content pt-10 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="page-intro text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا</h1>
          <p className="text-lg">اكتشف مجموعة واسعة من خدمات العزل وكشف التسربات بأعلى معايير الجودة لضمان حماية مبناك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesList.map(({ Icon, title, desc }) => (
            <div key={title} className="surface-card rounded-2xl border p-8 transition-all flex flex-col xl:flex-row gap-6 items-start">
              <div className="icon-well w-20 h-20 rounded-2xl flex items-center justify-center shrink-0">
                <Icon className="w-10 h-10" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2">
                  {eachServiceIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8 mt-20">
          <h2 className="text-3xl font-bold mb-4">معرض أعمالنا</h2>
          <p className="text-slate-600 text-lg">صور من مواقع العمل تبرز جودة التنفيذ واحترافية فريقنا في تقديم خدمات العزل وكشف التسربات.</p>
        </div>

        <ImageGallery images={serviceGalleryImages} />

        <div className="dark-surface rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى خدمة غير مدرجة هنا؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">نحن نقدم استشارات مجانية وحلول مخصصة لمختلف مشاكل العزل وتسربات المياه. تواصل معنا لمناقشة احتياجاتك مع خبرائنا.</p>
          <Link href="/contact" className="inline-block bg-white px-10 py-4 rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50">تواصل معنا الآن</Link>
        </div>
      </div>
    </div>
  );
}
