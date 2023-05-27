import navItems from "./navItems";
import { v4 as uuidv4 } from "uuid";

const items = navItems.map((item) => {
  return (
    <li className="hover:text-primary-red cursor-pointer" key={uuidv4()}>
      {item}
    </li>
  );
});

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="list-none flex gap-x-8">{items}</ul>
    </nav>
  );
};

export default Navbar;
