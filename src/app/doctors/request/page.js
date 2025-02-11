'use client'
import DynamicSelect from "@/app/components/utils/dynamicSelect";
import AxiosInstance from "@/app/config/axiosInstance";
import { Loading } from "@/app/constant/loading";
import { CloseIcon } from "@/app/utils/icons/close";
import { LoadingIcon } from "@/app/utils/icons/loading";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function RequestDoctors() {
    const fetchedRef = useRef(false);
    const [data, setData] = useState({
        firstLoading: true,
        genderOptions: [
            { label: 'زن', value: 'female' },
            { label: 'مرد', value: 'male' }
        ],
        gender: '',
        first_name: '',
        last_name: '',
        slug: '',
        national_code: '',
        mobile: '',
        email: '',
        gender: '',
        medical_code: '',
        specialities: [],
        selectedSpecialties: '',
        addedSpecialties: [],
        submitLoading: false
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;

        AxiosInstance.get('/utility/get_specialties')
            .then((res) => {
                setData((prevState) => ({
                    ...prevState,
                    specialities: res.data.data,
                    firstLoading: false,
                }))
            })
    }, []);

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

        if (!data.first_name.trim()) errors.first_name = "نام الزامی است.";
        if (!data.last_name.trim()) errors.last_name = "نام خانوادگی الزامی است.";
        if (!data.slug.trim()) errors.slug = " نام انگلیسی الزامی است.";
        if (!/^\d{10}$/.test(data.national_code)) errors.national_code = "فرمت کد ملی صحیح نیست.";
        if (!data.national_code.trim()) errors.national_code = "کد ملی الزامی است.";
        if (!data.email.trim()) errors.email = "ایمیل الزامی است.";
        if (!/^(09[0-9]{9})$/.test(data.mobile)) errors.mobile = "فرمت موبایل صحیح نیست.";
        if (!data.mobile) errors.mobile = "موبایل الزامی است.";
        if (!data.medical_code.trim()) errors.medical_code = "کد نظام پزشکی الزامی است.";
        if (!data.gender) errors.gender = "جنسیت را انتخاب کنید.";
        if (data.addedSpecialties.length === 0) errors.addedSpecialties = "تخصص الزامی است.";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


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
            if (name === "mobile" && !/^(09[0-9]{9})$/.test(value)) {
                error = "فرمت موبایل صحیح نیست";
            }
            if (name === "slug" && !/^[a-zA-Z\s]+$/.test(value)) {
                error = "فقط حروف انگلیسی مجاز است";
            }
            if (name === "medical_code" && !/^\d+$/.test(value)) {
                error = "فقط اعداد انگلیسی مجاز است";
            }
            if (name === "addedSpecialties" && value.length === 0) {
                error = "تخصص الزامی است";
            }

        }
        setErrors(prev => ({ ...prev, [name]: error }));
    };


    const addToList = () => {
        if (!data.addedSpecialties.includes(data.selectedSpecialties) && data.selectedSpecialties) {
            setData(prevData => ({
                ...prevData,
                addedSpecialties: [...prevData.addedSpecialties, prevData.selectedSpecialties],
                selectedSpecialties: ''
            }));
        }
    };

    const removeFromList = (specialty) => {
        setData(prevData => ({
            ...prevData,
            addedSpecialties: prevData.addedSpecialties.filter(item => item !== specialty)
        }));
    };

    const getLabelById = (id) => {
        const specialty = data.specialities.find(item => item.value === id);
        return specialty ? specialty.label : "نامشخص";
    };

    const submitForm = async () => {
        if (!validateForm()) return;

        setData((prevState) => ({ ...prevState, submitLoading: true }));
        let dataForm = new FormData();
        dataForm.append('first_name', data.first_name);
        dataForm.append('last_name', data.last_name);
        dataForm.append('slug', data.slug);
        dataForm.append('national_code', data.national_code);
        dataForm.append('mobile', data.mobile);
        dataForm.append('email', data.email);
        dataForm.append('gender', data.gender);
        dataForm.append('medical_code', data.medical_code);
        dataForm.append('specialties', JSON.stringify(data.addedSpecialties));

        await AxiosInstance.post('/utility/request_doctor', dataForm)
            .then(res => {
                if (!res.data.error) {
                    toast.success('درخواست شما با موفقیت ثبت شد');
                }
                setData((prevState) => ({ ...prevState, submitLoading: false }));
            })
            .catch(() => {
                setData((prevState) => ({ ...prevState, submitLoading: false }));
            })
    };

    if (data.firstLoading) {
        return <div className="container mx-auto p-2">
            <div className="p-2 md:px-48 pt-2 md:pt-10 pb-14">
                <div className="bg-white p-4 rounded-lg shadow-lg flex justify-center items-center min-h-96">
                    <LoadingIcon width={'w-12'} />
                </div>
            </div>
        </div>;
    }

    return (
        <>
            <Head>
                <title>ثبت درخواست پزشکان</title>
                <meta
                    name="description"
                    content="صرفا در صورتی که پزشک یا درمانگر هستید و کد نظام پزشکی دارید فرم زیر را برای ثبت نام در سایت پر کنید. همکاران ما در اولین زمان ممکن برای تکمیل اطلاعات و نمایش آن بر روی سامانه با شما تماس می گیرند."
                />
            </Head>
            <div className="container mx-auto p-2">
                <div className="p-2 md:px-48 pt-2 md:pt-10 pb-14">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-sm leading-7 text-slate-900 bg-orange-200 rounded p-2 lg:p-3">
                            صرفا در صورتی که پزشک یا درمانگر هستید و کد نظام پزشکی دارید فرم زیر را برای ثبت نام در سایت پر کنید. همکاران ما در اولین زمان ممکن برای تکمیل اطلاعات و نمایش آن بر روی سامانه با شما تماس می گیرند.
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                            {[
                                { label: "نام", name: "first_name" },
                                { label: "نام خانوادگی", name: "last_name" },
                                { label: "نام کامل انگلیسی", name: "slug" },
                                { label: "کد ملی", name: "national_code" },
                                { label: "موبایل", name: "mobile" },
                                { label: "ایمیل", name: "email", type: "email" },
                                { label: "کد نظام پزشکی", name: "medical_code" }
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
                                <div className="mb-2 text-slate-700 text-sm ml-2">جنسیت <sup className="text-red-500 font-bold">*</sup></div>
                                <DynamicSelect error={errors.gender} selectedOption={data.gender} options={data.genderOptions} onSelect={(value) => handleSelectChange("gender", value)} label={'جنسیت خود را انتخاب کنید'} />
                                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                            </div>

                        </div>
                        <div className="px-2 py-4 col-span-2">
                            <div className="mb-2 text-slate-700 text-sm ml-2">تخصص(ها) <sup className="text-red-500 font-bold">*</sup></div>
                            <small className="block my-2 text-xs text-slate-400">با استفاده از دکمه افزودن حداقل یک تخصص را اضافه کنید</small>
                            <div className="flex items-center justify-between">
                                <DynamicSelect error={errors.addedSpecialties} selectedOption={data.selectedSpecialties} options={data.specialities} onSelect={(value) => handleSelectChange("selectedSpecialties", value)} label={'جنسیت خود را انتخاب کنید'} />
                                <button className="outline-none border rounded-md bg-text-700 p-2 text-sm" onClick={addToList}>
                                    افزودن
                                </button>
                            </div>
                            {errors.addedSpecialties && <p className="text-red-500 text-xs mt-1">{errors.addedSpecialties}</p>}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {
                                    data.addedSpecialties.length > 0 && data.addedSpecialties.map((res) => {
                                        return (
                                            <div
                                                key={res}
                                                className="flex items-center bg-violet-300 text-violet-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                                            >

                                                <button
                                                    onClick={() => removeFromList(res)}
                                                    className="ml-2 text-violet-500 hover:text-violet-700"
                                                >
                                                    <CloseIcon />
                                                </button>
                                                {getLabelById(res)}
                                            </div>
                                        )
                                    })
                                }
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
        </>
    )
}