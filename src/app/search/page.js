import Image from "next/image";
import { Ordering } from "../components/partials/search/filters/Ordering";
import { AppointmentTypes } from "../components/partials/search/filters/appointment_types";
import { AvailableSchedule } from "../components/partials/search/filters/available_schedule";
import { Gender } from "../components/partials/search/filters/gender";
import { PriceLimit } from "../components/partials/search/filters/price_limit";
import { Services } from "../components/partials/search/filters/services";
import { Specialities } from "../components/partials/search/filters/specialities";
import { LocationIcon } from "../utils/icons/location";
import { Phone } from "../utils/icons/phone";
import { StarIcon } from "../utils/icons/star";
import { SparkleIcon } from "../utils/icons/sparkle";
import Link from "next/link";
import { Breadcrumbs } from "../constant/breadcrumbs";

export default function Search() {
    return (
        <div className="container mx-auto">
            <div className="my-2 md:my-5">
                <Breadcrumbs pages={[{ title: 'رزرو نوبت و مشاوره' }]} />
            </div>
            <div className="my-2 rounded-lg bg-white shadow p-4">
                <div className="font-bold text-gray-600">لیست پزشکان دکتر زوشا</div>
            </div>

            <div className="my-8 grid grid-cols-12 gap-8">

                <div className="col-span-3 sticky top-32" style={{ maxHeight: 'calc(100vh - 118px - 32px)' }}>
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

                <div className="col-span-9">
                    <div className="grid grid-cols-2 gap-8">

                        <div className="bg-white shadow rounded-xl p-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-start">
                                    <StarIcon />
                                    <span className="mr-1 mt-1 text-xs font-light">4.5</span>
                                </div>
                                <div>
                                    <SparkleIcon />
                                </div>

                            </div>
                            <div className="flex items-center justify-center w-full p-2">
                                <Image className="rounded-full mt-2" src="/assets/doctors/2.webp" width={60} height={60} />
                            </div>
                            <div className="text-center w-full font-bold mt-2">
                                نرگس صارمی
                            </div>
                            <div className="text-center w-full text-xs font-light mt-2 text-slate-500">
                                دکترای حرفه ای دندانپزشکی
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <LocationIcon small />
                                <span className="mr-1 text-xs ">تهران</span>
                            </div>

                            <div className="flex items-center justify-center mt-3 bg-slate-100 rounded-full w-full p-2">
                                <div className="text-xs mx-2 text-slate-600 font-light">نوبت حضوری</div>
                                <div className="text-xs mx-2 text-slate-600 font-light">مشاوره تلفنی</div>
                                <div className="text-xs mx-2 text-slate-300 font-light">مشاوره متنی</div>
                            </div>

                            <div className="mt-2">
                                <Link href="/" className="block text-center w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-900 transition-all duration-500 ease-in-out text-white">
                                    رزرو نوبت
                                </Link>
                            </div>

                        </div>

                        <div className="bg-white shadow rounded-xl p-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-start">
                                    <StarIcon />
                                    <span className="mr-1 mt-1 text-xs font-light">4.5</span>
                                </div>
                                <div>
                                    {/* <SparkleIcon /> */}
                                </div>

                            </div>
                            <div className="flex items-center justify-center w-full p-2">
                                <Image className="rounded-full mt-2" src="/assets/doctors/1.webp" width={60} height={60} />
                            </div>
                            <div className="text-center w-full font-bold mt-2">
                                دکتر نسیبه حسنی جبلی
                            </div>
                            <div className="text-center w-full text-xs font-light mt-2 text-slate-500">
                                تخصص بیماری‌های پوست (درماتولوژی)
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <LocationIcon small />
                                <span className="mr-1 text-xs ">تهران</span>
                            </div>

                            <div className="flex items-center justify-center mt-3 bg-slate-100 rounded-full w-full p-2">
                                <div className="text-xs mx-2 text-slate-600 font-light">نوبت حضوری</div>
                                <div className="text-xs mx-2 text-slate-600 font-light">مشاوره تلفنی</div>
                                <div className="text-xs mx-2 text-slate-300 font-light">مشاوره متنی</div>
                            </div>

                            <div className="mt-2">
                                <Link href="/dr/milad" className="block text-center w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-900 transition-all duration-500 ease-in-out text-white">
                                    رزرو نوبت
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}