import { Clinics } from "./components/partials/home/cliniks";
import { FastAccess } from "./components/partials/home/fastAccess";
import { FastCategories } from "./components/partials/home/fastCategories";
import { PopularTakhasos } from "./components/partials/home/popularTakhasos";
import { RecentMag } from "./components/partials/home/recentMag";
import { SearchBox } from "./components/partials/home/searchBox";
import { TopSection } from "./components/partials/home/topsection";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-140px)] lg:min-h-[500px] bg-center bg-no-repeat bg-cover flex items-center flex-col justify-center relative mx-auto p-2 bg-[url(/assets/bg-top-min.jpg)]">
        <div className="absolute top-0 left-0 w-full h-full content-[''] bg-violet-100 opacity-50"></div>
        <TopSection />
        <SearchBox />
      </div>
      <div className="w-full text-center min-h-16 lg:min-h-20 bg-violet-900 text-white font-bold text-sm lg:text-lg flex items-center justify-center">
        <span>
          تلاش ما دسترسی سریعتر و آسان تر شما به خدمات پزشکی است
        </span>
      </div>
      <div className="container mx-auto">
        <FastAccess />
        <FastCategories />
        <PopularTakhasos />
        <Clinics />
        <RecentMag />
      </div>
    </>
  );
}
