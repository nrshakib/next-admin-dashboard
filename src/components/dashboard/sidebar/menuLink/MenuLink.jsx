"use client";

import { usePathname } from "next/navigation";

const { default: Link } = require("next/link");

const MenuLink = ({ item }) => {
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <Link
      className={`flex gap-2 items-center p-4 rounded hover:bg-gray-700 my-2 ${pathName == item.path && 'bg-gray-600'}`}
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
