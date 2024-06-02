"use client"
import { useState } from "react"

export function AvailableSchedule() {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    return (
        <label className='autoSaverSwitch relative flex cursor-pointer select-none items-center justify-between p-3 mb-1 border-b border-gray-100 w-full'>
            <input
                type='checkbox'
                name='autoSaver'
                className='sr-only flex items-center justify-between w-full'
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className="text-xs font-bold">فقط دارای نوبت</div>
            <div
                className={`slider flex h-[20px] w-[40px] items-center rounded-full p-1 transition-all duration-200  ${isChecked ? 'bg-violet-500 justify-start' : 'bg-slate-300 justify-end'}`}
            >
                <span
                    className={`dot h-[14px] w-[14px] transition-all rounded-full  shadow duration-200 bg-white`}
                ></span>
            </div>
        </label>
    )
}