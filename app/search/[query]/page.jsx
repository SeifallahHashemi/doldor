import Header from "@/components/basket/Header";
import DownloadApp from "@/components/home/DownloadApp/DownloadApp";
import Footer from "@/components/home/Footer/Footer";
import MobileFooter from "@/components/home/Footer/MobileFooter";
import Navbar from "@/components/home/Navbar/navbar";
import SearchedData from "@/components/Search/SearchedData";


export default function page() {
  return (
    <>
      <div className="w-full h-full md:px-12 px-4">
        <Navbar />
      </div>
      <Header />
      <div className="w-full h-full md:px-12 px-4">
        <SearchedData />
        <DownloadApp />
      </div>
      <Footer />
      <MobileFooter />
    </>
  )
}
