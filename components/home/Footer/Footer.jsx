import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full md:block hidden mt-28 bg-[#E5FCE3] py-8 px-2.5" dir="rtl">
            <div className="w-full px-4 mx-auto">
                <div className="flex items-start flex-wrap">
                    <div className="w-full text-center">
                        <Link href="/" className="w-full flex justify-center items-center gap-1 mb-10">
                            <span className="text-[#F37151] text-4xl font-extrabold" style={{ fontFamily: "en" }}>DOLDOR</span>
                            <Image width={40} height={40} alt="icon" src="/icons/shop.svg" />
                        </Link>
                    </div>
                    <div className="w-1/4 px-4">
                        <p className="text-[#232323] text-2xl leading-loose text-justify">
                            لورم ایپسوم متن ساختگی با تولید سادگی چاپ است.
                            چاپگرها و متون بلکه روزنامه و است برای شرایط فعلی
                            متنوع با هدف بهبود  می باشد. کتابهای زیادی شصت
                            ، حال و آینده شناخت فراوان , را می طلبد تا با ناخت
                            ای طراحان رایانه و فرهنگ پیشرو در زبان فارسی کرد.

                        </p>
                    </div>
                    <div className="w-1/6 px-4">
                        <div className="w-full text-center flex items-center justify-center">
                            <ul className="w-full flex flex-col items-start gap-8">
                                <li><Link className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>فروشگاه دولدور</Link></li>
                                <li><Link className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>وبلاگ</Link></li>
                                <li><Link className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>درباره ما</Link></li>
                                <li><Link className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>تماس با ما</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/6 px-4">
                        <div className="w-full text-center flex items-center justify-center">
                            <ul className="w-full flex flex-col items-start gap-8">
                                <li><Link className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>شرایط استفاده</Link></li>
                                <li><Link className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>سوالات متداول</Link></li>
                                <li><Link className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>شرایط مرجوعی کالا</Link></li>
                                <li><Link className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>حریم خصوصی</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="w-full text-center flex items-center justify-center">
                            <ul className="w-full flex flex-col items-start gap-8">
                                <li>
                                    <div className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>
                                        تلفن پشتیبانی : 0211230000-09911112332
                                    </div>
                                </li>
                                <li>
                                    <div className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>
                                        آدرس : خیابان احمد قصیر - کوچه پنجم - پلاک 2۴
                                    </div>
                                </li>
                                <li>
                                    <div className="text-[#232323] text-2xl hover:text-[#00B761]" href="#" style={{ transition: "all 0.3s" }}>
                                        ایمیل : info@doldur.com
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/6 px-4">
                        <div className="flex flex-wrap -px-[15px]">
                            <div className="w-1/2 mb-6">
                                <Image width={95} height={105} alt="icon" src="/img/enamad.png" />
                            </div>
                            <div className="w-1/2 mb-6">
                                <Image width={95} height={105} alt="icon" src="/img/enamad2.png" />
                            </div>
                            <div className="w-1/2 mb-6">
                                <Image width={95} height={105} alt="icon" src="/img/enamad.png" />
                            </div>
                            <div className="w-1/2 mb-6">
                                <Image width={95} height={105} alt="icon" src="/img/enamad2.png" />
                            </div>
                        </div>

                    </div>
                    <div className="w-full px-4">
                        <div className="w-full flex justify-between items-baseline py-5 mt-11 border-t border-[#00b7622b]">
                            <div className="flex items-center gap-4">
                                <Link href="#" className="w-[45px] h-[45px] bg-[#F6FEF5] rounded-[50%] flex items-center justify-center p-2">
                                    <Image width={29} height={29} alt="icon" src="/icons/instagram.png" />
                                </Link>
                                <Link href="#" className="w-[45px] h-[45px] bg-[#F6FEF5] rounded-[50%] flex items-center justify-center p-2">
                                    <Image width={29} height={29} alt="icon" src="/icons/telegram.png" />
                                </Link>
                                <Link href="#" className="w-[45px] h-[45px] bg-[#F6FEF5] rounded-[50%] flex items-center justify-center p-2">
                                    <Image width={29} height={29} alt="icon" src="/icons/twitter.png" />
                                </Link>
                                <Link href="#" className="w-[45px] h-[45px] bg-[#F6FEF5] rounded-[50%] flex items-center justify-center p-2">
                                    <Image width={29} height={29} alt="icon" src="/icons/aparat.png" />
                                </Link>
                            </div>
                            <div>
                                <p className="text-[#888888] text-xl">
                                    © تمامی حقوق سایت مربوط به فروشگاه دولدور می باشد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
