'use client'
import {useEffect, useState} from "react";

import Image from "next/image"
import {FaArrowLeftLong} from "react-icons/fa6";
// const userInfo = JSON.parse(localStorage.getItem("user"))

export default function Profile({mobile}) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserInfo = localStorage.getItem("user");
            if (storedUserInfo) {
                setUserInfo(JSON.parse(storedUserInfo));
            }
        }
    }, []);

    if (!userInfo) {
        return <div>Loading...</div>; // or any loading state you prefer
    }

    return (
        <div
            className={`w-full flex items-center justify-between p-4 md:mt-0 mt-4 ${!mobile && "bg-[#F9F9F9] border border-[#e2e2e2] rounded-3xl"}`}>
            <div className="w-4/5 flex items-center gap-2.5">
                <Image className='rounded-[50%]' width={30} height={30} alt='profile-icon' src="/img/avatar.png"/>
                <div className='flex flex-col items-start text-base font-semibold text-black'>
                    <span>{userInfo.name}</span>
                    <span>{userInfo.mobile}</span>
                </div>
            </div>
            <div className="w-1/5 flex items-center justify-end">
                <FaArrowLeftLong className="w-[20px] h-[20px] text-doldor_orange cursor-pointer"/>
            </div>
        </div>
    )
}
