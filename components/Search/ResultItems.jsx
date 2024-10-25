/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function ResultItems() {
    return (
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
    )
}
