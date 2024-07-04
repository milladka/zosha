"use client"
import { LocationIcon } from "@/app/utils/icons/location";
import { SearchIcon } from "@/app/utils/icons/search";
import Provice from '@/app/constant/province.json';
import { cityStore } from "@/app/store/cityHandleStore";
import { ModalCity } from "./modalCity";
import Link from "next/link";
import { useState } from "react";

export function SearchBox() {
    const { city, setModalCity } = cityStore();
    const [search, setSearch] = useState();

    return (
        <div className="my-4 p-2">
            <div className="flex items-center justify-center">

                <div className="flex justify-between items-center rounded-full border border-indigo-300 bg-gray-50 shadow-md p-2">
                    <input className="flex-1 w-40 md:w-96 bg-gray-50 outline-none text-xs p-1" type="text" name="" placeholder="نام پزشک، تخصص و ..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className="flex items-center justify-center mx-2" onClick={() => setModalCity()}>
                        <LocationIcon small />
                        <span className="font-bold text-xs text-violet-500 mr-1">{Provice.find(item => item.id == city)?.title}</span>
                    </button>
                    <Link className="rounded-full bg-violet-800 p-2 flex items-center justify-center" href={`/search?city=${city}${search ? `&query=${search}` : ''}`}>
                        <SearchIcon />
                    </Link>
                </div>

            </div>
            <div className="py-5 text-slate-500 text-xs text-center">دکتر میلاد کریمی متخصص نازایی</div>
            <ModalCity />
        </div>
    )
}
