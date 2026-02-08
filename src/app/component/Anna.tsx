export default function Anna() {
    return (
        <>
            <div className="w-[280px] md:w-[409.6px] min-w-[280px] md:min-w-[409.6px] h-[320px] md:h-[446.19px] border-2 pl-4 md:pl-6 flex flex-col justify-evenly flex-shrink-0">
                <div className="flex space-x-3 md:space-x-4 items-center">
                    <img src="/profile.png" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                    <div>
                        <h1 className="font-semibold text-[13px] md:text-[15.8px]">Anna Magar</h1>
                        <h1 className="text-[12px] md:text-[13.6px]">CEO</h1>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly space-y-3 md:space-y-4">
                    <h1 className="font-medium text-[16px] md:text-[20.3px]">Nepal Plus</h1>
                    <h1 className="text-[13px] md:text-[15.6px]">
                        "I've been using ifofy, and it<br />
                        continues to be a major revenue generator<br />
                        for my business. It's easy to create and<br />
                        upload content, and I never have to worry<br />
                        about invoice processing..."
                    </h1>

                    <div className="flex items-center space-x-3 md:space-x-4">
                        <img src="/flag.png" className="w-[10px] h-[12px]" />
                        <h1 className="text-[13px] md:text-[15.6px]">Nepal</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
