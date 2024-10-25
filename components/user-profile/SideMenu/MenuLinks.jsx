import { FiUser } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";
import Link from "next/link";

export default function MenuLinks({ mobile, profile }) {
    return (
        <div className={`w-full min-h-[100px] flex flex-col items-start p-5 ${!mobile && "bg-[#F9F9F9] border border-[#e2e2e2] rounded-3xl"}`}>
            <ul className="w-full">
                <li className={`${profile ? "text-doldor_orange" : "text-black hover:text-doldor_orange"} transition-all ease-linear delay-100 text-lg font-semibold leading-8 my-3`}>
                    <Link className="flex items-center gap-2.5" href="#">
                        <FiUser className="w-7 h-7" />
                        پروفایل
                    </Link>
                </li>
                <li className="text-black hover:text-doldor_orange transition-all ease-linear delay-100 text-lg font-semibold leading-8 my-4">
                    <Link className="flex items-center gap-2.5" href="#">
                        <SlBasket className="w-7 h-7" />
                        سفارشات
                    </Link>
                </li>
                <li className="text-black hover:text-doldor_orange transition-all ease-linear delay-100 text-lg font-semibold leading-8 my-3">
                    <Link className="flex items-center gap-2.5" href="#">
                        <IoWalletOutline className="w-7 h-7" />
                        کیف پول
                    </Link>
                </li>
            </ul>
        </div>
    )
}
