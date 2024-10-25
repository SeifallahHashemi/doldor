/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/libs/utility';

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
// myHeaders.append("Authorization", `Bearer ${token}`);


export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getData() {
            const { categories } = await getCategories();
            const parentCategories = await categories?.categories.filter((item) => item.parent_id === null);
            setCategories(parentCategories)
        }
        getData()
    }, [])

    return (
        <div className='w-full min-h-[230px] md:mt-32 mt-10 mb-20'>
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
                        slidesPerView: 6.5,
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
                modules={[Autoplay, Pagination]} className="mySwiper2">
                {categories.map((item) => (
                    <SwiperSlide key={item.id} className='mb-24'>
                        <Link href="#" className='w-full h-full bg-transparent rounded-[20px] block pb-2 pt-14'
                        >
                            <div className='w-full h-[100px] flex justify-center rounded-[20px] relative border bg-white border-[#e7e7e7] category__box'
                                style={{ transition: "all 0.3s" }}
                            >
                                <Image width={100} height={100} alt='image' className='block absolute -top-[20px]' src={`https://doldor.com/${item.image?.indexArray.large}`} quality={100} />
                                {/* <img className='w-[100px] h-[100px] block absolute -top-[50px]' alt='image' src="/img/p1.png" /> */}
                                <div className='text-2xl leading-9 font-semibold text-[#a1a1a1] text-center mt-2 absolute bottom-2'>{item.name}</div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
