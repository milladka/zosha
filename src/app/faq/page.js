import { Breadcrumbs } from "../constant/breadcrumbs";

export default function Faqs() {
    return (
        <div className="container mx-auto p-2">
            <div className="my-5">
                <Breadcrumbs pages={[{ title: 'سوالات متداول' }]} />
            </div>
            <div className="my-2 rounded-lg bg-white shadow p-4">
                <div className="font-bold text-gray-600">سوالات متداول</div>
            </div>
            <div className="my-8 p-2 md:px-5 md:py-10 rounded-lg shadow leading-8 bg-white text-slate-800">


                <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                    <h2 id="accordion-color-heading-1">
                        <button type="button" className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border outline-0 border-gray-200 rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <span>آیا در زمان گرفتن نوبت باید مبلغی را پرداخت کنم؟</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">

                        </div>
                    </div>
                </div>



            </div>

        </div>


    )
}