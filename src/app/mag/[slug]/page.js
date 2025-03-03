import Image from "next/image";
import { notFound } from "next/navigation";
import AxiosInstance from "@/app/config/axiosInstance";
import { MAG_URL } from "@/app/config";

export async function generateMetadata({ params, searchParams }, parent) {
    const { slug } = params;
    let post = [];
    await AxiosInstance.get(`${MAG_URL}/wp-json/wp/v2/posts?slug=${slug}`)
        .then(res => {
            if (res.data && res.data.length > 0) {
                post = res.data[0];
            }
        })
    return {
        title: post?.title?.rendered,
        description: post?.excerpt?.rendered
    };
}

export default async function SingleMagPage({ params }) {
    const { slug } = params;
    let item = null;
    await AxiosInstance.get(`${MAG_URL}/wp-json/wp/v2/posts?slug=${slug}`)
        .then(res => {
            if (res.data && res.data.length > 0) {
                item = res.data[0];
            } else {
                notFound()
            }
        })
    return (
        <>
            <div className="container mx-auto p-2">
                <div className="p-2 md:px-20 pt-2 md:pt-10 pb-14">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="grid grid-cols-1 mt-5">

                            <div className="bg-white shadow-sm rounded-lg p-2">
                                <h1 className="text-lg lg:text-2xl leading-9 font-bold hover:text-violet-800 transition-all mb-5">{item?.title?.rendered}</h1>
                                <div className="relative h-[180px] lg:h-[500px] w-full rounded overflow-hidden">
                                    <div className="relative w-full h-[180px] lg:h-[500px] rounded">
                                        {
                                            item?.featured_media != 0 ? <Image src={item?.featured_media_src_url} alt="clinic-dr-zosha" layout="fill" /> : <Image src={'/assets/no-image.png'} alt="clinic-dr-zosha" layout="fill" />
                                        }
                                    </div>
                                </div>
                                <div className="mt-2 py-2">
                                    <div className="text-slate-900 text-sm leading-9 mt-2" dangerouslySetInnerHTML={{ __html: item?.content?.rendered }}></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}