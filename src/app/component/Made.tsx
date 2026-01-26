import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaImage } from "react-icons/fa6";
import { VscDiffMultiple } from "react-icons/vsc";



export default function Made() {
    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-[80px]">
                <div>
                    <h1 className="font-extrabold text-[36px] text-center">Made to solve everyday <br /> invoice problems</h1>
                    <h1 className="text-center">Explore powerful features designed to easily know your <br />
                        sale and to save time, money,<br />
                        and effort .</h1>
                </div>


                <div className="md:flex space-x-[107px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-[60px]">
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <FaLocationArrow className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Invoice sharing</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">real time create and share avoid delay</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <MdOutlineKeyboardVoice className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Voice input</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">real time create and share avoid delay</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <LuMessagesSquare className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Product suggestions</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">real time create and share avoid delay</h1>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[60px]">
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <FaLocationArrow className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Total cost calculator</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">real time create and share avoid delay</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <VscDiffMultiple className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Add Custormer</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">Organize your list your way for a
                                    personalized shopping flow.</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <FaImage className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Add pictures</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">real time create and share avoid delay</h1>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[60px]">
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <CiBoxList className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Smart invoicing</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">real time create and share avoid delay</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <FaTag className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Add prices</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">real time create and share avoid delay</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 w-[332.31px]">
                            <FaHistory className="text-[rgba(229,111,30,1)] w-[27.79px] h-[27.79px]" />
                            <div>
                                <h1 className="font-bold text-[18px]">Suggestions from shopping history</h1>
                                <h1 className="text-[rgba(75,85,99,1)] text-[16px] ">real time create and share avoid delay</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}