"use client";

import AxiosInstance from "@/app/config/axiosInstance";
import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/constant/breadcrumbs";
import Image from "next/image";
import { PICTURE_URL } from "@/app/constant";
import { CircleX, Hospital, MapPin, MapPinned, Phone } from "lucide-react";
import { Map, Marker } from "pigeon-maps"
import DOMPurify from 'dompurify';
import { MapNavigation } from "@/app/components/utils/mapNavigation";
import { LoadingIcon } from "@/app/utils/icons/loading";

export default function CenterPage() {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [corner, setCorner] = useState([35.7, 51.40]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AxiosInstance.get(`/front/get_center/${slug}`)
            .then((res) => {
                if (res.data.error) {
                    return notFound();
                }
                setDetail(res.data.detail);
                setLoading(false);
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

    if (loading) {
        return (
            <div className="container mx-auto p-2">
                <div className="p-2 md:px-24 xl:px-48 pt-2 md:pt-5 pb-14">
                    <div className="bg-white p-2 shadow-sm mb-2 rounded-lg relative flex items-center justify-center h-40">
                        <LoadingIcon width={'w-10'} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container mx-auto p-2">
                <div className="my-4 md:my-8 xl:my-10">
                    <Breadcrumbs pages={[{ title: 'مراکز درمانی', url: '/center/' }, { title: detail?.name }]} />
                </div>
                <div className="p-2 md:px-24 xl:px-48 pt-2 md:pt-5 pb-14">
                    <div>
                        {
                            detail?.name &&
                            <div className="bg-white p-2 shadow-sm mb-2 rounded-lg relative">
                                <div className="absolute left-3 top-3 text-xs bg-violet-100 text-violet-600 py-1 px-2 rounded-full">{detail?.center == "public" ? 'مرکز عمومی' : 'مرکز خصوصی'}</div>
                                <div className="flex flex-col items-center lg:items-start lg:flex-row">
                                    <div className="flex items-center justify-center rounded-full shadow-lg border mb-2 lg:mb-0">
                                        <div className=" rounded-full w-24 h-24 overflow-hidden flex items-center justify-center ">
                                            {
                                                detail?.image_id
                                                    ?
                                                    <Image alt="دکتر زوشا" src={PICTURE_URL + detail?.image_id} width={90} height={90} />
                                                    :
                                                    <div className="h-32 w-32 rounded-full text-slate-100 flex  items-center justify-center">
                                                        <Hospital size={60} strokeWidth={1} />
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="p-1 flex items-start justify-center flex-col gap-2 w-full">
                                        <div className="font-bold px-2 text-center lg:text-start w-full text-lg text-slate-800">{detail?.name}</div>
                                        <div className="font-bold text-sm flex items-center justify-center lg:justify-start gap-1 px-2 text-blue-600 w-full"><Phone className="rotate-[250deg] hidden lg:block" width={15} /> {detail?.phone} </div>
                                        <div className="text-slate-500 text-xs lg:text-sm flex items-center gap-1 text-center lg:text-start border rounded-full py-1 px-2 w-full"><MapPin className="hidden lg:block" width={15} /> {detail?.city} - {detail?.address} </div>
                                        <div className="w-full overflow-hidden h-15">
                                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detail?.description || '') }} style={{ overflow: 'hidden', whiteSpace: 'pre-line', textOverflow: 'ellipsis' }} className="text-xs font-extralight text-gray-500 p-2 leading-5">
                                            </div>
                                        </div>
                                        {
                                            detail?.latitude != 0 && detail?.longitude != 0 &&
                                            <>
                                                <div className="py-1 px-2">
                                                    <button onClick={() => handleMap(detail?.latitude, detail?.longitude)} className="text-blue-600 flex text-xs items-center gap-1 mb-2 "><MapPinned width={17} />نمایش روی نقشه</button>
                                                    <MapNavigation lat={detail?.latitude} lng={detail?.longitude} />
                                                </div>

                                            </>
                                        }
                                    </div>
                                </div>
                            </div>

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
