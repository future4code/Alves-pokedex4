import { useEffect, useState } from "react";
import poison from '../Pages/home/img/poison.svg'
import grass from '../Pages/home/img/grass.svg'
import fire from '../Pages/home/img/fire.svg'
import water from '../Pages/home/img/water.svg'
import bug from '../Pages/home/img/bug.svg'

export function useGetType(type) {
    const [cardColor, setCardColor] = useState('')
    const [symbol, setSymbol] = useState('')
    const [color, setColor] = useState('')

    useEffect(() => {
        switch (type) {
            case "grass":
                setColor("#70B873")
                setSymbol(grass)
                setCardColor("#729F92")
                break
            case "fire":
                setColor("#F44900")
                setSymbol(fire)
                setCardColor("#EAAB7D")
                break
            case "water":
                setColor("#33A4F5")
                setSymbol(water)
                setCardColor("#71C3FF")
                break
            case "bug":
                setColor("#316520")
                setSymbol(bug)
                setCardColor("#76A866")
                break
            case "poison":
                setColor("000")
                setSymbol(poison)
                setCardColor("#AD61AE")
                break
            default:
                setColor("green")
                setSymbol(poison)
                setCardColor("green")
        }
    })

    return {cardColor, color, symbol};
}
