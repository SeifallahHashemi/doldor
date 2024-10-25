"use client"
import Image from "next/image";
import { useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";

export default function ShareModal() {
    const [open, setOpen] = useState(false);
    const [textCopy, setTextCopy] = useState({
        textToCopy: "This is the text to be copied!",
        copied: false
    });

    function handleCopyClick() {
        navigator.clipboard.writeText(textCopy.textToCopy);
        setTextCopy((prev) => {
            return { ...prev, copied: true };
        });
    };

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <button onClick={handleOpen}>
                <Image width={30} height={30} alt="icon" src="/icons/share2.svg" />
            </button>
            <Dialog className="bg-[#E5FCE3] py-5 rounded-[20px]" dir="rtl" open={open} handler={handleOpen} size="sm" animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}>
                <DialogHeader className="w-full px-4 flex items-center justify-between">
                    <h1 className="text-black text-3xl font-semibold">اشتراک‌گذاری کالا</h1>
                    <IoClose className="cursor-pointer w-10 h-10" onClick={handleOpen} />
                </DialogHeader>
                <DialogBody className="w-full px-4">
                    <div className="w-full flex flex-col items-start gap-4">
                        <h1 className="text-black text-2xl font-semibold">این کالا را با دوستان خود به اشتراک بگذارید!</h1>
                        <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share" className="text-2xl text-blue-800">Share via Whatsapp</a>
                        <div className="w-full bg-white text-black flex items-center justify-center py-4 rounded-xl border-none outline-none text-2xl">
                            <Image width={30} height={30} alt="icon" src="/icons/copy.svg" />
                            {textCopy.copied ?
                                <button>کپی شد</button>
                                :
                                <button onClick={handleCopyClick}>کپی کردن لینک</button>
                            }
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    )
}
