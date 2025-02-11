import Link from "next/link";

export function Breadcrumbs({ pages }) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-xs font-medium text-slate-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        دکتر زوشا
                    </Link>
                </li>
                {
                    pages && pages.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    {
                                        item.url ?
                                            <Link href={item.url} className="ms-1 text-xs font-medium text-slate-400 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{item.title}</Link>
                                            :
                                            <span className="ms-1 text-xs font-medium text-slate-400 md:ms-2 dark:text-gray-400">{item.title}</span>
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </nav >

    )
}