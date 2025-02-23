"use client"
import { AppointmentTypes } from "../partials/search/filters/appointment_types";
import { AvailableSchedule } from "../partials/search/filters/available_schedule";
import { Gender } from "../partials/search/filters/gender";
import { PriceLimit } from "../partials/search/filters/price_limit";
import { Services } from "../partials/search/filters/services";
import { Specialities } from "../partials/search/filters/specialities";
import { StarIcon } from "@/app/utils/icons/star";
import { SparkleIcon } from "@/app/utils/icons/sparkle";
import Link from "next/link";
import { Breadcrumbs } from "@/app/constant/breadcrumbs";
import { LikeIcon } from "@/app/utils/icons/like";
import { useEffect, useState } from "react";
import AxiosInstance from "@/app/config/axiosInstance";
import { PICTURE_URL } from "@/app/constant";
import { useSearchParams } from 'next/navigation'
import { LoadingIcon } from "@/app/utils/icons/loading";
import { Ordering } from "../partials/search/filters/Ordering";
import { LocationIcon } from "@/app/utils/icons/location";


export default function SearchComponent() {
    const searchParams = useSearchParams();
    const [city, setCity] = useState('');
    const [query, setQuery] = useState('');
    const [data, setData] = useState({
        loading: true,
        doctors: []
    })
    useEffect(() => {
        setCity(searchParams.get('city') || '');
        setQuery(searchParams.get('query') || '');
    }, [searchParams]);

    useEffect(() => {
        const queryString = [
            city ? `city=${city}` : '',
            query ? `query=${query}` : ''
        ].filter(Boolean).join('&');

        AxiosInstance.get(`/front/get_doctors${queryString ? '?' + queryString : ''}`)
            .then(res => {
                if (!res.data.error) {
                    setData({ doctors: res.data.data, loading: false });
                }
            });
    }, [city, query]);

    return (
        <div className="container mx-auto p-2">

            <div className="my-5 md:my-8">
                <Breadcrumbs pages={[{ title: 'رزرو نوبت و مشاوره' }]} />
            </div>

            <div className="my-2 rounded-lg bg-white shadow p-4">
                <div className="font-bold text-gray-600">لیست پزشکان دکتر زوشا</div>
            </div>

            <div className="my-8 grid grid-cols-12 gap-8">

                <div className="hidden lg:block col-span-3 sticky top-32" style={{ maxHeight: 'calc(100vh - 118px - 32px)' }}>
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-3">
                            <div className="font-bold">فیلتر‌ها</div>
                        </div>
                        <div>
                            <Ordering />
                            <Specialities />
                            <Services />
                            <AvailableSchedule />
                            <AppointmentTypes />
                            <Gender />
                            <PriceLimit />
                        </div>
                    </div>

                </div>

                <div className="col-span-12 lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {

                            data.loading ?

                                <div className="col-span-2 bg-white p-2 text-center flex items-center justify-center">
                                    <LoadingIcon width={'w-8'} />
                                </div>

                                :

                                data?.doctors && data?.doctors.length > 0 ? data?.doctors.map((item, index) => {
                                    return (
                                        <div key={index} className="bg-white shadow rounded-xl p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center justify-center">
                                                    <div className="flex items-center justify-start">
                                                        <StarIcon />
                                                        <span className="mr-1 mt-1 text-xs font-light">4.5</span>
                                                    </div>
                                                    <div className="flex items-center justify-start mr-2">
                                                        <LikeIcon />
                                                        <span className="mr-1 mt-1 text-xs font-light">97% پیشنهاد کاربران</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <SparkleIcon />
                                                </div>

                                            </div>


                                            <div className="flex flex-col items-center w-full my-3">
                                                <label className="relative w-24 h-24 rounded-full overflow-hidden">
                                                    <img src={PICTURE_URL + item.profile_image} alt="Doctor Profile" className="w-full h-full object-cover" />
                                                </label>
                                            </div>

                                            <div className="text-center w-full font-bold mt-2">
                                                {item.first_name} {item.last_name}
                                            </div>
                                            <div className="text-center w-full text-xs font-light mt-2 text-slate-500">
                                                {item.bio}
                                            </div>
                                            <div className="flex items-center justify-center mt-2">
                                                <LocationIcon small />
                                                <span className="mr-1 text-xs">
                                                    {item.city}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-center mt-3 bg-slate-100 rounded-full w-full p-2">
                                                <div className="text-xs mx-2 text-slate-600 font-light">نوبت حضوری</div>
                                            </div>

                                            <div className="mt-2">
                                                <Link href={`/dr/${item.slug}`} className="block text-center w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-900 transition-all duration-500 ease-in-out text-white">
                                                    رزرو نوبت
                                                </Link>
                                            </div>

                                        </div>
                                    )
                                })
                                    :
                                    (
                                        <div className="col-span-2 text-center p-3 text-xs bg-white rounded shadow">
                                            پزشکی برای جستجوی شما پیدا نشد
                                        </div>
                                    )
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}