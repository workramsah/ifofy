'use client';

export default function Mobile() {
    return (
        <>
            <div className="relative w-[244px] h-[495px] overflow-hidden">
                <img src="/mobile/font.png" className="absolute w-[244px] h-[495px]" alt="Mobile frame" />
                <img src="/mobile/icon.png" className="absolute w-[187px] h-[12px] top-[62px] left-7 z-10" alt="Mobile icon" />
                
                {/* Screen container with overflow hidden */}
                <div className="absolute w-[217px] h-[375px] top-[90px] left-[12px] overflow-hidden rounded-[8px]">
                    <img 
                        src="/mobile/screen.png" 
                        className="w-[217px] h-auto"
                        alt="Mobile screen"
                        style={{
                            animation: 'scrollVertical 10s ease-in-out infinite',
                            willChange: 'transform',
                        }}
                    />
                </div>
            </div>
        </>
    );
}
