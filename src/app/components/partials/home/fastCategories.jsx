import Link from "next/link";

export function FastCategories() {
    const Categories = [
        {
            title: 'جراح پلاستیک و زیبایی',
            url: 'face-plastic-surgeon'
        },
        {
            title: 'جراح گوش، حلق و بینی',
            url: 'ent'
        },
        {
            title: 'جراح فک و صورت',
            url: 'maxillofacial-oral-surgeon'
        },
        {
            title: 'دندانپزشک',
            url: 'dentist'
        },
        {
            title: 'متخصص پوست و مو',
            url: 'dermatologist'
        },
    ]
    return (
        <div className="my-8">
            <div className="flex items-center justify-center flex-col md:flex-row">
                {
                    Categories.map((item, index) => {
                        return (
                            <Link key={index} href={`/specialty/${item.url}`} className="text-center text-xs rounded-full border border-gray-300 hover:border-violet-300 text-gray-500 hover:bg-violet-50 hover:text-violet-900 transition-all p-2 md:p-3 mx-1 md:mx-2 my-2 md:my-0">
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}