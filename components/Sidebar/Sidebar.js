import React from "react";
import FirstGroup from "./FirstGroup/FirstGroup";
import SecondGroup from "./SecondGroup/SecondGroup";
import ThirdGroup from "./ThirdGroup/ThirdGroup";
export default function Sidebar() {
  const style =
    "bg-[#202020] md:flex hidden flex-col calculate-height \
    w-56 fixed top-15 left-0 scrollbar-style py-3";
  return (
    <div className={style}>
      <FirstGroup></FirstGroup>
      <SecondGroup></SecondGroup>
      <ThirdGroup></ThirdGroup>
    </div>
  );
}
