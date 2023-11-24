export type localesType = "en" | "ar"


export type crimeCard = {
    title:string,
    desc:string,
    date:string,
    target:string,
    image: string,
    victims: {
        number:number,
        type:string,
    }[],
    resources:{
        link:string,
        type:string,
    }[],
}