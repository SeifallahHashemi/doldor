/* eslint-disable @next/next/no-img-element */
"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function Slider() {
    return (
        <div className='w-full md:h-[800px] h-[197px] md:mt-32 mt-10 mb-20'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination]} className="mySwiper">
                <SwiperSlide>
                    <Link href="#" className='w-full h-full'>
                        <img className='w-full h-full rounded-3xl' alt='image' src="/img/banner1.png" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className='w-full h-full'>
                        <img className='w-full h-full rounded-3xl' alt='image' src="/img/banner2.png" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className='w-full h-full'>
                        <img className='w-full h-full rounded-3xl' alt='image' src="/img/banner1.png" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className='w-full h-full'>
                        <img className='w-full h-full rounded-3xl' alt='image' src="/img/banner2.png" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
