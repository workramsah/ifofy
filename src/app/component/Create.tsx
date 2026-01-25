import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CiLocationArrow1 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoMultiSelect } from "react-icons/go";
import { Button } from "@/components/ui/button";

export default function Create() {
    return (
        <>
            
                <div className="flex justify-center space-x-[58px]">
                    <div>
                        <div><span className="font-extrabold text-[36px] text-[rgba(248,101,23,1)]">Create</span> <span className="font-extrabold text-[36px] text-[rgba(9,30,67,1)]">Clean invoice</span></div>
                        <div>
                        <Accordion defaultValue={["shipping"]} className="max-w-lg">
                            <AccordionItem value="shipping">
                                <AccordionTrigger><CiLocationArrow1 />What invoice, quotation, estimated easily</AccordionTrigger>
                                <AccordionContent>
                                    We offer standard (5-7 days), express (2-3 days), and overnight
                                    shipping. Free shipping on international orders.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="returns">
                                <AccordionTrigger><h1><CiSearch /></h1> Add order with voice text or image</AccordionTrigger>
                                <AccordionContent>
                                    Returns accepted within 30 days. Items must be unused and in original
                                    packaging. Refunds processed within 5-7 business days.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="support">
                                <AccordionTrigger> <GoMultiSelect />Share invoice in whats-app directly for customer</AccordionTrigger>
                                <AccordionContent>
                                    Reach us via email, live chat, or phone. We respond within 24 hours
                                    during business days.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    </div>
                    <div className="  bg-[rgba(28,15,95,1)] w-[562px] h-[424px] rounded-3xl">
                        <div className=" bg-[rgba(255,255,255,1)] w-[262px] h-[161px] flex flex-col justify-evenly rounded-2xl pl-[16px] ml-[46px] ] ">
                            <h1 className="text-[rgba(32,34,36,1)]">Total today sale</h1>
                            <h1 className="text-[28px] font-semibold">NRS. 40,689</h1>
                            <div className="flex space-x-2 items-center">
                                <img src="/path.png" className="w-[20px] h-[12px]"></img>
                                <div><span className="text-[16px] text-[rgba(0,182,155,1)]">8.5%</span> <span className="text-[16px]"> Up from Yesterday</span></div>
                            </div>
                        </div>
                        <img src="/yourcomp.png" className="w-[210px] h-[207px] rounded-t-2xl bg-white ml-[331px] mt-[55px]"></img>
                    </div>
                </div>
                

        
        </>
    )
}