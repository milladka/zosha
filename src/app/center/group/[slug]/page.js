"use client";

import AxiosInstance from "@/app/config/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/constant/breadcrumbs";
import Image from "next/image";
import { PICTURE_URL } from "@/app/constant";

export default function GroupCenterPage() {
    const { slug } = useParams();
    const [group, setGroup] = useState(null);
    const [detil, setDetail] = useState([]);

    useEffect(() => {
        AxiosInstance.get(`/front/get_center_group/${slug}`)
            .then((res) => {
                setGroup(res.data.group);
                setDetail(res.data.detail);
            })
            .catch((err) => {
                console.error("خطا در دریافت اطلاعات:", err);
            });
    }, []);

    return (
        <div className="container mx-auto p-2">
            <div className="my-2 md:my-5">
                <Breadcrumbs pages={[{ title: 'مراکز درمانی', url: '/center/' }, { title: group?.name }]} />
            </div>
            <div className="p-2 md:px-48 pt-2 md:pt-5 pb-14">
                <div className="bg-white p-4 lg:p-7 rounded-lg shadow-sm">
                    <h1 className="font-bold text-sm lg:text-xl text-violet-950">{group?.name || "در حال بارگذاری..."}</h1>
                </div>
                <div className="mt-5">
                    {
                        detil.length > 0 && detil.map(item => {
                            if (item?.name) {
                                return (
                                    <div key={item.id} className="bg-white p-2 shadow-sm mb-2 rounded">
                                        <div className="flex flex-col items-center lg:items-start lg:flex-row">
                                            <div className="flex items-center justify-center">
                                                <Image className="rounded-full mt-2" alt="دکتر زوشا" src={PICTURE_URL + item?.image_id} width={90} height={90} />

                                            </div>
                                            <div className="p-1 flex items-start justify-center flex-col gap-2">
                                                <div className="font-bold">{item?.name}</div>
                                                <div className="text-slate-500 text-sm">تلفن: {item?.phone} </div>
                                                <div className="text-slate-500 text-sm">آدرس: {item?.city} - {item?.address} </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }

                        })
                    }
                </div>
            </div>

        </div>
    );
}
