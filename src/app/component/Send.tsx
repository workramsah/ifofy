import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TiTick } from "react-icons/ti";
import { BiSelectMultiple } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import Offer from "./Offer";

export default function Send() {
    return (
        <>
            <div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-y-10 md:space-x-[58px] px-4 md:px-0">
                    {/* Accordion Section */}
                    <div className="w-full md:w-auto flex flex-col items-center md:items-start">
                        <div className="text-center md:text-left mb-4 md:mb-6">
                            <span className="font-extrabold md:text-[36px] text-[24px] text-[rgba(248,101,23,1)]">Send</span> 
                            <span className="font-extrabold md:text-[36px] text-[24px] text-[rgba(9,30,67,1)]"> Broadcast Message</span>
                        </div>
                        <div className="w-full md:w-[564px] md:h-[82px] h-[200px] flex justify-center md:justify-start">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="shipping"
                                className="w-full max-w-lg"
                            >
                                <AccordionItem value="shipping">
                                    <AccordionTrigger className="text-left">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-[rgba(128,128,128,1)] md:text-[24px] text-[18px] hover:text-[rgba(229,111,30,1)] transition-colors">
                                                <BiSelectMultiple />
                                            </span> 
                                            <span className="md:text-base text-sm">Multiple customer list</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="md:text-base text-sm">
                                        We offer standard (5-7 days), express (2-3 days), and overnight
                                        shipping. Free shipping on international orders.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="returns">
                                    <AccordionTrigger className="text-left">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-[rgba(128,128,128,1)] md:text-[24px] text-[18px] hover:text-[rgba(229,111,30,1)] transition-colors">
                                                <TiTick />
                                            </span> 
                                            <span className="md:text-base text-sm">Multiple customer list</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="md:text-base text-sm">
                                        Returns accepted within 30 days. Items must be unused and in original
                                        packaging. Refunds processed within 5-7 business days.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="support">
                                    <AccordionTrigger className="text-left">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-[rgba(128,128,128,1)] md:text-[24px] text-[18px] hover:text-[rgba(229,111,30,1)] transition-colors">
                                                <LuMessagesSquare />
                                            </span> 
                                            <span className="md:text-base text-sm">Get suggestion from shopping history</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="md:text-base text-sm">
                                        Reach us via email, live chat, or phone. We respond within 24 hours
                                        during business days.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    {/* Blue Background Container */}
                    <div className="relative overflow-hidden bg-[rgba(83,180,255,1)] w-full md:w-[562px] h-auto md:h-[424px] rounded-2xl md:rounded-3xl md:p-0 flex flex-col md:block items-center justify-center md:justify-start">
                        {/* Mobile: Vertical Layout - Completely Separate */}
                        <div className="flex flex-col md:hidden items-center justify-center w-full py-6 px-4">
                            <div className="mb-8 shrink-0 w-[120px] h-[122px] overflow-hidden flex items-center justify-center">
                                <div className="scale-[0.68]">
                                    <Offer />
                                </div>
                            </div>
                            <img
                                src="/sw.png"
                                className="w-[160px] h-[128px] rounded-t-2xl object-contain shrink-0"
                                alt="laptop big"
                            />
                        </div>

                        {/* Desktop: Original Layout */}
                        <div className="hidden md:block w-[176px] h-[178.44px] ml-[45px] mt-[39px]">
                            <Offer />
                        </div>
                        <img
                            src="/sw.png"
                            className="hidden md:block absolute w-[319px] h-[256.43px] top-[120px] left-[247px] rounded-t-2xl"
                            alt="laptop big"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}