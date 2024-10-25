"use client"

import { useState, useEffect } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import AddProductImage from "./AddProductImage";
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { getCategories } from "@/libs/utility";

const CreateCategory = ({ open, handleOpen }) => {
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

    const [userProfileValue, setUserProfileValue] = useState([]);

    const [dropDownData, setDropDownData] = useState({
        subCategory: [],
        message: {
            status: null,
            text: "",
            updated: false,
        },
        submitButton: false
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function onSubmit(data) {
        try {
            setDropDownData((prev) => {
                return { ...prev, submitButton: true };
            });
            var productData = new FormData();
            productData.append("name", data.categoryName);
            productData.append("image", userProfileValue ? userProfileValue[0].file : "");
            if (data.subCategory != "null") {
                productData.append("parent_id", data.subCategory);
            }

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: productData,
                redirect: 'follow'
            };

            const postData = await fetch("https://doldor.com/api/v1/category/store", requestOptions);
            const response = await postData.json();
            if (response.status === "success") {
                setDropDownData((prev) => {
                    return { ...prev, message: { status: true, text: "دسته بندی با موفقیت افزوده شد", updated: true } };
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
            const { categories } = await getCategories();
            const subCategories = await categories?.categories.filter((item) => item.parent_id !== null);
            setDropDownData((prev) => {
                return { ...prev, subCategory: subCategories };
            });
        }
        getData()
    }, [])

    return (
        <Dialog className="py-5 rounded-[20px]" style={{ fontFamily: "__iranYekanRegFont_beb548" }} open={open} handler={handleOpen} size="md" animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
        }}>
            <DialogHeader className="w-full px-4 flex items-center justify-between" dir="rtl">
                <h1 className="text-black text-3xl font-semibold" style={{ fontFamily: "__iranYekanRegFont_beb548" }}>ایجاد دسته بندی جدید</h1>
                <IoClose className="cursor-pointer w-10 h-10" onClick={handleOpen} />
            </DialogHeader>
            <DialogBody className="w-full min-h-[300px] px-4" style={{ fontFamily: "__iranYekanRegFont_beb548" }}>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full px-4 flex flex-col items-center gap-5" dir="rtl">
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full flex items-center gap-2">
                            <label className="w-1/6 common text-2xl">نام دسته</label>
                            <div className="w-11/12 relative flex items-center">
                                <input type="text" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                    {...register("categoryName", {
                                        required: "لطفا نام دسته را وارد نمایید",
                                    })}
                                />
                            </div>
                        </div>
                        {errors.categoryName && (
                            <div className="w-full text-center text-2xl font-semibold text-red-500">{errors.categoryName.message}</div>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-4 mt-4">
                        <div className="w-full flex items-center gap-2">
                            <label className="w-1/6 text-black text-2xl">نام زیردسته</label>

                            <div className="w-11/12 relative flex items-center">
                                <select className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]" {...register("subCategory", {
                                    required: "لطفا زیردسته را وارد نمایید",
                                })}
                                >
                                    <option value="null">انتخاب زیردسته</option>
                                    {dropDownData?.subCategory?.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="w-full text-center text-xl iranYekan font-semibold text-red-500">چنان چه زیردسته ایی ا انتخاب نکنید دسته به عنوان دسته والد ثبت خواهد شد</div>
                        {errors.subCategory && (
                            <div className="w-full text-center text-2xl font-semibold text-red-500">{errors.subCategory.message}</div>
                        )}
                    </div>
                    {/* 
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full flex items-center gap-2">
                            <label className="w-1/6 common text-2xl">نام برند</label>
                            <div className="w-11/12 relative flex items-center">
                                <input type="text" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                    {...register("brandName", {
                                        required: "لطفا نام برند را وارد نمایید",
                                    })}
                                />
                            </div>
                        </div>
                        {errors.brandName && (
                            <div className="w-full text-center text-2xl font-semibold text-red-500">{errors.brandName.message}</div>
                        )}
                    </div> */}
                    <div className="w-full flex flex-col gap-4 my-4" dir="rtl">
                        <div className="w-full flex flex-col items-start gap-2">
                            <label className="w-full common text-2xl">تصویر</label>
                            <AddProductImage userProfileValue={userProfileValue} setUserProfileValue={setUserProfileValue} />
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        {dropDownData.submitButton ?
                            <button
                                className="w-1/3 text-white rounded-lg p-4 common bg-doldor_orange outline-none flex items-center justify-center gap-3">
                                <span>درحال ثبت دسته بندی</span>
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
        </Dialog>

    );
};

export default CreateCategory;