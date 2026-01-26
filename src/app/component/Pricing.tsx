import { IoToggle } from "react-icons/io5";
import Plan from "./Plan";
import Bussinessp from "./Businessp";
export default function Pricing(){
    return(
        <>
        <div className="flex flex-col items-center space-y-[30px]">
            <h1 className="font-bold text-[42px] text-center">Pricing</h1>
            <div className="space-x-2 flex items-center"><IoToggle className="text-[rgba(229,111,30,1)] w-[34px] h-[22px]"/> <h1 className="text-[14px] text-[rgba(71,71,71,1)]">Annul (Save 25%)</h1></div>
            <div className="flex flex-col md:flex-row gap-[20px]"><Plan/> <Bussinessp/></div>
            <h1 className=" text-[16px] text-[rgba(112,124,140,1)]">Risk free, you can cancel any time.</h1>
        </div>
        </>
    )
}