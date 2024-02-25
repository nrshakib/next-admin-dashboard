"use client";
import { FaSearch } from "react-icons/fa";
import { MdMessage, MdOutlineNotifications } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex justify-between items-center p-5 rounded-lg bg-gray-800">
      <div className="text-gray-400 font-bold capitalize">
        {pathName.split("/").pop()}
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-gray-600 p-2 rounded-lg ">
          <FaSearch />
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent border-none outline-none text-gray-300"
          />
        </div>
        <div className="flex gap-2">
          <MdMessage size={20} />
          <MdOutlineNotifications size={20} />
          <BiWorld size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
