import Anna from "./Anna";

export default function What() {
    return (
        <>
            <div className="flex flex-col md:space-y-[20px] ">
                <h1 className="font-extrabold md:text-[36px] text-[28px] text-center ">What Customers are Saying</h1>
                <div className="w-full h-[646.27px] flex items-center justify-center space-x-[24px] no-scrollbar overflow-x-auto flex-nowrap">
                    <Anna /><Anna /><Anna /><Anna /><Anna /><Anna /><Anna />
                </div>
            </div>
        </>
    )
}