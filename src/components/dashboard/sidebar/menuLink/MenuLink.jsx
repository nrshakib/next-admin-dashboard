const { default: Link } = require("next/link");

const MenuLink = ({ item }) => {
  return (
    <Link href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
