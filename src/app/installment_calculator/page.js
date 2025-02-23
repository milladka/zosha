"use client"
import { useEffect, useState } from "react";
import { InputRange } from "../components/inputRange";

export default function InstallmentCalculator() {
    const [data, setData] = useState({
        loanRequested: 27500000,
        months: 4,
        pre: 60
    });
    const [total, setTotal] = useState({
        monthlyInstallment: '',
        prepayment: '',
        fee: '',
        total: ''
    });

    useEffect(() => {
        let prepayment = data.loanRequested * (data.pre / 100);
        let loanAmount = data.loanRequested - prepayment;
        let fee = loanAmount / 16.6666666666667;
        let commition = loanAmount / 3.333333333333333;
        let monthlyInstallment = (loanAmount + fee + commition) / data.months;
        setTotal((prev) => ({
            ...prev,
            monthlyInstallment: monthlyInstallment.toFixed(0),
            prepayment: prepayment.toFixed(0),
            fee: fee.toFixed(0),
            total: (data.loanRequested + fee + commition).toFixed(0)
        }))
    }, [data])


    // function calculateInstallment(loanRequested, pre, months) {
    //     let prepayment = loanRequested * (pre / 100);
    //     let loanAmount = loanRequested - prepayment;
    //     let fee = loanAmount / 16.6666666666667;
    //     let commition = loanAmount / 3.333333333333333;
    //     let monthlyInstallment = (loanAmount + fee + commition) / months;

    //     return {
    //         monthlyInstallment: monthlyInstallment.toFixed(0),
    //         prepayment: prepayment.toFixed(0),
    //         fee: fee.toFixed(0),
    //         total: (loanRequested + fee + commition).toFixed(0)
    //     };
    // }

    // let result = calculateInstallment(40000000, 60, 6);
    // console.log(result);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <>
            <div className="container mx-auto p-2">
                <div className="space-y-9 bg-white rounded-lg mx-5 lg:mx-60 shadow-sm py-5 lg:py-10 px-2 lg:px-5 my-5 lg:my-10">
                    <div className="font-bold text-sm lg:text-lg text-violet-950">
                        محاسبه گر اقساط
                    </div>
                    <div className="p-2">
                        <div className="text-sm font-bold mb-3 text-slate-700">مبلغ وام درخواستی</div>
                        <div dir="ltr">
                            <InputRange onChange={(val) => setData((prev) => ({ ...prev, loanRequested: val }))} tag="تومان" min={5000000} max={45000000} step={500000} initValue={data.loanRequested} />
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="text-sm font-bold mb-3 text-slate-700">تعداد اقساط</div>
                        <div dir="ltr">
                            <InputRange onChange={(val) => setData((prev) => ({ ...prev, months: val }))} tag="قسط" min={1} max={6} step={1} initValue={data.months} />
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="text-sm font-bold mb-3 text-slate-700">پیش پرداخت</div>
                        <div dir="ltr">
                            <InputRange onChange={(val) => setData((prev) => ({ ...prev, pre: val }))} tag="درصد" min={10} max={90} step={10} initValue={data.pre} />
                        </div>
                    </div>
                    <hr className="my-5 block" />
                    <div className="p-2 space-y-5">
                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-500">
                            <div>مبلغ درخواستی</div>
                            <div className="text-left"> {numberWithCommas(data.loanRequested)} تومان</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-500">
                            <div className="font-bold">پیش پرداخت</div>
                            <div className="text-left font-bold text-violet-600">{numberWithCommas(total.prepayment)} تومان</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-500">
                            <div>مدت بازپرداخت</div>
                            <div className="text-left">{data.months} ماه</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-500">
                            <div>کارمزد</div>
                            <div className="text-left">{numberWithCommas(total.fee)} تومان</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-500">
                            <div className="font-bold">مبلغ قسط هر ماه</div>
                            <div className="text-left font-bold text-violet-600">{numberWithCommas(total.monthlyInstallment)} تومان</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-500 border-t py-2">
                            <div>بازپرداخت</div>
                            <div className="text-left">{numberWithCommas(total.total)} تومان</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}