import { ArrowLeft } from "@/app/utils/icons/arrow-left";
import { Building } from "@/app/utils/icons/building";
import { Clock } from "@/app/utils/icons/clock";
import { Message } from "@/app/utils/icons/message";
import { Phone } from "@/app/utils/icons/phone";
import Link from "next/link";

export function FastAccess() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 lg:mt-16">

            <div className="h-64 bg-violet-300 rounded-xl w-full py-12 px-8 flex flex-col justify-between relative overflow-hidden">
                <div className="text-violet-950 font-bold text-[1.3rem]">دریافت نوبت حضوری</div>
                <p className=" text-xs text-violet-950 leading-7">دریافت نوبت اینترنتی برای مراجعه حضوری به مطب پزشکان</p>

                <Link className="flex items-center" href={'/search'}>
                    <span className="ml-2 font-bold text-violet-800">لیست پزشکان</span>
                    <ArrowLeft />
                </Link>

                <div className="absolute left-[-20px] bottom-[-20px] opacity-15">
                    <Clock />
                </div>
            </div>

            <div className="h-64 bg-violet-200 rounded-xl w-full py-12 px-8 flex flex-col justify-between relative overflow-hidden">
                <div className="text-violet-950 font-bold text-[1.3rem]">مشاوره تلفنی</div>
                <p className=" text-xs text-violet-950 leading-7">دریافت مشاوره از پزشکان متخصص و مجرب به صورت تلفنی</p>

                <Link className="flex items-center" href={'/search'}>
                    <span className="ml-2 font-bold text-violet-800 ">دریافت مشاوره</span>
                    <ArrowLeft />
                </Link>

                <div className="absolute left-[-20px] bottom-[-20px] opacity-25">
                    <Phone />
                </div>
            </div>

            <div className="h-64 bg-violet-100 rounded-xl w-full py-12 px-8 flex flex-col justify-between relative overflow-hidden">
                <div className="text-violet-950 font-bold text-[1.3rem]">مشاوره متنی</div>
                <p className=" text-xs text-violet-950 leading-7">مشاوره متنی با اولین پزشک آنلاین</p>

                <Link className="flex items-center" href={'/search'}>
                    <span className="ml-2 font-bold text-violet-800">ثبت درخواست</span>
                    <ArrowLeft />

                </Link>

                <div className="absolute left-[-20px] bottom-[-20px] opacity-25">
                    <Message />
                </div>
            </div>

            <div className="h-64 bg-violet-50 rounded-xl w-full py-12 px-8 flex flex-col justify-between relative overflow-hidden">
                <div className="text-violet-950 font-bold text-[1.3rem]">معرفی کلینیک</div>
                <p className=" text-xs text-violet-950 leading-7">دریافت خدمات پزشکی در کلینیک</p>
                <Link className="flex items-center" href={'/center'}>
                    <span className="ml-2 font-bold text-violet-800">لیست کلینیک‌ها</span>
                    <ArrowLeft />
                </Link>
                <div className="absolute left-[-20px] bottom-[-20px] opacity-40">
                    <Building />
                </div>
            </div>

        </div>
    )
}