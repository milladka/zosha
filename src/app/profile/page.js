"use client"
import { useEffect, useRef, useState } from "react";
import { LoadingIcon } from "../utils/icons/loading";
import AxiosInstance from "../config/axiosInstance";
import DynamicSelect from "../components/utils/dynamicSelect";
import { turnStore } from "../store/turnHandleStore";
import Years from '@/app/constant/years.json';
import { toast } from "react-toastify";
import { Loading } from "../constant/loading";
import { useRouter } from "next/navigation";

const FormData = require('form-data');

export default function ProfilePage() {
    const fetchedRef = useRef(false);
    const { user, token, setUser } = turnStore();
    const router = useRouter();
    const [data, setData] = useState({
        cities: [],
        genderOptions: [
            { label: 'زن', value: 'female' },
            { label: 'مرد', value: 'male' }
        ],
        city_id: '',
        gender: '',
        birth_year: '',
        national_code: '',
        email: '',
        firstname: '',
        lastname: '',
        submitLoading: false,
        firstLoading: true
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!token) {
            router.push("/");
        }
    }, []);

    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;

        AxiosInstance.get('/utility/cities')
            .then((res) => {
                setData((prevState) => ({
                    ...prevState,
                    cities: res.data.data,
                    firstname: user?.firstname || '',
                    lastname: user?.lastname || '',
                    national_code: user?.national_code || '',
                    birth_year: user?.birth_year || '',
                    gender: user?.gender || '',
                    city_id: user?.city_id || '',
                    email: user?.email || '',
                    token: token || '',
                    firstLoading: false,
                }))
            })
    }, []);

    const validateField = (name, value) => {
        let error = "";
        if (!value) {
            error = "این فیلد نمی‌تواند خالی باشد";
        } else {
            if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
                error = "ایمیل نامعتبر است";
            }
            if (name === "national_code" && !/^\d{10}$/.test(value)) {
                error = "فرمت کد ملی صحیح نیست";
            }
        }
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleSelectChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const validateForm = () => {
        let errors = {};

        if (!data.firstname.trim()) errors.firstname = "نام الزامی است.";
        if (!data.lastname.trim()) errors.lastname = "نام خانوادگی الزامی است.";
        if (!data.national_code.trim()) errors.national_code = "کد ملی الزامی است.";
        if (!/^\d{10}$/.test(data.national_code)) errors.national_code = "فرمت کد ملی صحیح نیست";
        if (!data.email.trim()) errors.email = "ایمیل الزامی است.";
        if (!data.birth_year) errors.birth_year = "سال تولد را انتخاب کنید.";
        if (!data.gender) errors.gender = "جنسیت را انتخاب کنید.";
        if (!data.city_id) errors.city_id = "شهر را انتخاب کنید.";

        console.log("Validation Errors:", errors);

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitForm = () => {
        if (!validateForm()) return;
        setData((prevState) => ({ ...prevState, submitLoading: true }));
        let dataForm = new FormData();
        dataForm.append('firstname', data.firstname);
        dataForm.append('lastname', data.lastname);
        dataForm.append('email', data.email);
        dataForm.append('national_code', data.national_code);
        dataForm.append('birth_year', data.birth_year);
        dataForm.append('gender', data.gender);
        dataForm.append('city_id', data.city_id);


        AxiosInstance.post('/user/insertprofile', dataForm, {
            headers: { Authorization: `Bearer ${data.token}` }
        })
            .then(res => {
                if (!res.data.error) {
                    toast.success('اطلاعات پروفایل شما ویرایش شد');
                    AxiosInstance.get('/user', {
                        headers: { Authorization: `Bearer ${data.token}` }
                    })
                        .then(response => {
                            setUser(response.data.data);
                            setData((prevState) => ({ ...prevState, submitLoading: false }));
                        })
                }
            })
            .catch(error => {

            })
    };

    if (data.firstLoading) {
        return <div className="container mx-auto p-2">
            <div className="px-52 pt-10 pb-14">
                <div className="bg-white p-8 rounded-lg shadow-lg flex justify-center items-center min-h-96">
                    <LoadingIcon width={'w-12'} />
                </div>
            </div>
        </div>;
    }

    return (
        <div className="container mx-auto p-2">
            <div className="p-2 md:px-48 pt-2 md:pt-10 pb-14">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { label: "نام", name: "firstname" },
                            { label: "نام خانوادگی", name: "lastname" },
                            { label: "کد ملی", name: "national_code" },
                            { label: "ایمیل", name: "email", type: "email" }
                        ].map(({ label, name, type = "text" }) => (
                            <div key={name} className="px-2 py-4">
                                <div className="mb-2 text-slate-700 text-sm ml-2">
                                    {label} <sup className="text-red-500 font-bold">*</sup>
                                </div>
                                <input
                                    type={type}
                                    name={name}
                                    value={data[name]}
                                    onChange={handleChange}
                                    className={`w-full border rounded-md p-2 bg-white outline-none text-sm text-slate-700 ${errors[name] ? "border-red-500" : ""}`}
                                />
                                {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
                            </div>
                        ))}

                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2">سال تولد <sup className="text-red-500 font-bold">*</sup></div>
                            <DynamicSelect selectedOption={data.birth_year} options={Years} onSelect={(value) => handleSelectChange("birth_year", value)} label={'سال تولد خود را انتخاب کنید'} />
                            {errors.birth_year && <p className="text-red-500 text-xs mt-1">{errors.birth_year}</p>}
                        </div>

                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2">جنسیت <sup className="text-red-500 font-bold">*</sup></div>
                            <DynamicSelect selectedOption={data.gender} options={data.genderOptions} onSelect={(value) => handleSelectChange("gender", value)} label={'جنسیت خود را انتخاب کنید'} />
                            {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                        </div>

                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2">شهر <sup className="text-red-500 font-bold">*</sup></div>
                            <DynamicSelect selectedOption={data.city_id} options={data.cities} onSelect={(value) => handleSelectChange("city_id", value)} label={'شهر خود را انتخاب کنید'} />
                            {errors.city_id && <p className="text-red-500 text-xs mt-1">{errors.city_id}</p>}
                        </div>

                        <div className="px-2 py-4">
                            <div className="mb-2 text-slate-700 text-sm ml-2">شماره موبایل</div>
                            <input disabled value={user?.phone} className="w-full border rounded-md p-2 bg-white outline-none text-sm text-slate-700" />
                        </div>
                    </div>

                    <div className="mt-5">
                        <button disabled={data.submitLoading} onClick={submitForm} className="flex items-center justify-center w-full text-center border rounded-md p-3 text-white text-sm bg-violet-800 hover:bg-violet-900">
                            {
                                data.submitLoading ?
                                    <Loading />
                                    :
                                    <span>ثبت اطلاعات پروفایل</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
