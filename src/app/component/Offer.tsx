import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
export default function Offer(){
return(
    <div className="p-[12px] w-[176px] h-[178.44px] border shadow-2xs rounded-sm flex flex-col items-center justify-evenly bg-white">
        <h1 className="text-[10.7px] font-semibold">Offer Product</h1>
        <div className="flex items-center space-x-2">
            <div><FaCircleArrowLeft /></div>
            <img src="laptop.png" alt="laptop" className="w-[75px] h-[68px]" />
            <div><FaArrowCircleRight /></div>
        </div>
        <h1 className="text-[8.8px] text-center">Beats Headphone 2019</h1>
        <h1 className="text-[7.82px] text-[rgba(72,128,255,1)] text-center">$89.00</h1>
    </div>
)
}