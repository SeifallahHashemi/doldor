export default function Categories({nav}) {
    return (
        <ul className="w-full flex items-center overflow-x-auto md:px-20 px-5 md:gap-10">
            <li className={`text-[#495057] ${nav ? "bg-transparent" : "bg-[#fff]"} py-2 px-4 font-bold text-2xl mx-2 cursor-pointer`}>
                شکلات
            </li>
            <li className={`text-[#495057] ${nav ? "bg-transparent" : "bg-[#fff]"} py-2 px-4 font-bold text-2xl mx-2 cursor-pointer`}>
                آجیل
            </li>
            <li className={`text-[#495057] ${nav ? "bg-transparent" : "bg-[#fff]"} py-2 px-4 font-bold text-2xl mx-2 cursor-pointer`}>
                شیرینی
            </li>
            <li className={`text-[#495057] ${nav ? "bg-transparent" : "bg-[#fff]"} py-2 px-4 font-bold text-2xl mx-2 cursor-pointer`}>
                سبزی
            </li>
            <li className={`text-[#495057] ${nav ? "bg-transparent" : "bg-[#fff]"} py-2 px-4 font-bold text-2xl mx-2 cursor-pointer`}>
                میوه
            </li>
            <li className={`text-[#495057] ${nav ? "bg-transparent" : "bg-[#fff]"} py-2 px-4 font-bold text-2xl mx-2 cursor-pointer`}>
                تنقلات
            </li>
            <li className={`text-[#495057] ${nav ? "bg-transparent" : "bg-[#fff]"} py-2 px-4 font-bold text-2xl mx-2 cursor-pointer`}>
                شکلات
            </li>
        </ul>
    )
}
