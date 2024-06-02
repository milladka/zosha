"use client"
import { ChevronDown } from "@/app/utils/icons/chevron-down"
import { useState } from "react"

export function Ordering() {
    const [expanded, setExpanded] = useState(true)
    const toggleExpanded = () => setExpanded((current) => !current)

    return (

        <div className="w-full mb-1 border-b border-gray-100" >
            <div className="items-center h-14 select-none flex justify-between flex-row p-3 cursor-pointer" onClick={toggleExpanded}>
                <div className="flex-1 text-xs font-bold">
                    مرتب سازی براساس
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

                        <div className="flex items-center justify-between px-2">
                            <label htmlFor="most_views" className="text-xs cursor-pointer">پربازدید‌ترین</label>
                            <div>
                                <input name="orderBy" id="most_views" type="radio"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 mt-3">
                            <label htmlFor="most_stars" className="text-xs cursor-pointer">بیشترین‌امتیاز</label>
                            <div>
                                <input name="orderBy" id="most_stars" type="radio"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 mt-3">
                            <label htmlFor="first_available_schedule" className="text-xs cursor-pointer">نزدیک‌ترین‌ نوبت‌ خالی</label>
                            <div>
                                <input name="orderBy" id="first_available_schedule" type="radio"></input>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}