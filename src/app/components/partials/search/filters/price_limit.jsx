"use client"
import { ChevronDown } from "@/app/utils/icons/chevron-down";
import { useState } from "react";
import RangeSlider from 'react-range-slider-input';

export function PriceLimit() {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((current) => !current)
    const [value, setValue] = useState([100000, 500000]);

    function numberWithCommas(x) {
        if (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    return (

        <div className="w-full mb-1" >
            <div className="items-center h-14 select-none flex justify-between flex-row p-3 cursor-pointer" onClick={toggleExpanded}>
                <div className="flex-1 text-xs font-bold">
                    محدوده قیمت خدمات
                </div>
                <div className="flex-none pl-2">
                    <div className={`${expanded ? 'rotate-180' : ''} transition-all duration-500 `}>
                        <ChevronDown small color="text-gray-500" />
                    </div>
                </div>
            </div>
            <div className={`pt-0 overflow-hidden transition-[max-height] duration-500 ease-in-out ${expanded ? "max-h-40" : "max-h-0"}`}>
                <div className="p-3">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex-none text-xs pl-2 font-bold">از</div>
                            <div className="flex flex-1 items-center justify-between">
                                <input readOnly className="text-left p-1 text-xs flex-1 outline-none border border-gray-200 rounded-md" type="text" value={numberWithCommas(value[0])} />
                                <span className="text-xs flex-none pr-2">تومان</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex-none text-xs pl-2 font-bold">تا</div>
                            <div className="flex flex-1 items-center justify-between">
                                <input readOnly className="text-left p-1 text-xs flex-1 outline-none border border-gray-200 rounded-md" type="text" value={numberWithCommas(value[1])} />
                                <span className="text-xs flex-none pr-2">تومان</span>
                            </div>
                        </div>

                        <div className="mt-5">
                            <RangeSlider min={100000} max={1000000} step={5} value={value} onInput={setValue} />






                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}