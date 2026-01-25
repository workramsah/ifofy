import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CiLocationArrow1 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoMultiSelect } from "react-icons/go";


export default function Page() {
    return (
        <div>

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
    )
}