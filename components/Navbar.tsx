"use client"

import { LocalesChanger } from "./buttons/LocalesChanger"
import ThemeChanger from "./buttons/ThemeChanger"

const Navbar = () => {
  return (
    <div className="navbar">
      <ThemeChanger />
      <LocalesChanger />
    </div>
  )
}

export default Navbar