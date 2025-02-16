"use client"
import { LocationIcon } from "@/app/utils/icons/location";
import { SearchIcon } from "@/app/utils/icons/search";
import { cityStore } from "@/app/store/cityHandleStore";
import { ModalCity } from "./modalCity";
import Link from "next/link";
import { useState } from "react";
import { LoadingIcon } from "@/app/utils/icons/loading";

export function SearchBox() {
    const { city, setModalCity, cities, loading } = cityStore();
    const [search, setSearch] = useState();

    return (
        <div className="my-2 lg:my-4 p-2 z-10">
            <div className="flex items-center justify-center">
                <div className="flex justify-between items-center rounded-full border border-indigo-300 bg-gray-50 shadow-md p-2">
                    <input className="flex-grow w-full lg:w-96 bg-gray-50 outline-none text-xs p-1" type="text" name="" placeholder="نام پزشک ..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className="flex items-center justify-center mx-2" onClick={() => setModalCity()}>
                        <LocationIcon small />
                        <span style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', display: 'block' }} className="w-16 lg:w-20 font-bold text-xs text-violet-500">{loading ? <LoadingIcon /> : cities.find(item => item.value == city)?.label}</span>
                    </button>
                    <Link className="rounded-full bg-violet-800 p-2 flex items-center justify-center" href={`/search?city=${city}${search ? `&query=${search}` : ''}`}>
                        <SearchIcon />
                    </Link>
                </div>
            </div>
            <ModalCity />
        </div>
    )
}