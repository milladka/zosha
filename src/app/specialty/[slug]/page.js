"use client";

import AxiosInstance from "@/app/config/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/constant/breadcrumbs";
import { PICTURE_URL } from "@/app/constant";
import Link from "next/link";
import { LocationIcon } from "@/app/utils/icons/location";
import { LoadingIcon } from "@/app/utils/icons/loading";

export default function Page() {
    const { slug } = useParams();
    const [specialty, setSpecialty] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AxiosInstance.get(`/utility/get_specialty_show/${slug}`)
            .then((res) => {
                setSpecialty(res.data.data);
                setDoctors(res.data.doctors);
                setLoading(false);
            })
            .catch((err) => {
                console.error("خطا در دریافت اطلاعات:", err);
            });
    }, []);

    return (
        <div className="container mx-auto p-2">
            <div className="my-2 md:my-5">
                <Breadcrumbs pages={[{ title: 'تخصص‌ها', url: '/specialties/' }, { title: specialty?.full_name }]} />
            </div>
            <div className="p-2">
                <div className="bg-white p-4 lg:p-7 rounded-lg shadow-sm">
                    <h1 className="font-bold text-sm lg:text-xl text-violet-950">{specialty?.full_name || "در حال بارگذاری..."}</h1>
                    {specialty?.full_name && (
                        <p className="text-slate-500 text-xs leading-7 p-2">
                            {specialty?.full_name} یکی از شاخه‌های مهم علم پزشکی است که به بررسی، تشخیص و درمان بیماری‌های مربوط به {specialty?.name} می‌پردازد. پزشکان متخصص این حوزه با استفاده از روش‌های تشخیصی پیشرفته و به‌روز، خدمات درمانی متنوعی را ارائه می‌دهند. اگر به دنبال {specialty?.name} در ایران هستید، در این صفحه لیست پزشکان، کلینیک‌ها و مراکز درمانی مرتبط با این تخصص را مشاهده کرده و بهترین گزینه را برای دریافت خدمات پزشکی انتخاب کنید.
                        </p>
                    )
                    }
                </div>
            </div>
            <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-3">

                {

                    loading ?

                        <div className="col-span-2 bg-white p-2 text-center flex items-center justify-center">
                            <LoadingIcon width={'w-8'} />
                        </div>

                        :

                        doctors && doctors.length > 0 ? doctors.map((item, index) => {
                            return (
                                <div key={index} className="bg-white shadow rounded-xl p-3">
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
    );
}
