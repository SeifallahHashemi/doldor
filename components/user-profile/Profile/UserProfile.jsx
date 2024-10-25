import UserInfoForm from "../Form/UserInfoForm";
import SideMenu from "../SideMenu/SideMenu";
import UserProfileImage from "../UserProfileImage";


export default function UserProfile() {
    return (
        <div className="w-full mx-auto flex items-center justify-center my-40 md:px-0 px-4" dir="rtl">
            <div className="md:w-3/4 w-full flex items-start justify-center md:gap-20">
                <div className="md:w-1/4 min-h-[350px] md:flex hidden p-4 pt-0 transition-all ease-linear delay-150">
                    <SideMenu />
                </div>

                <div className="md:w-3/4 w-full min-h-[350px] flex flex-col p-6 bg-[#fafafa] border border-[#e2e2e2] rounded-3xl transition-all ease-linear delay-150">
                    <div className="w-full flex items-center justify-start mb-14">
                        <h1 className="text-xl font-semibold text-black leading-9">پروفایل کاربری</h1>
                    </div>
                    <div className="w-full flex items-center justify-start mb-14">
                        <UserProfileImage />
                    </div>
                    <div className="w-full flex items-center justify-start">
                        <UserInfoForm />
                    </div>
                </div>
            </div>

        </div>
    )
}
