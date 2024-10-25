import Image from "next/image";
import FilterCheckbox from "./FilterCheckbox";
import SwitchBox from "./SwitchBox";
import PriceFilter from "./PriceFilter";

export default function FilterBox() {
    return (
        <div className="w-full min-h-[300px] flex flex-col px-5 bg-[#F8F8F8] rounded-[20px]">
            <div className="w-full flex items-center gap-2 text-3xl border-b border-[#e1e1e1ae] mx-2.5 py-5 px-3">
                <Image width={25} height={25} alt="icon" src="/icons/filter.png" />
                <span className="text-[#232323] font-bold">فیلتر بر اساس</span>
            </div>
            <div className="w-full flex flex-col items-start my-4">
                <div className="flex items-center gap-1 text-[#232323] text-2xl font-semibold mb-4">
                    برند های موجود
                    <Image width={20} height={20} alt="icon" src="/icons/arrow-down.svg" />
                </div>
                <FilterCheckbox text="گلستان" />
                <FilterCheckbox text="جهان" />
                <FilterCheckbox text="دبش" />
            </div>
            <div className="w-full flex items-center justify-between my-4">
                <div className="text-[#232323] text-2xl font-semibold">
                    فقط کالاهای موجود
                </div>
                <SwitchBox />
            </div>
            <div className="w-full flex flex-col my-6">
                <div className="text-[#232323] text-2xl font-semibold">
                    فیلتر قیمت
                </div>
                <PriceFilter min={0}
                    max={500000}
                />
            </div>
            <div className="w-full flex items-center justify-end my-5">
                <button className="bg-doldor_orange text-white pulse py-2.5 px-6 text-2xl font-semibold rounded-2xl">اعمال فیلتر</button>
            </div>
        </div>
    )
}
