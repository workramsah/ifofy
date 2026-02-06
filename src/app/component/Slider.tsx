'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  images?: string[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Slider({
  images = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
  ],
  className,
  autoPlay = false,
  autoPlayInterval = 3000,
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 300);
        return (prev + 1) % images.length;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentIndex, isTransitioning]);

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div
      className={cn(
        'relative w-full max-w-[176px] h-[178px] bg-white rounded-[6.84px]',
        'shadow-[2.93px_2.93px_26.4px_rgba(0,0,0,0.05)]',
        'overflow-hidden',
        'transition-all duration-300 ease-out',
        'hover:shadow-[3px_3px_30px_rgba(0,0,0,0.08)]',
        className
      )}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Title */}
      <div className="absolute top-[12px] left-0 right-0 text-center z-10">
        <h3 className="text-[10px] leading-[10px] text-[#20222A] font-medium">
          Title
        </h3>
      </div>

      {/* Image Container */}
      <div className="relative w-full h-full flex items-center justify-center pt-[32px] pb-[50px]">
        <div className="relative w-[72px] h-[91px] overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-full flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className={cn(
              'absolute left-[28px] bottom-[79px] z-20',
              'w-[20px] h-[20px] rounded-full',
              'bg-[#E2EAF8] flex items-center justify-center',
              'transition-all duration-200 ease-out',
              'hover:bg-[#D0DDF0] hover:scale-110',
              'active:scale-95',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'focus:outline-none focus:ring-2 focus:ring-[#E2EAF8] focus:ring-offset-2'
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft
              size={12}
              className="text-[#626262]"
              strokeWidth={2.5}
            />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className={cn(
              'absolute right-[28px] bottom-[79px] z-20',
              'w-[20px] h-[20px] rounded-full',
              'bg-[#E2EAF8] flex items-center justify-center',
              'transition-all duration-200 ease-out',
              'hover:bg-[#D0DDF0] hover:scale-110',
              'active:scale-95',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'focus:outline-none focus:ring-2 focus:ring-[#E2EAF8] focus:ring-offset-2'
            )}
            aria-label="Next slide"
          >
            <ChevronRight
              size={12}
              className="text-[#626262]"
              strokeWidth={2.5}
            />
          </button>
        </>
      )}

      {/* Status Text */}
      <div className="absolute bottom-[22px] left-0 right-0 text-center z-10">
        <div className="flex flex-col items-center justify-center gap-[2px]">
          <span className="text-[10px] leading-[10px] text-[#282E33] font-medium">
            Delivered
          </span>
          <span className="text-[10px] leading-[10px] text-[#4880FF] font-medium">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
