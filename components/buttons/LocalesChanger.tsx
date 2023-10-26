"use client"
import { useRouter } from "next/navigation"
import {HiLanguage} from "react-icons/hi2"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocale } from "next-intl";
import { navbarLocales } from "@/constants";

export function LocalesChanger() {
  const router = useRouter();
  const locale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="navbar_btn font-semibold bg-sky-700 text-white">
          <HiLanguage size={25} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 drop-shadow-lg rounded-md bg-light-2 dark:bg-dark-2 border-none">
        <DropdownMenuLabel>Change Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={locale} onValueChange={router.push}>
          {navbarLocales.map(l=>(
            <DropdownMenuRadioItem value={l.code}>{l.label}</DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
