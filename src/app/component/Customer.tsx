import { TbCircleDotted } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
export default function Customer() {
    return (
        <>
            <div className="border-2 rounded-2xl w-[174px] h-[177.22px] px-[11.65px] pt-[]">
                <h1 className="text-[10.66px] font-semibold">Customers</h1>
                <div className="flex flex-col items-center justify-evenly space-y-[19px]">
                    <div className="text-[70.89px] text-[rgba(72,128,255,1)]"><TbCircleDotted /></div>
                    <div className="flex space-x-[30.6px]">
                        <div className="space-y-[8px]">
                            <h1 className="text-[13.6px] font-bold text-center">34,249</h1>
                            <div className="flex space-x-[3px]">
                                <span className="text-[6px] text-[rgba(72,128,255,1)] bg-[rgba(72,128,255,1)] p-[3px] rounded-full"><GoDotFill /></span> <span className="text-[7.77px] text-[rgba(40,45,50,1)]">New Customers</span>
                            </div>
                        </div>
                        <div className="space-y-[8px]">
                            <h1 className="text-[13.6px] font-bold text-center">1,420</h1>
                            <div className="flex space-x-[3px]">
                                <span className="text-[6px] text-[rgba(72,128,255,1)] bg-[rgba(72,128,255,1)] p-[3px] rounded-full"><GoDotFill /></span> <span className="text-[7.77px] text-[rgba(40,45,50,1)]">Repeated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}