import { IoToggle } from "react-icons/io5";
import Plan from "./Plan";
import Bussinessp from "./Businessp";
import Toggle from "./Toggle";
export default function Pricing() {
    return (
        <>
            <div className="flex flex-col items-center md:space-y-[30px] space-y-[10px]">
                <h1 className="font-bold md:text-[36px] text-[28px] text-center">Pricing</h1>
                <div className="space-x-2 flex items-center justify-center w-full">
                    <div className="flex items-center justify-center">
                        <Toggle />
                    </div>
                    <h1 className="text-[14px] text-[rgba(71,71,71,1)] text-center">Annul (Save 25%)</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px]"><Plan /> <Bussinessp /></div>
                <h1 className=" text-[16px] text-[rgba(112,124,140,1)]">Risk free, you can cancel any time.</h1>
            </div>
        </>
    )
}