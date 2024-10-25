"use client"

import { useParams } from 'next/navigation';
import ResultItems from './ResultItems';

export default function SearchedData() {
    const { query } = useParams();

    return (
        <div className='w-full flex flex-col gap-10' dir='rtl'>
            <div className='w-full flex items-center justify-start p-2 m-2'>
                <div className='text-black text-3xl font-semibold leading-8'>
                    نتایج جستجوی : {decodeURIComponent(query)}
                </div>
            </div>
            <ResultItems />
        </div>
    )
}
