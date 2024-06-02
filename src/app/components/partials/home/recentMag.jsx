import { LocationIcon } from "@/app/utils/icons/location";
import Image from "next/image";
import Link from "next/link";

export function RecentMag() {
    return (
        <div className="my-28">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl">آخرین مطالب مجله‌ سلامت</h2>
                <Link className="text-gray-500 hover:text-violet-800 text-sm  transition-all" href={'/'}>مشاهده همه مطالب</Link>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-10">

                <div className="bg-white shadow-sm rounded h-60 text-center overflow-hidden p-2">
                    <Link className="flex items-center flex-col" href="/">
                        <div className="relative h-36 w-full rounded overflow-hidden">
                            <Image src={'/assets/blog/Dermatology.jpg'} objectFit="cover" fill alt="blog" />
                        </div>
                        <div className="font-bold p-2">
                            <div className="h-12 hover:text-violet-800 transition-all">تخصص پوست و مو چیست و دکتر پوست کیست؟</div>
                            <div className="text-xs font-extralight text-gray-500 flex items-center justify-center mt-2">
                                <span className="mr-1"> ۶ خرداد ۱۴۰۳</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="bg-white shadow-sm rounded h-60 text-center overflow-hidden p-2">
                    <Link className="flex items-center flex-col" href="/">
                        <div className="relative h-36 w-full rounded overflow-hidden">
                            <Image src={'/assets/blog/Exfoliating-cream.webp'} objectFit="cover" fill alt="blog" />
                        </div>
                        <div className="font-bold p-2">
                            <div className="h-12 hover:text-violet-800 transition-all">بهترین کرم های لایه بردار ایرانی و خارجی</div>
                            <div className="text-xs font-extralight text-gray-500 flex items-center justify-center mt-2">
                                <span className="mr-1">۱۴ بهمن ۱۴۰۲</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="bg-white shadow-sm rounded h-60 text-center overflow-hidden p-2">
                    <Link className="flex items-center flex-col" href="/">
                        <div className="relative h-36 w-full rounded overflow-hidden">
                            <Image src={'/assets/blog/Dry-hair-routine.webp'} objectFit="cover" fill alt="blog" />
                        </div>
                        <div className="font-bold p-2">
                            <div className="h-12 hover:text-violet-800 transition-all">۶ نکته مهم برای روتین مو خشک که باید بدانید</div>
                            <div className="text-xs font-extralight text-gray-500 flex items-center justify-center mt-2">
                                <span className="mr-1"> ۶ خرداد ۱۴۰۳</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="bg-white shadow-sm rounded h-60 text-center overflow-hidden p-2">
                    <Link className="flex items-center flex-col" href="/">
                        <div className="relative h-36 w-full rounded overflow-hidden">
                            <Image src={'/assets/blog/HAIR-VIT.webp'} objectFit="cover" fill alt="blog" />
                        </div>
                        <div className="font-bold p-2">
                            <div className="h-12 hover:text-violet-800 transition-all">نقد و بررسی قرص هیرویت</div>
                            <div className="text-xs font-extralight text-gray-500 flex items-center justify-center mt-2">
                                <span className="mr-1"> ۶ خرداد ۱۴۰۳</span>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}