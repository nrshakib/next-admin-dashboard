const { default: Link } = require("next/link");

const MenuLink = ({ item }) => {
  return (
    <Link className="flex gap-2 items-center" href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
