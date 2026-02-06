'use client';

import { useEffect, useMemo, useState } from 'react';
import { TbCircleDotted } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

function formatNumber(n: number) {
  return new Intl.NumberFormat('en-US').format(n);
}

export default function Customer() {
  const newCustomersTarget = 34249;
  const repeatedTarget = 1420;
  const durationMs = 1500;

  const [newCustomers, setNewCustomers] = useState(0);
  const [repeated, setRepeated] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const formattedNewCustomers = useMemo(() => formatNumber(newCustomers), [newCustomers]);
  const formattedRepeated = useMemo(() => formatNumber(repeated), [repeated]);

  useEffect(() => {
    setIsAnimating(true);
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic for smooth animation
      const eased = 1 - Math.pow(1 - t, 3);
      
      setNewCustomers(Math.round(eased * newCustomersTarget));
      setRepeated(Math.round(eased * repeatedTarget));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setIsAnimating(false);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-white rounded-2xl w-[174px] h-[177.22px] px-[11.65px] pt-[11.65px] shadow-[2.93px_2.93px_26.4px_rgba(0,0,0,0.05)] hover:shadow-[3px_3px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
      <h1 className="text-[10.66px] font-semibold text-[#20222A] mb-[8px]">Customers</h1>
      <div className="flex flex-col items-center justify-evenly space-y-[19px]">
        {/* Rotating Circle Icon */}
        <div className="relative">
          <div 
            className="text-[70.89px] text-[rgba(72,128,255,1)] transition-transform duration-300"
            style={{
              animation: isAnimating ? 'rotate 2s linear infinite' : 'none',
            }}
          >
            <TbCircleDotted />
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex space-x-[30.6px]">
          {/* New Customers */}
          <div className="space-y-[8px]">
            <h1 className="text-[13.6px] font-bold text-center text-[#20222A] tabular-nums">
              {formattedNewCustomers}
            </h1>
            <div className="flex items-center space-x-[3px]">
              <span className="text-[6px] text-[rgba(72,128,255,1)] bg-[rgba(72,128,255,1)] p-[3px] rounded-full">
                <GoDotFill />
              </span>
              <span className="text-[7.77px] text-[rgba(40,45,50,1)]">New Customers</span>
            </div>
          </div>
          
          {/* Repeated */}
          <div className="space-y-[8px]">
            <h1 className="text-[13.6px] font-bold text-center text-[#20222A] tabular-nums">
              {formattedRepeated}
            </h1>
            <div className="flex items-center space-x-[3px]">
              <span className="text-[6px] text-[rgba(72,128,255,1)] bg-[rgba(72,128,255,1)] p-[3px] rounded-full">
                <GoDotFill />
              </span>
              <span className="text-[7.77px] text-[rgba(40,45,50,1)]">Repeated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
