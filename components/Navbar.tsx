"use client";

import Logo from "./Logo";
import { LocalesChanger } from "./buttons/LocalesChanger";
import ThemeChanger from "./buttons/ThemeChanger";

const Navbar = () => {
  return (
    <div className="navbar">
        <Logo />
      <div className="flex gap-4">
      <ThemeChanger />
      <LocalesChanger />
      </div>
    </div>
  );
};

export default Navbar;
