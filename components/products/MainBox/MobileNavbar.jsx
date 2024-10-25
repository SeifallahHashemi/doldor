import Image from "next/image";
import Categories from "./Categories";
import MobileNavModal from "./MobileNavModal";

export default function MobileNavbar() {
    return (
        <div className="w-full flex flex-col p-3.5">
            <div className="w-full flex items-center justify-between p-3 mb-2">
                <MobileNavModal />
                <div className="text-[#232323] text-2xl font-semibold">
                    خواربار
                </div>
                <Image width={20} height={20} alt="icon" src="/icons/arrow-products.svg" />
            </div>
            <Categories nav />
        </div>
    )
}
