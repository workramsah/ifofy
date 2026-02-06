'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BoxProps {
  className?: string;
}

export default function Box({ className }: BoxProps) {
  const [activeTab, setActiveTab] = useState<'7d' | '30d' | '12m'>('12m');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Chart data points (normalized for display)
  const chartData = [20, 35, 28, 45, 38, 52, 48, 65, 58, 72, 68, 85];
  const months = ['JAN', 'FAB', 'MAR', 'APR', 'MAY'];

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculate chart path
  const getChartPath = () => {
    const width = 276;
    const height = 85;
    const points = chartData;
    const stepX = width / (points.length - 1);
    
    let path = `M ${0} ${height - (points[0] / 100) * height}`;
    for (let i = 1; i < points.length; i++) {
      const x = i * stepX;
      const y = height - (points[i] / 100) * height;
      path += ` L ${x} ${y}`;
    }
    return path;
  };


  return (
    <div
      className={cn(
        'relative w-full max-w-[319px] h-[256px] bg-white rounded-[12.5px] shadow-[0_1.25px_3.75px_rgba(13,10,44,0.08)]',
        'transition-all duration-500 ease-out hover:shadow-[0_2px_8px_rgba(13,10,44,0.12)]',
        'mx-auto',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className
      )}
    >
      {/* Card Header */}
      <div className="absolute top-[20px] left-[20px] right-[20px] flex items-start justify-between z-10">
        {/* Card Info */}
        <div className="flex flex-col gap-[2px]">
          <span className="text-[13px] leading-[13px] text-[#928F9A] font-medium">
            Statistics
          </span>
          <h3 className="text-[18px] leading-[18px] text-[#1E1C39] font-semibold">
            Sales Status
          </h3>
        </div>

        {/* Growth Info */}
        <div className="flex flex-col items-end gap-[6px]">
          <div className="text-[31px] leading-[31px] text-[#1E1C39] font-bold">
            $12,345
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="relative w-[13.6px] h-[13.6px]">
              <div className="absolute inset-0 bg-[#E1F6E3] rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="7"
                  height="5"
                  viewBox="0 0 7 5"
                  fill="none"
                  className="transform rotate-45"
                >
                  <path
                    d="M0.5 4.5L3.5 1.5L6.5 4.5"
                    stroke="#04CF00"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="text-[13px] leading-[13px] text-[#04CF00] font-medium">
              +12.5%
            </span>
          </div>
        </div>
      </div>

      {/* Tab Filters */}
      <div className="absolute top-[75px] left-[121px] z-10 sm:left-[121px]">
        <div className="relative bg-[#F8F8FF] rounded-[5.66px] px-[8px] py-[2px] flex items-center gap-[8px]">
          <button
            onClick={() => setActiveTab('7d')}
            className={cn(
              'text-[7px] leading-[7px] px-[4px] py-[3px] rounded-[4.98px] transition-all duration-200',
              activeTab === '7d'
                ? 'bg-[#1E1C39] text-white'
                : 'text-[#928F9A] hover:text-[#1E1C39]'
            )}
          >
            7 days
          </button>
          <button
            onClick={() => setActiveTab('30d')}
            className={cn(
              'text-[7px] leading-[7px] px-[4px] py-[3px] rounded-[4.98px] transition-all duration-200',
              activeTab === '30d'
                ? 'bg-[#1E1C39] text-white'
                : 'text-[#928F9A] hover:text-[#1E1C39]'
            )}
          >
            30 days
          </button>
          <button
            onClick={() => setActiveTab('12m')}
            className={cn(
              'text-[7px] leading-[7px] px-[4px] py-[3px] rounded-[4.98px] transition-all duration-200',
              activeTab === '12m'
                ? 'bg-[#1E1C39] text-white'
                : 'text-[#928F9A] hover:text-[#1E1C39]'
            )}
          >
            12 months
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute top-[66px] left-[20px] right-[20px] h-[0.6px] bg-[#E5E5EF]" />

      {/* Chart Container */}
      <div className="absolute top-[97px] left-0 right-0 h-[159px] overflow-hidden">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between px-[20px] py-[20px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-[0.94px] bg-[#E5E5EF] w-full"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>

        {/* Chart Gradient Background */}
        <div className="absolute inset-0 opacity-30">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 319 159"
            preserveAspectRatio="none"
            className="absolute inset-0"
          >
            <defs>
              <linearGradient
                id="chartGradientBg"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#7659FF" stopOpacity="1" />
                <stop offset="46.68%" stopColor="#CAC8FF" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d={getChartPath()}
              fill="url(#chartGradientBg)"
              opacity="0.3"
              transform="translate(20, 20)"
            />
          </svg>
        </div>

        {/* Chart Line */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 319 159"
          preserveAspectRatio="none"
          className="absolute inset-0"
          onMouseLeave={() => setHoveredPoint(null)}
        >
          <defs>
            <linearGradient id="chartLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4A3AFF" />
              <stop offset="100%" stopColor="#6D3AFF" />
            </linearGradient>
          </defs>
          <path
            d={getChartPath()}
            fill="none"
            stroke="url(#chartLineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(20, 20)"
            className="transition-all duration-1000 ease-out"
            style={{
              strokeDasharray: isVisible ? '1000' : '0',
              strokeDashoffset: isVisible ? '0' : '1000',
            }}
          />

          {/* Interactive Points */}
          {chartData.map((_, index) => {
            const stepX = 276 / (chartData.length - 1);
            const x = 20 + index * stepX;
            const y = 20 + (85 - (chartData[index] / 100) * 85);
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(index)}
                />
                {hoveredPoint === index && (
                  <>
                    {/* Indicator Line */}
                    <line
                      x1={x}
                      y1={y + 7}
                      x2={x}
                      y2={y + 77}
                      stroke="#928F9A"
                      strokeWidth="1.25"
                      strokeDasharray="4 4"
                      className="animate-pulse"
                    />
                    {/* Indicator Dot */}
                    <circle
                      cx={x}
                      cy={y}
                      r="6.78"
                      fill="#4A3AFF"
                      stroke="white"
                      strokeWidth="2.5"
                      className="drop-shadow-[0_5px_10px_rgba(13,10,44,0.08)]"
                      style={{
                        animation: 'scaleIn 0.3s ease-out',
                      }}
                    />
                    {/* Hover Tooltip */}
                    <g transform={`translate(${x}, ${y - 50})`}>
                      <defs>
                        <filter id={`tooltipShadow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="1.25" stdDeviation="5" floodColor="rgba(13,10,44,0.12)" />
                        </filter>
                      </defs>
                      {/* Tooltip Container */}
                      <rect
                        x="-20"
                        y="-18"
                        width="40"
                        height="31"
                        rx="5"
                        fill="white"
                        filter={`url(#tooltipShadow-${index})`}
                      />
                      {/* Tooltip Arrow */}
                      <polygon
                        points="0,13 -4,18 4,18"
                        fill="white"
                      />
                      <text
                        x="0"
                        y="2"
                        textAnchor="middle"
                        fontSize="12"
                        fill="#1E1C39"
                        fontWeight="500"
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        {chartData[index]}
                      </text>
                    </g>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Time Labels */}
      <div className="absolute bottom-[10px] left-[20px] right-[20px] flex justify-between">
        {months.map((month, index) => (
          <span
            key={month}
            className="text-[10px] leading-[10px] text-[#614A83] font-medium"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {month}
          </span>
        ))}
      </div>
    </div>
  );
}
