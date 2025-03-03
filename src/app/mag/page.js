'use client'
import Link from "next/link";
import AxiosInstance from "../config/axiosInstance";
import Image from "next/image";
import { MAG_URL } from "../config";
import { useEffect, useState } from "react";
import { LoadingIcon } from "@/app/utils/icons/loading";

export default function MagPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        AxiosInstance.get(`${MAG_URL}/wp-json/wp/v2/posts?_fields=id,slug,excerpt,title,featured_media_src_url,featured_media,featured_media_src_url&per_page=20`)
            .then(res => {
                setData(res.data);
                setLoading(false)
            })
    }, []);

    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    const truncateText = (html, maxLength) => {
        const text = stripHtml(html);
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };
    return (
        <>
            <title>بانک سلامت | دکتر زوشا</title>
            <meta name="description" content="با آشنایی با تخصص‌های دکتر زوشا، بهترین خدمات پزشکی را دریافت کنید. اطلاعات کامل درباره مهارت‌ها، تجربه‌ها و حوزه‌های درمانی تخصصی. ✅💙" />
            <div className="container mx-auto p-2">
                <div className="p-2 md:px-24 xl:px-48 pt-2 md:pt-10 pb-14">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                        <div>
                            <h1 className="font-bold text-sm lg:text-lg text-violet-950">بانک سلامت</h1>
                            <p className="text-slate-500 text-xs leading-7 p-2">
                                در حوزه پزشکی، تخصص‌های مختلفی وجود دارد که هر کدام به تشخیص و درمان بیماری‌های خاص می‌پردازند. از تخصص‌های پرطرفدار مانند قلب و عروق، مغز و اعصاب، ارتوپدی و زنان و زایمان گرفته تا حوزه‌هایی مانند غدد، گوارش، پوست و روانپزشکی، هر شاخه نقش مهمی در سلامت بیماران دارد. در این بخش می‌توانید لیست تخصص‌های پزشکی را مشاهده کرده و بر اساس نیاز خود، پزشکان و مراکز درمانی مرتبط را در سراسر ایران پیدا کنید.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 lg:p-8 rounded-lg shadow-sm">
                        {
                            loading ?

                                <div className="flex items-center justify-center"><LoadingIcon /></div>

                                :

                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 mt-5">
                                    {
                                        data.length > 0 && data.map((item) => (
                                            <div key={item.id} className="bg-white border shadow-sm rounded-lg text-center p-2">
                                                <Link className="flex items-center flex-col" href={`/mag/${item?.slug}`}>
                                                    <div className="relative h-44 w-full rounded overflow-hidden">
                                                        <div className="relative w-full h-48">
                                                            {
                                                                item?.featured_media != 0 ? <Image src={item?.featured_media_src_url} alt="clinic-dr-zosha" layout="fill" /> : <Image src={'/assets/no-image.png'} alt="clinic-dr-zosha" layout="fill" />
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 py-2">
                                                        <div className="text-sm leading-6 font-bold hover:text-violet-800 transition-all">{item?.title?.rendered}</div>
                                                        <p className="text-slate-400 leading-5 text-xs mt-2">{truncateText(item?.excerpt?.rendered, 100)}</p>
                                                    </div>
                                                </Link>
                                            </div>))
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}