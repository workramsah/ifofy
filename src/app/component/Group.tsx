import Mobile from "./Mobile";
import Offer from "./Offer";

export default function Group() {
    return (
        <>
            <div className="flex space-x-[81px] justify-center items-center">
                <div className="flex flex-col space-y-3 items-end">

                    <div><Offer /></div>
                    <img src="ss.png" alt="laptop" className="w-[319px] h-[256px] object-cover" />
                </div>
                <Mobile />
                <div className="space-y-3">
                    <div><Offer /></div>
                    <img src="ss.png" alt="laptop" className="w-[319px] h-[256px] object-cover" />
                </div>
            </div>
        </>
    )
}