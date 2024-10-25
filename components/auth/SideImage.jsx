import Image from "next/image";
import Link from "next/link";

export default function SideImage() {
  return (
    <div className="w-full md:h-screen relative md:bg-[#E5FCE3] pt-10">
      <div className="w-full md:flex hidden flex-col items-center relative gap-10">
        <div className="flex items-center gap-1 text-3xl">
          <Link href="/" className="text-[#F37151] font-extrabold" style={{ fontFamily: "en" }}>DOLDOR</Link>
          <Image width={40} height={40} alt="icon" src="/icons/shop.svg" />
        </div>
        <p className="text-[#232323] text-[16px] w-3/5 text-justify leading-8">
          فروشگاه دولدور یکی از بهترین و پرفروش ترین فروشگاه
          ایران می باشد برای بهره وری از آن باید اپلیکیشن دولدور
          را نصب کرده و وارد فروشگاه شوید.
        </p>
        <div className="w-full flex justify-center">
          <button className="bg-doldor_orange text-white pulse py-2.5 px-9 text-3xl font-semibold rounded-2xl">صفحه اصلی</button>
        </div>
      </div>
      <div className="relative singup__img">
        <Image
          src="/img/img-signup.png"
          alt="icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }} // optional
        />
        {/* <Image sizes="100%" alt="icon"  /> */}
      </div>
    </div>
  )
}
