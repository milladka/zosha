import Link from "next/link";
import AxiosInstance from "../config/axiosInstance";

export async function generateMetadata() {
    return {
        title: "تخصص‌ها",
        description: "با آشنایی با تخصص‌های دکتر زوشا، بهترین خدمات پزشکی را دریافت کنید. اطلاعات کامل درباره مهارت‌ها، تجربه‌ها و حوزه‌های درمانی تخصصی. ✅💙",
    };
}

export default async function Page() {
    let specialties = [];
    await AxiosInstance.get('/utility/get_specialties_show')
        .then(res => {
            specialties = res.data.data;
        })
    return (
        <div className="container mx-auto p-2">
            <div className="p-2 md:px-20 pt-2 md:pt-10 pb-14">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <div>
                        <h1 className="font-bold text-sm lg:text-lg text-violet-950">تخصص‌ها</h1>
                        <p className="text-slate-500 text-xs leading-7 p-2">
                            در حوزه پزشکی، تخصص‌های مختلفی وجود دارد که هر کدام به تشخیص و درمان بیماری‌های خاص می‌پردازند. از تخصص‌های پرطرفدار مانند قلب و عروق، مغز و اعصاب، ارتوپدی و زنان و زایمان گرفته تا حوزه‌هایی مانند غدد، گوارش، پوست و روانپزشکی، هر شاخه نقش مهمی در سلامت بیماران دارد. در این بخش می‌توانید لیست تخصص‌های پزشکی را مشاهده کرده و بر اساس نیاز خود، پزشکان و مراکز درمانی مرتبط را در سراسر ایران پیدا کنید.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                        {
                            specialties.map((item) => (
                                <Link href={`/specialty/${item.slug}`} className="bg-slate-100 transition-all hover:bg-violet-100 cursor-pointer border border-slate-200 rounded p-2 text-sm min-h-28 leading-7 text-center flex items-center justify-center" key={item.id}>{item.name}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}