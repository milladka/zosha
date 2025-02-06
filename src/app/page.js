import { Clinics } from "./components/partials/home/cliniks";
import { FastAccess } from "./components/partials/home/fastAccess";
import { FastCategories } from "./components/partials/home/fastCategories";
import { PopularTakhasos } from "./components/partials/home/popularTakhasos";
import { RecentMag } from "./components/partials/home/recentMag";
import { SearchBox } from "./components/partials/home/searchBox";
import { TopSection } from "./components/partials/home/topsection";

export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <TopSection />
      <SearchBox />
      <FastAccess />
      <FastCategories />
      <PopularTakhasos />
      <Clinics />
      <RecentMag />
    </div>
  );
}
