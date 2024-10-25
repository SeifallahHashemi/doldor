"use client"

import { useEffect, useState } from 'react';
import { getBasket, removeFromBasket } from "../utilities/basketUtils";

import Image from "next/image";
import Link from "next/link";

export default function Items() {
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        const items = getBasket();
        setBasketItems(items);
    }, []);

    const handleRemoveFromBasket = (productId) => {
        removeFromBasket(productId);
        const updatedBasket = getBasket();
        setBasketItems(updatedBasket);
    };

    // Calculate total prices
    const calculateTotals = () => {
        const total = basketItems.reduce((acc, item) => acc + (Number(item.sellPrice) || 0), 0);
        const discount = basketItems.reduce((acc, item) => acc + (Number(item.sellPrice) - Number(item.offPrice) || 0), 0);
        const totalAfterDiscount = total - discount;

        return { total, discount, totalAfterDiscount };
    };

    const { total, discount, totalAfterDiscount } = calculateTotals();

    return (
        <div className="w-full flex justify-center items-center mt-20 mb-48" dir="rtl">
            <div className="w-full px-[15px] mx-auto">
                <div className="md:w-4/5 w-full my-0 mx-auto rounded-[25px] overflow-x-auto">
                    <table className="w-full border-none outline-none">
                        <thead className="bg-[#E5FCE3]">
                            <tr>
                                <th className="rounded-tr-[20px] border-none font-bold text-start md:text-2xl text-lg" style={{ padding: "20px" }}>
                                    <span>تعداد خرید : </span>
                                    <span>{basketItems.length}  عدد</span>
                                </th>
                                <th className="border-none"></th>
                                <th className="border-none"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {basketItems.length === 0 ? (
                                <div className='w-full min-h-[140px] flex items-center justify-between'>
                                    <p className='text-3xl font-iranYekan font-bold'>سبد خرید شما فعلا خالی است</p>
                                    <Link className='mt-5 text-3xl font-iranYekan font-bold text-blue-800' href="/">صفحه محصولات</Link>
                                </div>
                            ) : (
                                basketItems.map((item, index) => (
                                    <tr key={index} className="border border-[#E1E1E1]" style={{ backgroundColor: "rgb(248 248 248 / 58%)" }}>
                                        <td className="border-none outline-none text-xl" style={{ padding: "20px", textDecoration: "none" }}>
                                            <div className="flex items-center">
                                                <div className='mx-7'>
                                                    <Image width={100} height={100} alt="image" src={`https://doldor.com/${item.image?.indexArray.large}`} quality={100} />
                                                </div>
                                                <div className="flex flex-col items-start gap-6 text-black border-black decoration-clone">
                                                    <p className='text-2xl font-semibold'>{item.des}</p>
                                                    <del className="text-[#a0a0a0] text-lg">{item.sellPrice} ریال</del>
                                                    <span>{item.sellPrice} ریال</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-none outline-none text-xl" style={{ padding: "20px", textDecoration: "none" }}>
                                            <div className="flex justify-center items-center gap-4 p-1.5">
                                                {/* bg-[#f6f6f6] */}
                                                <button className="text-[#00b761] border border-[#b1b1b1] rounded-[50%] w-[25px] h-[25px] bg-transparent">
                                                    +
                                                </button>
                                                <span className="mx-4">{item.count}</span>
                                                <button className="text-[#00b761] border border-[#b1b1b1] rounded-[50%] w-[25px] h-[25px] bg-transparent">
                                                    -
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border-none outline-none" style={{ padding: "20px", textDecoration: "none" }}>
                                            <div className="flex items-center gap-3">
                                                {/* <Link href="#" className="pulse bg-[#f3715156] py-3 px-4 rounded-2xl flex items-center text-2xl font-bold">
                                                یادداشت
                                            </Link> */}
                                                <button onClick={() => handleRemoveFromBasket(item.id)} className="pulse text-white bg-doldor_orange rounded-[15px] border-none outline-none" style={{ padding: "8px 15px" }}>
                                                    <Image width={20} height={21} alt="" src="/icons/trash2.svg" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}

                        </tbody>
                    </table>
                    <div className="w-full my-10">
                        <ul className="flex md:flex-row flex-col md:items-center items-start md:justify-between cart__ul list-outside">
                            <li className="flex items-center gap-3 text-[#232323] text-2xl">
                                <span>جمع کالا  : </span>
                                <span>{Math.floor(total)} تومان</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#232323] text-2xl">
                                <span>هزینه ارسال  : </span>
                                <span>120000 تومان</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#232323] text-2xl">
                                <span>سود شما  : </span>
                                <span>{Math.floor(discount)} تومان</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#232323] text-2xl font-semibold">
                                <span>قابل پرداخت  : </span>
                                <span>{Math.floor(totalAfterDiscount)} تومان</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full flex items-center justify-start gap-3 mt-12">
                        <Link href="#" className="pulse bg-[#f3715156] rounded-2xl flex items-center text-2xl font-bold" style={{ padding: "8px 15px" }}>
                            یادداشت
                        </Link>
                        <Link href="#" className="pulse2 bg-[#00B761] text-white py-3 px-4 rounded-2xl flex items-center text-2xl font-bold" style={{ padding: "8px 15px" }}>
                            ثبت نهایی
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
