"use client"
import { turnStore } from "@/app/store/turnHandleStore";
import { ModalOfficeAppointment } from "./modalOfficeAppointment";
import { TicketCheck } from "lucide-react";

export function SectionAppointment({ data }) {
    const { modal, setModal } = turnStore();
    const formattedAmount = (amount) => amount ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '';

    return (

        <>

            <div className="border-2 rounded-lg p-2 border-green-300 bg-green-100 bg-opacity-25">

                <div className="flex items-center justify-between">
                    <div className="flex-none p-1 text-green-600">
                        <TicketCheck />
                    </div>

                    <div className="flex-1 p-2">

                        <div className="flex items-center justify-between">
                            <div className="font-bold text-green-600">نوبت حضوری</div>
                            <div className="font-bold text-green-600">
                                {formattedAmount(data?.visit_price_in_person)} ریال
                            </div>
                        </div>
                        <div className="mt-3 text-slate-400 text-xs">
                            {data?.city} - {data?.address}
                        </div>
                    </div>
                </div>

                <button onClick={() => setModal(data?.first_name + data?.last_name, data?.id)} className="mt-2 w-full py-3 rounded bg-green-600 text-center outline-none border-none text-white text-xs font-bold">دریافت نوبت حضوری</button>

            </div>
            {
                modal && <ModalOfficeAppointment />
            }
        </>

    )
}