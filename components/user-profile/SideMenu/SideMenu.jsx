import MenuLinks from "./MenuLinks";
import Profile from "./Profile";

export default function SideMenu() {
    return (
        <div className="w-full flex flex-col items-center gap-8">
            <Profile />
            <MenuLinks profile/>
        </div>
    )
}
