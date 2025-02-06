'use client'
import { useEffect, useState, useRef } from "react";
import { LoginIcon } from "@/app/utils/icons/login";
import { CloseIcon } from "@/app/utils/icons/close";
import { toast } from 'react-toastify';
import { ProfileIcon } from "@/app/utils/icons/profile";
import { getCookie, setCookie } from "cookies-next";
import { API_URL } from "@/app/config";
import AxiosInstance from "@/app/config/axiosInstance";

export function LoginPopup() {
    const fetchedRef = useRef(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [stage, setStage] = useState(1);
    const [mobile, setMobile] = useState('');
    const [code, setCode] = useState('');
    const [logined, setLogined] = useState(false);
    function send() {
        toast.success("با موفقیت وارد شدید");
        setLoginOpen(!loginOpen)
        setLogined(true);
    }

    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;
        const token = getCookie("authToken");
        setCookie("authToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6InBhdGllbnQiLCJleHAiOjE3NDEyMDExOTQsImlhdCI6MTczODYwOTE5NH0.xl84uBKs4d5EKx6JAhWyZ1QRDCaFamRzF6CtwZSL9f8", { maxAge: (60 * 60 * 24 * 30) });

        if (token) {
            AxiosInstance.get('/user', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    console.log(response.data.data);
                })
                .catch(err => {
                    console.log(err);
                })
            // fetch(`${API_URL}/user`, {
            //     headers: { Authorization: `Bearer ${token}` },
            //     credentials: 'include',
            // })
            //     .then((res) => res.json())
            //     .then((data) => {
            //         if (data.success) {
            //             //setUser(data.user);
            //         } else {
            //             // setCookie("authToken", "", { maxAge: -1 });
            //         }
            //     })
            //     .catch(() => { }
            //         // setCookie("authToken", "", { maxAge: -1 })
            //     );
        }
    }, []);
    return (

        <>
            <button onClick={() => setLoginOpen(!loginOpen)} className="flex items-center justify-center rounded border border-inherit px-3 py-2 hover:bg-slate-100 transition-all hover:border-slate-400">
                {
                    logined ?
                        <>
                            <ProfileIcon />
                            <div className="mr-2">میلاد کریمی</div>
                        </>
                        :
                        <>
                            <LoginIcon />
                            <span className="mr-2">ورود کاربر</span>
                        </>
                }
            </button>
            {
                loginOpen && <div className="fixed right-0 top-0 w-full h-full">
                    <div onClick={() => setLoginOpen(!loginOpen)} className="bg-slate-800 opacity-75 top-0 right-0 w-full h-full"></div>
                    <div className="w-80 md:w-96 min-h-80 h-14 bg-white shadow-md rounded-lg p-3 md:p-5 absolute right-0 top-0  inset-0 m-auto">
                        <button className="cursor-pointer" onClick={() => setLoginOpen(!loginOpen)}>
                            <CloseIcon />
                        </button>

                        <div className="text-center font-bold mb-3 text-lg text-violet-700">ورود / ثبت نام</div>
                        {
                            stage == 1 ?

                                <div>
                                    <div className="text-center mb-2 text-sm text-slate-500 leading-6">
                                        برای دریافت سریع مشاوره آنلاین پزشکی و نوبت دهی آنلاین، شماره موبایل خود را وارد کنید
                                    </div>
                                    <div className="mt-4">
                                        <div className="mb-2 text-sm text-slate-500">
                                            شماره موبایل
                                        </div>
                                        <input onChange={(e) => setMobile(e.target.value)} value={mobile} dir="ltr" type="text" className="w-full block outline-none border-2 border-slate-300 p-2 rounded text-left focus:border-violet-500" placeholder="09123456789" />
                                        <div className="mt-2">
                                            <button onClick={() => setStage(2)} href="/" className="block text-center w-full py-3 rounded bg-violet-600 hover:bg-violet-900 transition-all duration-500 ease-in-out text-white">
                                                ورود / ثبت نام
                                            </button>
                                        </div>
                                        <div className="mt-3 text-slate-400 text-center font-light text-xs">دسترسی سریع و راحت به پزشکان</div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="text-center mb-2 text-sm text-slate-500 leading-6">
                                        کد ارسالی به تلفن همراه را وارد نمائید
                                    </div>
                                    <div className="mt-4">
                                        <div className="mb-2 text-sm text-slate-500">
                                            کد تایید
                                        </div>
                                        <input onChange={(e) => setCode(e.target.value)} value={code} dir="ltr" type="text" className="w-full block outline-none border-2 border-slate-300 p-2 rounded text-left focus:border-violet-500" placeholder="" />
                                        <div className="mt-2">
                                            <button onClick={() => send()} className="block text-center w-full py-3 rounded bg-violet-600 hover:bg-violet-900 transition-all duration-500 ease-in-out text-white">
                                                تایید کد
                                            </button>
                                        </div>
                                        <div className="mt-3 text-slate-400 text-center font-light text-xs">دسترسی سریع و راحت به پزشکان</div>
                                    </div>
                                </div>
                        }



                    </div>
                </div>
            }

        </>
    )
}