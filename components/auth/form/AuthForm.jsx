"use client"
import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import SignupForm from "./signup/SignupForm";
import LoginForm from "./login/LoginForm";

export default function AuthForm() {
    const [openTab, setOpenTab] = useState("signup")

    return (
        <div className="w-full flex justify-center items-start bg-white mt-[50px]">
            <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-1 text-3xl">
                    <Link href="/" className="text-[#F37151] font-extrabold" style={{ fontFamily: "en" }}>DOLDOR</Link>
                    <Image width={40} height={40} alt="icon" src="/icons/shop.svg" />
                </div>
                <div className="md:w-4/5 w-full mx-auto">
                    <div className="w-full relative flex items-center justify-start gap-5 my-8">
                        <div onClick={() => setOpenTab("signup")} className={`flex items-center gap-4 cursor-pointer transition-all ease-in-out delay-150 ${openTab === "signup" ? "text-[#00B761] bg-[#f8f8f89f]" : "hover:text-[#00B761] hover:bg-[#f8f8f89f]"} rounded-[15px] text-2xl font-semibold mx-[7px] py-3 px-4`}>
                            <span>ثبت نام</span>
                            <Image className={openTab === "signup" ? "block" : "hidden"} width={25} height={25} alt="icon" src="/icons/left-arrow.png" />
                        </div>
                        <div onClick={() => setOpenTab("login")} className={`flex items-center gap-4 cursor-pointer transition-all ease-in-out delay-150 ${openTab === "login" ? "text-[#00B761] bg-[#f8f8f89f]" : "hover:text-[#00B761] hover:bg-[#f8f8f89f]"} rounded-[15px] text-2xl font-semibold mx-[7px] py-3 px-4`}>
                            <span>ورود</span>
                            <Image className={openTab === "login" ? "block" : "hidden"} width={25} height={25} alt="icon" src="/icons/left-arrow.png" />
                        </div>
                    </div>
                    <SignupForm openTab={openTab} />
                    <LoginForm openTab={openTab} />
                </div>
            </div>
        </div>
    )
}
