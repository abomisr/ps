"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (theme == "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (isDark) return setTheme("light");
    if (!isDark) return setTheme("dark");
  };

  return (
    <button
      className="navbar_btn bg-orange-400 dark:bg-purple-400"
      onClick={toggleTheme}
    >
        <FaMoon className={`absolute bottom-[50%] ${isDark? "translate-y-[50%]":"translate-y-10"} right-[50%] translate-x-[50%] text-purple-900`} />
        <FaSun className={`absolute bottom-[50%] ${!isDark? "translate-y-[50%]":"-translate-y-10"} right-[50%] translate-x-[50%] text-orange-900`} />
    </button>
  );
};

export default ThemeChanger;
