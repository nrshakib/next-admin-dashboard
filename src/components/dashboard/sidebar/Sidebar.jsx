import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

import MenuLink from "./menuLink/MenuLink";
const menuItems = [
  {
    title: "Pages",
    menu: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    menu: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    menu: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className="">
      <div className="flex gap-5 items-center mb-5 pl-4">
        <FaRegUser className="w-12 h-12" />
        <div>
          <p className="font-bold">User</p>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((eachItem, index) => {
          return (
            <li key={index}>
              <span className="text-gray-400 font-bold text-sm mb-8">
                {eachItem.title}
              </span>
              {eachItem.menu.map((item, index) => {
                return <MenuLink item={item} key={index} />;
              })}
            </li>
          );
        })}
      </ul>
      <button className="flex gap-2 items-center p-5 rounded hover:bg-gray-700 w-full">
        <IoMdLogOut size={20} />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
