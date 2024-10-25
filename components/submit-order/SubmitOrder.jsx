import SubmitOrderForm from "./Form/SubmitOrderForm";
import SubmitOrderMap from "./Map/SubmitOrderMap";

export default function SubmitOrder() {
    return (
        <div className="w-full min-h-[350px] mb-[150px] py-[60px] px-[12px] rounded-[20px]  relative flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center md:gap-20 gap-10" dir="rtl" style={{ background: "url(/img/1.png)" }}>
            <SubmitOrderForm />
            <SubmitOrderMap />
        </div>
    )
}
