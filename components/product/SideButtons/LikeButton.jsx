"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function LikeButton() {
    const [active, setActive] = useState(false)
    return (
        <div className='cursor-pointer'>
            <Image className={active ? "hidden heart" : "block heart"} onClick={() => setActive(!active)} width={30} height={30} alt="icon" src="/icons/heart3.svg" />
            <Image className={active ? "block heart" : "hidden heart"} onClick={() => setActive(!active)} width={30} height={30} alt="icon" src="/icons/heart2.svg" />
        </div>
    )
}
