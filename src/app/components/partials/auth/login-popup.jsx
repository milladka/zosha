'use client'
const FormData = require('form-data');
import { useEffect, useState, useRef } from "react";
import { LoginIcon } from "@/app/utils/icons/login";
import { CloseIcon } from "@/app/utils/icons/close";
import { toast } from 'react-toastify';
import { getCookie, setCookie } from "cookies-next";
import AxiosInstance from "@/app/config/axiosInstance";
import { LoadingIcon } from "@/app/utils/icons/loading";
import { turnStore } from "@/app/store/turnHandleStore";
import MenuUser from "./menu-user";
import { Loading } from "@/app/constant/loading";

export function LoginPopup() {
    const fetchedRef = useRef(false);
    const { user, logined, setUser, setToken, delToken } = turnStore();

    const [data, setData] = useState({
        loading: true,
        loadingRegister: false,
        loadingCode: false,
        stage: 1,
        mobile: '',
        code: '',
        idCode: '',
        loginOpen: false
    })

    const toEnglishDigits = (str) => {
        return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
    };

    const handleRegister = () => {
        const iranianMobileRegex = /^(09[0-9]{9})$/;

        if (data.mobile) {
            let mobile = toEnglishDigits(data.mobile);

            if (iranianMobileRegex.test(mobile)) {

                setData((prevState) => ({ ...prevState, loadingRegister: true }));
                let formData = new FormData();
                formData.append('mobile', mobile);
                AxiosInstance.post('/auth/register', formData)
                    .then((res) => {
                        setData((prevState) => ({ ...prevState, idCode: res.data.id, stage: 2, loadingRegister: false }));
                    })
                    .catch(() => {
                        toast.error("خطایی رخ داده است");
                        setData((prevState) => ({ ...prevState, loadingRegister: false }));
                    })

            } else {
                toast.error('فرمت شماره موبایل صحیح نیست');
            }


        } else {
            toast.error('لطفا شماره موبایل را وارد کنید');
        }
    }

    const handleSend = () => {
        setData((prevState) => ({ ...prevState, loadingCode: true }));
        let formData = new FormData();
        formData.append('id', data.idCode);
        formData.append('otp', data.code);
        formData.append('mobile', data.mobile);
        AxiosInstance.post('/auth/login', formData)
            .then(res => {
                if (!res.data.error) {
                    toast.success("با موفقیت وارد شدید");
                    setCookie("authToken", res.data.token, { maxAge: (60 * 60 * 24 * 30) });
                    setToken(res.data.token);
                    setData((prevState) => ({ ...prevState, loadingCode: false, loginOpen: false, stage: 1, code: '', mobile: '', idCode: '', loading: true }));
                    AxiosInstance.get('/user', {
                        headers: { Authorization: `Bearer ${res.data.token}` }
                    })
                        .then(response => {
                            setUser(response.data.data);
                            setData((prevState) => ({ ...prevState, loading: false }));
                        })
                        .catch(error => {
                            if (error.response && error.response.status == 401) {
                                setCookie("authToken", "", { maxAge: -1 });
                                delToken();
                                setData((prevState) => ({ ...prevState, loading: false }));
                            }
                        })
                } else {
                    toast.error(res.data.message);
                    setData((prevState) => ({ ...prevState, loadingCode: false }));
                }
            })
            .catch(err => {
                toast.error("خطایی رخ داده است");
                setData((prevState) => ({ ...prevState, loadingCode: false }));
            })
    }

    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;
        const token = getCookie("authToken");
        setToken(token);
        if (token) {
            AxiosInstance.get('/user', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    setUser(response.data.data);
                    setData((prevState) => ({ ...prevState, loading: false }));
                })
                .catch(error => {
                    if (error.response && error.response.status == 401) {
                        setCookie("authToken", "", { maxAge: -1 });
                        delToken();
                        setData((prevState) => ({ ...prevState, loading: false }))
                    }
                })
        } else {
            setData((prevState) => ({ ...prevState, loading: false }))
        }
    }, []);
    return (

        <>
            {
                data.loading ?
                    <button disabled className="flex items-center justify-center rounded border border-inherit px-3 py-2 hover:bg-slate-100 transition-all hover:border-slate-400">
                        <LoadingIcon />
                    </button>
                    :
                    logined ?
                        <MenuUser user={user} />
                        :
                        <button onClick={() => setData((prevState) => ({ ...prevState, loginOpen: true }))} className="flex items-center justify-center rounded border border-inherit px-3 py-2 hover:bg-slate-100 transition-all hover:border-slate-400">
                            <LoginIcon />
                            <span className="mr-2">ورود کاربر</span>
                        </button>
            }
            {
                data.loginOpen && <div className="fixed right-0 top-0 w-full h-full">
                    <div onClick={() => setData((prevState) => ({ ...prevState, loginOpen: false }))} className="bg-slate-800 opacity-75 top-0 right-0 w-full h-full"></div>
                    <div className="w-80 md:w-96 min-h-80 h-14 bg-white shadow-md rounded-lg p-3 md:p-5 absolute right-0 top-0  inset-0 m-auto">
                        <button className="cursor-pointer" onClick={() => setData((prevState) => ({ ...prevState, loginOpen: false }))}>
                            <CloseIcon />
                        </button>
                        <div className="text-center font-bold mb-3 text-lg text-violet-700">ورود / ثبت نام</div>
                        {
                            data.stage == 1 ?

                                <div>
                                    <div className="text-center mb-2 text-sm text-slate-500 leading-6">
                                        برای دریافت سریع مشاوره آنلاین پزشکی و نوبت دهی آنلاین، شماره موبایل خود را وارد کنید
                                    </div>
                                    <div className="mt-4">
                                        <div className="mb-2 text-sm text-slate-500">
                                            شماره موبایل
                                        </div>
                                        <input onChange={(e) => setData((prevState) => ({ ...prevState, mobile: e.target.value }))} value={data.mobile} dir="ltr" type="text" className="w-full block outline-none border-2 border-slate-300 p-2 rounded text-left focus:border-violet-500" placeholder="09123456789" />
                                        <div className="mt-2">
                                            <button disabled={data.loadingRegister} onClick={() => handleRegister()} href="/" className="flex items-center justify-center text-center w-full py-3 rounded bg-violet-600 hover:bg-violet-900 transition-all duration-500 ease-in-out text-white">
                                                {
                                                    data.loadingRegister ?
                                                        <Loading />
                                                        :
                                                        <span>ورود / ثبت نام</span>
                                                }
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
                                        <input onChange={(e) => setData((prevState) => ({ ...prevState, code: e.target.value }))} value={data.code} dir="ltr" type="text" className="text-center tracking-widest w-full block outline-none border-2 border-slate-300 p-2 rounded focus:border-violet-500" placeholder="" />
                                        <div className="mt-2">
                                            <button disabled={data.loadingCode} onClick={() => handleSend()} className="flex items-center justify-center text-center w-full py-3 rounded bg-violet-600 hover:bg-violet-900 transition-all duration-500 ease-in-out text-white">
                                                {
                                                    data.loadingCode ?
                                                        <Loading />
                                                        :
                                                        <span>تایید کد</span>
                                                }
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