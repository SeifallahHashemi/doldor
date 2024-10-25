import Image from "next/image";
import Link from "next/link";

export default function Product() {
    return (
        <div className="w-full flex flex-wrap items-center justify-evenly">
            <div className="w-1/3 md:px-[15px] px-2">
                <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                    style={{ transition: "all 0.3s" }}
                >
                    <div className='md:h-[133px] w-full bg-white rounded-[20px] pt-2.5 pb-6 md:px-0 px-2 mx-auto relative border border-[#e7e7e7] flex md:flex-row flex-col items-start'
                        style={{ transition: "all 0.3s" }}
                    >
                        <div className='md:w-1/3 w-full md:mt-0 mt-4 flex justify-center items-center h-[120px] bg-transparent relative z-10'>
                            <Image width={120} height={120} alt='' src="/img/bs1.png" className='' />
                        </div>
                        <div className='md:w-2/3 flex flex-col items-start justify-start gap-4 pt-4 md:mb-0 mb-10'>
                            <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                            <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                            <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
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
                </Link>
            </div>
            <div className="w-1/3 md:px-[15px] px-2">
                <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                    style={{ transition: "all 0.3s" }}
                >
                    <div className='md:h-[133px] w-full bg-white rounded-[20px] pt-2.5 pb-6 md:px-0 px-2 mx-auto relative border border-[#e7e7e7] flex md:flex-row flex-col items-start'
                        style={{ transition: "all 0.3s" }}
                    >
                        <div className='md:w-1/3 w-full md:mt-0 mt-4 flex justify-center items-center h-[120px] bg-transparent relative z-10'>
                            <Image width={120} height={120} alt='' src="/img/bs1.png" className='' />
                        </div>
                        <div className='md:w-2/3 flex flex-col items-start justify-start gap-4 pt-4 md:mb-0 mb-10'>
                            <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                            <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                            <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
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
                </Link>
            </div>
            <div className="w-1/3 md:px-[15px] px-2">
                <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                    style={{ transition: "all 0.3s" }}
                >
                    <div className='md:h-[133px] w-full bg-white rounded-[20px] pt-2.5 pb-6 md:px-0 px-2 mx-auto relative border border-[#e7e7e7] flex md:flex-row flex-col items-start'
                        style={{ transition: "all 0.3s" }}
                    >
                        <div className='md:w-1/3 w-full md:mt-0 mt-4 flex justify-center items-center h-[120px] bg-transparent relative z-10'>
                            <Image width={120} height={120} alt='' src="/img/bs1.png" className='' />
                        </div>
                        <div className='md:w-2/3 flex flex-col items-start justify-start gap-4 pt-4 md:mb-0 mb-10'>
                            <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                            <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                            <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
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
                </Link>
            </div>
            <div className="w-1/3 md:px-[15px] px-2">
                <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                    style={{ transition: "all 0.3s" }}
                >
                    <div className='md:h-[133px] w-full bg-white rounded-[20px] pt-2.5 pb-6 md:px-0 px-2 mx-auto relative border border-[#e7e7e7] flex md:flex-row flex-col items-start'
                        style={{ transition: "all 0.3s" }}
                    >
                        <div className='md:w-1/3 w-full md:mt-0 mt-4 flex justify-center items-center h-[120px] bg-transparent relative z-10'>
                            <Image width={120} height={120} alt='' src="/img/bs1.png" className='' />
                        </div>
                        <div className='md:w-2/3 flex flex-col items-start justify-start gap-4 pt-4 md:mb-0 mb-10'>
                            <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                            <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                            <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
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
                </Link>
            </div>
            <div className="w-1/3 md:px-[15px] px-2">
                <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                    style={{ transition: "all 0.3s" }}
                >
                    <div className='md:h-[133px] w-full bg-white rounded-[20px] pt-2.5 pb-6 md:px-0 px-2 mx-auto relative border border-[#e7e7e7] flex md:flex-row flex-col items-start'
                        style={{ transition: "all 0.3s" }}
                    >
                        <div className='md:w-1/3 w-full md:mt-0 mt-4 flex justify-center items-center h-[120px] bg-transparent relative z-10'>
                            <Image width={120} height={120} alt='' src="/img/bs1.png" className='' />
                        </div>
                        <div className='md:w-2/3 flex flex-col items-start justify-start gap-4 pt-4 md:mb-0 mb-10'>
                            <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                            <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                            <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
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
                </Link>
            </div>
            <div className="w-1/3 md:px-[15px] px-2">
                <Link href="/product/1" className='w-full bg-transparent rounded-[20px] min-h-[133px] h-full block pb-2 pt-14'
                    style={{ transition: "all 0.3s" }}
                >
                    <div className='md:h-[133px] w-full bg-white rounded-[20px] pt-2.5 pb-6 md:px-0 px-2 mx-auto relative border border-[#e7e7e7] flex md:flex-row flex-col items-start'
                        style={{ transition: "all 0.3s" }}
                    >
                        <div className='md:w-1/3 w-full md:mt-0 mt-4 flex justify-center items-center h-[120px] bg-transparent relative z-10'>
                            <Image width={120} height={120} alt='' src="/img/bs1.png" className='' />
                        </div>
                        <div className='md:w-2/3 flex flex-col items-start justify-start gap-4 pt-4 md:mb-0 mb-10'>
                            <div className='text-2xl text-black font-semibold'>لپه بسته 900 گرمی</div>
                            <del className='text-[#A2A2A2] font-semibold text-lg'>10000 ریال</del>
                            <span className='text-[#A2A2A2] font-semibold text-lg'>8000 ریال</span>
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
                </Link>
            </div>
        </div>
    )
}
