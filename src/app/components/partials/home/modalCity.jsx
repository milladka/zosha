import { cityStore } from "@/app/store/cityHandleStore";
import { CloseIcon } from "@/app/utils/icons/close";
import { LocationIcon } from "@/app/utils/icons/location";
import { useEffect, useState } from "react";
import AxiosInstance from "@/app/config/axiosInstance";

export function ModalCity() {
    const { modalCity, setModalCity, setCity, setCities, cities } = cityStore();
    const [search, setsearch] = useState("");

    useEffect(() => {
        setsearch('')
    }, [modalCity]);

    useEffect(() => {
        AxiosInstance.get('/utility/cities')
            .then((res) => {
                setCities(res.data.data);
            })
    },[])

    return (
        <>
            {
                modalCity ?
                    <div className="fixed top-0 left-0 h-full w-full bg-slate-700 z-50 bg-opacity-75 flex items-center justify-center">
                        <div className="bg-white w-96 rounded shadow-lg min-h-40 overflow-hidden">
                            <div className="flex items-center p-4">
                                <button onClick={() => setModalCity()}><CloseIcon /></button>
                                <span className="mr-3 font-bold">انتخاب شهر</span>
                            </div>
                            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="py-1">
                                <input className="w-full p-2 text-sm outline-none" placeholder="جستجو در شهر‌ها ..." value={search} onChange={e => setsearch(e.target.value)} />
                            </div>
                            <hr className="h-px bg-violet-300 border-0 dark:bg-gray-700 shadow" />

                            <div className="w-full h-80 overflow-y-scroll">
                                {
                                    cities.length > 0 && cities.filter((item) => {
                                        return (
                                            item.label.toLowerCase().includes(search.toLowerCase())
                                        )
                                    }).map(item => {
                                        return (
                                            <div onClick={() => { setCity(item.value), setModalCity(); }} key={item.value} className="border-b flex items-center p-3 cursor-pointer hover:bg-slate-100">
                                                <LocationIcon small />
                                                <span className="mr-2 text-gray-500">{item.label}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}