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
      <div className="bg-[#24124d] text-[#eee9f7] px-4 text-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto min-h-10 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 md:gap-7 overflow-hidden">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-4 h-4 text-[#a8c77d]" />
              القصيم - بريدة - عنيزة - الرس
            </span>
            <span className="hidden sm:flex items-center gap-2 whitespace-nowrap text-[#d7cfea]">
              <Clock className="w-4 h-4 text-[#a8c77d]" />
              خدمة على مدار 24 ساعة
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <a key={index} href="#" aria-label="حساب التواصل الاجتماعي" className="w-7 h-7 rounded-full flex items-center justify-center text-[#d7cfea] hover:bg-white/10 hover:text-white transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-[#e9e2f0] shadow-[0_8px_30px_rgba(44,27,74,.07)]">
        <div className="max-w-7xl mx-auto px-4 min-h-[88px] flex justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="العودة إلى الرئيسية">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <LogoIcon className="w-14 h-14" />
            </div>
            <div>
              <p className="text-[1.45rem] font-black text-[#352064] leading-none tracking-tight">عوازل القصيم</p>
              <p className="text-xs text-[#746d7e] font-semibold mt-1.5">للعزل وكشف التسربات</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 font-bold text-[#4a4352] bg-[#faf8fc] border border-[#eee8f3] rounded-full px-2 py-1.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2.5 rounded-full transition-all ${active ? "bg-white text-[#4a2a8a] shadow-sm" : "hover:bg-white hover:text-[#4a2a8a]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+966500000000" className="bg-[#4a2a8a] hover:bg-[#352064] text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-[0_12px_28px_rgba(74,42,138,.2)] transition-all hover:-translate-y-0.5">
              <PhoneCall className="w-5 h-5" />
              <span dir="ltr">050 000 0000</span>
            </a>
          </div>

          <button className="lg:hidden w-12 h-12 rounded-xl bg-[#4a2a8a] text-white flex items-center justify-center shadow-lg" onClick={() => setIsMobileMenuOpen(true)} aria-label="فتح القائمة">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[70] lg:hidden transition ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isMobileMenuOpen}>
        <button className={`absolute inset-0 bg-[#160c2a]/70 backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileMenuOpen(false)} aria-label="إغلاق القائمة" />
        <aside className={`absolute top-0 right-0 h-full w-[min(88vw,350px)] bg-[#fcfbfd] shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="bg-gradient-to-l from-[#352064] to-[#4a2a8a] text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3"><LogoIcon className="w-12 h-12" /><strong className="text-lg">عوازل القصيم</strong></div>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="إغلاق" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><X className="w-6 h-6" /></button>
          </div>
          <nav className="p-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center justify-between px-5 py-4 rounded-xl font-bold transition-colors ${pathname === link.href ? "text-[#4a2a8a] bg-[#f0eaf8]" : "text-[#4a4352] hover:bg-white"}`}>
                {link.label}<ChevronLeft className="w-4 h-4 text-[#7aa84f]" />
              </Link>
            ))}
          </nav>
          <div className="p-5 mt-auto">
            <a href="tel:+966500000000" className="bg-[#4a2a8a] text-white px-4 py-3.5 rounded-xl flex justify-center items-center gap-2 font-bold shadow-lg">
              <PhoneCall className="w-5 h-5" /><span dir="ltr">050 000 0000</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
