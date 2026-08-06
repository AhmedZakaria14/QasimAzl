"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X, MapPin, Clock, Facebook, Twitter, Instagram, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import LogoIcon from "@/components/LogoIcon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/services", label: "خدماتنا" },
    { href: "/features", label: "مميزاتنا" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  return (
    <>
      <div className="bg-[#291686] text-white px-4 text-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto min-h-10 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 md:gap-7 overflow-hidden">
            <span className="flex items-center gap-2 whitespace-nowrap"><MapPin className="w-4 h-4 text-[#a9d66c]" />القصيم - بريدة - عنيزة - الرس</span>
            <span className="hidden sm:flex items-center gap-2 whitespace-nowrap text-[#ded9f3]"><Clock className="w-4 h-4 text-[#a9d66c]" />خدمة على مدار 24 ساعة</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <a key={index} href="#" aria-label="حساب التواصل الاجتماعي" className="w-7 h-7 rounded-full flex items-center justify-center text-[#ded9f3] hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors"><Icon className="w-3.5 h-3.5" /></a>
            ))}
          </div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-[#ece8f7] shadow-[0_8px_35px_rgba(41,22,134,.08)]">
        <div className="max-w-7xl mx-auto px-4 min-h-[88px] flex justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#291686]/20 rounded-xl" aria-label="العودة إلى الرئيسية">
            <div className="transition-transform duration-300 group-hover:scale-105"><LogoIcon className="w-14 h-14" /></div>
            <div><p className="text-[1.45rem] font-black text-[#291686] leading-none tracking-tight">عوازل القصيم</p><p className="text-xs text-slate-500 font-semibold mt-1.5">للعزل وكشف التسربات</p></div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 font-bold text-slate-700 bg-[#f8f7fc] border border-[#ece8f7] rounded-full px-2 py-1.5" aria-label="القائمة الرئيسية">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`relative px-4 py-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#291686]/35 ${active ? "bg-white text-[#291686] shadow-sm" : "hover:bg-white hover:text-[#291686]"}`}>{link.label}</Link>;
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+966500000000" className="bg-[#291686] hover:bg-[#1d0e63] text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-[0_12px_28px_rgba(41,22,134,.2)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#291686]/25"><PhoneCall className="w-5 h-5" /><span dir="ltr">050 000 0000</span></a>
          </div>

          <button className="lg:hidden w-12 h-12 rounded-xl bg-[#291686] text-white flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#291686]/25" onClick={() => setIsMobileMenuOpen(true)} aria-label="فتح القائمة" aria-expanded={isMobileMenuOpen}><Menu className="w-6 h-6" /></button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[70] lg:hidden transition ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isMobileMenuOpen}>
        <button className={`absolute inset-0 bg-[#130a3a]/70 backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileMenuOpen(false)} aria-label="إغلاق القائمة" />
        <aside className={`absolute top-0 right-0 h-full w-[min(88vw,350px)] bg-white shadow-2xl transition-transform duration-300 flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="bg-gradient-to-l from-[#1d0e63] to-[#291686] text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3"><LogoIcon className="w-12 h-12" /><strong className="text-lg">عوازل القصيم</strong></div>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="إغلاق" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"><X className="w-6 h-6" /></button>
          </div>
          <nav className="p-4 space-y-2 flex-1" aria-label="قائمة الهاتف">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center justify-between px-5 py-4 rounded-xl font-bold transition-colors ${active ? "text-[#291686] bg-[#f4f1ff]" : "text-slate-700 hover:bg-[#f8f7fc]"}`}>{link.label}<ChevronLeft className="w-4 h-4 text-[#7bbb3f]" /></Link>;
            })}
          </nav>
          <div className="p-5"><a href="tel:+966500000000" className="bg-[#291686] text-white px-4 py-3.5 rounded-xl flex justify-center items-center gap-2 font-bold shadow-lg"><PhoneCall className="w-5 h-5" /><span dir="ltr">050 000 0000</span></a></div>
        </aside>
      </div>
    </>
  );
}
