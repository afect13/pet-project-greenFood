import React, { useState } from "react";
import logo from "../image/avocado-svgrepo-com.svg";
function NavBar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };
  let menuStyle = "flex flex-row gap-10";
  if (menu) {
    menuStyle += " ease-linear duration-300 -translate-y-0  delay-150 ";
  } else {
    menuStyle += " ease-linear duration-300 -translate-y-12  delay-150";
  }
  return (
    <nav className="h-16 flex flex-row justify-between items-center mx-8 lg:mx-0">
      <div className="flex flex-row items-center">
        <img src={logo} alt="авакадо" className="w-6 h-6 lg:w-10 lg:h-10" />
        <h2 className="hidden lg:block lg:font-russo lg:tracking-tight lg:font-bold">
          EasyFood
        </h2>
      </div>
      <div>
        <ul className={menuStyle}>
          <li>Home</li>
          <li>Recept</li>
          <li>About</li>
        </ul>
      </div>
      <button
        onClick={handleMenu}
        className="font-russo tracking-tight font-bold w-10"
      >
        {menu ? "x" : "Menu"}
      </button>
    </nav>
  );
}

export default NavBar;
