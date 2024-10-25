import DownloadApp from "@/components/home/DownloadApp/DownloadApp";
import Footer from "@/components/home/Footer/Footer";
import MobileFooter from "@/components/home/Footer/MobileFooter";
import Categories from "@/components/home/Header/Categories";
import Slider from "@/components/home/Header/Slider";
import Navbar from "@/components/home/Navbar/navbar";
import ProductsSlider from "@/components/home/Products/ProductsSlider";

export default function Home() {
  return (
    <>
      <div className="w-full h-full md:px-12 px-4">
        <Navbar />
        <Slider />
        <Categories />
        <ProductsSlider title="محصولات پرفروش" link="/top-sellings" />
        <ProductsSlider title="جدیدترین محصولات" link="/new-products" />
        <DownloadApp />
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}
