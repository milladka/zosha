"use client"
import { ChevronDown } from "@/app/utils/icons/chevron-down"
import { useState } from "react"

export function Specialities() {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((current) => !current)

    return (

        <div className="w-full mb-1 border-b border-gray-100">
            <div className="items-center h-14 select-none flex justify-between flex-row p-3 cursor-pointer" onClick={toggleExpanded}>
                <div className="flex-1 text-xs font-bold">
                    گروه تخصص
                </div>
                <div className="flex-none pl-2">
                    <div className={`${expanded ? 'rotate-180' : ''} transition-all duration-500 `}>
                        <ChevronDown small color="text-gray-500" />
                    </div>
                </div>
            </div>
            <div className={`pt-0 overflow-hidden transition-[max-height] duration-500 ease-in-out ${expanded ? "max-h-48" : "max-h-0"}`}>
                <div className="p-3">
                    <div>

                        <div className="flex items-center justify-between px-2">
                            <label htmlFor="plastic_and_cosmetic_surgeon" className="text-xs cursor-pointer">جراح پلاستیک و زیبایی</label>
                            <div>
                                <input name="specialities" id="plastic_and_cosmetic_surgeon" type="radio"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 mt-3">
                            <label htmlFor="ear_throat_and_nose" className="text-xs cursor-pointer">جراح گوش، حلق و بینی</label>
                            <div>
                                <input name="specialities" id="ear_throat_and_nose" type="radio"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 mt-3">
                            <label htmlFor="maxillofacial_surgery" className="text-xs cursor-pointer">جراح فک و صورت</label>
                            <div>
                                <input name="specialities" id="maxillofacial_surgery" type="radio"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 mt-3">
                            <label htmlFor="cosmetic_dentistry" className="text-xs cursor-pointer">دندانپزشکی زیبایی</label>
                            <div>
                                <input name="specialities" id="cosmetic_dentistry" type="radio"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 mt-3">
                            <label htmlFor="dermatologist" className="text-xs cursor-pointer">متخصص پوست و مو</label>
                            <div>
                                <input name="specialities" id="dermatologist" type="radio"></input>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}