"use client"
import { MAG_URL } from "@/app/config";
import AxiosInstance from "@/app/config/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RecentMag() {

    const [data, setData] = useState([]);

    useEffect(() => {
        AxiosInstance.get(`${MAG_URL}/wp-json/wp/v2/posts?_fields=id,slug,excerpt,title,featured_media_src_url,featured_media,featured_media_src_url&per_page=4`)
            .then(res => {
                setData(res.data);
            })
    })

    return (
        <div className="my-10 lg:my-28">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm md:text-2xl">آخرین مطالب مجله‌ سلامت</h2>
                <Link className="text-gray-500 hover:text-violet-800 text-xs md:text-sm transition-all" href={'/mag'}>مشاهده همه مطالب</Link>
            </div>
            <div className="relative mt-4 w-full px-5 min-h-80">
                <div className="swiper-button image-swiper-button-next-1 left-2 absolute text-violet-500 shadow-lg shadow-violet-100 flex items-center justify-center cursor-pointer w-10 h-10 rounded-full z-[40] bg-white top-[50%]">
                    <ChevronLeft />
                </div>
                <div className="swiper-button image-swiper-button-prev-1 right-2 absolute text-violet-500 shadow-lg shadow-violet-100 flex items-center justify-center cursor-pointer w-10 h-10 rounded-full z-[40] bg-white top-[50%]">
                    <ChevronRight />
                </div>
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        1160: {
                            width: 1160,
                            slidesPerView: 3,
                        },
                    }}
                    slidesPerView={1}
                    dir="rtl"
                    navigation={{
                        nextEl: ".image-swiper-button-next-1",
                        prevEl: ".image-swiper-button-prev-1",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Navigation]}
                    className="mySwiper">
                    {
                        data.length > 0 && data.map((item) => {
                            return (
                                <SwiperSlide key={item.id} className="h-[320px] lg:h-[350px]">
                                    <div className="bg-white shadow-sm rounded h-[320px] lg:h-[350px] text-center p-2">
                                        <div className="relative h-52 w-full rounded overflow-hidden">
                                            <div className="relative w-full h-52">
                                                <Image src={item?.featured_media_src_url} alt="clinic-dr-zosha" layout="fill" />
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <Link className="flex items-center flex-col" href={`/mag/${item?.slug}`}>
                                                <div className="text-xs leading-6 font-bold hover:text-violet-800 transition-all">{item?.title?.rendered}</div></Link>
                                            <p className="text-slate-400 leading-5 text-xs mt-2" dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    )
}