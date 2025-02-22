'use client'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PopularTakhasos() {
    return (
        <div className="my-10 lg:my-28">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm md:text-2xl">پربازدیدترین تخصص‌ها</h2>
                <Link className="text-gray-500 hover:text-violet-800 text-xs md:text-sm transition-all" href={'/specialties/'}>مشاهده همه تخصص‌ها</Link>
            </div>
            <div className="relative mt-4 w-full px-5 lg:px-10">
                <div className="swiper-button image-swiper-button-next-2 left-2 absolute text-violet-500 shadow-lg shadow-violet-100 flex items-center justify-center cursor-pointer w-10 h-10 rounded-full z-[40] bg-white top-[50%]">
                    <ChevronLeft />
                </div>
                <div className="swiper-button image-swiper-button-prev-2 right-2 absolute text-violet-500 shadow-lg shadow-violet-100 flex items-center justify-center cursor-pointer w-10 h-10 rounded-full z-[40] bg-white top-[50%]">
                    <ChevronRight />
                </div>
                <Swiper
                    spaceBetween={10}
                    breakpoints={{
                        1160: {
                            width: 1160,
                            slidesPerView: 4,
                        },
                    }}
                    slidesPerView={1}
                    dir="rtl"
                    navigation={{
                        nextEl: ".image-swiper-button-next-2",
                        prevEl: ".image-swiper-button-prev-2",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide className="h-48 text-center">
                        <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/specialty/dermatologist">
                            <Image className="rounded overflow-hidden" alt="drzosha" src={'/assets/one.jpeg'} height={160} width={160} />
                            <div className="bg-white py-2 font-bold w-40">پوست و مو</div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="h-48 text-center">
                        <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/specialty/face-plastic-surgeon">
                            <Image className="rounded overflow-hidden" alt="drzosha" src={'/assets/two.jpeg'} height={150} width={150} />
                            <div className="bg-white py-2 font-bold w-40">جراح پلاستیک و زیبایی</div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="h-48 text-center">
                        <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/specialty/dentist">
                            <Image className="rounded overflow-hidden" alt="drzosha" src={'/assets/three.jpeg'} height={150} width={150} />
                            <div className="bg-white py-2 font-bold w-40">دندانپزشکی زیبایی</div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="h-48 text-center">
                        <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/specialty/ent">
                            <Image className="rounded overflow-hidden" alt="drzosha" src={'/assets/four.jpeg'} height={150} width={150} />
                            <div className="bg-white py-2 font-bold w-40">گوش، حلق، بینی</div>
                        </Link>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}