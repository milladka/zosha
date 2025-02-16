import { Suspense } from "react";
import SearchComponent from "../components/search/searchComponent";

export default function Search() {

    return (
        <Suspense fallback={<div className="container mx-auto p-2">
            <div className="text-center p-3 mt-2 bg-white">در حال بارگذاری</div>
        </div>}>
            <SearchComponent />
        </Suspense>

    )
}