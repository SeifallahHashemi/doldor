"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";

export default function SearchModal() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        router.push(`/search/${data.search}`);
    }
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <button onClick={handleOpen} className="bg-[#F37151] py-2 px-3 rounded-2xl flex items-center justify-center">
                <Image width={25} height={25} alt="icon" src="/icons/search.svg" />
            </button>
            <Dialog className="bg-[#E5FCE3] py-5 rounded-[20px]" style={{ fontFamily: "__iranYekanRegFont_beb548" }} dir="rtl" open={open} handler={handleOpen} size="sm" animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}>
                <DialogHeader className="w-full px-4 flex items-center justify-between">
                    <h1 className="text-black text-3xl font-semibold" style={{ fontFamily: "__iranYekanRegFont_beb548" }}>محصول مورد نظرتو جستجو کن</h1>
                    <IoClose className="cursor-pointer w-10 h-10" onClick={handleOpen} />
                </DialogHeader>
                <DialogBody className="w-full px-4" style={{ fontFamily: "__iranYekanRegFont_beb548" }}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="w-full flex items-center justify-center">
                            <input className="w-4/5 h-[50px] outline-none border border-[#e7e7e7] rounded-tr-[15px] rounded-br-[15px] p-2.5 text-2xl text-black font-semibold" type="text" placeholder="..." style={{ fontFamily: "__iranYekanRegFont_beb548" }}
                                {...register("search", {
                                    required: "لطفا فیلد را پر کنید",
                                })}
                            />
                            <button className="bg-[#e7e7e7] w-1/5 h-[50px] rounded-tl-[15px] rounded-bl-[15px] py-2.5 px-[15px] flex items-center justify-center border-none outline-none" type="submit">
                                <Image width={30} height={30} alt="icon" src="/icons/search2.svg" />
                            </button>
                        </div>
                        {errors.search && (
                            <div className="w-full text-2xl font-semibold text-red-500 mt-4">{errors.search.message}</div>
                        )}
                    </form>
                </DialogBody>
            </Dialog>
        </>
    )
}
