"use client"
import { useState } from "react";
import { Switch } from "@material-tailwind/react";


export default function SwitchBox() {
  const [switchBox, setSwitchBox] = useState(false)

  function checkHandler() {
    setSwitchBox(!switchBox);
  }

  return (
    <div className="w-[40px] h-[20px] chechbox__container">
      <Switch
        checked={switchBox}
        onChange={checkHandler}
        color="green"
        className="w-full h-full"
        containerProps={{
          className: "relative w-full h-full bg-gray-300 rounded-full"
        }}
        circleProps={{
          className: "bg-white w-[16px] h-[16px] rounded-full m-0 top-[2px]",
          style: { transform: switchBox ? 'translateX(27px)' : 'translateX(0)' },
        }}
      />
    </div>
  )
}
