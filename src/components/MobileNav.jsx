import navItems from "./navItems";
import { v4 as uuidv4 } from "uuid";
import close from "../assets/images/icon-menu-close.svg";

const items = navItems.map((item) => {
  return <li key={uuidv4()}>{item}</li>;
});

const MobileNav = ({ action }) => {
  return (
    <div className="sm:hidden absolute top-0 right-0 w-full h-full backdrop-sepia-0 bg-slate-950/30">
      <div className="z-80 bg-white font-bold sticky top-0 left-full h-screen w-2/3 pt-8 md:hidden">
        <img
          src={close}
          onClick={() => {
            action.setClosed(!action.closed);
            console.log(action.closed);
          }}
          alt="close button"
          className="ml-auto mr-8"
        />
        <ul className="space-y-6 text-[18px] px-10 mt-16">{items}</ul>
      </div>
    </div>
  );
};

export default MobileNav;

/*
  <div className="absolute top-0 right-0 w-full h-screen bg-red-600">
  </div>

*/
