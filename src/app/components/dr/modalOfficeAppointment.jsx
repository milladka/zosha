'use client'
import { turnStore } from "@/app/store/turnHandleStore";
import moment from 'moment-jalaali';
import 'moment/locale/fa';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import AxiosInstance from "@/app/config/axiosInstance";
import { LoadingIcon } from "@/app/utils/icons/loading";
import { toast } from "react-toastify";
moment.locale('fa');
moment.loadPersian({ dialect: 'persian' });

export function ModalOfficeAppointment() {
    const { dr, doctorId, modal, setModal, logined, user, token } = turnStore();
    const router = useRouter();
    const [times, setTimes] = useState([]);
    const [loadTime, setLoadTime] = useState(false);

    const days = (num = 0) => {
        return {
            jalali: moment().add(num, 'days').format('LL'),
            gregorian: moment().add(num, 'days').locale('en').format('YYYY-MM-DD')
        };
    };

    const [selectDay, setSelectDay] = useState(0);
    const [selectTime, setSelectTime] = useState('');

    useEffect(() => {
        if (days(selectDay)?.gregorian) {
            setLoadTime(true);
            setSelectTime('');
            AxiosInstance.postForm('/front/get_appointments_by_date', {
                doctor_id: doctorId,
                appointment_date: days(selectDay)?.gregorian
            })
                .then(res => {
                    setTimes(res.data.data);
                    setLoadTime(false);
                })
        }
    }, [selectDay, doctorId]);

    let formattedTime = (time) => time ? time.split(":").slice(0, 2).join(":") : '';

    const receipt = () => {
        if (!logined) {
            toast.error('شما باید وارد شوید')
        } else {
            if(!user?.firstname){
                toast.error('لطفا پروفایل خود را تکمیل کنید');
                router.push('/profile')
                return
            }

            if (user && user?.id && selectTime?.available_time) {
                AxiosInstance.postForm('/user/appointment_reservation',
                    {
                        reservation_time: selectTime.available_time,
                        appointment_id: selectTime.appointment_id,
                        patient_id: user?.id
                    },
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                )
                    .then(res => {
                        if (!res.data.error) {
                            toast.success('نوبت شما با موفقیت ثبت شد');
                            router.push('/reservations')
                        }else{
                            toast.error(res.data.message);
                        }
                    })
            }
        }

    }

    return (
        <div className={`${modal ? 'flex' : 'hidden'} bg-modal-office overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full" dir="rtl">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700" dir="rtl">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            انتخاب نوبت برای دکتر {dr}
                        </h3>
                        <button onClick={() => setModal()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">بستن</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-3 space-y-10">
                        <div className="flex items-center justify-center flex-wrap">
                            {
                                Array(7).fill().map((d, i) => (
                                    <button key={i} onClick={() => setSelectDay(i)} className={`${selectDay == i ? 'border-violet-500 text-violet-800 bg-violet-100' : 'border-slate-300 text-slate-500'} w-20 h-20 rounded border p-2 mx-1`}>{days(i).jalali}</button>
                                ))
                            }
                        </div>
                        <div className="flex items-center justify-center mt-10 flex-wrap">
                            {

                                loadTime ? (<div className="py-8">
                                    <LoadingIcon width={'w-8'} />
                                </div>) : (
                                    times && times.length > 0 ? times.map((item, index) => {
                                        return <button key={index} disabled={item.is_available == 0} onClick={() => setSelectTime(item)} className={`${item.is_available == 0 && 'opacity-50'} ${selectTime.available_time == item.available_time ? 'border-violet-500 text-violet-800 bg-violet-100' : 'border-slate-300 text-slate-500'} w-20 h-10 rounded border p-2 m-1`}>{formattedTime(item.available_time)}</button>
                                    })
                                        :
                                        <div className="py-8">
                                            <div className="text-xs text-center font-xs text-slate-400">نوبتی برای این روز توسط پزشک تعریف نشده است</div>
                                        </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button disabled={!selectTime} onClick={() => receipt()} data-modal-hide="static-modal" type="button" className={`${!selectTime ? 'bg-slate-200 hover:bg-slate-300 focus:ring-slate-300' : 'bg-violet-700 hover:bg-violet-800 focus:ring-violet-300'} text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>ثبت نوبت</button>
                    </div>
                </div>
            </div>
        </div>
    )
}