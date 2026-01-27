import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className="bg-[rgba(28,15,95,1)] mt-[20px] md:py-12 md:px-16">
                <div className="md:flex justify-between">
                    <div className="md:w-[502px] md:h-[224px] space-y-4">
                        <h1 className="text-[16px] font-medium text-[rgba(160,160,160,1)]">IFOFY was built for the reality most businesses live in: sales move fast, customers message at odd hours, and paperwork always arrives late. Owners and teams spend too much time chasing invoices, updating ledgers, and digging through bills—work that doesn’t grow revenue, but still decides whether cash flow stays healthy.</h1>
                        <h1 className="text-[16px] font-medium text-[rgba(160,160,160,1)]">We saw a simple truth: businesses don’t need more software tabs. They need a faster way to turn everyday conversations and proof of purchase into clean, trackable finances operations.</h1>
                    </div>
                    <div className="md:flex space-x-[64px] grid grid-cols-2">
                        <div className="md:space-y-[18px] space-[10px]">
                            <h1 className="font-extrabold text-[23.4px] text-white">Company</h1>
                            <div className="md:space-y-[18px] space-[10px]">
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">About us</h1>
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Careers</h1>
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Press</h1>
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Newsletter</h1>
                            </div>
                        </div>
                        <div className="md:space-y-[18px] space-[10px]">
                            <h1 className="font-extrabold text-[23.4px] text-white">Suppport</h1>
                            <div className="md:space-y-[18px] space-[10px]">
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Help Center</h1>
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Blog</h1>
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Pricing</h1>
                                
                            </div>
                        </div>
                        <div className="md:space-y-[18px] space-[10px]">
                            <h1 className="font-extrabold text-[23.4px] text-white">Privacy</h1>
                            <div className="md:space-y-[18px] space-[10px]">
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Privacy Policy</h1>
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Terms of Use</h1>
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Cookies Policy</h1>
                                <h1 className="text-[18.1px] text-[rgba(160,160,160,1)]">Cookie Preferences</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-x-[176px] md:flex mt-4 justify-between items-center">
                    <img src="logo.png" alt="ifofy.com" className=" md:h-[163px] h-[80px] object-cover"/>
                    <div>
                        <div className="space-x-5 flex text-[20px] text-white "><AiFillYoutube /> <FaFacebook /> <FaPinterest /> <TbBrandInstagramFilled /> <FaXTwitter /> <ImLinkedin /> <FaTiktok /></div>
                        <h1 className="text-[13.6px] text-[rgba(160,160,160,1)]">Copyright 2026 © ifofy. All rights reserved.</h1>
                    </div>
                </div>
            </div>
        </>
    )
}