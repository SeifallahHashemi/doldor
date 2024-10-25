/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';
import { addToBasket } from '@/components/utilities/basketUtils';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

export default function ProductsSlider({ title, link }) {
    const [products, setProducts] = useState([])

    const handleAddToBasket = (product) => {
        addToBasket(product);
        alert(`${product.des} به سبد خرید شما افزوده شد`); // Optional: for user feedback
    };

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        const getUserPermission = async () => {
            const response = await fetch("https://doldor.com/api/v1/product/fetch/20", requestOptions)
            const res = await response.text();
            let jRes = JSON.parse(res);
            setProducts(jRes.products)
        }
        getUserPermission()

    }, [])

    return (
        <div className='w-full flex flex-col mt-10 mb-20' dir='rtl'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-[#a1a1a1] md:text-2xl text-base font-bold m-2'>
                    {title}
                </h1>
                <Link href={link} className='text-[#9f9f9f] md:text-2xl text-base py-2 px-4 flex items-center gap-2'>
                    <span className='font-bold'>مشاهده همه</span>
                </Link>
            </div>
            <div className='w-full min-h-[230px]'>
                <Swiper
                    slidesPerView="6"
                    spaceBetween="20"
                    breakpoints={{
                        320: {
                            slidesPerView: 1.3,
                            spaceBetween: 30
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                    autoplay={{
                        delay: 2800,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination]} className="mySwiper2" dir="rtl">
                    {products.map((item) => (
                        <SwiperSlide key={item.id} className='mb-20'>
                            <Link href={`product/${item.id}`} className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                                style={{ transition: "all 0.3s" }}
                            >
                                <div className='h-[133px] bg-white rounded-[20px] pt-2.5 pb-6 mx-auto relative border border-[#e7e7e7] flex items-start'
                                    style={{ transition: "all 0.3s" }}
                                >

                                    <div onClick={() => handleAddToBasket(item)} className='absolute left-0 top-0'>
                                        <span className='bg-[#00B761] rounded-tl-[20px] rounded-r-lg rounded-l-lg rounded-b-lg text-white py-1 px-2.5 font-bold text-lg block'>+</span>
                                    </div>
                                    <div className='w-[120px] h-[120px] mx-5 bg-transparent relative z-10'>
                                        <Image width={120} height={120} alt='' src={`https://doldor.com/${item.image?.indexArray.large}`} quality={100} className='block absolute -top-10 right-0 rounded-lg' />
                                    </div>
                                    <div className='w-full flex flex-col items-start justify-start gap-4 pt-4'>
                                        <div className='text-2xl text-start mt-[9px] text-black font-semibold'>{item.name}</div>
                                        {/* <del className='text-[#A2A2A2] font-semibold text-lg'>{item.sellPrice} ریال</del> */}
                                        <span className='text-[#A2A2A2] font-semibold text-lg'>{item.sellPrice} ریال</span>
                                    </div>
                                    <div className='absolute left-0 bottom-0'>
                                        <span className='bg-[#F37151] text-white pt-1.5 pr-[5px] pb-[3px] pl-[9px] font-bold text-lg block'
                                            style={{ borderRadius: "8px 8px 8px 20px" }}
                                        >
                                            10%
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
