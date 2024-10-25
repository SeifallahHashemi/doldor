import Image from "next/image";
import Link from "next/link";

export default function DownloadApp() {
    return (
        <div className="w-full px-2.5 my-28" dir="rtl">
            <div className="w-full p-6 rounded-[30px] bg-[#F8F8F8] flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-7">
                <div className="md:w-2/3 w-full p-2.5 flex flex-col items-start gap-6 md:-order-none order-2">
                    <h4 className="text-[#232323] font-bold text-2xl">
                        دانلود اپلیکیشن <span className="text-[#00B761]">دولدور</span>
                    </h4>
                    <p className="text-[#232323] text-lg font-semibold">
                        خرید آسان و راحت با تخفیف های جذاب لحظه ای، دانلود برای سیستم عامل های اندروید و آیفون (iOS)
                    </p>
                    <div className="md:w-[300px] w-full flex flex-wrap justify-center">
                        <Link href="#" className="m-2">
                            <Image className="rounded-xl" width={128} height={38} alt="" src="/img/GooglePlay.png"/>
                        </Link>
                        <Link href="#" className="m-2">
                            <Image className="rounded-xl" width={128} height={38} alt="" src="/img/CoffeBazar.png"/>
                        </Link>
                        <Link href="#" className="m-2">
                            <Image className="rounded-xl" width={128} height={38} alt="" src="/img/Myket.png"/>
                        </Link>
                        <Link href="#" className="m-2">
                            <Image className="rounded-xl" width={128} height={38} alt="" src="/img/DirectDownload.png"/>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/3 w-full">
                        <div className="-mt-20 flex justify-center">
                            <Image className="rounded-xl w-3/5" width={456} height={300} alt="" src="/img/app.png"/>
                        </div>

                </div>
            </div>
        </div>
    )
}
