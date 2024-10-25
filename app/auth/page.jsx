import AuthForm from "@/components/auth/form/AuthForm";
import SideImage from "@/components/auth/SideImage";

export default function page() {
  return (
    <div className="w-full flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center" dir="rtl">
      <div className="md:w-3/5 w-full">
        <AuthForm />
      </div>
      <div className="md:w-2/5 w-full md:h-screen">
        <SideImage />
      </div>
    </div>
  )
}
