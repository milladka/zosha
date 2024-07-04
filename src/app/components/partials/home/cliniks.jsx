"use client"
import { LocationIcon } from "@/app/utils/icons/location";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Clinics() {
    const [active, setActive] = useState(1);

    const handleClass = (id) => {
        if (id == active) {
            return 'text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500';
        } else {
            return 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300';
        }
    }
    return (
        <div className="my-28">
            
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm md:text-2xl">کلینیک و مراکز درمانی </h2>
                <Link className="text-gray-500 hover:text-violet-800 text-xs md:text-sm transition-all" href={'/'}>مشاهده همه</Link>
            </div>

            <div className="mb-4 border-b border-gray-200 dark:border-gray-700 mt-4">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                    <li className="me-2" role="presentation">
                        <button onClick={() => setActive(1)} className={`${handleClass(1)} inline-block p-4 border-b-2 rounded-t-lg transition-all`} >بیمارستان‌ها</button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button onClick={() => setActive(2)} className={`${handleClass(2)} inline-block p-4 border-b-2 rounded-t-lg transition-all`}>کلینیک‌ها</button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button onClick={() => setActive(3)} className={`${handleClass(3)} inline-block p-4 border-b-2 rounded-t-lg transition-all`}>داروخانه‌ها</button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button onClick={() => setActive(4)} className={`${handleClass(4)} inline-block p-4 border-b-2 rounded-t-lg transition-all`}>آزمایشگاه‌ها</button>
                    </li>

                    <li className="me-2" role="presentation">
                        <button onClick={() => setActive(5)} className={`${handleClass(5)} inline-block p-4 border-b-2 rounded-t-lg transition-all`}>مراکز تصویربرداری</button>
                    </li>
                    <li role="presentation">
                        <button onClick={() => setActive(6)} className={`${handleClass(6)} inline-block p-4 border-b-2 rounded-t-lg transition-all`}>درمانگاه‌ها</button>
                    </li>
                </ul>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-4 gap-3 mt-4">

                <div className="bg-white shadow-sm rounded h-56 text-center overflow-hidden p-2">
                    <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                        <div className="relative h-36 w-full rounded overflow-hidden">
                            <Image src={'/assets/clinics.jpg'} objectFit="cover" fill />
                            <div className="bg-violet-700 opacity-20 absolute top-0 left-0 w-full h-full hover:opacity-0 transition-all"></div>
                        </div>
                        <div className="font-bold p-2 text-violet-700 ">
                            <div>کلینیک نوید زیبایی</div>
                            <div className="text-xs font-extralight text-gray-500 flex items-center justify-center mt-2">
                                <LocationIcon small />
                                <span className="mr-1">تهران، زعفرانیه</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="bg-white shadow-sm rounded h-56 text-center overflow-hidden p-2">
                    <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                        <div className="relative h-36 w-full rounded overflow-hidden">
                            <Image src={'/assets/behdis.jpeg'} objectFit="cover" fill />
                            <div className="bg-violet-700 opacity-20 absolute top-0 left-0 w-full h-full hover:opacity-0 transition-all"></div>
                        </div>
                        <div className="font-bold p-2 text-violet-700 ">
                            <div>کلینیک بهدیس</div>
                            <div className="text-xs font-extralight text-gray-500 flex items-center justify-center mt-2">
                                <LocationIcon small />
                                <span className="mr-1">تهران، ظفر</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="bg-white shadow-sm rounded h-56 text-center overflow-hidden p-2">
                    <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                        <div className="relative h-36 w-full rounded overflow-hidden">
                            <Image src={'/assets/zhava.jpg'} objectFit="cover" fill />
                            <div className="bg-violet-700 opacity-20 absolute top-0 left-0 w-full h-full hover:opacity-0 transition-all"></div>
                        </div>
                        <div className="font-bold p-2 text-violet-700 ">
                            <div>کلینیک  پوست و مو ژاوا</div>
                            <div className="text-xs font-extralight text-gray-500 flex items-center justify-center mt-2">
                                <LocationIcon small />
                                <span className="mr-1">تهران، قیطریه</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="bg-white shadow-sm rounded h-56 text-center overflow-hidden p-2">
                    <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                        <div className="relative h-36 w-full rounded overflow-hidden">
                            <Image src={'/assets/javaneh.png'} objectFit="cover" fill />
                            <div className="bg-violet-700 opacity-20 absolute top-0 left-0 w-full h-full hover:opacity-0 transition-all"></div>
                        </div>
                        <div className="font-bold p-2 text-violet-700 ">
                            <div>کلینیک زیبایی جوانه </div>
                            <div className="text-xs font-extralight text-gray-500 flex items-center justify-center mt-2">
                                <LocationIcon small />
                                <span className="mr-1">شیراز</span>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}