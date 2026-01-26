import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TiTick } from "react-icons/ti";
import { BiSelectMultiple } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoMultiSelect } from "react-icons/go";
import { Button } from "@/components/ui/button";

export default function Create() {
    return (
        <>
            
                <div className="flex flex-col md:flex-row justify-center space-x-[58px]">
                    <div>
                        <div><span className="font-extrabold text-[36px] text-[rgba(248,101,23,1)]">Create</span> <span className="font-extrabold text-[36px] text-[rgba(9,30,67,1)]">Clean invoice</span></div>
                        <div className="md:w-[564px] md:h-[82px]">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="shipping"
                                className="max-w-lg"
                            >
                                <AccordionItem value="shipping">
                                    <AccordionTrigger><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] text-[24px] hover:text-[rgba(229,111,30,1)]"><CiLocationArrow1 /></span> <span>Make invoice,quotation, estimated easily</span></div></AccordionTrigger>
                                    <AccordionContent>
                                        We offer standard (5-7 days), express (2-3 days), and overnight
                                        shipping. Free shipping on international orders.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="returns">
                                    <AccordionTrigger><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] text-[24px] hover:text-[rgba(229,111,30,1)]"><CiSearch /></span> <span>Add order with voice text or image</span></div></AccordionTrigger>
                                    <AccordionContent>
                                        Returns accepted within 30 days. Items must be unused and in original
                                        packaging. Refunds processed within 5-7 business days.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="support">
                                    <AccordionTrigger><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] text-[24px] hover:text-[rgba(229,111,30,1)]"><GoMultiSelect /></span> <span>share invoice in whats-app direclty for customer</span></div></AccordionTrigger>
                                    <AccordionContent>
                                        Reach us via email, live chat, or phone. We respond within 24 hours
                                        during business days.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="  bg-[rgba(28,15,95,1)] md:w-[562px] md:h-[424px] rounded-3xl">
                        <div className=" bg-[rgba(255,255,255,1)] w-[262px] h-[161px] flex flex-col justify-evenly rounded-2xl pl-[16px] ml-[46px] ] mt-[60px] ">
                            <h1 className="text-[rgba(32,34,36,1)]">Total today sale</h1>
                            <h1 className="text-[28px] font-semibold">NRS. 40,689</h1>
                            <div className="flex space-x-2 items-center">
                                <img src="/path.png" className="w-[20px] h-[12px]"></img>
                                <div><span className="text-[16px] text-[rgba(0,182,155,1)]">8.5%</span> <span className="text-[16px]"> Up from Yesterday</span></div>
                            </div>
                        </div>
                        <img src="/yourcomp.png" className="hidden md:block w-[210px] h-[207px] rounded-t-2xl bg-white ml-[331px] mt-[25px]"></img>
                    </div>
                </div>
                

        
        </>
    )
}