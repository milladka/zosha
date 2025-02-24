import { InstagramIcon } from "@/app/utils/icons/instagram";
import { SupportIcon } from "@/app/utils/icons/support";
import { TelegramIcon } from "@/app/utils/icons/telegram";
import { XIcon } from "@/app/utils/icons/x";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="mt-5 bg-violet-950 min-h-80 w-full relative">
            <div className="relative z-30 ">

                <div className="container mx-auto p-2 lg:p-5 py-20">

                    <div className="text-white grid grid-cols-1 xl:grid-cols-2 gap-6">

                        <div className="p-3 md:p-0">
                            <Image src={'/logo-light.png'} alt="logo dr zosha" width={100} height={100} />
                            <div className="text-xs md:text-sm font-bold leading-6">دکتر زوشا ارائه دهنده خدمات آنلاین در حوزه سلامت و زیبایی (نوبت گیری اینترنتی، مشاوره آنلاین و ...)</div>
                            <p className="mt-3 text-xs leading-6">دکتر زوشا ساده‌ترین راه نوبت‌ دهی اینترنتی و مشاوره آنلاین پزشکان ایران است. پزشکان به کمک دکتر زوشا می‌توانند امکان نوبت دهی اینترنتی و مشاوره تلفنی خود را فعال کنند. به این ترتیب بیمار برای نوبت گیری از دکتر نیاز به روش‌های سنتی مثل تلفن زدن یا مراجعه حضوری ندارد.</p>

                            <div className="mt-5">
                                <Link className="flex items-center" href={'tel:02191694962'}>
                                    <SupportIcon />
                                    <span className="mr-2 text-sm">پشتیبانی  91694962 (۰۲۱)</span>
                                </Link>
                                {/* <Link className="flex items-center mt-3" href={'tel:02188542062'}>
                                    <span className="mr-2 text-sm">  88542062 (۰۲۱)</span>
                                </Link> */}
                            </div>

                            <div className="mt-5 text-center space-y-2">

                                <Link className="inline-block text-sm" href="/terms">قوانین و مقررات</Link>
                                <Link className="inline-block mr-4 text-sm" href="/privacy-policy">حریم خصوصی</Link>
                                <Link className="inline-block mr-4 text-sm" href="/faq">سوالات متداول</Link>
                                <Link className="inline-block mr-4 text-sm" href="/installment_calculator">محاسبه‌گر اقساط</Link>
                                <Link className="inline-block mr-4 text-sm" href="/contact-us">تماس‌ با‌ ما</Link>
                                <Link className="inline-block mr-4 text-sm" href="/about-us">درباره‌ما</Link>

                            </div>

                        </div>
                        <div>

                            <div className="mt-8 flex items-center justify-center">

                                <Image
                                    style={{ objectFit: "contain" }} className="p-2 rounded shadow bg-violet-500" src={'/assets/licenses/enamad.webp'} alt="enamad dr zosha" width={80} height={80} />
                                <Image
                                    style={{ objectFit: "contain" }} className="p-2 rounded shadow bg-violet-500 mr-2" src={'/assets/licenses/samandehi.webp'} alt="enamad dr zosha" width={80} height={80} />
                                <Image
                                    style={{ objectFit: "contain" }} className="p-2 rounded shadow bg-violet-500 mr-2" src={'/assets/licenses/virtual.webp'} alt="enamad dr zosha" width={80} height={80} />
                                <Image
                                    style={{ objectFit: "contain" }} className="p-2 rounded shadow bg-violet-500 mr-2" src={'/assets/licenses/organization.webp'} alt="enamad dr zosha" width={80} height={80} />

                            </div>

                            <div className="mt-5 flex items-center justify-center" >
                                <Link href="" className="rounded-full bg-violet-900 p-2 hover:bg-violet-700 transition-all">
                                    <TelegramIcon />
                                </Link>
                                <Link href="https://www.instagram.com/drzosha?igsh=MWs1a2U4Z2J3NnMz" target="_blank" className="mr-5 rounded-full bg-violet-900 p-2 hover:bg-violet-700 transition-all">
                                    <InstagramIcon />
                                </Link>
                                <Link href="" className=" mr-5 rounded-full bg-violet-900 p-2 hover:bg-violet-700 transition-all">
                                    <XIcon />
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="py-3 bg-violet-900 rounded-t shadow-lg opacity-80">
                        <div className="text-white text-[10px] lg:text-xs leading-6 text-center">
                            تمامی حقوق مادی و معنوی متعلق به دکتر زوشا (شرکت آینده اندیشان به آفرید) می باشد</div>
                    </div>
                </div>

            </div>
        </footer>
    )
}