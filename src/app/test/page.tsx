
import Customer from "../component/Customer";
import Mobile from "../component/Mobile";
import Offer from "../component/Offer";
import Total from "../component/Total";


export default function () {
    return (
        <>
            <div className="flex space-x-[81px] justify-center items-center">
                <div className="flex flex-col space-y-3 items-end">
                    <Offer />
                    <img src="ss.png" alt="laptop" className="w-[319px] h-[256px] object-cover" />
                </div>
                <Mobile />
                <div className="space-y-[59px]">
                    <Customer />
                    <Total />
                </div>
            </div>
        </>
    )
}