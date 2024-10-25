"use client";
import useConnectionStatus from "@/hooks/useConnectionStatus";
import { cn } from "@/libs/utils";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";

const SalesStatus = () => {
  const onlineStatus = useConnectionStatus();
//   const isClient = typeof window !== "undefined";
  // const isonline = useConnectionStatus();
  return (
    <div
      className={
        "bg-white text-doldor_text flex flex-col justify-center text-center gap-2 font-iranYekan font-bold text-lg"
      }
    >
      {/* <p>وضعیت فروش {isonline === true ? "آنلاین" : "آفلاین"}</p> */}
      <p suppressHydrationWarning>
        وضعیت فروش {onlineStatus ? "آنلاین" : "آفلاین"}
      </p>
      <hr />
      <p
        className={cn(
          "flex flex-row-reverse justify-center items-center gap-2",
          onlineStatus ? "text-doldor_button_bg" : "text-doldor_orange"
        )}
      >
        <span suppressHydrationWarning>{onlineStatus ? "وصل" : "قطع"}</span>
        {onlineStatus ? <FcCheckmark /> : <FaPlus className={"rotate-45"} />}
      </p>
    </div>
  );
};

export default SalesStatus;
