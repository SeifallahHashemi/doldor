"use client"
import { useState } from 'react';
import Image from 'next/image';
import { IoChevronBackOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from 'next/link';

export default function BasketData() {
    const [itemCount, setItemCount] = useState(0);
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleOpen = () => {
        if (!open) {
            setIsVisible(true);
            setTimeout(() => setOpen(true), 0);
        } else {
            setOpen(false);
            setTimeout(() => setIsVisible(false), 4000);
        }
    };

    return (
        <>
            <button onClick={handleOpen} className="relative bg-[#F37151] py-2 px-3 rounded-2xl flex items-center justify-center">
                <Image width={25} height={25} alt="icon" src="/icons/shopping-basket.svg" />
                <div className="bg-[#E5FCE3] text-black absolute text-base px-2 flex items-center justify-center -bottom-3 rounded-full">0</div>
            </button>
            {isVisible && (
                <div className={`absolute transition-opacity duration-400 ease-out ${open ? 'opacity-100' : 'opacity-0'} w-[255px] min-h-[350px] top-[54px] left-2.5 z-40`}>
                    <div className='w-full h-full bg-[#f0f0f0] rounded-[10px] p-2.5'
                        style={{
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                        }}
                    >
                        <div className='w-full flex items-center justify-between my-2.5'>
                            <p className="text-xl text-black font-semibold">3 کالا</p>
                            <Link href="/basket" className='flex items-center font-semibold gap-0.5 text-green-600'>
                                <p className='text-xl'>سبد خرید</p>
                                <IoChevronBackOutline className='w-[20px] h-[20px]' />
                            </Link>
                        </div>
                        <div className='w-full flex flex-col items-center'>
                            <div className='w-full flex items-start gap-2.5 border-b border-[#E2E2E3] py-2.5'>
                                <Image width={100} height={100} alt="" src="/img/bs1.png" />
                                <div className='flex flex-col items-start gap-3'>
                                    <h4 className='text-black text-2xl font-semibold'>ماکارونی</h4>
                                    <h4 className='text-[#A2A2A2] text-xl'>
                                        {new Intl.NumberFormat("fa-IR", {
                                            style: "currency",
                                            currency: "IRR",
                                        }).format(250000)}
                                    </h4>
                                    <div className='flex items-start gap-5'>
                                        <div className='flex items-center gap-3'>
                                            <h4 className='text-[#A2A2A2] text-lg'>
                                                تعداد :
                                            </h4>
                                            <div className='w-9 h-9 bg-[#E1E1E1] text-black flex items-center justify-center rounded-full' style={{ fontSize: "14px" }}>
                                                {itemCount}
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2 mt-4'>
                                            <button className='bg-white text-2xl p-2 rounded-lg' onClick={() => setItemCount((prev) => prev + 1)}>
                                                <MdAdd />
                                            </button>
                                            <button className='bg-white text-2xl p-2 rounded-lg text-red-800' onClick={() => setItemCount((prev) => prev - 1)}>
                                                <FaRegTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-start gap-2.5 border-b border-[#E2E2E3] py-2.5'>
                                <Image width={100} height={100} alt="" src="/img/bs1.png" />
                                <div className='flex flex-col items-start gap-3'>
                                    <h4 className='text-black text-2xl font-semibold'>ماکارونی</h4>
                                    <h4 className='text-[#A2A2A2] text-xl'>
                                        {new Intl.NumberFormat("fa-IR", {
                                            style: "currency",
                                            currency: "IRR",
                                        }).format(250000)}
                                    </h4>
                                    <div className='flex items-start gap-5'>
                                        <div className='flex items-center gap-3'>
                                            <h4 className='text-[#A2A2A2] text-lg'>
                                                تعداد :
                                            </h4>
                                            <div className='w-9 h-9 bg-[#E1E1E1] text-black flex items-center justify-center rounded-full' style={{ fontSize: "14px" }}>
                                                {itemCount}
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2 mt-4'>
                                            <button className='bg-white text-2xl p-2 rounded-lg' onClick={() => setItemCount((prev) => prev + 1)}>
                                                <MdAdd />
                                            </button>
                                            <button className='bg-white text-2xl p-2 rounded-lg text-red-800' onClick={() => setItemCount((prev) => prev - 1)}>
                                                <FaRegTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between py-2.5'>
                                <div className='flex flex-col items-center gap-1.5'>
                                    <h4 className='text-[#A2A2A2] text-xl'>جمع کل قیمت</h4>
                                    <h4 className='text-[#A2A2A2] text-xl'>
                                        {new Intl.NumberFormat("fa-IR", {
                                            style: "currency",
                                            currency: "IRR",
                                        }).format(2500000)}
                                    </h4>
                                </div>
                                <button className='bg-doldor_orange text-white py-2.5 px-6 text-xl rounded-2xl'>ثبت سفارش</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
