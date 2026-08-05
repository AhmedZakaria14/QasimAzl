"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Droplet, Shield, Clock, ThumbsUp, CheckCircle, ChevronLeft, Phone } from "lucide-react";
import * as motion from "motion/react-client";

import StatsCounter from "@/components/StatsCounter";

const services = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "عزل مائي للأسطح",
    desc: "نقدم أفضل حلول العزل المائي للأسطح لمنع تسرب مياه الأمطار والرطوبة وحماية المبنى من التشققات والتصدعات بأفضل المواد."
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "عزل حراري",
    desc: "عزل حراري متطور يعمل على خفض درجات الحرارة داخل المبنى وتقليل استهلاك الكهرباء للمكيفات، لبيئة أكثر راحة واقتصادية."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "عزل فوم بولي يوريثان",
    desc: "أحدث تقنيات العزل المزدوج (مائي وحراري) باستخدام الفوم، يتميز بخفة وزنه ومقاومته العالية للظروف المناخية القاسية."
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "عزل وتنظيف الخزانات",
    desc: "عزل داخلي وخارجي لخزانات المياه الأرضية والعلوية لمنع التسربات والحفاظ على نقاء المياه مع خدمة التنظيف والتعقيم."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "كشف تسربات المياه",
    desc: "كشف دقيق لتسربات المياه إلكترونياً بدون تكسير باستخدام أحدث الأجهزة والتقنيات مع إصلاح الخلل بضمان معتمد."
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "عزل المسابح",
    desc: "خدمات عزل المسابح باستخدام أفضل مواد الإيبوكسي والمواد العازلة لمنع تسرب المياه وإطالة العمر الافتراضي للمسبح."
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-roof-insulation.webp"
            alt="فنيون يطبقون العزل المائي والحراري على سطح مبنى في القصيم"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20 pb-24">
          <div className="max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6">
                الخيار الأول في القصيم
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
                <span className="text-[#dff5a6]">خبراء العزل المائي</span> <br/>
                <span className="!text-white">والحراري وعزل الفوم</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
                نقدم أفضل حلول العزل المتكاملة للأسطح والخزانات والمسابح بأحدث التقنيات وأجود المواد، مع ضمان شامل يصل إلى 10 سنوات على كافة أعمالنا.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+966500000000" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg">
                  <PhoneCall className="w-6 h-6" />
                  <span>اتصل بنا الآن</span>
                </a>
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg">
                  <span>تواصل عبر واتساب</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-blue-600 font-bold mb-2">خدماتنا</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">أفضل خدمات العزل المتكاملة</h2>
            <p className="text-slate-600 text-lg">
              نقدم مجموعة واسعة من خدمات العزل وكشف التسربات بأعلى معايير الجودة لضمان حماية مبناك من التلف والعوامل الجوية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:border-blue-100 transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
              <span>عرض جميع الخدمات والتفاصيل</span>
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <Image 
                  src="/images/insulation-team.webp"
                  alt="فريق عوازل القصيم يفحص جودة العزل بعد التنفيذ"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover h-[500px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl hidden md:block border-4 border-white">
                  <div className="text-5xl font-black mb-2">15+</div>
                  <div className="font-medium text-blue-100 text-lg">عاماً من الخبرة<br/>في مجال العزل</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-blue-600 font-bold mb-2">من نحن</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">الشركة الرائدة في مجال العزل بمنطقة القصيم</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                نحن شركة متخصصة في تقديم جميع خدمات العزل المائي والحراري وعزل الفوم وكشف تسربات المياه بأحدث التقنيات والأجهزة الحديثة. نفخر بخدمة عملائنا في جميع مدن القصيم.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "فريق عمل مدرب ومؤهل على أعلى مستوى",
                  "استخدام مواد عزل معتمدة وعالية الجودة",
                  "إنجاز العمل في الوقت المحدد بكل دقة",
                  "أسعار تنافسية تناسب جميع الميزانيات",
                  "ضمان حقيقي يصل إلى 10 سنوات"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/about" className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-colors">
                تعرف على المزيد عنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Features / Why Choose Us */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">لماذا تختار عوازل القصيم؟</h2>
            <p className="text-blue-200 text-lg">
              نحن نلتزم بتقديم أفضل الخدمات بأعلى معايير الجودة لضمان رضا عملائنا التام
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "ضمان شامل", desc: "نقدم ضماناً حقيقياً يصل إلى 10 سنوات على كافة أعمال العزل." },
              { icon: <ThumbsUp className="w-8 h-8" />, title: "جودة عالية", desc: "نستخدم أفضل مواد العزل المعتمدة عالمياً والمطابقة للمواصفات." },
              { icon: <Clock className="w-8 h-8" />, title: "سرعة الإنجاز", desc: "نلتزم بالمواعيد المحددة وننجز العمل بأسرع وقت ممكن وبدقة." },
              { icon: <Phone className="w-8 h-8" />, title: "دعم فني", desc: "فريق الدعم الفني متواجد على مدار الساعة للرد على استفساراتكم." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-blue-800/40 border border-blue-700/50 p-8 rounded-2xl text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-blue-200 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/features" className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors border border-blue-600">
              <span>اكتشف المزيد من مميزاتنا</span>
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-blue-50 rounded-3xl p-10 md:p-16 text-center border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">هل تعاني من مشاكل تسرب المياه أو الحرارة؟</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              لا تتردد في التواصل معنا الآن. فريقنا جاهز لتقديم الفحص المجاني وتقديم أفضل الحلول المناسبة لمشكلتك.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+966500000000" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-colors">
                <PhoneCall className="w-6 h-6" />
                <span dir="ltr">050 000 0000</span>
              </a>
              <Link href="/contact" className="bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-colors">
                <span>تواصل معنا للمزيد</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
