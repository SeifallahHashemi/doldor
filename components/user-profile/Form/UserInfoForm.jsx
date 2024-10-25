'use client'

import { useForm } from "react-hook-form";

export default function UserInfoForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center gap-10">
            <div className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center gap-10">
                <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                    <span className="text-[16px] text-black">نام</span>
                    <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] p-[10px] border-2 border-[#cccccc80] bg-white outline-none" type="text" placeholder="نام..."
                        {...register("name", {
                            required: "لطفا نام خود را وارد نمایید",
                        })}
                    />
                    {errors.name && (
                        <div className="w-full text-2xl font-semibold text-red-500">{errors.name.message}</div>
                    )}
                </div>
                <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                    <span className="text-[16px] text-black">نام خانوادگی</span>
                    <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] p-[10px] border-2 border-[#cccccc80] bg-white outline-none" type="text" placeholder="نام خانوادگی..."
                        {...register("fullname", {
                            required: "لطفا نام خانوادگی خود را وارد نمایید",
                        })}
                    />
                    {errors.fullname && (
                        <div className="w-full text-2xl font-semibold text-red-500">{errors.fullname.message}</div>
                    )}
                </div>
            </div>
            <div className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center gap-10">
                <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                    <span className="text-[16px] text-black">شماره تلفن</span>
                    <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] p-[10px] border-2 border-[#cccccc80] bg-white outline-none" type="number" placeholder="شماره تلفن..."
                        {...register("phone", {
                            required: "لطفا شماره تلفن خود را وارد نمایید",
                        })}
                    />
                    {errors.phone && (
                        <div className="w-full text-2xl font-semibold text-red-500">{errors.phone.message}</div>
                    )}
                </div>
                <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                    <span className="text-[16px] text-black">کدملی</span>
                    <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] p-[10px] border-2 border-[#cccccc80] bg-white outline-none" type="number" placeholder="کدملی..."
                        {...register("id", {
                            required: "لطفا کدملی خود را وارد نمایید",
                        })}
                    />
                    {errors.id && (
                        <div className="w-full text-2xl font-semibold text-red-500">{errors.id.message}</div>
                    )}
                </div>
            </div>
            <div className="w-full flex items-center justify-end mt-10 mb-8">
                <button className="md:w-1/5 w-full text-white pulse bg-doldor_orange py-[10px] px-[15px] rounded-[15px] text-[16px]">
                    ذخیره
                </button>
            </div>
        </form>
    )
}
