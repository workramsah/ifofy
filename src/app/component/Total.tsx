export default function Total() {
    return (
        <>
            <div className=" bg-[rgba(255,255,255,1)] w-[262px] h-[161px] flex flex-col justify-evenly rounded-2xl pl-[16px] shadow-[2.93px_2.93px_26.4px_rgba(0,0,0,0.05)] hover:shadow-[3px_3px_30px_rgba(0,0,0,0.08)]">
                <h1 className="text-[rgba(32,34,36,1)]">Total today sale</h1>
                <h1 className="text-[28px] font-semibold">NRS. 40,689</h1>
                <div className="flex space-x-2 items-center">
                    <img src="/path.png" className="w-[20px] h-[12px]"></img>
                    <div><span className="text-[16px] text-[rgba(0,182,155,1)]">8.5%</span> <span className="text-[16px]"> Up from Yesterday</span></div>
                </div>
            </div>
        </>
    )
}