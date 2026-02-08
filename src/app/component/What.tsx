"use client";

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Anna from "./Anna";

export default function What() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const handleResize = () => {
            setTimeout(checkScrollButtons, 100);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const newScrollLeft =
                scrollContainerRef.current.scrollLeft +
                (direction === "left" ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
            setTimeout(checkScrollButtons, 100);
        }
    };

    const handleScroll = () => {
        checkScrollButtons();
    };

    return (
        <>
            <div className="flex flex-col space-y-[5px] md:space-y-[20px]">
                <h1 className="font-extrabold md:text-[36px] text-[28px] text-center mb-2 md:mb-0">
                    What Customers are Saying
                </h1>
                <div className="relative w-full">
                    {/* Left Scroll Button */}
                    {showLeftButton && (
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all hidden md:flex items-center justify-center"
                            aria-label="Scroll left"
                        >
                            <FaChevronLeft className="text-[rgba(248,101,23,1)] text-lg md:text-xl" />
                        </button>
                    )}

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="w-full h-[400px] md:h-[646.27px] flex items-center justify-center space-x-[16px] md:space-x-[24px] no-scrollbar overflow-x-auto flex-nowrap scroll-smooth"
                    >
                        <Anna />
                        <Anna />
                        <Anna />
                        <Anna />
                        <Anna />
                        <Anna />
                        <Anna />
                    </div>

                    {/* Right Scroll Button */}
                    {showRightButton && (
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all hidden md:flex items-center justify-center"
                            aria-label="Scroll right"
                        >
                            <FaChevronRight className="text-[rgba(248,101,23,1)] text-lg md:text-xl" />
                        </button>
                    )}

                    {/* Mobile Scroll Indicators */}
                    <div className="flex md:hidden justify-center items-center space-x-1.5 mt-2">
                        <button
                            onClick={() => scroll("left")}
                            className="bg-[rgba(248,101,23,1)] text-white rounded-full p-1.5 shadow-md"
                            aria-label="Scroll left"
                        >
                            <FaChevronLeft className="text-xs" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="bg-[rgba(248,101,23,1)] text-white rounded-full p-1.5 shadow-md"
                            aria-label="Scroll right"
                        >
                            <FaChevronRight className="text-xs" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}