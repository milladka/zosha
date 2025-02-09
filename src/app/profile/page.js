"use client"
import { useEffect, useRef, useState } from "react";
import { LoadingIcon } from "../utils/icons/loading";
import AxiosInstance from "../config/axiosInstance";
import DynamicSelect from "../components/utils/dynamicSelect";
import { turnStore } from "../store/turnHandleStore";
import Years from '@/app/constant/years.json';

export default function ProfilePage() {
    const fetchedRef = useRef(false);
    const { user } = turnStore();
    const [data, setData] = useState({
        cities: [],
        genderOptions: [
            {
                label: 'زن',
                value: 'female'
            },
            {
                label: 'مرد',
                value: 'male'
            }
        ],
        city_id: '',
        gender: '',
        birth_year: '',
        national_code: '',
        email: '',
        firstname: '',
        lastname: '',
        firstLoading: true
    });

    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;

        AxiosInstance.get('/utility/cities')
            .then((res) => {
                setData((prevState) => ({
                    ...prevState,
                    cities: res.data.data,
                    firstname: user?.firstname,
                    lastname: user?.lastname,
                    national_code: user?.national_code,
                    birth_year: user?.birth_year,
                    gender: user?.gender,
                    city_id: user?.city_id,
                    email: user?.email,
                    firstLoading: false,
                }))
            })
    }, []);

    const handleChangeCity = value => {
        setData((prevState) => ({ ...prevState, city_id: value }))
    };

    const handleChangeGendar = value => {
        setData((prevState) => ({ ...prevState, gender: value }))
    };

    const handleChangeBirthYear = value => {
        setData((prevState) => ({ ...prevState, birth_year: value }))
    };

    if (data.firstLoading) {
        return <div className="container mx-auto p-2">
            <div className="px-52 pt-10 pb-14">
                <div className="bg-white p-8 rounded-lg shadow-lg flex justify-center items-center min-h-96">
                    <LoadingIcon width={'w-12'} />
                </div>
            </div>
        </div>
    }

    return (
        <div className="container mx-auto p-2">
            <div className="p-2 md:px-48 pt-2 md:pt-10 pb-14">
                <div className="bg-white p-4 rounded-lg shadow-sm ">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2"> نام <sup className="text-red-500 font-bold">*</sup></div>
                            <input type="text" value={data.firstname} onChange={(e) => setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))} name="firstname" className="w-full border rounded-md p-2 flex justify-between items-center bg-white outline-none text-sm text-slate-700" />
                        </div>
                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2"> نام خانوادگی <sup className="text-red-500 font-bold">*</sup></div>
                            <input type="text" value={data.lastname} name="lastname" onChange={(e) => setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))} className="w-full border rounded-md p-2 flex justify-between items-center bg-white outline-none text-sm text-slate-700" />
                        </div>
                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2">  کد ملی <sup className="text-red-500 font-bold">*</sup></div>
                            <input type="text" value={data.national_code} name="national_code" onChange={(e) => setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))} className="w-full border rounded-md p-2 flex justify-between items-center bg-white outline-none text-sm text-slate-700" />
                        </div>

                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2"> سال تولد <sup className="text-red-500 font-bold">*</sup></div>
                            <DynamicSelect selectedOption={data.birth_year} options={Years} onSelect={handleChangeBirthYear} label={'سال تولد خود را انتخاب کنید'} />
                        </div>

                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2"> جنسیت <sup className="text-red-500 font-bold">*</sup></div>
                            <DynamicSelect selectedOption={data.gender} options={data.genderOptions} onSelect={handleChangeGendar} label={'جنسیت خود را انتخاب کنید'} />
                        </div>
                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2">شهر <sup className="text-red-500 font-bold">*</sup></div>
                            <DynamicSelect selectedOption={data.city_id} options={data.cities} onSelect={handleChangeCity} label={'شهر خود را انتخاب کنید'} />
                        </div>
                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2">شماره موبایل</div>
                            <input disabled value={user?.phone} className="w-full border rounded-md p-2 flex justify-between items-center bg-white outline-none text-sm text-slate-700" />
                        </div>
                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2"> ایمیل <sup className="text-red-500 font-bold">*</sup></div>
                            <input type="email" value={data.email} name="email" onChange={(e) => setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))} className="text-left w-full border rounded-md p-2 flex justify-between items-center bg-white outline-none text-sm text-slate-700" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="w-full text-center border rounded-md p-3 text-white text-sm bg-violet-800 hover:bg-violet-900">
                            ثبت اطلاعات پروفایل
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}