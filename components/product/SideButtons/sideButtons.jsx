import Image from "next/image";
import ShareModal from "./ShareModal";
import LikeButton from "./LikeButton";

export default function SideButtons() {
  return (
    <div className="absolute md:right-12 right-4 md:top-0 top-14 flex-col items-center gap-5 z-30">
      <ShareModal />
      <LikeButton />
      {/*  */}
      <div>
        <Image width={35} height={35} alt="icon" src="/icons/notification.svg" />
      </div>
    </div>
  )
}
