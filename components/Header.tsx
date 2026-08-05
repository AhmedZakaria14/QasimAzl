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
      <div className="bg-[#0b2530] text-[#e7f0f2] px-4 text-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto min-h-10 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 md:gap-7 overflow-hidden">
            <span className="flex items-center gap-2 whitespace-nowrap"><MapPin className="w-4 h-4 text-[#72b7c3]" />القصيم - بريدة - عنيزة - الرس</span>
            <span className="hidden sm:flex items-center gap-2 whitespace-nowrap text-[#c9d9dd]"><Clock className="w-4 h-4 text-[#72b7c3]" />خدمة على مدار 24 ساعة</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <a key={index} href="#" aria-label="حساب التواصل الاجتماعي" className="w-7 h-7 rounded-full flex items-center justify-center text-[#c9d9dd] hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors"><Icon className="w-3.5 h-3.5" /></a>
            ))}
          </div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-[#dce4e7] shadow-[0_8px_30px_rgba(11,37,48,.07)]">
        <div className="max-w-7xl mx-auto px-4 min-h-[88px] flex justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0f4c5c]/20 rounded-xl" aria-label="العودة إلى الرئيسية">
            <div className="transition-transform duration-300 group-hover:scale-105"><LogoIcon className="w-14 h-14" /></div>
            <div><p className="text-[1.45rem] font-black text-[#123746] leading-none tracking-tight">عوازل القصيم</p><p className="text-xs text-[#6f7c82] font-semibold mt-1.5">للعزل وكشف التسربات</p></div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 font-bold text-[#425159] bg-[#f6f8f9] border border-[#e2e8ea] rounded-full px-2 py-1.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`relative px-4 py-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f4c5c]/35 ${active ? "bg-white text-[#0f4c5c] shadow-sm" : "hover:bg-white hover:text-[#0f4c5c]"}`}>{link.label}</Link>;
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+966500000000" className="bg-[#0f4c5c] hover:bg-[#123746] text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-[0_12px_28px_rgba(15,76,92,.2)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0f4c5c]/25"><PhoneCall className="w-5 h-5" /><span dir="ltr">050 000 0000</span></a>
          </div>

          <button className="lg:hidden w-12 h-12 rounded-xl bg-[#0f4c5c] text-white flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0f4c5c]/25" onClick={() => setIsMobileMenuOpen(true)} aria-label="فتح القائمة"><Menu className="w-6 h-6" /></button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[70] lg:hidden transition ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isMobileMenuOpen}>
        <button className={`absolute inset-0 bg-[#071920]/72 backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileMenuOpen(false)} aria-label="إغلاق القائمة" />
        <aside className={`absolute top-0 right-0 h-full w-[min(88vw,350px)] bg-[#f8fafb] shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="bg-gradient-to-l from-[#123746] to-[#0f4c5c] text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3"><LogoIcon className="w-12 h-12" /><strong className="text-lg">عوازل القصيم</strong></div>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="إغلاق" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"><X className="w-6 h-6" /></button>
          </div>
          <nav className="p-4 space-y-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center justify-between px-5 py-4 rounded-xl font-bold transition-colors ${active ? "text-[#0f4c5c] bg-[#e7f2f4]" : "text-[#425159] hover:bg-white"}`}>{link.label}<ChevronLeft className="w-4 h-4 text-[#2f7d8b]" /></Link>;
            })}
          </nav>
          <div className="p-5 mt-auto"><a href="tel:+966500000000" className="bg-[#0f4c5c] text-white px-4 py-3.5 rounded-xl flex justify-center items-center gap-2 font-bold shadow-lg"><PhoneCall className="w-5 h-5" /><span dir="ltr">050 000 0000</span></a></div>
        </aside>
      </div>
    </>
  );
}
