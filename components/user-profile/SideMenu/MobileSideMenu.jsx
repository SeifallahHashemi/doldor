"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Profile from "./Profile";
import MenuLinks from "./MenuLinks";
// import SideBarLinks from "./sideBarLinks";

export default function MobileSideMenu() {
    const [openMenu, setOpenMenu] = useState(false);
    const sidebarRef = useRef();

    function menuToggle() {
        setOpenMenu((prev) => !prev);
    }

    function handleClickOutside(event) {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target)
        ) {
            setOpenMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <>
            <Image onClick={menuToggle} width={30} height={30} alt="#" src="/icons/icon-menu.svg" className="cursor-pointer" />
            {openMenu && (
                <div className="fixed inset-0 bg-black opacity-35 z-40" onClick={() => setOpenMenu(false)} />
            )}
            <div ref={sidebarRef} className={`h-full fixed z-50 top-0 right-0 bg-white overflow-x-hidden pt-3 pr-0 flex flex-col py-3 ${openMenu ? "w-[200px]" : "w-0 "
                }`}
                style={{ transition: "0.5s", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }}
            >
                <div className="w-full flex items-center justify-between px-2.5 py-5 border-b border-[#00b7622b]">
                    <Link href="/" className="flex items-center gap-1">
                        <span className="text-[#F37151] text-2xl font-extrabold" style={{ fontFamily: "en" }}>DOLDOR</span>
                        <Image width={30} height={30} alt="icon" src="/icons/shop.svg" />
                    </Link>
                    <IoClose className="w-[30px] h-[30px] cursor-pointer" onClick={() => setOpenMenu(false)} />
                </div>

                <Profile mobile />
                <MenuLinks mobile/>

            </div>
        </>
    )
}
