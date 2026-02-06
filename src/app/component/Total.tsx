'use client';

import { useEffect, useMemo, useState } from 'react';

function formatNumber(n: number) {
  return new Intl.NumberFormat('en-US').format(n);
}

export default function Total() {
  const target = 40689;
  const durationMs = 1100;

  const [value, setValue] = useState(0);
  const formatted = useMemo(() => formatNumber(value), [value]);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={[
        'relative bg-white w-[262px] h-[161px]',
        'flex flex-col justify-between',
        'rounded-2xl px-4 py-4',
        'shadow-[2.93px_2.93px_26.4px_rgba(0,0,0,0.05)]',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-0.5 hover:shadow-[3px_3px_30px_rgba(0,0,0,0.08)]',
        'focus-within:ring-2 focus-within:ring-blue-200 focus-within:ring-offset-2',
      ].join(' ')}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-[13px] leading-[13px] text-[#7A7F86] font-medium">
            Total today sale
          </p>
          <p className="text-[28px] leading-[32px] font-semibold tracking-tight text-[#111827] tabular-nums">
            <span className="text-[#111827]">NRS.</span>{' '}
            <span aria-label={`NRS ${formatted}`}>{formatted}</span>
          </p>
        </div>

        {/* subtle accent */}
        <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-50 to-indigo-50 ring-1 ring-black/5" />
      </div>

      <div className="flex items-center gap-2">
        <img src="/path.png" alt="" className="w-[20px] h-[12px] opacity-90" />
        <p className="text-[14px] leading-[14px] text-[#111827]">
          <span className="text-[rgba(0,182,155,1)] font-semibold">8.5%</span>{' '}
          <span className="text-[#6B7280]">Up from Yesterday</span>
        </p>
      </div>
    </div>
  );
}