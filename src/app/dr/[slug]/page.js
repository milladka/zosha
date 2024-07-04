'use client';
import { Breadcrumbs } from "@/app/constant/breadcrumbs";
import { MessageIconInApp } from "@/app/utils/icons/inApp/message";
import { PhoneIconInApp } from "@/app/utils/icons/inApp/phone";
import { ReserveIconInApp } from "@/app/utils/icons/inApp/reserve";
import { LocationIcon } from "@/app/utils/icons/location";
import { Message } from "@/app/utils/icons/message";
import { ShareIcon } from "@/app/utils/icons/share";
import { StarIcon } from "@/app/utils/icons/star";
import Image from "next/image";
import { useState } from "react";

export default function Docotor() {
    const [more, setMore] = useState(false)
    return (
        <div className="container mx-auto my-10">
            <div className="mb-5">
                <Breadcrumbs pages={[{ title: 'رزرو نوبت و مشاوره', url: '/search' }, { title: 'رزرو نوبت پزشکان تهران' }]} />
            </div>
            <div className="grid grid-cols-12 gap-8">

                <div className="col-span-8">

                    <div className="bg-white rounded-lg p-6 shadow-sm">

                        <div className="grid grid-cols-12 gap-8">

                            <div className="col-span-5 flex items-center justify-between">

                                <div className="flex-none ml-2">
                                    <Image className="rounded-full mt-2" src="/assets/doctors/1.webp" width={90} height={90} />
                                </div>

                                <div className="flex-1">
                                    <div className="font-bold text-lg text-violet-700">دکتر نسیبه حسنی جبلی</div>
                                    <div className="mt-3 text-slate-500 text-sm">متخصص زنان و زایمان</div>
                                    <div className="mt-2 text-slate-500 text-sm">
                                        <span className="font-bold ml-1">نظام پزشکی</span>
                                        <span>30984</span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-span-7 flex flex-col">
                                <div className="flex-1">
                                    <div className="flex items-center justify-end">
                                        <StarIcon />
                                        <span className="mr-1 mt-1 text-xs font-light">4.5</span>
                                    </div>

                                </div>
                                <div className="flex-none flex items-center justify-end">
                                    <button>
                                        <ShareIcon />
                                    </button>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <div className="flex items-center justify-start">
                                    <LocationIcon small />
                                    <span className="mr-1 text-xs text-slate-500">تهران - خیابان شریعتی، روبروی بیمارستان دکتر علی شریعتی، ساختمان شریعتی طبقه سوم، واحد 31</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`bg-white rounded-lg shadow-sm mt-8 leading-7 text-slate-500 text-sm overflow-hidden`}>
                        <div className={`p-6  ${more ? 'h-auto' : 'h-80'}`}>
                            <div className="css-11r48ky"><p className="ql-align-right ql-direction-rtl">دکتر نسیبه حسنی جبلی متخصص زنان و زایمان و نازایی هستند و در شهر اصفهان فعالیت می&zwnj;کنند. دکتر حسنی جبلی، با تجربه بالا و تشخیص دقیقی که در حوزه تخصصی خود دارند، در زمینه مشکلاتی از قبیل عفونت&zwnj;های جنسی، یائسگی، ناباروری، بیماری&zwnj;های التهابیو افتادگی رحم بیماران را یاری می&zwnj;کنند.</p><p className="ql-align-right ql-direction-rtl"><br /></p><h3 className="ql-align-right ql-direction-rtl">&nbsp;نظرات درباره دکتر &nbsp;نسیبه حسنی جبلی </h3><p className="ql-align-right ql-direction-rtl">خانم دکتر حسنی جبلی با تمرکز و تجربه&zwnj;ای که در حرفه خود دارند، رضایت مراجعین خود را جلب کرده&zwnj;اند. طبق نظرات ثبت شده، ایشان خوش برخورد، وقت&zwnj;شناس و صبور هستند. </p><p className="ql-align-right ql-direction-rtl"><br /></p><h2 className="ql-align-right ql-direction-rtl">خدمات ارائه شده در مطب</h2><p className="ql-align-right ql-direction-rtl">از جمله خدمات ارائه شده می&zwnj;توان به موارد زیر اشاره کرد:</p><p className="ql-align-right ql-direction-rtl"><br /></p><p className="ql-align-right ql-direction-rtl">● درمان افتادگی رحم</p><p className="ql-align-right ql-direction-rtl">● درمان سرطان&zwnj;های زنان و کمک به آن</p><p className="ql-align-right ql-direction-rtl">● یائسگی</p><p className="ql-align-right ql-direction-rtl">● ناباروری، نازایی و درمان آن</p><p className="ql-align-right ql-direction-rtl">● تجویز آزمایش&zwnj;های دوره&zwnj;ای</p><p className="ql-align-right ql-direction-rtl">● درمان کم&zwnj;خونی و رنگ&zwnj;پریدگی</p><p className="ql-align-right ql-direction-rtl">● تشخیص اختلال در سیستم تولید مثل</p><p className="ql-align-right ql-direction-rtl">● تخصص در زایمان</p><p className="ql-align-right ql-direction-rtl">● درمان دردهای بیش از حد در رابطه زناشویی</p><p className="ql-align-right ql-direction-rtl">● یائسگی</p><p className="ql-align-right ql-direction-rtl">●&nbsp;درمان بیماری&zwnj;ها و عفونت&zwnj;های جنسی</p><p className="ql-align-right ql-direction-rtl">&nbsp;</p><h3 className="ql-align-right ql-direction-rtl">سوابق تحصیلی دکتر نسیبه حسنی جبلی </h3><p className="ql-align-right ql-direction-rtl">دکتر نسیبه حسنی جبلی با داشتن مدرک تخصص زنان و زایمان و اخذ دکترای حرفه&zwnj;ای پزشکیخود، در مراکز مربوطه شهر اصفهان مشغول به خدمت هستند. </p><p className="ql-align-right ql-direction-rtl"><br /></p><h2 className="ql-align-right ql-direction-rtl">آدرس و تلفن مطب دکتر نسیبه حسنی جبلی </h2><p className="ql-align-right ql-direction-rtl">آدرس مطب خانم دکتر حسنی جبلی؛ واقع در اصفهان، خیابان شریعتی، روبه&zwnj;روی بیمارستان دکتر علی شریعتی، ساختمان شریعتی طبقه سوم، واحد 31 است.</p><p className="ql-align-right ql-direction-rtl">●شماره تلفن مطب: 09027356020&nbsp;</p><p className="ql-align-right ql-direction-rtl">●ساعت کاری دکتر؛ شنبه تا سه&zwnj;شنبه از ساعت 16 الی 20&nbsp;</p><p className="ql-align-right ql-direction-rtl"><br /></p><h2 className="ql-align-right ql-direction-rtl">نوبت&zwnj;دهی اینترنتی دکتر نسیبه حسنی جبلی </h2><p className="ql-align-right ql-direction-rtl">دریافت نوبت ویزیت حضوری و نوبت مشاوره تلفنی از مطب دکترجبلی تنها از طریق سامانۀ آنلاین نوبت&zwnj;دهی دکتردکتر میسر است.&nbsp;</p><p className="ql-align-right ql-direction-rtl">در صورت باز نبودن سیستم نوبت&zwnj;دهی، روی گزینه «نوبت&zwnj;دار شد، خبرم کن» در سایت دکتردکتر کلیک کنید. سپس با درج شماره همراه&zwnj;تان می&zwnj;توانید از نوبت&zwnj;های فعال شده مطلع شوید.</p> <p className="ql-align-right ql-direction-rtl"><strong>خانم دکتر نسیبه حسنی جبلی </strong>تخصص  هستند. مطب <strong>دکتر نسیبه حسنی جبلی </strong> در استان اصفهان، شهر اصفهان ، <strong>خیابان شریعتی، روبروی بیمارستان دکتر علی شریعتی، ساختمان شریعتی طبقه سوم، واحد 31</strong> واقع شده است. برای مراجعه به <strong>دکتر نسیبه حسنی جبلی</strong> می&zwnj;توانید از پروفایل ایشان در سایت دکتردکتر به &zwnj;صورت اینترنتی و غیرحضوری نوبت بگیرید. همچنین در صورت نیاز، می&zwnj;توانید با شماره تلفن موجود در بخش اطلاعات تماس، ارتباط بگیرید. با سایت <strong><a href="/" rel="noopener noreferrer" target="_blank">دکتردکتر</a></strong> می&zwnj;توانید از <strong>دکتر نسیبه حسنی جبلی</strong> تخصص  در شهر اصفهان نوبت اینترنتی و مشاوره تلفنی دریافت کنید.</p></div>
                        </div>
                        <button onClick={() => { setMore(!more) }} className="w-full text-xs font-bold text-blue-400 bg-white py-3 text-center">{more ? 'مشاهده کمتر' : 'مشاهده بیشتر'}</button>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm mt-8 p-6">
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
                    </div>

                </div>
                <div className="col-span-4">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="mb-5 font-bold">
                            پلن های نوبت و مشاوره
                        </div>
                        <div>

                            <div className="border-2 rounded-lg p-2 border-green-300 bg-green-100 bg-opacity-25">

                                <div className="flex items-center justify-between">
                                    <div className="flex-none p-1">
                                        <ReserveIconInApp />
                                    </div>

                                    <div className="flex-1 p-2">

                                        <div className="flex items-center justify-between">
                                            <div className="font-bold text-green-600">نوبت حضوری</div>
                                            <div className="font-bold text-green-600">
                                                210,000 تومان
                                            </div>
                                        </div>
                                        <div className="mt-3 text-slate-400 text-xs">
                                            تهران - خیابان شریعتی
                                        </div>
                                    </div>
                                </div>


                                <button className="mt-2 w-full py-3 rounded bg-green-600 text-center outline-none border-none text-white text-xs font-bold">دریافت نوبت حضوری</button>

                            </div>

                            <div className="opacity-60 hover:opacity-100 transition-all mt-4 border rounded-lg p-2 border-violet-400 bg-violet-100 bg-opacity-25">

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


                            </div>

                            <div className="opacity-60 hover:opacity-100 transition-all mt-4 border rounded-lg p-2 border-slate-300 bg-slate-100 bg-opacity-25">

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


                            </div>









                        </div>






                    </div>
                </div>

            </div>
        </div>
    )
}