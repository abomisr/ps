"use client";

import { LocalesChanger } from "./buttons/LocalesChanger";
import ThemeChanger from "./buttons/ThemeChanger";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
console.log(visible,position)
  return (
    <div className={`navbar ${visible || position < 50 ? "":"!-bottom-16 opacity-0"}`}>
      {/* <Logo /> */}
      <div className="flex items-center md:gap-6 gap-2">
        {navbarLinks.map((item, index) => (
          <Tooltip delayDuration={100}>
            <TooltipTrigger
              className={`navbar_link ${
                (pathname.includes(item.href) && item.href !== "/") ||
                (pathname.split("/").length <= 2 && item.href === "/")
                  ? "dark:!bg-light-1 dark:!text-dark-1 !bg-dark-1 !text-light-1"
                  : ""
              }`}
            >
              <Link key={item.href} href={item.href}>
                <item.Icon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
      <span className="block w-[1px] bg-gray-500 h-full m-3"></span>
      <div className="flex gap-2">
        <ThemeChanger />
        <LocalesChanger />
      </div>
    </div>
  );
};

export default Navbar;
