"use client";

import AxiosInstance from "@/app/config/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/constant/breadcrumbs";
import Image from "next/image";
import { PICTURE_URL } from "@/app/constant";
import { CircleX, MapPin, MapPinned, Phone } from "lucide-react";
import { Map, Marker } from "pigeon-maps"

export default function GroupCenterPage() {
    const { slug } = useParams();
    const [group, setGroup] = useState(null);
    const [detil, setDetail] = useState([]);
    const [corner, setCorner] = useState([35.7, 51.40]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        AxiosInstance.get(`/front/get_center_group/${slug}`)
            .then((res) => {
                setGroup(res.data.group);
                setDetail(res.data.detail);
            })
            .catch((err) => {
                console.error("خطا در دریافت اطلاعات:", err);
            });
    }, []);

    const handleMap = async (lat, long) => {
        setCorner([Number(lat), Number(long)]);
        setTimeout(() => {
            setOpen(true)
        }, 500);
    }

    return (
        <>
            <div className="container mx-auto p-2">
                <div className="my-4 md:my-5">
                    <Breadcrumbs pages={[{ title: 'مراکز درمانی', url: '/center/' }, { title: group?.name }]} />
                </div>
                <div className="p-2 md:px-48 pt-2 md:pt-5 pb-14">
                    <div className="bg-white p-4 lg:p-7 rounded-lg shadow-sm">
                        <h1 className="font-bold text-sm lg:text-lg text-violet-950">{group?.name || "در حال بارگذاری..."}</h1>
                        <div className="mt-2">
                            <p className="text-slate-500 text-xs leading-7">
                                {group?.content || "در حال بارگذاری..."}
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        {
                            detil.length > 0 && detil.map(item => {
                                if (item?.name) {
                                    return (
                                        <div key={item.id} className="bg-white p-2 shadow-sm mb-2 rounded-lg">
                                            <div className="flex flex-col items-center lg:items-start lg:flex-row">
                                                <div className="flex items-center justify-center rounded-full shadow-lg border mb-2 lg:mb-0">
                                                    <div className=" rounded-full w-24 h-24 overflow-hidden flex items-center justify-center ">
                                                        <Image alt="دکتر زوشا" src={PICTURE_URL + item?.image_id} width={90} height={90} />
                                                    </div>
                                                </div>
                                                <div className="p-1 flex items-start justify-center flex-col gap-2 w-full">
                                                    <div className="font-bold px-2 text-center lg:text-start w-full text-lg text-slate-800">{item?.name}</div>
                                                    <div className="font-bold text-sm flex items-center justify-center lg:justify-start gap-1 px-2 text-blue-600 w-full"><Phone className="rotate-[250deg] hidden lg:block" width={15} /> {item?.phone} </div>
                                                    <div className="text-slate-500 text-xs lg:text-sm flex items-center gap-1 text-center lg:text-start border rounded-full py-1 px-2 w-full"><MapPin className="hidden lg:block" width={15} /> {item?.city} - {item?.address} </div>
                                                    {
                                                        item?.latitude != 0 && item?.longitude != 0 && <div className="py-1 px-2"><button onClick={() => handleMap(item?.latitude, item?.longitude)} className="text-blue-600 flex text-xs items-center gap-1"><MapPinned width={17} />نمایش روی نقشه</button></div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>

            {
                open && (
                    <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full z-50 p-2 lg:p-0">
                        <div className="absolute opacity-80 w-full h-full bg-slate-950"></div>
                        <div className="relative z-[51] bg-white w-full lg:w-[35rem] h-52 lg:h-64 rounded-lg p-2">
                            <button onClick={() => setOpen(false)} className="absolute top-1 right-1 z-[52] bg-white rounded-full p-1">
                                <CircleX width={20} />
                            </button>
                            <Map defaultCenter={corner} defaultZoom={15}>
                                <Marker width={50} anchor={corner} />
                            </Map>
                        </div>
                    </div>
                )
            }
        </>
    );
}
