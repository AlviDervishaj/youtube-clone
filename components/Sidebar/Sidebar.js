import React from "react";
import FirstGroup from "./FirstGroup/FirstGroup";
import SecondGroup from "./SecondGroup/SecondGroup";
import ThirdGroup from "./ThirdGroup/ThirdGroup";
export default function Sidebar() {
  return (
    <div className="bg-[#202020] md:flex hidden flex-col calculate-height w-56 scrollbar-style py-3">
      <FirstGroup></FirstGroup>
      <SecondGroup></SecondGroup>
      <ThirdGroup></ThirdGroup>
    </div>
  );
}
