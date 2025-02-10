import { Menus } from "@/app/constant/menus";
import Image from "next/image";
import Link from "next/link";
import { LoginPopup } from "../../partials/auth/login-popup";

export function HeaderDefault() {
    return (
        <header className="bg-white shadow-md w-full py-2 fixed z-50">
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
                            {/* <Link className="font-bold mx-3 text-xs text-violet-700 hover:text-violet-900 transition-all" href={'/'}>ورود پزشکان</Link> */}
                            <LoginPopup />
                        </div>
                    </div>

                </div>
                <div className="flex md:hidden items-center justify-between">

                    <div>
                        <Link href="/" className="flex items-center">
                            <Image src={'/logo.png'} width={40} height={40} alt="Logo DRZOSHA" />
                            <div className="mr-2 text-lg font-bold">دکتر زوشا</div>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        {/* <Link className="font-bold mx-3 text-xs text-violet-700 hover:text-violet-900 transition-all" href={'/'}>ورود پزشکان</Link> */}
                        <LoginPopup />
                    </div>

                </div>
            </div>
        </header>
    )
}