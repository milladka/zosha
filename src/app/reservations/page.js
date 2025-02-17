"use client"
import { useEffect, useState } from "react";
import { turnStore } from "../store/turnHandleStore";
import { useRouter } from "next/navigation";
import AxiosInstance from "../config/axiosInstance";
import { LoadingIcon } from "../utils/icons/loading";
import moment from 'moment-jalaali';
import Link from "next/link";
moment.locale('fa');
moment.loadPersian({ dialect: 'persian' });

export default function ReservationsPage() {
    const [data, setData] = useState({
        firstLoading: true,
        reservations: []
    })
    const { token } = turnStore();
    const router = useRouter();
    useEffect(() => {
        if (!token) {
            router.push("/");
        } else {
            AxiosInstance.get('/user/get_all_reservation', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(res => {
                    if (!res.data.error) {
                        setData((prev) => ({ ...prev, reservations: res.data.data, firstLoading: false }))
                    }
                })
        }
    }, []);

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
            <div className="p-2 lg:px-48 pt-5 lg:pt-10 pb-14">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    {
                        data.reservations && data.reservations.length > 0 ?


                            data.reservations.map((item, index) => {
                                return (
                                    <div key={index} className={`${item.is_past == 1 ? 'opacity-40' : ''}  hover:opacity-100 grid grid-cols-1 lg:grid-cols-4 gap-3 mb-2 border p-2 rounded border-slate-200 transition-all`}>
                                        <div className="space-y-1">
                                            <label className="block text-xs text-slate-400 text-center lg:text-start">نام پزشک</label>
                                            <div className="text-center lg:text-start">
                                                دکتر {item.doctor_name}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block text-xs text-slate-400 text-center lg:text-start">زمان</label>
                                            <div className="text-center lg:text-start">
                                                {shamsiDate(item.appointment_date)} - {formattedTime(item.reservation_time)}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block text-xs text-slate-400 text-center lg:text-start">شماره پیگیری نوبت</label>
                                            <div className="text-center lg:text-start">
                                                {item.reserve_id}
                                            </div>
                                        </div>
                                        <div className="space-y-1 flex items-center justify-center">
                                            <Link className="text-center border text-sm w-full rounded text-violet-500 hover:text-white p-2 border-violet-500 hover:bg-violet-500 transition-all" href={`/reserve/${item.reserve_id}`} >جزئیات نوبت</Link>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="p-3 text-center">
                                <div className="text-slate-500 text-xs">شما نوبتی ثبت نکرده اید</div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )

}