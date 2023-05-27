import logo from "../assets/images/logo.svg";
import humburger from "../assets/images/icon-menu.svg";

const Header = ({ children, action }) => {
  console.log();
  return (
    <header className="container flex justify-between  mb-5 md:mb-10 items-center mx-auto mt-4 px-5 md:flex ">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      {/* Navbar displays only on screens from 640px and above */}
      {children}
      {/* Hamburger menu, only visible on small screen */}
      <div className="md:hidden">
        <img
          src={humburger}
          alt="Menu"
          onClick={() => {
            action.setClosed(!action.closed);
            console.log(action.closed);
          }}
          className="z-100"
        />
      </div>
    </header>
  );
};

export default Header;
