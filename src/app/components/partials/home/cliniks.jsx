"use client"
import AxiosInstance from "@/app/config/axiosInstance";
import { PICTURE_URL } from "@/app/constant";
import { ChevronLeft, ChevronRight, Hospital } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
        <div className="my-10 lg:my-28">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm md:text-2xl">کلینیک و مراکز درمانی </h2>
                <Link className="text-gray-500 hover:text-violet-800 text-xs md:text-sm transition-all" href={'/center'}>مشاهده همه</Link>
            </div>
            <div className="relative mt-4 w-full px-5 min-h-80">
                <div className="swiper-button image-swiper-button-next left-2 absolute text-violet-500 shadow-lg shadow-violet-100 flex items-center justify-center cursor-pointer w-10 h-10 rounded-full z-40 bg-white top-[50%]">
                    <ChevronLeft />
                </div>
                <div className="swiper-button image-swiper-button-prev right-2 absolute text-violet-500 shadow-lg shadow-violet-100 flex items-center justify-center cursor-pointer w-10 h-10 rounded-full z-40 bg-white top-[50%]">
                    <ChevronRight />
                </div>
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        1160: {
                            width: 1160,
                            slidesPerView: 3,
                        },
                        768: {
                            spaceBetween: 25,
                            width: 768,
                            slidesPerView: 3,
                        }
                    }}
                    slidesPerView={1}
                    dir="rtl"
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Navigation]}
                    className="mySwiper">
                    {
                        data.length > 0 && data.map((res, index) => {
                            return (
                                <SwiperSlide key={index} className="min-h-80">
                                    <div className="bg-white shadow-sm rounded min-h-80 text-center overflow-hidden p-2">
                                        <div className="flex items-center flex-col hover:text-violet-800 transition-all">
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
                                                <Link href={`/center/${res.slug}`} className="text-sm">{res.name}</Link>
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}