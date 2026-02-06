import Box from "./Box";
import Customer from "./Customer";
import Mobile from "./Mobile";
import Offer from "./Offer";
import Total from "./Total";

export default function Group() {
    return (
        <>
             <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-[81px]">
                <div className="flex flex-col space-y-3 items-center md:items-end">
                    <Offer/>
                    <div className="w-[319px] h-[256px] object-cover flex items-center justify-center " ><Box/></div>
                   
                </div>
                <div> <Mobile /></div>
                
                <div className=" flex flex-col space-y-3 md:items-start items-center">
                    <Customer/>
                    <Total/>
                </div>
            </div>
        </>
    )
}