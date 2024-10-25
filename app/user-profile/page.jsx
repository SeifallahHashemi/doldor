import Footer from "@/components/home/Footer/Footer";
import MobileFooter from "@/components/home/Footer/MobileFooter";
import Navbar from "@/components/home/Navbar/navbar";
import UserProfile from "@/components/user-profile/Profile/UserProfile";
import MobileSideMenu from "@/components/user-profile/SideMenu/MobileSideMenu";

export default function page() {
    return (
        <>
            <div className="w-full h-full md:block flex items-center md:gap-0 gap-4 md:px-12 px-4">
                <Navbar />
                <div className="md:hidden block mt-4" dir="rtl"><MobileSideMenu /></div>
            </div>
            <UserProfile />
            <Footer />
            <MobileFooter />
        </>
    )
}
