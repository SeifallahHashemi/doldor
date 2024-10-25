
export default function UserOrders() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 relative">
      <div className="fixed w-1/4 bottom-0 right-0 border-t-[1px] border-t-black border-r-[1px] border-r-black">
        <div className="w-full flex items-center justify-evenly">
          <div className="w-1/4">
            <div className="w-full flex-col flex items-center justify-center p-3 font-semibold text-white bg-red-800 border-l border-black cursor-pointer  transition-all ease-in delay-100">
              <span>در انتضار تایید</span>
              <span>27</span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="w-full flex-col flex items-center justify-center p-3 font-semibold border-l border-black cursor-pointer bg-doldor_orange text-white transition-all ease-in delay-100">
              <span>نیاز به تماس</span>
              <span>4</span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="w-full flex-col flex items-center justify-center p-3 font-semibold border-l text-black bg-yellow-500 border-black cursor-pointer transition-all ease-in delay-100">
              <span>نهایی شده</span>
              <span>11</span>
            </div>
          </div>
          <div className="w-1/4">
            <div className="w-full flex-col flex items-center justify-center p-3 font-semibold bg-green-700 text-white border-l border-black cursor-pointer  transition-all ease-in delay-100">
              <span>تحویل شده</span>
              <span>2704</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(1250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-green-600">تحویل داده شده</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-yellow-500">در انتظار برسی</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-red-600">لغو سفارش</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(1250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-green-600">تحویل داده شده</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-yellow-500">در انتظار برسی</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-red-600">لغو سفارش</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(1250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-green-600">تحویل داده شده</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-yellow-500">در انتظار برسی</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-red-600">لغو سفارش</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(1250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-green-600">تحویل داده شده</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-yellow-500">در انتظار برسی</p>
        </div>
      </div>
      <div className="w-full h-[80px] bg-[#FEFCFF] hover:bg-[#f0f0f0] transition-all ease-linear delay-75 rounded-xl flex items-center justify-evenly p-2 cursor-pointer"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            نام کاربر :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800">پویا موسائی</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            مبلغ سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-slate-800" dir="ltr">
            {new Intl.NumberFormat("fa-IR", {
              style: "currency",
              currency: "IRR",
            }).format(250000)}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="md:text-xl text-base font-semibold text-slate-950">
            وضعیت سفارش :
          </h1>
          <p className="md:text-[15px] text-base font-medium text-red-600">لغو سفارش</p>
        </div>
      </div>
    </div>
  )
}
