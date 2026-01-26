import { TiTick } from "react-icons/ti";
export default function Plan() {
    return (
        <>
            <div className="space-y-[32px] p-[24px] border-2 hover:border-black rounded-2xl w-[320px] h-[453.38px]">
                <div className="space-y-[24px]">
                    <h1 className="font-semibold text-[20px]">Basic-Free</h1>
                    <h1 className="font-bold text-[24px]">Rs 0<span className="text-[14px] text-[rgba(71,71,71,1)] font-medium">/ month</span></h1>
                </div>
                <button className="w-[272px] h-[42px] text-center text-[15px] font-medium bg-[rgba(84,88,102,0.1)] rounded-2xl hover:bg-[rgba(229,111,30,1)] hover:text-white">Start free</button>
                <div className="space-y-[11.39px]">
                    <h1 className="font-medium text-[14px] space-x-[12px]">Includes</h1>
                    <h1 className="flex space-x-2 items-center text-[14px]"><TiTick /> <span>7-day trial</span> </h1>
                    <h1 className="flex space-x-2 items-center text-[14px]"><TiTick /> <span>Max 5 customers</span> </h1>
                    <h1 className="flex space-x-2 items-center text-[14px]"><TiTick /> <span>Manul payments</span> </h1>
                    <h1 className="flex space-x-2 items-center text-[14px]"><TiTick /> <span>Max 10 orders/month</span> </h1>
                    <h1 className="flex space-x-2 items-center text-[14px]"><TiTick /> <span>1 WhatsApp template</span> </h1>

                </div>
            </div>
        </>
    )
}