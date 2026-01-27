import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <>
            <div className="flex flex-col items-center  justify-center  ">
                <h1 className="font-bold md:text-[36px] text-[28px]  ">Frequently Asked Questions</h1>
                <div className="md:w-[624px]  md:h-[450px] ">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="shipping"
                        className="max-w-lg"
                    >
                        <AccordionItem value="shipping">
                            <AccordionTrigger><h1 className="font-bold text-[20px]">What is ifofy?</h1> </AccordionTrigger>
                            <AccordionContent>
                                We offer standard (5-7 days), express (2-3 days), and overnight
                                shipping. Free shipping on international orders.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="returns">
                            <AccordionTrigger><h1 className="font-bold text-[20px]">How does ifofy help to save money and time when invoicing?</h1></AccordionTrigger>
                            <AccordionContent>
                                Returns accepted within 30 days. Items must be unused and in original
                                packaging. Refunds processed within 5-7 business days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="support">
                            <AccordionTrigger><h1 className="font-bold text-[20px]">Is ifofy free ?</h1></AccordionTrigger>
                            <AccordionContent>
                                Reach us via email, live chat, or phone. We respond within 24 hours
                                during business days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="supports">
                            <AccordionTrigger><h1 className="font-bold text-[20px]">How does ifofy improve meal planning and budgeting?</h1></AccordionTrigger>
                            <AccordionContent>
                                Reach us via email, live chat, or phone. We respond within 24 hours
                                during business days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="supportr">
                            <AccordionTrigger><h1 className="font-bold text-[20px]">Who is ifofy for ?</h1></AccordionTrigger>
                            <AccordionContent>
                                Reach us via email, live chat, or phone. We respond within 24 hours
                                during business days.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )
}