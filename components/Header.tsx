"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Droplet, Menu, X, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";
import LogoIcon from "@/components/LogoIcon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/services", label: "خدماتنا" },
    { href: "/features", label: "مميزاتنا" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  return (
    <>
      {/* Topbar */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-300" /> القصيم - بريدة - عنيزة - الرس</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-300" /> خدمة على مدار 24 ساعة</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-300 transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <LogoIcon className="w-12 h-12" />
            <div>
              <h1 className="text-2xl font-bold text-blue-900 leading-none tracking-tight">عوازل القصيم</h1>
              <p className="text-xs text-slate-500 font-medium mt-1">للعزل وكشف التسربات</p>
            </div>
          </Link>

          {/* Desktop Nav - adjusted spacing with gap-10 for better layout */}
          <nav className="hidden md:flex items-center gap-10 font-bold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-blue-600 ${pathname === link.href ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'pb-1'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a href="tel:+966500000000" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-blue-200 transition-transform hover:scale-105">
              <PhoneCall className="w-5 h-5" />
              <span dir="ltr">050 000 0000</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4 text-slate-700 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={pathname === link.href ? 'text-blue-600 font-bold' : ''}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+966500000000" className="bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-bold flex justify-center items-center gap-2 mt-4">
                <PhoneCall className="w-5 h-5" />
                <span dir="ltr">050 000 0000</span>
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
