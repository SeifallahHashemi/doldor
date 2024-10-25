"use client"
import { useState } from 'react';
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

const DropdownItem = ({ title, items, isOpen, toggleDropdown }) => {
    return (
        <li className="w-full px-3 transition-all ease-linear delay-100">
            <div
                className="text-black hover:bg-[#F6FEF5] hover:text-[#00B761] transition-all delay-75 ease-linear w-full flex items-center justify-between py-3 cursor-pointer"
                onClick={toggleDropdown}
            >
                <span className="text-2xl">{title}</span>
                <IoChevronDown
                    className={`w-[20px] h-[20px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>
            <div className={`dropdown-content ${isOpen ? 'open' : ''} transition-all ease-linear delay-100`}>
                <ul className={`w-full flex flex-col pr-4 gap-2 transition-all ease-linear delay-100`}>
                    {items.map((item, index) => (
                        <li key={index} className="text-xl font-semibold text-black leading-9 hover:text-[#00B761] transition-all ease-linear delay-100">
                            <Link href="#" className="">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

export default function SideBarLinks() {
    const [openIndex, setOpenIndex] = useState(null);

    const dropdownsData = [
        { title: "خواربار", items: ["نان", "برنج", "ماکارونی و رشته"] },
        { title: "سبزیجات", items: ["گوجه", "خیار", "فلفل"] },
        { title: "میوه‌ها", items: ["سیب", "موز", "پرتقال"] },
        { title: "خواربار", items: ["نان", "برنج", "ماکارونی و رشته"] },
        { title: "سبزیجات", items: ["گوجه", "خیار", "فلفل"] },
        { title: "میوه‌ها", items: ["سیب", "موز", "پرتقال"] },
        { title: "خواربار", items: ["نان", "برنج", "ماکارونی و رشته"] },
        { title: "سبزیجات", items: ["گوجه", "خیار", "فلفل"] },
        { title: "میوه‌ها", items: ["سیب", "موز", "پرتقال"] },
        // Add more dropdowns as needed
    ];

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full p-2 min-h-screen flex items-start justify-center">
            <ul className="w-full flex flex-col items-center px-3">
                {dropdownsData.map((dropdown, index) => (
                    <DropdownItem
                        key={index}
                        title={dropdown.title}
                        items={dropdown.items}
                        isOpen={openIndex === index}
                        toggleDropdown={() => toggleDropdown(index)}
                    />
                ))}
            </ul >
        </div >
    )
}
