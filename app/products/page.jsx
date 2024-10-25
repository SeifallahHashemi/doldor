import Header from "@/components/basket/Header";
import DownloadApp from "@/components/home/DownloadApp/DownloadApp";
import Footer from "@/components/home/Footer/Footer";
import MobileFooter from "@/components/home/Footer/MobileFooter";
import Navbar from "@/components/home/Navbar/navbar";
import FilterBox from "@/components/products/FilterBox/FilterBox";
import MainBox from "@/components/products/MainBox/MainBox";
import MobileNavbar from "@/components/products/MainBox/MobileNavbar";

export default function page() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="md:block hidden w-full h-full md:px-12 px-4">
                <Navbar />
            </div>
            <div className="md:hidden block w-full bg-[#E5FCE3]" dir="rtl">
                <MobileNavbar />
            </div>
            <Header />
            <div className="w-full h-full flex items-start justify-between relative md:px-12 px-4 my-10" dir="rtl">
                <div className="md:block hidden w-1/4">
                    <FilterBox />
                </div>
                <div className="md:w-3/4 w-full">
                    <MainBox />
                </div>
            </div>
            <div className="w-full h-full md:px-12 px-4">
                <DownloadApp />
            </div>
            <Footer />
            <MobileFooter />
        </div>
    )
}
