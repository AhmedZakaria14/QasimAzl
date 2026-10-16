"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToString } from "react-dom/server";
import { Building2, MapPin } from "lucide-react";

const BRAND = "#291686";
const BRAND_SOFT = "#7bbb3f";

const sites: { position: [number, number]; label: string; kind: "hub" | "area" }[] = [
  { position: [26.326, 43.975], label: "المركز الرئيسي: بريدة", kind: "hub" },
  { position: [26.094, 43.977], label: "تغطية: عنيزة", kind: "area" },
  { position: [25.867, 43.5], label: "تغطية: الرس", kind: "area" },
];

function makeIcon(kind: "hub" | "area") {
  const size = kind === "hub" ? 46 : 38;
  const html = renderToString(
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "9999px",
        background: kind === "hub" ? BRAND : "#ffffff",
        border: `3px solid ${kind === "hub" ? "#ffffff" : BRAND}`,
        boxShadow: "0 8px 20px rgba(29,14,99,.35)",
        color: kind === "hub" ? BRAND_SOFT : BRAND,
      }}
    >
      {kind === "hub" ? <Building2 size={22} /> : <MapPin size={18} />}
    </span>
  );

  return L.divIcon({
    html,
    className: "brand-marker",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

export default function CoverageMap() {
  const center: [number, number] = [26.326, 43.975];

  return (
    <div
      className="h-[400px] w-full rounded-2xl overflow-hidden shadow-md border border-[#e9e5f4] relative"
      style={{ zIndex: 1 }}
      role="img"
      aria-label="خريطة توضح نطاق تغطية خدمات عوازل القصيم في منطقة القصيم"
    >
      <MapContainer
        center={center}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={center}
          radius={70000}
          pathOptions={{ fillColor: BRAND, color: BRAND, weight: 2, fillOpacity: 0.12, opacity: 0.5 }}
        />

        {sites.map((site) => (
          <Marker key={site.label} position={site.position} icon={makeIcon(site.kind)}>
            <Popup>
              <div className="font-bold text-[#1d0e63] text-center text-sm" dir="rtl">
                {site.label}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
