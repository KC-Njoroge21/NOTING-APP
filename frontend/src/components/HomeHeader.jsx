import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="flex flex-col gap-8 p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="text-[12px]">NOTES APP</h4>
          <h3 className="text-2xl font-semibold">Your notes</h3>
        </div>
        <Link to={'/create'}>
          <button className="bg-black gap-2 flex items-center p-2 text-white rounded-md text-sm font-semibold cursor-pointer text-md"><GoPlus className="font-semibold" /> New note</button>
        </Link>
      </div>
      <div className="p-2 rounded-sm flex items-center bg-gray-200 gap-2">
        <CiSearch size={20} className="font-semibold" />
        <input className="outline-0 w-full" type="text" placeholder="Search notes..." />
      </div>
    </header>
  );
};

export default HomeHeader;
