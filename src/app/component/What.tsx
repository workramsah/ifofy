import Anna from "./Anna";

export default function What() {
    return (
        <>
            <div className="flex flex-col space-y-[24px]">
                <h1 className="font-extrabold text-[36px] text-center">What Customers are Saying</h1>
                <div className="flex space-x-[24px]  overflow-x-auto scrollbar-hide">
                    <Anna /><Anna /><Anna /><Anna />
                </div>
            </div>
        </>
    )
}