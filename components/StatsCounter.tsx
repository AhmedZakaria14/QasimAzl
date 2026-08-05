"use client";

import CountUp from 'react-countup';

const stats = [
  { id: 1, name: 'مشروع مكتمل', value: 500, suffix: '+' },
  { id: 2, name: 'عميل راضٍ', value: 1200, suffix: '+' },
  { id: 3, name: 'سنوات من الخبرة', value: 15, suffix: '+' },
  { id: 4, name: 'فني معتمد', value: 50, suffix: '+' },
];

export default function StatsCounter() {
  return (
    <section className="bg-[#f7f3fb] py-16 sm:py-20 border-y border-[#e9e2f0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-[#e9e2f0] px-4 py-8 shadow-[0_12px_35px_rgba(44,27,74,.06)]">
              <dd className="text-4xl md:text-5xl font-black tracking-tight text-[#4a2a8a] leading-none">
                <CountUp end={stat.value} suffix={stat.suffix} enableScrollSpy scrollSpyOnce duration={2.5} />
              </dd>
              <dt className="mt-4 text-sm md:text-base text-[#6f687b] font-bold">{stat.name}</dt>
              <span className="mt-4 h-1 w-10 rounded-full bg-[#7aa84f]" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
