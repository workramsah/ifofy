import Mobile from "./Mobile";

export default function Group() {
    return (
        <>
            <div className="flex space-x-[81px] justify-center items-center">
                <div className="flex flex-col space-y-3 items-end">
                    <img src="laptop.png" alt="laptop" className="w-[176px] h-[178.44px] " />
                    <img src="laptop.png" alt="laptop" className="w-[319px] h-[256px] " />
                </div>
                <Mobile/>
                <div className="space-y-3">
                    <img src="laptop.png" alt="laptop" className="w-[176px] h-[178.44px] " />
                    <img src="laptop.png" alt="laptop" className="w-[319px] h-[256px] " />
                </div>
            </div>
        </>
    )
}