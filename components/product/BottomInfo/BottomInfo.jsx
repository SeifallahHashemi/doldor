"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function BottomInfo({ productData }) {
    const [openTab, setOpenTab] = useState("1")
    return (
        <div className="w-full flex flex-col items-start" dir="rtl">
            <div className="w-full overflow-x-auto bg-white pb-4">
                <ul className="w-max flex flex-wrap">
                    <li className="ml-[8px] py-4">
                        <button onClick={() => setOpenTab("1")} className={`font-bold text-[#495057] rounded-[20px] py-3 px-5 mx-2 text-2xl transition-all ease-linear delay-100 ${openTab == 1 ? "bg-[#f9f9f9]" : ""}`}>درباره محصول</button>
                    </li>
                    <li className="ml-[8px] py-4">
                        <button onClick={() => setOpenTab("2")} className={`font-bold text-[#495057] rounded-[20px] py-3 px-5 mx-2 text-2xl transition-all ease-linear delay-100 ${openTab == 2 ? "bg-[#f9f9f9]" : ""}`}>جدول غذایی محصول</button>
                    </li>
                    <li className="ml-[8px] py-4">
                        <button onClick={() => setOpenTab("3")} className={`font-bold text-[#495057] rounded-[20px] py-3 px-5 mx-2 text-2xl transition-all ease-linear delay-100 ${openTab == 3 ? "bg-[#f9f9f9]" : ""}`}>نظر به محصول</button>
                    </li>
                    <li className="ml-[8px] py-4">
                        <button onClick={() => setOpenTab("4")} className={`font-bold text-[#495057] rounded-[20px] py-3 px-5 mx-2 text-2xl transition-all ease-linear delay-100 ${openTab == 4 ? "bg-[#f9f9f9]" : ""}`}>محصولات مشابه</button>
                    </li>
                </ul>
            </div>
            <div className={`w-full ${openTab == 1 ? "block" : "opacity-0 hidden"}`} style={{ transition: "opacity .15s linear" }}>
                <div className="w-full flex-col items-start gap-8 py-4 px-2 flex">
                    <div className="w-full flex flex-col items-start gap-5 border-b border-{#495057} pb-10">
                        <div className="text-black text-xl font-semibold">
                            <span>قیمت :</span>
                            <span>{productData.sellPrice} ریال</span>
                        </div>
                        <div className="text-black text-xl font-semibold">
                            <span>وضعیت :</span>
                            <span>موجود </span>
                        </div>
                        <div className="text-black text-xl font-semibold">
                            <span>ویژگی ها :</span>
                            <span> ساده /90% گوشت/طعم دار</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start gap-5">
                        <h1 className="text-3xl font-bold text-black">توضیحات محصول</h1>
                        <p className="leading-loose text-justify text-[16px]">
                            {productData.des}
                        </p>
                    </div>
                </div>
            </div>
            <div className={`w-full ${openTab == 2 ? "block" : "opacity-0 hidden"}`} style={{ transition: "opacity .15s linear" }}>
                <div className="w-full flex items-start justify-start py-4 px-2 ">
                    <ul className="md:w-1/2 w-full">
                        <li className="w-full flex items-center justify-between bg-[#FFFBFB] py-4 px-7 border-b border-[#CCC]"><span className="text-xl">میزان نمک</span><span className="text-xl">100 گرم</span></li>
                        <li className="w-full flex items-center justify-between bg-[#FFFBFB] py-4 px-7 border-b border-[#CCC]"><span className="text-xl">میزان شکر</span><span className="text-xl">100 گرم</span></li>
                        <li className="w-full flex items-center justify-between bg-[#FFFBFB] py-4 px-7 border-b border-[#CCC]"><span className="text-xl">قند</span><span className="text-xl">100 گرم</span></li>
                        <li className="w-full flex items-center justify-between bg-[#FFFBFB] py-4 px-7 border-b border-[#CCC]"><span className="text-xl">گلوسترول</span><span className="text-xl">100 گرم</span></li>
                        <li className="w-full flex items-center justify-between bg-[#FFFBFB] py-4 px-7 border-b border-[#CCC]"><span className="text-xl">میزان نمک</span><span className="text-xl">100 گرم</span></li>
                        <li className="w-full flex items-center justify-between bg-[#FFFBFB] py-4 px-7 border-b border-[#CCC]"><span className="text-xl">میزان نمک</span><span className="text-xl">100 گرم</span></li>
                    </ul>
                </div>
            </div>
            <div className={`w-full ${openTab == 3 ? "block" : "opacity-0 hidden"}`} style={{ transition: "opacity .15s linear" }}>
                <div className="w-full flex flex-col py-4 px-2 gap-6">
                    <textarea className="w-full h-[160px] resize-none border-none outline-none bg-[#fffbfb] py-[30px] px-[10px] rounded-2xl text-black text-2xl placeholder:text-2xl" placeholder="نظرتون رو درمورد محصول بنویسید..."></textarea>
                    <div className="w-full flex items-center justify-end">
                        <button className="pulse bg-doldor_orange text-white py-2.5 px-6 text-2xl rounded-2xl">ثبت نظر</button>
                    </div>
                </div>
            </div>
            <div className={`w-full ${openTab == 4 ? "block" : "opacity-0 hidden"}`} style={{ transition: "opacity .15s linear" }}>
                <div className="w-full flex flex-wrap items-center justify-evenly">
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='md:h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/4 w-1/2 px-[15px]">
                        <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                            style={{ transition: "all 0.3s" }}
                        >
                            <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='absolute left-0 top-0'>
                                    <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                </div>
                                <div className='w-[120px] h-[120px] bg-transparent relative z-10'>
                                    <Image width={120} height={120} alt='' src="/img/bs3.png" className='block absolute -top-10 right-0' />
                                </div>
                                <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                    <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                                    <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                                    <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
                                </div>
                                <div className='absolute left-0 bottom-0'>
                                    <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                        style={{ borderRadius: "8px 8px 8px 20px" }}
                                    >% 10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
