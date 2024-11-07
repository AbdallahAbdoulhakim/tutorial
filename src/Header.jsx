import React from "react";
import { LuBaggageClaim } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-blue-700 h-15 px-10 py-3 flex justify-between">
      <h1 className="text-3xl font-bold text-slate-50">Grocery List</h1>
      <LuBaggageClaim className="text-slate-50" size={35} />
    </div>
  );
};

export default Header;
