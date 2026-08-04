import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const cairo = Cairo({ subsets: ['arabic', 'latin'] });

export const metadata: Metadata = {
  title: 'شركة عزل بالقصيم - أفضل خدمات العزل المائي والحراري والفوم',
  description: 'شركة متخصصة في أعمال العزل المائي والحراري وعزل الفوم وكشف تسربات المياه وعزل الخزانات في القصيم بريدة وعنيزة والرس.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
