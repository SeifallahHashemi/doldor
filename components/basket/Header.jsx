"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Header() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        router.push(`/search/${data.search}`);
    }

    return (
        <div className="w-full md:block hidden bg-search-products mt-5" dir="rtl">
            <Image className="absolute bottom-0 right-0 z-10 rotate-180" width={160} height={106} alt="icon" src="/img/grocery.png" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 my-20 mx-auto z-10 relative">
                <div className="w-full flex items-center">
                    <input type="text" placeholder="نام محصول را وارد کنید..." className="w-full border border-[#e7e7e7] rounded-tr-[20px] rounded-br-[20px] text-xl text-[#232323] outline-none" style={{ padding: "24px 10px" }}
                        {...register("search", {
                            required: "لطفا فیلد را پر کنید",
                        })}
                    />
                    <button className="w-fit bg-[#e7e7e7] rounded-tl-[20px] rounded-bl-[20px]  flex items-center justify-center border-none outline-none" style={{ padding: "20px" }}>
                        <Image width={30} height={30} alt="icon" src="/icons/search2.svg" />
                    </button>
                </div>
                {errors.search && (
                    <div className="w-full text-2xl font-semibold text-red-500 mt-4">{errors.search.message}</div>
                )}
            </form>
            <Image className="absolute top-0 left-0 z-10 rotate-180" width={200} height={100} alt="icon" src="/img/Grocery-bag-with-items-spilling.png" />
        </div>
    )
}
