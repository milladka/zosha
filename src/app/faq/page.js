"use client"
import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "چطور می‌توانم نوبت رزرو کنم؟",
            answer: "برای رزرو نوبت، ابتدا وارد حساب کاربری خود شوید و سپس از بخش نوبت‌گیری زمان مورد نظر خود را انتخاب کنید."
        },
        {
            question: "آیا خدمات به صورت آنلاین ارائه می‌شود؟",
            answer: "بله، تمامی خدمات پزشکی ما به صورت آنلاین نیز در دسترس است."
        },
        {
            question: "آیا اطلاعات من محفوظ است؟",
            answer: "تمامی اطلاعات شخصی شما به صورت رمزنگاری شده ذخیره و مطابق با سیاست‌های حریم خصوصی ما استفاده می‌شود."
        },
        {
            question: "چطور می‌توانم سوالات بیشتری بپرسم؟",
            answer: "برای طرح سوالات بیشتر، می‌توانید با ما از طریق بخش تماس با ما ارتباط برقرار کنید."
        },
        {
            question: "آیا امکان تغییر یا لغو نوبت وجود دارد؟",
            answer: "بله، شما می‌توانید نوبت خود را از طریق حساب کاربری تغییر یا لغو کنید."
        },
        {
            question: "چطور می‌توانم حساب کاربری خود را حذف کنم؟",
            answer: "برای حذف حساب کاربری خود، به تنظیمات حساب رفته و گزینه حذف حساب را انتخاب کنید."
        },
        {
            question: "آیا پرداخت آنلاین امن است؟",
            answer: "بله، تمامی پرداخت‌های آنلاین از طریق درگاه‌های امن و معتبر انجام می‌شود."
        },
        {
            question: "چه زمانی باید به پزشک مراجعه کنم؟",
            answer: "در صورتی که علائم غیرمعمول مشاهده کردید یا نیاز به مشاوره پزشکی دارید، می‌توانید به پزشک مراجعه کنید."
        },
        {
            question: "چطور می‌توانم اطلاعات بیشتری درباره پزشکان بدست آورم؟",
            answer: "شما می‌توانید از طریق پروفایل هر پزشک، اطلاعات بیشتری مانند تخصص و سابقه کاری آنها را مشاهده کنید."
        },
        {
            question: "آیا برای استفاده از خدمات به صورت آنلاین نیاز به اپلیکیشن دارم؟",
            answer: "نه، شما می‌توانید از طریق وب‌سایت ما خدمات را بدون نیاز به اپلیکیشن دریافت کنید."
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <div className="container mx-auto p-2">
            <div className="p-2 md:px-48 pt-2 md:pt-10 pb-14">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="max-w-4xl mx-auto p-6">
                        <h1 className="text-3xl font-bold text-center mb-8">سوالات متداول</h1>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full text-right p-4 text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                                    >
                                        {faq.question}
                                    </button>
                                    {openIndex === index && (
                                        <div className="p-4 text-gray-600 bg-gray-50">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
