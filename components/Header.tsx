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
      <div className="bg-[#291686] text-white py-2.5 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 md:gap-7 overflow-hidden">
            <span className="flex items-center gap-2 whitespace-nowrap"><MapPin className="w-4 h-4 text-[#a9d66c]" /> القصيم - بريدة - عنيزة - الرس</span>
            <span className="hidden sm:flex items-center gap-2 whitespace-nowrap"><Clock className="w-4 h-4 text-[#a9d66c]" /> خدمة على مدار 24 ساعة</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" aria-label="فيسبوك" className="hover:text-[#a9d66c] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="تويتر" className="hover:text-[#a9d66c] transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="إنستغرام" className="hover:text-[#a9d66c] transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur-xl shadow-[0_8px_35px_rgba(41,22,134,.08)] sticky top-0 z-50 border-b border-[#ece8f7]">
        <div className="max-w-7xl mx-auto px-4 min-h-[86px] flex justify-between items-center gap-5">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="العودة إلى الرئيسية">
            <LogoIcon className="w-14 h-14" />
            <div>
              <p className="text-2xl font-black text-[#291686] leading-none tracking-tight">عوازل القصيم</p>
              <p className="text-xs text-slate-500 font-semibold mt-1.5">للعزل وكشف التسربات</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-bold text-slate-700">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={`relative py-8 transition-colors hover:text-[#291686] ${active ? "text-[#291686]" : ""}`}>
                  {link.label}
                  <span className={`absolute bottom-4 right-0 h-[3px] rounded-full bg-[#7bbb3f] transition-all ${active ? "w-full" : "w-0"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+966500000000" className="bg-[#291686] hover:bg-[#1d0e63] text-white px-5 py-3 rounded-md font-bold flex items-center gap-2 shadow-lg transition-all hover:-translate-y-0.5">
              <PhoneCall className="w-5 h-5" />
              <span dir="ltr">050 000 0000</span>
            </a>
          </div>

          <button className="lg:hidden w-12 h-12 rounded-full bg-[#291686] text-white flex items-center justify-center shadow-lg" onClick={() => setIsMobileMenuOpen(true)} aria-label="فتح القائمة">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[70] lg:hidden transition ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isMobileMenuOpen}>
        <button className={`absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileMenuOpen(false)} aria-label="إغلاق القائمة" />
        <aside className={`absolute top-0 right-0 h-full w-[min(88vw,340px)] bg-white shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="bg-[#291686] text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3"><LogoIcon className="w-12 h-12" /><strong>عوازل القصيم</strong></div>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="إغلاق"><X className="w-7 h-7" /></button>
          </div>
          <nav className="p-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center justify-between px-5 py-4 border-b border-slate-100 font-bold ${pathname === link.href ? "text-[#291686] bg-[#f4f1ff]" : "text-slate-700"}`}>
                {link.label}<ChevronLeft className="w-4 h-4" />
              </Link>
            ))}
          </nav>
          <div className="p-5">
            <a href="tel:+966500000000" className="bg-[#291686] text-white px-4 py-3.5 rounded-md flex justify-center items-center gap-2 font-bold">
              <PhoneCall className="w-5 h-5" /><span dir="ltr">050 000 0000</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
