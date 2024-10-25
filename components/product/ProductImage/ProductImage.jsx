"use client"

import Image from "next/image";

export default function ProductImage({ productData }) {
    const img = `https://doldor.com/${productData.image?.indexArray.large}`
    const zoom = (e) => {
        const zoomer = e.currentTarget;
        const offsetX = e.nativeEvent.offsetX || e.touches[0]?.pageX - zoomer.getBoundingClientRect().left;
        const offsetY = e.nativeEvent.offsetY || e.touches[0]?.pageY - zoomer.getBoundingClientRect().top;

        const x = (offsetX / zoomer.offsetWidth) * 100;
        const y = (offsetY / zoomer.offsetHeight) * 100;

        zoomer.style.backgroundPosition = `${x}% ${y}%`;
    };

    return (
        <div className="w-full relative flex items-center justify-center py-10" dir="rtl">
            <div className="md:w-4/5 w-full min-h-[600px] relative mx-auto flex items-start justify-center">
                <div className="w-full h-full relative py-6 border border-[#e7e7e7] rounded-[20px] transition-all ease-out delay-100 hover:border-[#b0afaf]">
                    <div className="flex flex-col items-center justify-center">
                        <div className="mx-auto md:my-5 my-2">
                            <figure className="relative cursor-zoom-in overflow-hidden zoom md:w-[500px] w-full" onmousemove="zoom(event)" style={{ backgroundImage: img }} onMouseMove={zoom}
                                onTouchMove={zoom}>
                                <Image className="block transition-all delay-500" width={600} height={600} alt="product-image" src={`https://doldor.com/${productData.image?.indexArray.large}`} quality={100} />
                            </figure>
                        </div>
                        <div className="w-full flex items-center justify-center text-black text-3xl font-semibold mt-4 md:mb-4 mb-20">
                            <h1>{productData.name}</h1>
                        </div>
                    </div>

                    <div className="md:block hidden absolute -top-[12px] -left-[12px]">
                        <div className="flex w-[35px] h-[90px] flex-col items-center rounded-[15px]"
                            style={{ boxShadow: "0px 0px 4px 2px #cccccc75" }}
                        >
                            <button className="w-full h-1/3 rounded-tr-[15px] rounded-tl-[15px] bg-white text-[#00B761] font-bold text-2xl text-center">
                                +
                            </button>
                            <span className="w-full h-1/3 flex items-center justify-center bg-[#00B761] text-white font-bold text-xl">1</span>
                            <button className="w-full h-1/3 rounded-br-[15px] rounded-bl-[15px] bg-white text-[#00B761] font-bold text-2xl text-center">
                                -
                            </button>
                        </div>
                    </div>
                    <div className="absolute md:bottom-0 md:top-auto top-0 left-0">
                        <div className="bg-doldor_orange text-white w-[42px] font-bold text-xl rounded__off" style={{ padding: "6px 5px 3px 9px" }}>
                            10 %
                        </div>
                    </div>
                    <div className="w-full mt-4 md:hidden flex items-center justify-between absolute right-0 bottom-0 left-[initial] top-[initial]">
                        <button className="bg-[#00B761] text-white text-3xl" style={{ borderRadius: "9px 7px 20px 7px", padding: "1px 10px" }}>+</button>
                        <span className="text-black font-bold text-3xl">1</span>
                        <button className="bg-[#00B761] text-white text-3xl" style={{ borderRadius: "7px 9px 7px 20px", padding: "1px 10px" }}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
