"use client";

import { useState, type FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";

const serviceOptions = [
  "عزل مائي",
  "عزل حراري",
  "عزل فوم",
  "عزل خزانات",
  "كشف تسربات المياه",
  "أخرى",
];

const WHATSAPP_NUMBER = "966500000000";
const PHONE_DISPLAY = "050 000 0000";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      "طلب خدمة من موقع عوازل القصيم",
      `الاسم: ${name || "—"}`,
      `رقم الجوال: ${phone || "—"}`,
      `نوع الخدمة: ${service}`,
      message ? `التفاصيل: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setSubmitted(true);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium mb-2">الاسم الكريم</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border focus:outline-none transition-all"
          placeholder="أدخل اسمك"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium mb-2">رقم الجوال</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          dir="ltr"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border focus:outline-none transition-all text-right"
          placeholder="05xxxxxxxx"
        />
      </div>
      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium mb-2">نوع الخدمة المطلوبة</label>
        <select
          id="contact-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border focus:outline-none transition-all appearance-none bg-white"
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-2">رسالتك أو تفاصيل الطلب</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border focus:outline-none transition-all resize-none"
          placeholder="اكتب تفاصيل طلبك هنا..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/25"
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        <span>إرسال الطلب عبر واتساب</span>
      </button>

      <p className="text-sm text-slate-500 leading-relaxed" role="status">
        {submitted
          ? "تم تجهيز طلبك وفتح واتساب في نافذة جديدة. إذا لم تُفتح تلقائياً، استخدم زر واتساب العائم أو اتصل بنا مباشرة."
          : "بالضغط على الزر سيتم تجهيز طلبك وفتح واتساب مباشرة لإرساله إلينا."}
      </p>

      <p className="text-sm text-slate-500 flex items-center justify-center gap-2 pt-1">
        <Send className="w-4 h-4 text-[#7bbb3f]" aria-hidden="true" />
        <span>أو اتصل بنا مباشرة على <a href="tel:+966500000000" dir="ltr" className="font-bold text-[#291686] hover:underline rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#291686]/40">{PHONE_DISPLAY}</a></span>
      </p>
    </form>
  );
}
