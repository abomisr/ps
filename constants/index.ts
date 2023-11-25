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
    {
        title: "kafr_qasim_massacre.title",
        desc: "kafr_qasim_massacre.desc",
        date: "1956-10-29",
        target: "kafr_qasim_massacre.target",
        image: "kafr_qasim_massacre.jpg",
        victims: [
            {
                number: 49,
                type: "persons",
            },
            {
                number: 18,
                type: "injured",
            },
        ],
        resources:[
            {
                link:"https://ar.wikipedia.org/wiki/%D9%85%D8%B0%D8%A8%D8%AD%D8%A9_%D9%83%D9%81%D8%B1_%D9%82%D8%A7%D8%B3%D9%85",
                type:"wikipedia",
            },
            {
                link:"https://aawsat.com/home/article/3787791/%D8%A8%D8%B9%D8%AF-66-%D8%B9%D8%A7%D9%85%D8%A7%D9%8B-%D8%A7%D9%84%D8%A8%D8%B1%D9%88%D8%AA%D9%88%D9%83%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D8%A9-%D8%AA%D9%83%D8%B4%D9%81-%D8%A3%D8%B3%D8%B1%D8%A7%D8%B1-%D9%85%D8%AC%D8%B2%D8%B1%D8%A9-%C2%AB%D9%83%D9%81%D8%B1-%D9%82%D8%A7%D8%B3%D9%85%C2%BB",
                type:"website",
            },
        ]
    },
    {
        title: "khan_yunis_massacre.title",
        desc: "khan_yunis_massacre.desc",
        date: "1956-11-03",
        target: "khan_yunis_massacre.target",
        image: "khan_yunis_massacre.jpg",
        victims: [
            {
                number: 275,
                type: "at_least",
            }
        ],
        resources:[
            {
                link:"https://ar.wikipedia.org/wiki/%D9%85%D8%B0%D8%A8%D8%AD%D8%A9_%D8%AE%D8%A7%D9%86_%D9%8A%D9%88%D9%86%D8%B3",
                type:"wikipedia",
            },
            {
                link:"https://arabic.rt.com/middle_east/1512358-%D9%85%D8%B0%D8%A8%D8%AD%D8%A9-%D9%81%D9%8A-%D9%87%D9%88%D8%A7%D9%85%D8%B4-%D8%BA%D8%B2%D8%A9/",
                type:"website",
            },
        ]
    },
    {
        title: "rafah_massacre.title",
        desc: "rafah_massacre.desc",
        date: "1956-11-12",
        target: "rafah_massacre.target",
        victims: [
            {
                number: 111,
                type: "persons",
            }
        ],
        resources:[
            {
                link:"https://ar.wikipedia.org/wiki/%D9%85%D8%AC%D8%B2%D8%B1%D8%A9_%D8%B1%D9%81%D8%AD_1956",
                type:"wikipedia",
            }
        ]
    },
    {
        title: "bahr_al_baqar_massacre.title",
        desc: "bahr_al_baqar_massacre.desc",
        date: "1970-4-08",
        target: "bahr_al_baqar_massacre.target",
        image: "bahr_al_baqar_massacre.jpg",
        victims: [
            {
                number: 30,
                type: "children",
            },
            {
                number: 61,
                type: "injured",
            }
        ],
        resources:[
            {
                link:"https://ar.wikipedia.org/wiki/%D9%85%D8%AC%D8%B2%D8%B1%D8%A9_%D8%A8%D8%AD%D8%B1_%D8%A7%D9%84%D8%A8%D9%82%D8%B1",
                type:"wikipedia",
            }
        ]
    },
]

export {locales,navbarLocales,navbarLinks,crimes}