"use client"

import { useForm } from "react-hook-form";

export default function SubmitOrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
  }

  return (
    <div className="md:w-1/2 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col items-start gap-4">
          <span className="text-[16px] text-black">آدرس کامل :</span>
          <textarea className="w-full h-[90px] resize-none placeholder:text-[16px] text-[14px] rounded-[10px] p-[10px] border-2 border-[#cccccc80] bg-white outline-none" style={{ color: "rgba(192, 192, 192, 0.763)" }} placeholder="آدرس را وارد کنید..."
            {...register("address", {
              required: "لطفا آدرس خود را وارد نمایید",
            })}
          ></textarea>
          {errors.address && (
            <div className="w-full text-2xl font-semibold text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-10">
          <div className="md:w-1/3 w-full">
            <div className="w-full flex flex-col items-start gap-4">
              <span className="text-[16px] text-black">بلوک :</span>
              <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] px-[10px] py-[14px] border-2 border-[#cccccc80] bg-white outline-none" style={{ color: "rgba(192, 192, 192, 0.763)" }} type="text" placeholder="بلوک..."
                {...register("block", {
                  required: "لطفا بلوک خود را وارد نمایید",
                })}
              />
              {errors.block && (
                <div className="w-full text-2xl font-semibold text-red-500">{errors.block.message}</div>
              )}
            </div>
          </div>
          <div className="md:w-1/3 w-full">
            <div className="w-full flex flex-col items-start gap-4">
              <span className="text-[16px] text-black">طبقه :</span>
              <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] px-[10px] py-[14px] border-2 border-[#cccccc80] bg-white outline-none" style={{ color: "rgba(192, 192, 192, 0.763)" }} type="text" placeholder="طبقه..."
                {...register("floor", {
                  required: "لطفا طبقه خود را وارد نمایید",
                })}
              />
              {errors.floor && (
                <div className="w-full text-2xl font-semibold text-red-500">{errors.floor.message}</div>
              )}
            </div>
          </div>
          <div className="md:w-1/3 w-full">
            <div className="w-full flex flex-col items-start gap-4">
              <span className="text-[16px] text-black">پلاک :</span>
              <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] px-[10px] py-[14px] border-2 border-[#cccccc80] bg-white outline-none" style={{ color: "rgba(192, 192, 192, 0.763)" }} type="text" placeholder="پلاک..."
                {...register("plate", {
                  required: "لطفا پلاک خود را وارد نمایید",
                })}
              />
              {errors.plate && (
                <div className="w-full text-2xl font-semibold text-red-500">{errors.plate.message}</div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-10">
          <div className="md:w-1/2 w-full">
            <div className="w-full flex flex-col items-start gap-4">
              <span className="text-[16px] text-black">توضیحات اضافی آدرس :</span>
              <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] px-[10px] py-[14px] border-2 border-[#cccccc80] bg-white outline-none" style={{ color: "rgba(192, 192, 192, 0.763)" }} type="text" placeholder="توضیحات اضافی آدرس..."
                {...register("extraDesc", {
                  required: "لطفا توضیحات اضافی آدرس را وارد نمایید",
                })}
              />
              {errors.extraDesc && (
                <div className="w-full text-2xl font-semibold text-red-500">{errors.extraDesc.message}</div>
              )}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full flex flex-col items-start gap-4">
              <span className="text-[16px] text-black">شماره تماس گیرنده :</span>
              <input className="w-full placeholder:text-[16px] text-[14px] rounded-[10px] px-[10px] py-[14px] border-2 border-[#cccccc80] bg-white outline-none" style={{ color: "rgba(192, 192, 192, 0.763)" }} type="text" placeholder="شماره تماس گیرنده..."
                {...register("reciverNumber", {
                  required: "لطفا شماره تماس گیرنده را وارد نمایید",
                })}
              />
              {errors.reciverNumber && (
                <div className="w-full text-2xl font-semibold text-red-500">{errors.reciverNumber.message}</div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="w-full flex flex-col items-start gap-4">
          <span className="text-[16px] text-black">آدرس های منتخب :</span>
        </div> */}
        <div className="w-full flex items-center justify-center mt-12">
          <button className="md:w-1/2 w-full text-white pulse bg-doldor_orange py-[15px] px-[20px] rounded-[15px] text-[16px] mx-auto">
            ثبت سفارش
          </button>
        </div>
      </form>
    </div>
  )
}
