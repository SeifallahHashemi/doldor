import Link from "next/link";
import SideMenu from "./sideMenu";
import SearchModal from "./searchModal";
import BasketData from "./basketData";
import Image from "next/image";
import UserData from "./UserData";

export default function Navbar() {
    return (
        <nav className="w-full h-full">
            <div className="w-full md:flex hidden items-center justify-between mt-4" dir="rtl">
                <SideMenu />
                <div className="logo">
                    <Link href="/" className="text-[#F37151] text-2xl font-extrabold" style={{ fontFamily: "en" }}>DOLDOR</Link>
                </div>
                <div className="relative flex items-center gap-2.5">
                    <SearchModal />
                    <UserData />
                    <BasketData />
                </div>
            </div>
            <div className="md:hidden block w-full mt-4" dir="rtl">
                <div className="w-full flex items-center justify-center">
                    <input className="w-4/5 h-[42px] outline-none border border-[#e7e7e7] rounded-tr-[15px] rounded-br-[15px] p-2.5 text-2xl text-black font-semibold" type="text" placeholder="محصول مورد نظرتو جستجو کن ..." />
                    <button className="bg-[#e7e7e7] w-1/5 h-[42px] rounded-tl-[15px] rounded-bl-[15px] py-2.5 px-[15px] flex items-center justify-center border-none outline-none" type="submit">
                        <Image width={30} height={30} alt="icon" src="/icons/search2.svg" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
