import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, ChevronLeft } from "lucide-react";
import LogoIcon from "@/components/LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-[#1d0e63] text-[#ded9f3] pt-20 pb-8 relative overflow-hidden">
      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-[#7bbb3f]/10 blur-3xl" />
      <div className="absolute -bottom-36 -right-20 w-96 h-96 rounded-full bg-[#291686]/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
              <LogoIcon className="w-14 h-14" />
              <div><h2 className="text-2xl font-black text-white">عوازل القصيم</h2><p className="text-xs text-[#bdb4e6] mt-1">للعزل وكشف التسربات</p></div>
            </Link>
            <p className="leading-8 text-[#c9c3e3] mb-6">الشركة الرائدة في مجال العزل المائي والحراري وعزل الفوم وكشف تسربات المياه في منطقة القصيم.</p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a key={index} href="#" aria-label="حساب التواصل الاجتماعي" className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[#ded9f3] hover:bg-[#7bbb3f] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors"><Icon className="w-5 h-5" /></a>
              ))}
            </div>
          </div>

          <FooterColumn title="روابط سريعة" items={[['الرئيسية','/'],['من نحن','/about'],['خدماتنا','/services'],['مميزاتنا','/features'],['اتصل بنا','/contact']]} />
          <FooterColumn title="خدماتنا" items={[['عزل مائي','/services'],['عزل حراري','/services'],['عزل فوم','/services'],['عزل خزانات','/services'],['كشف تسربات المياه','/services']]} />

          <div>
            <FooterTitle>معلومات التواصل</FooterTitle>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 rounded-xl bg-white/5 p-4 border border-white/5"><MapPin className="w-6 h-6 text-[#a9d66c] shrink-0 mt-1" /><span>المملكة العربية السعودية<br/>القصيم - بريدة</span></li>
              <li className="flex items-center gap-4 rounded-xl bg-white/5 p-4 border border-white/5"><Phone className="w-6 h-6 text-[#a9d66c] shrink-0" /><span dir="ltr" className="font-bold text-white">050 000 0000</span></li>
              <li className="flex items-center gap-4 rounded-xl bg-white/5 p-4 border border-white/5"><Mail className="w-6 h-6 text-[#a9d66c] shrink-0" /><span className="break-all">info@qassim-insulation.com</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[#aaa2ce]">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} شركة عوازل القصيم.</p>
          <p>تصميم احترافي متوافق مع جميع الأجهزة</p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({children}: {children: React.ReactNode}) {
  return <h4 className="text-white text-lg font-black mb-7 relative pb-3 after:absolute after:right-0 after:bottom-0 after:w-12 after:h-1 after:rounded-full after:bg-[#7bbb3f]">{children}</h4>;
}

function FooterColumn({title, items}: {title: string; items: [string, string][]}) {
  return <div><FooterTitle>{title}</FooterTitle><ul className="space-y-3">{items.map(([label, href]) => <li key={label}><Link href={href} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[#ded9f3] hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors"><ChevronLeft className="w-4 h-4 text-[#a9d66c]" />{label}</Link></li>)}</ul></div>;
}
