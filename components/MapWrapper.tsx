"use client";

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./CoverageMap'), { 
  ssr: false, 
  loading: () => (
    <div className="h-[400px] w-full rounded-2xl bg-slate-100 animate-pulse flex items-center justify-center text-slate-400 font-medium">
      جاري تحميل الخريطة...
    </div>
  ) 
});

export default function MapWrapper() {
  return <MapComponent />;
}
