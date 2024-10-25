"use client"

import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function LoginForm({ openTab }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function onSubmit(data) {
        try {
            var usersData = new FormData();
            usersData.append("mobile", data.mobile);
            usersData.append("password", data.password);

            const requestOptions = {
                method: "POST",
                body: usersData,
            };
            const response = await fetch("https://doldor.com/api/v1/login", requestOptions);
            const postedData = await response.json();
            if (postedData.status === "success") {
                localStorage.setItem("auth", postedData.authorisation.token);
                localStorage.setItem("user", JSON.stringify(postedData.user));
                toast.success(`خوش آمدی ${postedData.user.name}`, {
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
            } else if (postedData.status === "error") {
                toast.error("رمز عبور و یا شماره موبایل خود را به درستی وارد نمایید", {
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
            <form onSubmit={handleSubmit(onSubmit)} className={`w-full ${openTab === "login" ? "flex" : "hidden"} flex-col items-center gap-12 relative my-10 md:px-0 px-5`}>
                <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-20">
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
                    <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                        <label className="text-black text-2xl">رمز عبور :</label>
                        <div className="w-full relative flex items-center">
                            <input type="password" className="block w-full outline-none border-none pl-[35px] text-black text-xl rounded-[10px] bg-[#fbcfc4ba] p-[10px]"
                                {...register("password", {
                                    required: "لطفا رمزعبور خود را وارد نمایید",
                                })}
                            />
                            <Image width={23} height={23} alt="icon" src="/icons/password.svg" className="absolute left-4" />
                        </div>
                        {errors.password && (
                            <div className="w-full text-2xl font-semibold text-red-500">{errors.password.message}</div>
                        )}
                    </div>
                </div>
                <div className="w-full flex justify-start my-4">
                    <span className="text-[#00B761] text-2xl font-semibold">فراموشی رمز؟</span>
                </div>
                <div className="w-full flex justify-center my-20">
                    <button className="bg-doldor_orange text-white pulse py-2.5 px-9 text-3xl font-semibold rounded-2xl">
                        ورود
                    </button>
                </div>
            </form>
        </>
    )
}
