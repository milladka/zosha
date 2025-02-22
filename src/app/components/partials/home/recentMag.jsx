"use client"
import AxiosInstance from "@/app/config/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function RecentMag() {

    const [data, setData] = useState([])

    useEffect(() => {
        AxiosInstance.get('https://keyhantex.ir/drzoshamag/wp-json/wp/v2/posts?_fields=id,slug,excerpt,title,featured_media_src_url,featured_media,featured_media_src_url')
            .then(res => {
                setData(res.data);
            })
    })

    return (
        <div className="my-28">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm md:text-2xl">آخرین مطالب مجله‌ سلامت</h2>
                <Link className="text-gray-500 hover:text-violet-800 text-xs md:text-sm transition-all" href={'/mag'}>مشاهده همه مطالب</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-10">

                {
                    data.length > 0 && data.map((item) => {
                        return (
                            <div key={item.key} className="bg-white shadow-sm rounded h-[320px] lg:h-[350px] text-center p-2">
                                <Link className="flex items-center flex-col" href={`/mag/${item?.slug}`}>
                                    <div className="relative h-40 w-full rounded overflow-hidden">
                                        <div className="relative w-full h-40">
                                            <Image src={item?.featured_media_src_url} alt="clinic-dr-zosha" layout="fill" />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="h-12 text-sm leading-6 font-bold hover:text-violet-800 transition-all">{item?.title?.rendered}</div>
                                        <p className="text-slate-400 leading-5 text-xs mt-2 lg:mt-5" dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}></p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}