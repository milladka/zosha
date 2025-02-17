"use client"
import AxiosInstance from "@/app/config/axiosInstance";
import { PICTURE_URL } from "@/app/constant";
import { turnStore } from "@/app/store/turnHandleStore";
import { LoadingIcon } from "@/app/utils/icons/loading";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from 'moment-jalaali';
moment.locale('fa');
moment.loadPersian({ dialect: 'persian' });

export default function reservePage({ params }) {
    const { token } = turnStore();

    const [data, setData] = useState({
        firstLoading: true,
        data: ''
    })

    useEffect(() => {

        AxiosInstance.get(`/user/get_reserve/${params.id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                if (!res.data.error) {
                    setData((prev) => ({ ...prev, data: res.data.data, firstLoading: false }))
                }
            })
    }, [params.id])

    let shamsiDate = (miladiDate) => miladiDate ? moment(miladiDate, "YYYY-MM-DD").format("jYYYY/jMM/jDD") : '';
    let formattedTime = (time) => time ? time.split(":").slice(0, 2).join(":") : '';

    if (data.firstLoading) {
        return <div className="container mx-auto p-2">
            <div className="p-2 md:px-48 pt-2 md:pt-10 pb-14">
                <div className="bg-white p-4 rounded-lg shadow-lg flex justify-center items-center min-h-96">
                    <LoadingIcon width={'w-12'} />
                </div>
            </div>
        </div>;
    }

    return (
        <div className="container mx-auto p-2">
            <div className="px-2 lg:px-52 pt-5 lg:pt-16 pb-16">
                <div className="bg-white p-2 lg:p-8 rounded-lg ">
                    <div className="flex flex-col text-green-600 items-center justify-center">
                        <CircleCheck />
                        <div className="text-green-600 text-center mt-2 font-bold">نوبت شما با موفقیت ثبت شد</div>
                    </div>
                    <div className="mt-5 border-gray-200 border p-4 rounded-lg">

                        <div className="flex items-center justify-between flex-col">

                            <div className="flex-none ml-2">
                                <Image className="rounded-full mt-2" src={PICTURE_URL + data.data?.doctorProfile} width={90} height={90} />
                            </div>

                            <div className="flex-1 text-center mt-4">
                                <div className="font-bold text-lg text-violet-700">دکتر {data.data?.doctorName} {data.data?.doctorFamily}</div>
                                <div className="mt-3 text-slate-500 text-sm">{data.data?.bio}</div>
                                <div className="mt-2 text-slate-500 text-sm">
                                    <span className="font-bold ml-1">نظام پزشکی</span>
                                    <span>{data.data?.medical_code}</span>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center justify-between mt-5 text-xs text-slate-700">
                            <div>زمان تقریبی نوبت</div>
                            <div className="font-bold">
                                {shamsiDate(data.data?.date)} {formattedTime(data.data?.time)}
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>کد پیگیری</div>
                            <div className="font-bold">
                                {data.data?.id}
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>تلفن تماس</div>
                            <div className="font-bold">
                                {data.data?.doctorPhone}
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>آدرس مرکز</div>
                            <div className="font-bold">
                                {data.data?.city}-{data.data?.address}
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>نام بیمار</div>
                            <div className="font-bold">
                                {data.data?.patientName} {data.data?.patientFamily}
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>تلفن بیمار</div>
                            <div className="font-bold"> {data.data?.patientPhone}</div>
                        </div>
                        <div className="mt-5">
                            <button className="mt-2 w-full py-3 rounded border-red-600 text-center outline-none border text-red-600 text-xs font-bold">لغو نوبت</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}