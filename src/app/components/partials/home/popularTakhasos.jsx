import Image from "next/image";
import Link from "next/link";

export function PopularTakhasos() {
    return (
        <div className="my-28">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-sm md:text-2xl">پربازدیدترین تخصص‌ها</h2>
                <Link className="text-gray-500 hover:text-violet-800 text-xs md:text-sm transition-all" href={'/'}>مشاهده همه تخصص‌ها</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-10">

                <div className="bg-white shadow-sm rounded h-48 text-center hover:shadow-md transition-all">
                    <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                        <Image src={'/assets/one.jpg'} height={150} width={150} />
                        <div className="font-bold">پوست و مو</div>
                    </Link>
                </div>
                <div className="bg-white shadow-sm rounded h-48 text-center hover:shadow-md transition-all">
                    <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                        <Image src={'/assets/two.jpg'} height={150} width={150} />
                        <div className="font-bold">جراح پلاستیک و زیبایی</div>
                    </Link>
                </div>
                <div className="bg-white shadow-sm rounded h-48 text-center hover:shadow-md transition-all">
                    <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                        <Image src={'/assets/three.jpg'} height={150} width={150} />
                        <div className="font-bold">دندانپزشکی زیبایی</div>
                    </Link>
                </div>
                <div className="bg-white shadow-sm rounded h-48 text-center hover:shadow-md transition-all">
                    <Link className="flex items-center flex-col hover:text-violet-800 transition-all" href="/">
                        <Image src={'/assets/four.jpg'} height={150} width={150} />
                        <div className="font-bold">گوش، حلق، بینی</div>
                    </Link>
                </div>

            </div>
        </div>
    )
}