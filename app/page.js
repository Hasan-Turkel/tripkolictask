import Card from "@/components/Card";
import FilterModal from "@/components/FilterModal";
import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import { sales } from "@/utils/Filters"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
       <MainPage/>

        <FilterModal />
      </main>
    </>
  );
}
