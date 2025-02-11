"use client";

import AxiosInstance from "@/app/config/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/constant/breadcrumbs";

export default function Page() {
    const { slug } = useParams();
    const [specialty, setSpecialty] = useState(null);

    useEffect(() => {
        AxiosInstance.get(`/utility/get_specialty_show/${slug}`)
            .then((res) => {
                setSpecialty(res.data.data);
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
            <div className="p-2 md:px-48 pt-2 md:pt-5 pb-14">
                <div className="bg-white p-4 lg:p-7 rounded-lg shadow-sm">
                    <h1 className="font-bold text-sm lg:text-xl text-violet-950">{specialty?.full_name || "در حال بارگذاری..."}</h1>
                </div>
            </div>
        </div>
    );
}
