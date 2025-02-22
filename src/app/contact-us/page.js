"use client";
import { MapPin, Phone } from "lucide-react";
import { Map, Marker } from "pigeon-maps"

export default async function ContactUsPage() {
    return (
        <div className="container mx-auto p-2">
            <div className="p-2 md:px-20 pt-2 md:pt-10 pb-14">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3 border-t-[4px] border-violet-400">
                    <div>
                        <h1 className="font-bold text-sm lg:text-xl text-violet-950">تماس با ما</h1>
                        <p className="text-slate-500 text-xs leading-7 p-2">
                            سلام دوست و همراه دکتر زوشا اميدوارم تونسته باشيم رنگ سلامتي و با طعمي متفاوت براي شما با وب سايت و اپليکيشن دکتر زوشا به ارمغان آورده باشيم. ممنون ميشم با دکتر زوشا تماس بگيريد و با نظراتتون ما رو تو مسير سلامتي کشور عزيزمون کمک کنيد.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="flex items-center gap-1 text-violet-800 flex-col lg:flex-row">
                        <MapPin width={18} className="bg-violet-100 rounded-full " /><div className="text-center lg:text-start text-xs lg:text-sm">تهران، جردن، کوچه مروارید، خیابان گلدان، پلاک 19، واحد 201</div>
                    </div>
                    <div className="flex items-center gap-1 text-violet-800 flex-col lg:flex-row">
                        <Phone className="bg-violet-100 rounded-full rotate-[250deg]" width={18} /><div className="text-sm text-center lg:text-start"> تلفن پشتیبانی 02191694962  </div>
                    </div>
                </div>

                <div className="bg-white p-4 h-52 rounded-lg shadow-sm mt-2">
                    <Map defaultCenter={[35.782165, 51.420308]} defaultZoom={15}>
                        <Marker width={50} anchor={[35.782165, 51.420308]} />
                    </Map>
                </div>
            </div>
        </div>
    )
}