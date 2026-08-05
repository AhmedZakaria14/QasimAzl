import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import MapWrapper from "@/components/MapWrapper";

export const metadata = {
  title: 'اتصل بنا - عوازل القصيم',
  description: 'تواصل مع شركة عوازل القصيم لطلب خدمات العزل وكشف التسربات',
};

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
            <h3 className="text-2xl font-bold mb-8">معلومات التواصل</h3>
            <div className="space-y-6">
              <div className="contact-detail surface-card flex items-start gap-4 rounded-2xl border p-5">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0"><Phone className="w-6 h-6" /></div>
                <div><h4 className="font-bold text-lg mb-1">رقم الهاتف</h4><p className="font-bold" dir="ltr">050 000 0000</p><p className="font-bold" dir="ltr">055 000 0000</p></div>
              </div>
              <div className="contact-detail surface-card flex items-start gap-4 rounded-2xl border p-5">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0"><MapPin className="w-6 h-6" /></div>
                <div><h4 className="font-bold text-lg mb-1">العنوان</h4><p>المملكة العربية السعودية، القصيم، بريدة</p><p>نغطي كافة مناطق القصيم (عنيزة، الرس، البكيرية، المذنب، البدائع)</p></div>
              </div>
              <div className="contact-detail surface-card flex items-start gap-4 rounded-2xl border p-5">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0"><Mail className="w-6 h-6" /></div>
                <div><h4 className="font-bold text-lg mb-1">البريد الإلكتروني</h4><p className="break-all">info@qassim-insulation.com</p></div>
              </div>
              <div className="contact-detail surface-card flex items-start gap-4 rounded-2xl border p-5">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0"><Clock className="w-6 h-6" /></div>
                <div><h4 className="font-bold text-lg mb-1">ساعات العمل</h4><p>خدمة العملاء: على مدار 24 ساعة / 7 أيام في الأسبوع</p></div>
              </div>
            </div>
          </div>

          <div className="surface-card p-8 md:p-10 rounded-3xl border">
            <h3 className="text-2xl font-bold mb-8">أرسل لنا رسالة</h3>
            <form className="space-y-6">
              <div><label className="block text-sm font-medium mb-2">الاسم الكريم</label><input type="text" className="w-full px-5 py-4 rounded-xl border focus:outline-none transition-all" placeholder="أدخل اسمك" /></div>
              <div><label className="block text-sm font-medium mb-2">رقم الجوال</label><input type="tel" className="w-full px-5 py-4 rounded-xl border focus:outline-none transition-all" placeholder="05xxxxxxxx" /></div>
              <div>
                <label className="block text-sm font-medium mb-2">نوع الخدمة المطلوبة</label>
                <select className="w-full px-5 py-4 rounded-xl border focus:outline-none transition-all appearance-none bg-white">
                  <option>عزل مائي</option><option>عزل حراري</option><option>عزل فوم</option><option>عزل خزانات</option><option>كشف تسربات المياه</option><option>أخرى</option>
                </select>
              </div>
              <div><label className="block text-sm font-medium mb-2">رسالتك أو تفاصيل الطلب</label><textarea rows={4} className="w-full px-5 py-4 rounded-xl border focus:outline-none transition-all resize-none" placeholder="اكتب تفاصيل طلبك هنا..."></textarea></div>
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95"><Send className="w-5 h-5" /><span>إرسال الطلب</span></button>
            </form>
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
