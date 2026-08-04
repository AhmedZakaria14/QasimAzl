import Link from "next/link";
import { Droplet, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import LogoIcon from "@/components/LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <LogoIcon className="w-12 h-12" />
              <div>
                <h2 className="text-2xl font-bold text-white leading-none tracking-tight">عوازل القصيم</h2>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              الشركة الرائدة في مجال العزل المائي والحراري وعزل الفوم وكشف تسربات المياه في منطقة القصيم.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-inner"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-inner"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-inner"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> الرئيسية</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> من نحن</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> خدماتنا</Link></li>
              <li><Link href="/features" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> مميزاتنا</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              خدماتنا
              <span className="absolute -bottom-2 right-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> عزل مائي</li>
              <li className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> عزل حراري</li>
              <li className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> عزل فوم</li>
              <li className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> عزل خزانات</li>
              <li className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> كشف تسربات المياه</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              معلومات التواصل
              <span className="absolute -bottom-2 right-0 w-12 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                <span>المملكة العربية السعودية<br/>القصيم - بريدة</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500 shrink-0" />
                <span dir="ltr" className="font-bold">050 000 0000</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                <span>info@qassim-insulation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} شركة عوازل القصيم.</p>
          <p>تصميم وتطوير بكل ❤️</p>
        </div>
      </div>
    </footer>
  );
}
