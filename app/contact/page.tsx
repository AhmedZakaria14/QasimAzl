import { MapPin, Phone, Mail, Clock } from "lucide-react";
import MapWrapper from "@/components/MapWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: 'اتصل بنا - عوازل القصيم',
  description: 'تواصل مع شركة عوازل القصيم لطلب خدمات العزل وكشف التسربات',
};

const contactDetails = [
  {
    Icon: Phone,
    title: "رقم الهاتف",
    lines: [
      <a key="p1" href="tel:+966500000000" dir="ltr" className="font-bold text-[#291686] hover:underline rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#291686]/40">050 000 0000</a>,
      <a key="p2" href="tel:+966550000000" dir="ltr" className="font-bold text-[#291686] hover:underline rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#291686]/40">055 000 0000</a>,
    ],
  },
  {
    Icon: MapPin,
    title: "العنوان",
    lines: ["المملكة العربية السعودية، القصيم، بريدة", "نغطي كافة مناطق القصيم (عنيزة، الرس، البكيرية، المذنب، البدائع)"],
  },
  {
    Icon: Mail,
    title: "البريد الإلكتروني",
    lines: [<a key="m1" href="mailto:info@qassim-insulation.com" className="break-all text-[#291686] hover:underline rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#291686]/40">info@qassim-insulation.com</a>],
  },
  {
    Icon: Clock,
    title: "ساعات العمل",
    lines: ["خدمة العملاء: على مدار 24 ساعة / 7 أيام في الأسبوع"],
  },
];

export default function ContactPage() {
  return (
    <div className="page-content pt-10 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="page-intro text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-lg">نحن هنا لخدمتك! تواصل معنا لأي استفسار أو لطلب خدمات العزل وكشف التسربات.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">معلومات التواصل</h2>
            <div className="space-y-6">
              {contactDetails.map(({ Icon, title, lines }) => (
                <div key={title} className="contact-detail surface-card flex items-start gap-4 rounded-2xl border p-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{title}</h3>
                    {lines.map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-8 md:p-10 rounded-3xl border">
            <h2 className="text-2xl font-bold mb-8">أرسل لنا رسالة</h2>
            <ContactForm />
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">نطاق التغطية في منطقة القصيم</h2>
            <p className="text-slate-600 text-lg">نغطي بخدماتنا كافة مدن ومحافظات منطقة القصيم لضمان وصول الخدمة إليكم أينما كنتم.</p>
          </div>
          <MapWrapper />
        </div>
      </div>
    </div>
  );
}
