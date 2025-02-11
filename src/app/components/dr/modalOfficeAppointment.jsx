import { turnStore } from "@/app/store/turnHandleStore";
import moment from 'moment-jalaali';
import 'moment/locale/fa';
import { useState } from "react";
import { permanentRedirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export function ModalOfficeAppointment() {
    const { dr, modal, setModal } = turnStore();
    const router = useRouter()
    moment.locale('fa');
    moment.loadPersian({ dialect: 'persian' });
 

    const days = (num) => {
        return (num || num != 0) ? moment().add(num, 'days').format('LL') : moment().format('LL');
    }

    const [selectDay, setSelectDay] = useState(0);
    const [selectTime, setSelectTime] = useState(1);


    const times = (i) => {
        if (i > 0) {
            const start = moment();
            const remainder = (i * 15) - (start.minute() % (i * 30));
            const dateTime = moment(start)
                .add(remainder, "minutes")
                .format("HH:mm");
            return dateTime;
        }
    }

    const receipt = () => {
        router.push('/receipt')
    }



    return (
        <div className={`${modal ? 'flex' : 'hidden'} bg-modal-office overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full" dir="rtl">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700" dir="rtl">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            انتخاب نوبت برای {dr}
                        </h3>
                        <button onClick={() => setModal()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">بستن</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-3 space-y-10">
                        <div className="flex items-center justify-center flex-wrap">
                            {
                                Array(7).fill().map((d, i) => (
                                    <button key={i} onClick={() => setSelectDay(i)} className={`${selectDay == i ? 'border-violet-500 text-violet-800 bg-violet-100' : 'border-slate-300 text-slate-500'} w-20 h-20 rounded border p-2 mx-1`}>{days(i)}</button>
                                ))
                            }
                        </div>
                        <div className="flex items-center justify-center mt-10 flex-wrap">
                            {

                                Array(10).fill().map((d, i) => (
                                    <button key={i} onClick={() => setSelectTime(i + 1)} className={`${selectTime == i + 1 ? 'border-violet-500 text-violet-800 bg-violet-100' : 'border-slate-300 text-slate-500'} w-20 h-10 rounded border p-2 m-1`}>{times(i + 1)}</button>
                                ))

                            }
                        </div>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={() => receipt()} data-modal-hide="static-modal" type="button" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">ثبت نوبت</button>
                    </div>
                </div>
            </div>
        </div>
    )
}