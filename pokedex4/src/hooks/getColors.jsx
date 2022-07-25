import poison from '../Pages/home/img/poison.svg'
import grass from '../Pages/home/img/grass.svg'
import fire from '../Pages/home/img/fire.svg'
import water from '../Pages/home/img/water.svg'
import bug from '../Pages/home/img/bug.svg'
import normal from '../Pages/home/img/normal.svg'
import flying from '../Pages/home/img/flying.svg'
import electric from '../Pages/home/img/electric.svg'
import ground from '../Pages/home/img/ground.svg'
import dragon from '../Pages/home/img/dragon.svg'


export const getType = (type) => {
    let color = ''
    let symbol = ''
    let cardColor = ''

    switch (type) {
        case "grass":
            color = "#70B873"
            symbol = grass
            cardColor = "#729F92"
            break
        case "fire":
            color = "#F44900"
            symbol = fire
            cardColor = "#EAAB7D"
            break
        case "water":
            color = "#33A4F5"
            symbol = water
            cardColor = "#71C3FF"
            break
        case "bug":
            color = "#316520";
            symbol = bug;
            cardColor = "#76A866"
            break
        case "normal":
            color = "#8A8A8A";
            symbol = normal
            cardColor = "#BF9762"
            break
        //A partid daqui tem as cores sem fundo definido previamente
        case "poison":
            color = "#AD61AE";
            symbol = poison
            cardColor = "#c694c7"
            break
        case "flying":
            color = "#6892B0"
            symbol = flying
            cardColor = "#a0bbcf"
            break
        case "electric":
            color = "#F4D23B"
            symbol = electric
            cardColor = "#ffe364"
            break
        case "ground":
            color = "#D97745"
            symbol = ground
            cardColor = "#dd9d7d"
            break
        case "dragon":
            color = "#004170"
            symbol = dragon
            cardColor = "#0A6CBF"
            break
    }

    return { color, symbol, cardColor };
}