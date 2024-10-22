'use client'
import { useState } from "react";
import { LoginIcon } from "@/app/utils/icons/login";
import { CloseIcon } from "@/app/utils/icons/close";

export function LoginPopup() {
    const [loginOpen, setLoginOpen] = useState(false)
    return (

        <>
            <button onClick={() => setLoginOpen(!loginOpen)} className="flex items-center justify-center rounded border border-inherit px-3 py-2 hover:bg-slate-100 transition-all hover:border-slate-400">
                <LoginIcon />
                <span className="mr-2">ورود کاربر</span>
            </button>
            {
                loginOpen && <div className="fixed right-0 top-0 w-full h-full">
                    <div onClick={() => setLoginOpen(!loginOpen)} className="bg-slate-800 opacity-75 top-0 right-0 w-full h-full"></div>
                    <div className="w-80 md:w-96 min-h-80 h-14 bg-white shadow-md rounded-lg p-3 md:p-5 absolute right-0 top-0  inset-0 m-auto">
                        <button className="cursor-pointer" onClick={() => setLoginOpen(!loginOpen)}>
                            <CloseIcon />
                        </button>

                        <div className="text-center font-bold mb-3 text-lg text-violet-700">ورود / ثبت نام</div>
                        <div className="text-center mb-2 text-sm text-slate-500 leading-6">
                            برای دریافت سریع مشاوره آنلاین پزشکی و نوبت دهی آنلاین، شماره موبایل خود را وارد کنید
                        </div>
                        <div className="mt-4">
                            <div className="mb-2 text-sm text-slate-500">
                                شماره موبایل
                            </div>
                            <input dir="ltr" type="text" className="w-full block outline-none border-2 border-slate-300 p-2 rounded text-left focus:border-violet-500" placeholder="09123456789" />
                            <div className="mt-2">
                                <button href="/" className="block text-center w-full py-3 rounded bg-violet-600 hover:bg-violet-900 transition-all duration-500 ease-in-out text-white">
                                    ورود / ثبت نام
                                </button>
                            </div>
                            <div className="mt-3 text-slate-400 text-center font-light text-xs">دسترسی سریع و راحت به پزشکان</div>
                        </div>

                    </div>
                </div>
            }

        </>
    )
}