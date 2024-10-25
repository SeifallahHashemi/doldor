"use client"

import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function SignupForm({ openTab }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function onSubmit(data) {
        if (data.password === data.passwordReply) {
            try {
                var usersData = new FormData();
                usersData.append("mobile", data.mobile);
                usersData.append("name", data.name);
                usersData.append("password", data.password);
                usersData.append("gender", "male");

                const requestOptions = {
                    method: "POST",
                    body: usersData,
                };
                const response = await fetch("https://doldor.com/api/v1/register", requestOptions);
                const postedData = await response.json();
                if (postedData.status) {
                    localStorage.setItem("auth", postedData.authorisation.token);
                    toast.success("ثبت نام با موفقیت انجام شد", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        style: { fontFamily: "__iranYekanRegFont_beb548" },
                        className: "text-2xl"
                    });
                    router.push("/");
                } else if (postedData.success === false) {
                    toast.error("! خطایی رخ داد", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        style: { fontFamily: "__iranYekanRegFont_beb548" },
                        className: "text-2xl"
                    });
                }
            } catch (error) {
                toast.error("! خطایی رخ داد", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    style: { fontFamily: "__iranYekanRegFont_beb548" },
                    className: "text-2xl"
                });
            }
        } else {
            toast.error("رمز عبور و تکران رمز عبور یکسان نیست !", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: { fontFamily: "__iranYekanRegFont_beb548" },
                className: "text-2xl"
            });

        }
    }

    return (
        <>
            <ToastContainer
                style={{ fontFamily: "__iranYekanRegFont_beb548" }}
                className="text-2xl"
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
            <form onSubmit={handleSubmit(onSubmit)} className={`w-full ${openTab === "signup" ? "flex" : "hidden"} flex-col items-center gap-12 relative my-10 md:px-0 px-5`}>
                <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-20">
                    <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                        <label className="text-black text-2xl">نام :</label>
                        <div className="w-full relative flex items-center">
                            <input type="text" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                {...register("name", {
                                    required: "لطفا نام خود را وارد نمایید",
                                })}
                            />
                            <Image width={23} height={23} alt="icon" src="/icons/account.svg" className="absolute left-4" />
                        </div>
                        {errors.name && (
                            <div className="w-full text-2xl font-semibold text-red-500">{errors.name.message}</div>
                        )}
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                        <label className="text-black text-2xl">شماره موبایل :</label>
                        <div className="w-full relative flex items-center">
                            <input type="text" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                {...register("mobile", {
                                    required: "لطفا شماره موبایل خود را وارد نمایید",
                                })}
                            />
                            <Image width={23} height={23} alt="icon" src="/icons/mobile.svg" className="absolute left-4" />
                        </div>
                        {errors.mobile && (
                            <div className="w-full text-2xl font-semibold text-red-500">{errors.mobile.message}</div>
                        )}
                    </div>
                </div>
                <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-20">
                    <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                        <label className="text-black text-2xl">رمز عبور :</label>
                        <div className="w-full relative flex items-center">
                            <input type="password" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                {...register("password", {
                                    required: "لطفا رمز عبور خود را وارد نمایید",
                                })}
                            />
                            <Image width={23} height={23} alt="icon" src="/icons/password.svg" className="absolute left-4" />
                        </div>
                        {errors.password && (
                            <div className="w-full text-2xl font-semibold text-red-500">{errors.password.message}</div>
                        )}
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                        <label className="text-black text-2xl">تکرار رمز عبور :</label>
                        <div className="w-full relative flex items-center">
                            <input type="password" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                {...register("passwordReply", {
                                    required: "لطفا تکرار رمز عبور خود را وارد نمایید",
                                })}
                            />
                            <Image width={23} height={23} alt="icon" src="/icons/password.svg" className="absolute left-4" />
                        </div>
                        {errors.passwordReply && (
                            <div className="w-full text-2xl font-semibold text-red-500">{errors.passwordReply.message}</div>
                        )}
                    </div>
                </div>
                <div className="w-full flex justify-center my-20">
                    <button className="bg-doldor_orange text-white pulse py-2.5 px-9 text-3xl font-semibold rounded-2xl">
                        ثبت نام
                    </button>
                </div>
            </form>
        </>
    )
}
