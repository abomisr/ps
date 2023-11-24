import { AiTwotoneHome } from "react-icons/ai"
import { IoIosImages } from "react-icons/io"
import { BiSolidVideos } from "react-icons/bi"
import { RiTwitterXFill } from "react-icons/ri"
import { crimeCard } from "@/app/types"

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

const crimes:crimeCard[] = [
    {
        title: "lod_massacre.title",
        desc: "lod_massacre.desc",
        date: "1948-07-11",
        target: "lod_massacre.target",
        image: "lod_massacre.jpg",
        victims: [
            {
                number: 426,
                type: "persons",
            }
        ],
        resources:[
            {
                link:"https://ar.wikipedia.org/wiki/%D9%85%D8%B0%D8%A8%D8%AD%D8%A9_%D8%A7%D9%84%D9%84%D8%AF",
                type:"wikipedia",
            }
        ]
    },
]

export {locales,navbarLocales,navbarLinks,crimes}