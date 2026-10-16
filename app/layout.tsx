import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://qassim-insulation.com';

const title = 'شركة عزل بالقصيم - أفضل خدمات العزل المائي والحراري والفوم';
const description = 'شركة متخصصة في أعمال العزل المائي والحراري وعزل الفوم وكشف تسربات المياه وعزل الخزانات في القصيم بريدة وعنيزة والرس.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s',
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'عوازل القصيم',
    title,
    description,
    url: '/',
    images: [{ url: '/images/hero-roof-insulation.webp', width: 1200, height: 630, alt: 'أعمال العزل المائي والحراري في القصيم' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero-roof-insulation.webp'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${cairo.className}`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-[#291686] focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#291686]/30"
        >
          تخطي إلى المحتوى الرئيسي
        </a>
        <Header />
        <main id="main-content" className="site-main min-h-screen text-slate-800 flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
