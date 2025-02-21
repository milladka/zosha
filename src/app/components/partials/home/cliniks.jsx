"use client"
import AxiosInstance from "@/app/config/axiosInstance";
import { PICTURE_URL } from "@/app/constant";
import { Hospital } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Clinics() {
    const [data, setData] = useState([]);
    useEffect(() => {
        AxiosInstance.get('/front/get_recent_centers')
            .then(res => {
                if (!res.data.error) {
                    setData(res.data?.centers)
                }
            })
    }, []);

    return (
        <div className="my-28">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm md:text-2xl">کلینیک و مراکز درمانی </h2>
                <Link className="text-gray-500 hover:text-violet-800 text-xs md:text-sm transition-all" href={'/center'}>مشاهده همه</Link>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-5 gap-3 mt-4">
                {
                    data.length > 0 && data.map((res, index) => {
                        return (
                            <div key={index} className="bg-white shadow-sm rounded min-h-64 text-center overflow-hidden p-2">
                                <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                                    <div className="relative h-36 w-full rounded overflow-hidden">
                                        <div className="flex flex-col items-center justify-center">
                                            {
                                                res?.image_id ?
                                                    <Image
                                                        alt="clinic-dr-zosha"
                                                        src={`${PICTURE_URL + res.image_id}`}
                                                        width={120}
                                                        height={120}
                                                    />
                                                    :
                                                    <div className="h-32 w-32 rounded-full text-slate-100 flex  items-center justify-center">
                                                        <Hospital size={90} strokeWidth={1} />
                                                    </div>
                                            }
                                        </div>
                                        <div className="bg-blue-900 opacity-10 absolute top-0 left-0 w-full h-full hover:opacity-0 transition-all"></div>
                                    </div>
                                    <div className="font-bold p-2 text-violet-700 overflow-hidden">
                                        <div className="text-sm">{res.name}</div>
                                        <div className="my-2">
                                            <div className="text-violet-900 bg-violet-100 rounded-full py-1 text-[9px]">{res.category}</div>
                                        </div>
                                        <div className="my-1">
                                            <div className="py-1 text-slate-800 text-[12px]">{res.phone}</div>
                                        </div>
                                        <div className="overflow-hidden text-ellipsis text-xs font-extralight text-gray-500 flex items-center justify-center mt-2 p-2">
                                            {res.city} {res.address}
                                        </div>
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