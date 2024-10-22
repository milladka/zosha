import { Menus } from "@/app/constant/menus";
import { LoginIcon } from "@/app/utils/icons/login";
import Image from "next/image";
import Link from "next/link";

export function HeaderDefault() {
    return (
        <header className="bg-white shadow w-full py-2 shadow-gray-100 fixed z-50">
            <div className="container mx-auto p-2">
                <div className="hidden md:flex items-center justify-between">

                    <div>
                        <Link href="/"><Image src={'/logo.png'} width={60} height={60} alt="logo dr zosha" /> </Link>
                    </div>

                    <div className="flex-1 hidden md:flex items-center justify-between px-5">
                        <div>
                            {
                                Menus.map((item, index) => {
                                    return (
                                        <Link className="font-medium mx-2 text-sm inline-block hover:text-violet-700 transition" key={index} href={item.url}>{item.text}</Link>
                                    )
                                })
                            }
                        </div>
                        <div className="flex items-center justify-center">
                            <Link className="font-bold mx-3 text-xs text-violet-700 hover:text-violet-900 transition-all" href={'/'}>ورود پزشکان</Link>
                            <button className="flex items-center justify-center rounded border border-inherit px-3 py-2 hover:bg-slate-100 transition-all hover:border-slate-400">
                                <LoginIcon />
                                <span className="mr-2">ورود کاربر</span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="flex md:hidden items-center justify-between">

                    <div>
                        <Link href="/" className="flex items-center">
                            <Image src={'/logo.png'} width={40} height={40} alt="Logo DRZOSHA" />
                            <div className="mr-2 text-sm font-bold+">دکتر زوشا</div>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    )
}