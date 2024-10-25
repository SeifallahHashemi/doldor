"use client"
import Image from "next/image";
import { useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import FilterCheckbox from "../FilterBox/FilterCheckbox";

export default function MobileNavModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Image onClick={handleOpen} width={30} height={30} alt="icon" src="/icons/filter.png" />
            <Dialog className="custom-dialog bg-[#E5FCE3] text-black py-5 rounded-[20px]" dir="rtl" open={open} handler={handleOpen} size="md" animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }
            }style={{fontFamily: "__iranYekanRegFont_beb548"}}>
                <DialogHeader className="w-full px-4 flex items-center justify-between">
                    <h1 className="text-black text-3xl font-semibold" style={{fontFamily: "__iranYekanRegFont_beb548"}}>فیلتر بر اساس</h1>
                    <IoClose className="cursor-pointer w-10 h-10" onClick={handleOpen} />
                </DialogHeader>
                <DialogBody className="w-full p-5">
                    <div className="bg-white py-[15px] rounded-[10px] border-none" style={{ boxShadow: "inset 0 0 26px #f8f8f8e8" }}>
                        <FilterCheckbox text="پرفروش ترین محصولات" />
                        <FilterCheckbox text="ارزان ترین محصولات" />
                        <FilterCheckbox text="گران ترین محصولات" />
                        <FilterCheckbox text="محصولات با تخفیف" />
                    </div>
                </DialogBody>
            </Dialog>
        </>
    )
}
