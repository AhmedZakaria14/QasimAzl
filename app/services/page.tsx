import { Shield, Droplet, CheckCircle } from "lucide-react";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

export const metadata = {
  title: 'خدماتنا - عوازل القصيم',
  description: 'تعرف على خدمات العزل المتكاملة التي نقدمها في عوازل القصيم',
};

const serviceGalleryImages = [
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop", alt: "أعمال العزل للأسطح" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop", alt: "معدات ومواد العزل الحديثة" },
  { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", alt: "فريق العمل أثناء العزل الحراري" },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", alt: "أعمال البناء والعزل" },
  { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", alt: "خدمات عزل المسابح" },
  { src: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=800&auto=format&fit=crop", alt: "فني متخصص في فحص التسربات" }
];

const servicesList = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: "عزل مائي للأسطح",
    desc: "نقدم أفضل حلول العزل المائي للأسطح لمنع تسرب مياه الأمطار والرطوبة وحماية المبنى من التشققات والتصدعات بأفضل المواد. نضمن عدم وصول المياه إلى البنية التحتية للمبنى مما يحافظ على عمره الافتراضي."
  },
  {
    icon: <Droplet className="w-10 h-10" />,
    title: "عزل حراري",
    desc: "عزل حراري متطور يعمل على خفض درجات الحرارة داخل المبنى وتقليل استهلاك الكهرباء للمكيفات، لبيئة أكثر راحة واقتصادية. نستخدم مواد عالية الكفاءة في العزل الحراري تناسب أجواء المملكة."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "عزل فوم بولي يوريثان",
    desc: "أحدث تقنيات العزل المزدوج (مائي وحراري) باستخدام الفوم، يتميز بخفة وزنه ومقاومته العالية للظروف المناخية القاسية، ويعتبر الخيار الأمثل للأسطح المعدنية والخرسانية لضمان حماية لا مثيل لها."
  },
  {
    icon: <Droplet className="w-10 h-10" />,
    title: "عزل وتنظيف الخزانات",
    desc: "عزل داخلي وخارجي لخزانات المياه الأرضية والعلوية لمنع التسربات والحفاظ على نقاء المياه مع خدمة التنظيف والتعقيم لضمان مياه صحية وآمنة لعائلتك."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "كشف تسربات المياه",
    desc: "كشف دقيق لتسربات المياه إلكترونياً بدون تكسير باستخدام أحدث الأجهزة والتقنيات الصوتية والحرارية، مع إصلاح الخلل بضمان معتمد وتقارير مفصلة لحل المشكلة من جذورها."
  },
  {
    icon: <Droplet className="w-10 h-10" />,
    title: "عزل المسابح",
    desc: "خدمات عزل المسابح باستخدام أفضل مواد الإيبوكسي والمواد العازلة لمنع تسرب المياه وإطالة العمر الافتراضي للمسبح، مع ضمان حماية الهيكل الإنشائي من التآكل."
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-10 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">خدماتنا</h1>
          <p className="text-slate-600 text-lg">
            اكتشف مجموعة واسعة من خدمات العزل وكشف التسربات بأعلى معايير الجودة لضمان حماية مبناك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:border-blue-100 transition-all flex flex-col xl:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-500" /> تنفيذ سريع واحترافي</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-500" /> مواد معتمدة عالمياً</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="w-5 h-5 text-green-500" /> ضمان على جودة العمل</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8 mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">معرض أعمالنا</h2>
          <p className="text-slate-600 text-lg">
            صور من مواقع العمل تبرز جودة التنفيذ واحترافية فريقنا في تقديم خدمات العزل وكشف التسربات.
          </p>
        </div>
        
        <ImageGallery images={serviceGalleryImages} />

        <div className="bg-blue-900 rounded-3xl p-10 md:p-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">هل تحتاج إلى خدمة غير مدرجة هنا؟</h3>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">نحن نقدم استشارات مجانية وحلول مخصصة لمختلف مشاكل العزل وتسربات المياه. تواصل معنا لمناقشة احتياجاتك مع خبرائنا.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-900 hover:bg-blue-50 px-10 py-4 rounded-full font-bold transition-colors">
            تواصل معنا الآن
          </Link>
        </div>
      </div>
    </div>
  );
}
