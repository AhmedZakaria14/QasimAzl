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
    <div className="bg-white py-16 sm:py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-slate-600 font-medium">{stat.name}</dt>
              <dd className="order-first text-5xl font-bold tracking-tight text-blue-600">
                <CountUp 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  duration={2.5}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
