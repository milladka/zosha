import Link from "next/link";

export function FastCategories() {
    const Categories = [
        {
            title: 'جراح پلاستیک و زیبایی',
            url: '/'
        },
        {
            title: 'جراح گوش، حلق و بینی',
            url: '/'
        },
        {
            title: 'جراح فک و صورت',
            url: '/'
        },
        {
            title: 'دندانپزشکی زیبایی',
            url: '/'
        },
        {
            title: 'متخصص پوست و مو',
            url: '/'
        },
    ]
    return (
        <div className="my-8">
            <div className="flex items-center justify-center">
                {
                    Categories.map((item, index) => {
                        return (
                            <Link key={index} href={item.url} className="text-xs rounded-full border border-gray-300 hover:border-violet-300 text-gray-500 hover:bg-violet-50 hover:text-violet-900 transition-all p-3 mx-2">
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}