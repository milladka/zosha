import { SectionAppointment } from "@/app/components/dr/sectionAppointment";
import AxiosInstance from "@/app/config/axiosInstance";
import { PICTURE_URL } from "@/app/constant";
import { Breadcrumbs } from "@/app/constant/breadcrumbs";
import { LikeIcon } from "@/app/utils/icons/like";
import { ShareIcon } from "@/app/utils/icons/share";
import { StarIcon } from "@/app/utils/icons/star";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation'

export default async function Docotor({ params }) {

    let doctorData;
    let doctorSpeciatities = [];
    await AxiosInstance.get(`/front/get_doctor/${params.slug}`)
        .then(res => {
            if (res.data.error) {
                return notFound()
            }
            doctorData = res.data.data;
            doctorSpeciatities = res.data.specialities;
        })

    return (
        <>
            <div className="container mx-auto my-7 p-3">
                <div className="mb-5">
                    <Breadcrumbs pages={[{ title: 'رزرو نوبت و مشاوره', url: '/search' }, { title: `دکتر ${doctorData?.first_name} ${doctorData?.last_name}` }]} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

                    <div className="col-span-1 lg:col-span-8">

                        <div className="bg-white rounded-lg p-6 shadow-sm">

                            <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                                <div className="lg:col-span-5 flex flex-col lg:flex-row items-center justify-between lg:justify-center">

                                    <div className="flex-none ml-2">
                                        <Image className="rounded-full mt-2" alt={doctorData?.first_name + doctorData?.last_name} src={PICTURE_URL + doctorData?.profile_image} width={90} height={90} />
                                    </div>

                                    <div className="flex-1">
                                        <div className="font-bold text-lg text-violet-700 text-center lg:text-start mt-2 lg:mt-0">دکتر  {doctorData?.first_name} {doctorData?.last_name} </div>
                                        <div className="mt-3 text-slate-500 text-sm text-center lg:text-start">{doctorData?.bio}</div>
                                        <div className="mt-2 text-slate-500 text-sm text-center lg:text-start">
                                            <span className="font-bold ml-1">نظام پزشکی</span>
                                            <span>{doctorData?.medical_code}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-span-7 flex-col hidden lg:flex" >
                                    <div className="flex-1">
                                        <div className="flex items-center justify-end">
                                            <div className="flex items-center justify-start">
                                                <StarIcon />
                                                <span className="mr-1 mt-1 text-xs font-light">4.5</span>
                                            </div>
                                            <div className="flex items-center justify-start mr-2">
                                                <LikeIcon />
                                                <span className="mr-1 mt-1 text-xs font-light">97% پیشنهاد کاربران</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-none flex items-center justify-end">
                                        <button>
                                            <ShareIcon />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-12 mt-5 lg:mt-0">
                                    <div className="flex items-start justify-start flex-col">
                                        <div className="flex items-center justify-start mb-2 text-slate-500">
                                            <MapPin size={15} />
                                            <div className="mr-1 text-xs">
                                                {doctorData?.city} - {doctorData?.address}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start mb-2 text-slate-500">
                                            <Phone size={15} />
                                            <div className="mr-1 text-xs">
                                                {doctorData?.phones}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={`bg-white rounded-lg shadow-sm mt-3 lg:mt-5 leading-7 text-slate-500 text-sm overflow-hidden`}>
                            <div className={`p-6 h-auto`}>
                                <div style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: doctorData?.content }}></div>
                            </div>
                        </div>

                        {/* <div className="bg-white rounded-lg shadow-sm mt-8 p-6">
                            <div className="font-bold text-slate-700 py-3">نظرات کاربران</div>
                            <div className="mt-2">
                                <div className="rounded-md border p-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-bold text-xs">کاربر دکتر زوشا</div>
                                            <div className="text-xs text-slate-400 mt-2">1 خرداد 1403</div>

                                        </div>
                                        <div>
                                            <div className="flex items-center justify-end">
                                                <StarIcon />
                                                <span className="mr-1 mt-1 text-xs font-light">4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-slate-500">
                                        <p className="text-sm">خیلی مهربون وصبور هستن عالی</p>
                                    </div>
                                </div>
                                <div className="rounded-md border p-3 mt-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-bold text-xs">آرزو</div>
                                            <div className="text-xs text-slate-400 mt-2">1 خرداد 1403</div>

                                        </div>
                                        <div>
                                            <div className="flex items-center justify-end">
                                                <StarIcon />
                                                <span className="mr-1 mt-1 text-xs font-light">4.5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-slate-500">
                                        <p className="text-sm">بسیار محیط آرام و تمیز خانم دکتر خیلی با تجربه و مهربان هستن و خوب برات توضیح میده</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>

                    <div className="col-span-1 lg:col-span-4">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="mb-5 font-bold">
                                پلن های نوبت و مشاوره
                            </div>
                            <div>

                                <SectionAppointment data={doctorData} />
                                {/* <div className="opacity-60 hover:opacity-100 transition-all mt-4 border rounded-lg p-2 border-violet-400 bg-violet-100 bg-opacity-25">

                                    <div className="flex items-center justify-between">

                                        <div className="flex-none p-1">
                                            <MessageIconInApp />
                                        </div>

                                        <div className="flex-1 p-2">

                                            <div className="flex items-center justify-between">
                                                <div className="font-bold">مشاوره متنی</div>
                                                <div className="font-bold text-violet-600">
                                                    161,500 تومان
                                                </div>
                                            </div>
                                            <div className="mt-3 text-slate-400 text-xs">
                                                پاسخ‌دهی کمتر از 30 دقیقه
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-2 w-full py-2 rounded bg-violet-600 text-center outline-none border-none text-white text-xs font-bold">دریافت مشاوره متنی </button>


                                </div> */}

                                {/* <div className="opacity-60 hover:opacity-100 transition-all mt-4 border rounded-lg p-2 border-slate-300 bg-slate-100 bg-opacity-25">

                                    <div className="flex items-center justify-between">

                                        <div className="flex-none p-1">
                                            <PhoneIconInApp />
                                        </div>

                                        <div className="flex-1 p-2">

                                            <div className="flex items-center justify-between">
                                                <div className="font-bold">مشاوره تلفنی</div>
                                                <div className="font-bold text-slate-600">
                                                    165,000 تومان
                                                </div>
                                            </div>
                                            <div className="mt-3 text-slate-400 text-xs">
                                                5 دقیقه مکالمه تلفنی با دکتر
                                            </div>
                                        </div>

                                    </div>
                                    <button className="mt-2 w-full py-2 rounded bg-slate-600 text-center outline-none border-none text-white text-xs font-bold">دریافت مشاوره تلفنی </button>


                                </div> */}
                            </div>
                        </div>

                        <div className="mt-3 lg:mt-5  bg-white rounded shadow-sm p-6">
                            <div className="">تخصص های دکتر {doctorData?.first_name +' '+ doctorData?.last_name}</div>
                            <div className="mt-2">
                                {
                                    doctorSpeciatities.map(item => {
                                        return (
                                            <div className="mb-2" key={item.id}>
                                                <Link className="w-full text-sm p-1 text-violet-700 hover:text-violet-900 transition-all" href={`/specialty/${item.slug}`}>{item.full_name}</Link>
                                            </div>
                                        )
                                    })                                    
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}