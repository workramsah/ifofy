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
            
                <div className="flex flex-col md:flex-row justify-center items-center space-x-[58px] gap-y-10 px-4 md:px-0">
                    <div className="w-full md:w-auto flex flex-col items-center md:items-start">
                        <div className="text-center md:text-left mb-4 md:mb-6"><span className="font-extrabold md:text-[36px] text-[24px] text-[rgba(248,101,23,1)]">Create</span> <span className="font-extrabold md:text-[36px] text-[24px] text-[rgba(9,30,67,1)]"> Clean invoice</span></div>
                        <div className="w-full md:w-[564px] md:h-[82px] h-[200px] flex justify-center md:justify-start ml-12 md:ml-0 ">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="shipping"
                                className="w-full max-w-lg"
                            >
                                <AccordionItem value="shipping">
                                    <AccordionTrigger className="text-left"><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] md:text-[24px] text-[18px] hover:text-[rgba(229,111,30,1)] transition-colors"><CiLocationArrow1 /></span> <span className="md:text-base text-sm">Make invoice,quotation, estimated easily</span></div></AccordionTrigger>
                                    <AccordionContent className="md:text-base text-sm">
                                        We offer standard (5-7 days), express (2-3 days), and overnight
                                        shipping. Free shipping on international orders.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="returns">
                                    <AccordionTrigger className="text-left"><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] md:text-[24px] text-[18px] hover:text-[rgba(229,111,30,1)] transition-colors"><CiSearch /></span> <span className="md:text-base text-sm">Add order with voice text or image</span></div></AccordionTrigger>
                                    <AccordionContent className="md:text-base text-sm">
                                        Returns accepted within 30 days. Items must be unused and in original
                                        packaging. Refunds processed within 5-7 business days.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="support">
                                    <AccordionTrigger className="text-left"><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] md:text-[24px] text-[18px] hover:text-[rgba(229,111,30,1)] transition-colors"><GoMultiSelect /></span> <span className="md:text-base text-sm">share invoice in whats-app direclty for customer</span></div></AccordionTrigger>
                                    <AccordionContent className="md:text-base text-sm">
                                        Reach us via email, live chat, or phone. We respond within 24 hours
                                        during business days.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="relative bg-[rgba(28,15,95,1)] md:w-[562px] w-full min-h-[280px] md:h-[424px] rounded-2xl md:rounded-3xl p-4 md:p-0">
                        {/* Mobile: Images displayed vertically */}
                        <div className="flex flex-col md:hidden items-center space-y-4 mb-4">
                            <img src="/path.png" className="w-[16px] h-[10px]" alt="Trend indicator" />
                            <img src="/yourcomp.png" className="w-[120px] h-[118px] rounded-t-2xl bg-white" alt="Company illustration" />
                        </div>
                        
                        {/* Desktop: Card positioned normally */}
                        <div className="bg-[rgba(255,255,255,1)] w-full md:w-[262px] h-[130px] md:h-[161px] flex flex-col justify-evenly rounded-xl md:rounded-2xl pl-3 md:pl-[16px] md:ml-[46px] md:mt-[60px] mx-auto md:mx-0">
                            <h1 className="text-[rgba(32,34,36,1)] text-sm md:text-base">Total today sale</h1>
                            <h1 className="text-[22px] md:text-[28px] font-semibold">NRS. 40,689</h1>
                            <div className="flex space-x-2 items-center">
                                <img src="/path.png" className="hidden md:block w-[20px] h-[12px]" alt="Trend indicator" />
                                <div>
                                    <span className="text-[14px] md:text-[16px] text-[rgba(0,182,155,1)]">8.5%</span> 
                                    <span className="text-[14px] md:text-[16px]"> Up from Yesterday</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Desktop: Company image positioned absolutely */}
                        <img src="/yourcomp.png" className="hidden md:block absolute w-[210px] h-[207px] rounded-t-2xl bg-white right-[25px] top-[25px]" alt="Company illustration" />
                    </div>
                </div>
                

        
        </>
    )
}