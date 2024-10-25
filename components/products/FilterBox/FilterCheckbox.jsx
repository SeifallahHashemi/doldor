"use client"
import { useState } from "react"
import { Checkbox } from "@material-tailwind/react";


export default function FilterCheckbox({ text }) {
    const [checked, setChecked] = useState(false)

    function checkHandler() {
        setChecked(!checked);
    }

    return (
        <div className="flex items-center">
            <Checkbox className="w-[15px] h-[15px]" checked={checked} onChange={checkHandler} color="green" />
            <span className={`${checked ? "text-[#00B761]" : "text-[#232323]"} text-xl font-semibold`} style={{fontFamily: "__iranYekanRegFont_beb548"}}>{text}</span>
        </div>
    )
}
