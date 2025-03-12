"use client";

import AxiosInstance from "@/app/config/axiosInstance";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { Breadcrumbs } from "@/app/constant/breadcrumbs";
import Image from "next/image";
import { PICTURE_URL } from "@/app/constant";
import { CircleX, Hospital, MapPin, MapPinned, Phone, Search } from "lucide-react";
import { Map, Marker } from "pigeon-maps"
import DOMPurify from 'dompurify';
import { MapNavigation } from "@/app/components/utils/mapNavigation";
import Link from "next/link";
import DynamicSelect from "@/app/components/utils/dynamicSelect";
import { LoadingIcon } from "@/app/utils/icons/loading";

export default function GroupCenterPage() {
    const { slug } = useParams();
    const [group, setGroup] = useState(null);
    const [detil, setDetail] = useState([]);
    const [corner, setCorner] = useState([35.7, 51.40]);
    const [open, setOpen] = useState(false);
    const fetchedRef = useRef(false);
    const [cities, setCities] = useState([]);
    const [city_id, setCityId] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;
        AxiosInstance.get('/utility/cities')
            .then((res) => {
                setCities(res.data.data)
            })
    }, []);

    useEffect(() => {
        AxiosInstance.postForm(`/front/get_center_group/${slug}`, {
            name: name,
            city_id: city_id
        })
            .then((res) => {
                setGroup(res.data.group);
                setDetail(res.data.detail);
                setLoading(false)
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

    const search = () => {
        setLoading(true)
        AxiosInstance.postForm(`/front/get_center_group/${slug}`, {
            name: name,
            city_id: city_id
        })
            .then((res) => {
                setGroup(res.data.group);
                setDetail(res.data.detail);
                setLoading(false)
            })
            .catch((err) => {
                console.error("خطا در دریافت اطلاعات:", err);
            });
    }

    return (
        <>
            <div className="container mx-auto p-2">
                <div className="my-4 md:my-8 xl:my-10">
                    <Breadcrumbs pages={[{ title: 'مراکز درمانی', url: '/center/' }, { title: group?.name }]} />
                </div>
                <div className="p-2 md:px-24 xl:px-48 pt-2 md:pt-5 pb-14">
                    <div className="bg-white p-4 lg:p-7 rounded-lg shadow-sm">
                        <h1 className="font-bold text-sm lg:text-lg text-violet-950">{group?.name || "در حال بارگذاری..."}</h1>
                        <div className="mt-2">
                            <p className="text-slate-500 text-xs leading-7">
                                {group?.content || "در حال بارگذاری..."}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-4 lg:p-6 shadow-sm mb-2 rounded-lg my-2 grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <div>
                            <input
                                type={'text'}
                                name={'name'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="جستجو براساس نام"
                                className={`w-full border rounded-md p-2 bg-white outline-none text-sm text-slate-700`}
                            />
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <DynamicSelect all={true} allMessage="همه شهرهای ایران" selectedOption={city_id} options={cities} onSelect={(value) => setCityId(value)} label={'شهر  را انتخاب کنید'} />
                            <button onClick={() => search()} className="text-violet-600 hover:text-violet-800 p-2">
                                <Search width={18} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-2">
                        {
                            loading ?

                                <>
                                    <div className="bg-white p-4 shadow-sm mb-2 rounded-lg relative text-center text-xs flex items-center justify-center">
                                        <LoadingIcon width={'w-10'} />
                                    </div>
                                </>

                                :

                                detil.length > 0 ?
                                    detil.map(item => {
                                        if (item?.name) {
                                            return (
                                                <div key={item.id} className="bg-white p-2 shadow-sm mb-2 rounded-lg relative">
                                                    <div className="absolute left-3 top-3 text-xs bg-violet-100 text-violet-600 py-1 px-2 rounded-full">{item?.center == "public" ? 'مرکز عمومی' : 'مرکز خصوصی'}</div>
                                                    <div className="flex flex-col items-center lg:items-start lg:flex-row">
                                                        <div className="flex items-center justify-center rounded-full shadow-lg border mb-2 lg:mb-0">
                                                            <div className=" rounded-full w-24 h-24 overflow-hidden flex items-center justify-center ">
                                                                {
                                                                    item?.image_id
                                                                        ?
                                                                        <Image alt="دکتر زوشا" src={PICTURE_URL + item?.image_id} width={90} height={90} />
                                                                        :
                                                                        <div className="h-32 w-32 rounded-full text-slate-100 flex  items-center justify-center">
                                                                            <Hospital size={60} strokeWidth={1} />
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="p-1 flex items-start justify-center flex-col gap-2 w-full">
                                                            <Link href={`/center/${item?.slug}`} className="font-bold px-2 text-center lg:text-start w-full text-lg text-slate-800">{item?.name}</Link>
                                                            <div className="font-bold text-sm flex items-center justify-center lg:justify-start gap-1 px-2 text-blue-600 w-full"><Phone className="rotate-[250deg] hidden lg:block" width={15} /> {item?.phone} </div>
                                                            <div className="text-slate-500 text-xs lg:text-sm flex items-center gap-1 text-center lg:text-start border rounded-full py-1 px-2 w-full"><MapPin className="hidden lg:block" width={15} /> {item?.city} - {item?.address} </div>
                                                            <div className="w-full overflow-hidden h-15">
                                                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.description || '') }} style={{ overflow: 'hidden', whiteSpace: 'pre-line', textOverflow: 'ellipsis' }} className="text-xs font-extralight text-gray-500 p-2 leading-5">
                                                                </div>
                                                            </div>
                                                            {
                                                                item?.latitude != 0 && item?.longitude != 0 &&
                                                                <>
                                                                    <div className="py-1 px-2">
                                                                        <button onClick={() => handleMap(item?.latitude, item?.longitude)} className="text-blue-600 flex text-xs items-center gap-1 mb-2 "><MapPinned width={17} />نمایش روی نقشه</button>
                                                                        <MapNavigation lat={item?.latitude} lng={item?.longitude} />
                                                                    </div>

                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                    :
                                    <>
                                        <div className="bg-white p-4 shadow-sm mb-2 rounded-lg relative text-center text-xs ">
                                            نتیجه برای جستجو شما وجود ندارد
                                        </div>
                                    </>
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
