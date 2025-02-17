import Image from "next/image";
import { CheckIcon } from "../utils/icons/check";


export default function Receipt() {
    return (
        <div className="container mx-auto p-2">
            <div className="px-2 lg:px-52 pt-5 lg:pt-16 pb-16">
                <div className="bg-white p-2 lg:p-8 rounded-lg ">
                    <div className="flex flex-col items-center justify-center">
                        <CheckIcon />
                        <div className="text-green-600 text-center mt-2 font-bold">نوبت شما با موفقیت ثبت شد</div>
                    </div>
                    <div className="mt-5 border-gray-200 border p-4 rounded-lg">

                        <div className="flex items-center justify-between flex-col">

                            <div className="flex-none ml-2">
                                <Image className="rounded-full mt-2" src="/assets/doctors/1.webp" width={90} height={90} />
                            </div>

                            <div className="flex-1 text-center">
                                <div className="font-bold text-lg text-violet-700">دکتر نسیبه حسنی جبلی</div>
                                <div className="mt-3 text-slate-500 text-sm">متخصص زنان و زایمان</div>
                                <div className="mt-2 text-slate-500 text-sm">
                                    <span className="font-bold ml-1">نظام پزشکی</span>
                                    <span>30984</span>
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center justify-between mt-5 text-xs text-slate-700">
                            <div>زمان تقریبی نوبت</div>
                            <div className="font-bold">1403/10/03 16:00</div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>کد پیگیری</div>
                            <div className="font-bold">16817322688</div>
                        </div>


                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>نام مرکز</div>
                            <div className="font-bold">مطب پزشک</div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>تلفن تماس</div>
                            <div className="font-bold">021-46482002</div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>آدرس مرکز</div>
                            <div className="font-bold">تهران - خیابان شریعتی، روبروی بیمارستان دکتر علی شریعتی، ساختمان شریعتی طبقه سوم، واحد 31</div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>نام بیمار</div>
                            <div className="font-bold">میلاد کریمی</div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-xs text-slate-700">
                            <div>تلفن بیمار</div>
                            <div className="font-bold">09378523029</div>
                        </div>
                        <div className="mt-5">
                            <button className="mt-2 w-full py-3 rounded bg-green-600 text-center outline-none border-none text-white text-xs font-bold">دانلود رسید</button>
                            <button className="mt-2 w-full py-3 rounded border-red-600 text-center outline-none border text-red-600 text-xs font-bold">لغو نوبت</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}