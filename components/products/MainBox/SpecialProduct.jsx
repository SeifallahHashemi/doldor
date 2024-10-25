import Image from "next/image";

export default function SpecialProduct() {
    return (
        <div className="md:w-1/2 w-full min-h-[260px] pt-6 pb-2 rounded-[20px] transition-all delay-100 ease-linear">
            <div className="flex md:flex-row flex-col items-center rounded-[20px] pt-2.5 pb-6 gap-4 relative transition-all delay-100 ease-linear border border-[#e7e7e7] hover:border-[#b0afaf] px-4">
                <div className="md:w-1/3 w-full flex justify-center">
                    <Image width={180} height={140} alt="product-image" src="/img/bananas.png" />
                </div>
                <div className="md:w-2/3 w-full">
                    <div className="w-full flex flex-col md:items-start items-center mt-5 gap-2 md:mb-0 mb-10">
                        <div className="text-[#232323] mb-2.5 text-2xl font-semibold">لپه بسته سلفونی 900 گرمی</div>
                        <del className="text-[#A2A2A2] text-xl">10000 ریال</del>
                        <span className="text-[#A2A2A2] text-xl">8000 ریال</span>
                    </div>
                </div>
                <div className="md:block hidden absolute -top-[12px] -left-[12px]">
                    <div className="flex w-[35px] h-[90px] flex-col items-center rounded-[15px]"
                        style={{ boxShadow: "0px 0px 4px 2px #cccccc75" }}
                    >
                        <button className="w-full h-1/3 rounded-tr-[15px] rounded-tl-[15px] bg-white text-[#00B761] font-bold text-2xl text-center">
                            +
                        </button>
                        <span className="w-full h-1/3 flex items-center justify-center bg-[#00B761] text-white font-bold text-xl">1</span>
                        <button className="w-full h-1/3 rounded-br-[15px] rounded-bl-[15px] bg-white text-[#00B761] font-bold text-2xl text-center">
                            -
                        </button>
                    </div>
                </div>
                <div className="absolute md:bottom-0 md:top-auto top-0 left-0">
                    <div className="bg-doldor_orange text-white w-[42px] font-bold text-xl rounded__off" style={{ padding: "6px 5px 3px 9px" }}>
                        10 %
                    </div>
                </div>
                <div className="w-full mt-4 md:hidden flex items-center justify-between absolute right-0 bottom-0 left-[initial] top-[initial]">
                    <button className="bg-[#00B761] text-white text-3xl" style={{ borderRadius: "9px 7px 20px 7px", padding: "1px 10px" }}>+</button>
                    <span className="text-black font-bold text-3xl">1</span>
                    <button className="bg-[#00B761] text-white text-3xl" style={{ borderRadius: "7px 9px 7px 20px", padding: "1px 10px" }}>-</button>
                </div>
            </div>
        </div>
    )
}
