"use client"

import { useState, useEffect } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import Features from "./Features";
import AddProductImage from "./AddProductImage";
import { getBrands, getCategories } from "@/libs/utility";
import { Spinner } from "@material-tailwind/react";

const AddProduct = ({ open, handleOpen }) => {
    const [keywords, setKeywords] = useState([]);
    const [userProfileValue, setUserProfileValue] = useState([]);
    const [dropDownData, setDropDownData] = useState({
        brand: [],
        category: [],
        subCategory: [],
        message: {
            status: null,
            text: "",
            updated: false,
        },
        submitButton: false
    })

    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("auth");
        setToken(storedToken);
    }, []);

    const myHeaders = new Headers();
    if (token) {
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Accept", "application/json");
    }

    const formatPrice = (value) => {
        const numericValue = value.replace(/\D/g, '');
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const price = watch('sellPrice', '');
    const buyPrice = watch('buyPrice', '');

    async function onSubmit(data) {
        const numericPrice = parseInt(data.sellPrice.replace(/,/g, ''));
        const numericBuyPrice = parseInt(data.buyPrice.replace(/,/g, ''));
        try {
            setDropDownData((prev) => {
                return { ...prev, submitButton: true };
            });
            var productData = new FormData();
            productData.append("name", data.productName);
            productData.append("des", data.productDesc);
            productData.append("image", userProfileValue ? userProfileValue[0].file : "");
            productData.append("weight", "0");
            productData.append("lenght", "0");
            productData.append("width", "0");
            productData.append("height", "0");
            productData.append("status", "marketable");
            productData.append("tags", keywords);
            productData.append("brand_id", data.brand);
            productData.append("category_id", data.category);
            productData.append("buyPrice", numericBuyPrice);
            productData.append("sellPrice", numericPrice);
            productData.append("unit", data.unit);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: productData,
                redirect: 'follow'
            };

            const postData = await fetch("https://doldor.com/api/v1/product/store", requestOptions);
            const response = await postData.json();
            if (response.status === "success") {
                setDropDownData((prev) => {
                    return { ...prev, message: { status: true, text: "محصول با موفقیت افزوده شد", updated: true } };
                });
            } else if (response.success == false) {
                setDropDownData((prev) => {
                    return { ...prev, message: { status: false, text: "خطایی رخ داد", updated: true } };
                });
            }
            setDropDownData((prev) => {
                return { ...prev, submitButton: false };
            });
        } catch (error) {
            setDropDownData((prev) => {
                return { ...prev, message: { status: false, text: "خطایی رخ داد", updated: true }, submitButton: false };
            });
        }
    }

    useEffect(() => {
        async function getData() {
            const { brands } = await getBrands();
            const { categories } = await getCategories();
            const parentCategories = await categories?.categories.filter((item) => item.parent_id === null);
            const subCategories = await categories?.categories.filter((item) => item.parent_id !== null);
            setDropDownData((prev) => {
                return { ...prev, brand: brands.brand, category: parentCategories, subCategory: subCategories };
            });
        }
        getData()
    }, [])

    return (
        <>

            <Dialog className="py-5 rounded-[20px] h-full overflow-scroll" style={{ fontFamily: "__iranYekanRegFont_beb548" }} open={open} handler={handleOpen} size="md" animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}>
                <DialogHeader className="w-full px-4 flex items-center justify-between" dir="rtl">
                    <h1 className="text-black text-3xl font-semibold" style={{ fontFamily: "__iranYekanRegFont_beb548" }}>
                        افزودن محصول جدید
                    </h1>
                    <IoClose className="cursor-pointer w-10 h-10" onClick={handleOpen} />
                </DialogHeader>
                <DialogBody className="w-full min-h-[300px] px-4" style={{ fontFamily: "__iranYekanRegFont_beb548" }}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full px-4 flex flex-col items-center gap-5" dir="rtl">
                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex items-center gap-2">
                                <label className="w-1/6 text-black text-2xl">نام محصول</label>
                                <div className="w-11/12 relative flex items-center">
                                    <input type="text" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                        {...register("productName", {
                                            required: "لطفا نام محصول را وارد نمایید",
                                        })}
                                    />
                                </div>
                            </div>
                            {errors.productName && (
                                <div className="w-full text-center text-2xl font-semibold text-red-500">{errors.productName.message}</div>
                            )}
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex items-center gap-2">
                                <label className="w-1/6 text-black text-2xl">قیمت خرید</label>
                                <div className="w-11/12 relative flex items-center">
                                    <input type="text" className="block w-full outline-none border-none pl-[35px] text-black text-2xl font-semibold rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                        value={formatPrice(buyPrice)}
                                        {...register("buyPrice", {
                                            required: "لطفا قیمت فروش را وارد نمایید",
                                        })}
                                    />
                                </div>
                            </div>
                            {errors.buyPrice && (
                                <div className="w-full text-center text-2xl font-semibold text-red-500">{errors.buyPrice.message}</div>
                            )}
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex items-center gap-2">
                                <label className="w-1/6 text-black text-2xl">قیمت فروش</label>
                                <div className="w-11/12 relative flex items-center">
                                    <input type="text" className="block w-full outline-none border-none pl-[35px] text-black text-2xl font-semibold rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                        value={formatPrice(price)}
                                        {...register("sellPrice", {
                                            required: "لطفا قیمت فروش را وارد نمایید",
                                        })}
                                    />
                                </div>
                            </div>
                            {errors.sellPrice && (
                                <div className="w-full text-center text-2xl font-semibold text-red-500">{errors.sellPrice.message}</div>
                            )}
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <label className="w-1/6 text-black text-2xl">تخفیف</label>
                            <div className="w-11/12 relative flex items-center">
                                <input type="text" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                    {...register("off")}
                                />
                                <p className="absolute left-5 text-2xl font-semibold">%</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex flex-col items-start gap-2">
                                <label className="w-full text-black text-2xl">مشخصات محصول</label>
                                <div className="w-full relative flex items-center">
                                    <textarea name="" id="" className="block w-full h-[150px] resize-none outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                        {...register("productDesc", {
                                            required: "لطفا مشخصات محصول را وارد نمایید",
                                        })}
                                    ></textarea>
                                </div>
                            </div>
                            {errors.productDesc && (
                                <div className="w-full text-center text-2xl font-semibold text-red-500">{errors.productDesc.message}</div>
                            )}
                        </div>
                        <div className="w-full flex flex-col gap-4 my-4">
                            <div className="w-full flex flex-col items-start gap-2">
                                <label className="w-full text-black text-2xl">تصویر</label>
                                <AddProductImage userProfileValue={userProfileValue} setUserProfileValue={setUserProfileValue} />
                            </div>
                        </div>
                        <Features keywords={keywords} setKeywords={setKeywords} />
                        <div className="w-full flex flex-col gap-4 mt-4">
                            <div className="w-full flex items-center gap-2">
                                <label className="w-1/6 text-black text-2xl">برند</label>

                                <div className="w-11/12 relative flex items-center">
                                    <select className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]" {...register("brand", {
                                        required: "لطفا برند محصول را وارد نمایید",
                                    })}
                                    >
                                        {dropDownData?.brand?.map((item) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4 mt-4">
                            <div className="w-full flex items-center gap-2">
                                <label className="w-1/6 text-black text-2xl">دسته</label>

                                <div className="w-11/12 relative flex items-center">
                                    <select className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]" {...register("category", {
                                        required: "لطفا دسته محصول را وارد نمایید",
                                    })}
                                    >
                                        {dropDownData?.category?.map((item) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4 mt-4">
                            <div className="w-full flex items-center gap-2">
                                <label className="w-1/6 text-black text-2xl">زیردسته</label>

                                <div className="w-11/12 relative flex items-center">
                                    <select className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]" {...register("subCategory", {
                                        required: "لطفا زیردسته محصول را وارد نمایید",
                                    })}
                                    >
                                        {dropDownData?.subCategory?.map((item) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4 mt-4">
                            <div className="w-full flex items-center gap-2">
                                <label className="w-1/6 text-black text-2xl">واحد</label>

                                <div className="w-11/12 relative flex items-center">
                                    <select className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]" {...register("unit", {
                                        required: "لطفا واحد محصول را وارد نمایید",
                                    })}
                                    >
                                        <option value="کیلویی">کیلویی</option>
                                        <option value="عددی">عددی</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            {dropDownData.submitButton ?
                                <button
                                    className="w-1/3 text-white rounded-lg p-4 common bg-doldor_orange outline-none flex items-center justify-center gap-3">
                                    <span>درحال ثبت محصول</span>
                                    <Spinner />
                                </button>
                                :
                                <button
                                    className="w-1/4 text-white rounded-lg p-4 common bg-doldor_orange outline-none">
                                    ثبت
                                </button>
                            }
                        </div>
                        <div className={`w-full text-center text-2xl font-semibold iranYekan my-4 ${dropDownData.message.status ? "text-green-600" : "text-red-600"}`}>
                            {dropDownData.message.updated && dropDownData.message.text}
                        </div>
                    </form>
                </DialogBody>
            </Dialog >
        </>

    );
};

export default AddProduct;