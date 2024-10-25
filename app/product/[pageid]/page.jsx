import Header from "@/components/basket/Header";
import DownloadApp from "@/components/home/DownloadApp/DownloadApp";
import Footer from "@/components/home/Footer/Footer";
import MobileFooter from "@/components/home/Footer/MobileFooter";
import Navbar from "@/components/home/Navbar/navbar";
import BottomInfo from "@/components/product/BottomInfo/BottomInfo";
import ProductData from "@/components/product/ProductData";
import ProductImage from "@/components/product/ProductImage/ProductImage";
import SideButtons from "@/components/product/SideButtons/sideButtons";

export default function page() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-full md:px-12 px-4">
                <Navbar />
            </div>
            <Header />
            <div className="w-full h-full relative md:px-12 px-4 my-40">
                <SideButtons />
                <ProductData />
            </div>
            <div className="w-full h-full md:px-12 px-4">
                <DownloadApp />
            </div>
            <Footer />
            <MobileFooter />
        </div>
    )
}
