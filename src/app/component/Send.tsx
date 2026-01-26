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
                <div className="flex flex-col md:flex-row justify-center items-center space-x-[58px]">
                    <div>
                        <div><span className="font-extrabold text-[36px] text-[rgba(248,101,23,1)]">Send</span> <span className="font-extrabold text-[36px] text-[rgba(9,30,67,1)]">Broadcast Message</span></div>
                        <div className="md:w-[564px] md:h-[82px]">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="shipping"
                                className="max-w-lg"
                            >
                                <AccordionItem value="shipping">
                                    <AccordionTrigger><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] text-[24px]"><BiSelectMultiple /></span> <span>Multiple customer list</span></div></AccordionTrigger>
                                    <AccordionContent>
                                        We offer standard (5-7 days), express (2-3 days), and overnight
                                        shipping. Free shipping on international orders.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="returns">
                                    <AccordionTrigger><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] text-[24px]"><TiTick /></span> <span>Multiple customer list</span></div></AccordionTrigger>
                                    <AccordionContent>
                                        Returns accepted within 30 days. Items must be unused and in original
                                        packaging. Refunds processed within 5-7 business days.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="support">
                                    <AccordionTrigger><div className="flex items-center space-x-2"><span className="text-[rgba(128,128,128,1)] text-[24px]"><LuMessagesSquare /></span> <span>Get suggestion from shopping history</span></div></AccordionTrigger>
                                    <AccordionContent>
                                        Reach us via email, live chat, or phone. We respond within 24 hours
                                        during business days.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="relative overflow-hidden bg-[rgba(83,180,255,1)] md:w-[562px] md:h-[424px] rounded-3xl">

                        
                        <div  className="w-[176px] h-[178.44px] ml-[45px] mt-[39px]"><Offer/></div>
                       

                        
                        <img
                            src="/sw.png"
                            className="absolute w-[319px] h-[256.43px] top-[120px] left-[247px] rounded-t-2xl"
                            alt="laptop big"
                        />

                    </div>

                </div>
                <div>


                </div>

            </div>
        </>
    )
}