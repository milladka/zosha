import Link from "next/link";
import { TopSectionCenter } from "../components/partials/center/topsection";
import Image from "next/image";
export async function generateMetadata() {
    return {
        title: "مراکز درمانی",
        description: "اطلاعات جامع و دقیق از مراکز درمانی معتبر در ایران",
    };
}
export default function CenterPage() {
    const centers = [
        {
            name: 'بیمارستان',
            slug: 'hospital',
            image: 'hospital.webp'
        },
        {
            name: 'کلینیک',
            slug: 'clinic',
            image: 'clinic.webp'
        },
        {
            name: 'آزمایشگاه',
            slug: 'lab',
            image: 'lab.webp'
        },
        {
            name: 'مرکز تصویربرداری',
            slug: 'imaging',
            image: 'imaging.webp'
        },
        {
            name: 'داروخانه',
            slug: 'pharmacy',
            image: 'pharmacy.webp'
        }
    ]
    return (
        <>
            <div className="min-h-[calc(100vh-500px)] lg:min-h-[400px] bg-center bg-no-repeat bg-cover flex items-center flex-col justify-center relative mx-auto p-2 bg-[url(/assets/bg-top-center-min.jpg)]">
                <div className="absolute top-0 left-0 w-full h-full content-[''] bg-slate-950 opacity-50"></div>
                <TopSectionCenter />
            </div>
            <div className="mt-5 container mx-auto p-3 lg:px-10 py-5 lg:py-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {
                        centers.map((center, index) => {
                            return (
                                <Link key={index} href={`/center/group/${center.slug}`} className="flex items-center justify-start flex-col gap-2 shadow-violet-100 border-violet-100 border rounded-xl shadow p-2 bg-white">
                                    <Image src={`/assets/center/${center.image}`} width={200} height={100} alt="دکتر زوشا" />
                                    <div className="font-extrabold text-xs lg:text-md text-violet-800"> {center.name}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="mt-5 container mx-auto p-3 lg:px-10 py-5 lg:py-8 bg-slate-50 rounded shadow-sm leading-9 text-slate-900 text-[13px] font-thin">
                <h1 className="text-sm font-bold mb-1 text-violet-900"> معرفی مراکز درمانی</h1>
                <p>
                    در این بخش، اطلاعات جامع و دقیقی از مراکز درمانی معتبر در دسترس شما قرار گرفته است. هدف ما این است که با ارائه اطلاعاتی به‌روز، شما را در یافتن نزدیک‌ترین و مناسب‌ترین مرکز درمانی یاری کنیم.
                </p>
                <p>
                    شما می‌توانید مشخصات مراکز درمانی شامل آدرس، شماره تماس، خدمات قابل ارائه و ساعات کاری را مشاهده کنید و بر اساس نیاز خود، بهترین گزینه را انتخاب نمایید. ما تلاش می‌کنیم تا این اطلاعات همواره دقیق و به‌روز باشد تا تجربه‌ای مطمئن و راحت برای شما فراهم شود.
                </p>
                <h2 className="text-md font-bold mb-1 text-violet-900">مزایای این بخش</h2>
                <p>
                    دسترسی آسان به اطلاعات مراکز درمانی: شامل آدرس، شماره تماس، خدمات ارائه‌شده و ساعات کاری.
                    <br />
                    صرفه‌جویی در زمان: دیگر نیازی به جست‌وجوی طولانی‌مدت برای یافتن مراکز درمانی معتبر ندارید.
                    <br />
                    انتخاب آگاهانه: با مقایسه خدمات مختلف مراکز، می‌توانید بهترین گزینه را بر اساس نیاز خود انتخاب کنید.
                    <br />
                    به‌روز بودن اطلاعات: ما تلاش می‌کنیم تا اطلاعات این بخش همواره دقیق و جدید باشد تا شما بتوانید با اطمینان تصمیم بگیرید.
                </p>
            </div>
        </>
    )
}