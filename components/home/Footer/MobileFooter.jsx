import Image from "next/image";
import Link from "next/link";

export default function MobileFooter() {
    return (
        <footer className="w-full block md:hidden fixed bottom-0 z-50" dir="rtl">
            <div className="bg-[#efefefe0] backdrop-blur-[3px] py-2.5">
                <div className="flex justify-evenly items-center flex-wrap overflow-hidden ">
                    <div className="relative">
                        <Link href="/" className="text-base text-white">
                            <Image width={25} height={25} alt="icon" src="/icons/home.svg" />
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href="/" className="text-base text-white">
                            <Image width={25} height={25} alt="icon" src="/icons/shop2.svg" />
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href="/" className="text-base text-white">
                            <Image width={25} height={25} alt="icon" src="/icons/category.svg" />
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href="/" className="text-base text-white">
                            <Image width={25} height={25} alt="icon" src="/icons/basket-shopping.svg" />
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href="/" className="text-base text-white">
                            <Image width={25} height={25} alt="icon" src="/icons/location.svg" />
                        </Link>
                    </div>
                    <div className="relative">
                        <Link href="/" className="text-base text-white">
                            <Image width={25} height={25} alt="icon" src="/icons/account.svg" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative">
                <button className="w-[30px] h-[30px] absolute bottom-[41px] right-[25px] bg-[#00B761] border-none rounded-[50%] overflow-hidden">
                    <div className="-rotate-90 transition-all delay-1000 ease-out">
                        <span className="mobile__footer">

                        </span>
                    </div>
                </button>
            </div>
        </footer>
    )
}
