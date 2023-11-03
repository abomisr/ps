import { AiTwotoneHome } from "react-icons/ai"
import { IoIosImages } from "react-icons/io"
import { BiSolidVideos } from "react-icons/bi"
import { RiTwitterXFill } from "react-icons/ri"

const locales = ["en", "ar"]
const navbarLocales = [
    {
        icon:"🇵🇸",
        label:"اللغة العربية",
        code:"ar",
    },
    {
        icon:"🇵🇸",
        label:"English",
        code:"en",
    },
]

const navbarLinks = [
    {
        label: "Home",
        Icon: AiTwotoneHome,
        href:"/",
    },
    {
        label: "Images",
        Icon: IoIosImages,
        href:"/images",
    },
    {
        label: "Videos",
        Icon: BiSolidVideos,
        href:"/videos",
    },
    {
        label: "Tweets",
        Icon: RiTwitterXFill,
        href:"/tweets",
    }
]

export {locales,navbarLocales,navbarLinks}