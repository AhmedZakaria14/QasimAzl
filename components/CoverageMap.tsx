"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

export default function CoverageMap() {
  useEffect(() => {
    // Fix for default marker icons in React Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  // Qassim coordinates
  const position: [number, number] = [26.326, 43.975]; // Buraidah roughly
  
  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 relative" style={{ zIndex: 1 }}>
      <MapContainer 
        center={position} 
        zoom={9} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[26.326, 43.975]}>
          <Popup>
            <div className="font-bold text-slate-800 text-center text-sm" dir="rtl">
              المركز الرئيسي: بريدة
            </div>
          </Popup>
        </Marker>
        <Marker position={[26.094, 43.977]}>
          <Popup>
            <div className="font-bold text-slate-800 text-center text-sm" dir="rtl">
              تغطية: عنيزة
            </div>
          </Popup>
        </Marker>
        <Marker position={[25.867, 43.5]}>
          <Popup>
            <div className="font-bold text-slate-800 text-center text-sm" dir="rtl">
              تغطية: الرس
            </div>
          </Popup>
        </Marker>
        
        {/* Coverage Area Circle */}
        <Circle 
          center={position} 
          radius={70000} 
          pathOptions={{ fillColor: '#2563eb', color: '#1e40af', weight: 2, fillOpacity: 0.1 }} 
        />
      </MapContainer>
    </div>
  );
}
