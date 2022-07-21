import back from './img/back.svg'
// import { useGetType } from "../../hooks/useGetType";
import { CardStyle, Left, Number, Name, Details, Type, Back, Pokemon, Right, TypeInside, TypeName, Capturar } from './StyleHome';
import { getType } from '../../hooks/getColors';

export function Card(props) {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const {cardColor} = getType(props.pokemon?.types[0].type.name)
  
  const types = props.pokemon.types?.map((type) => {
    const {color, symbol} = getType(type.type.name)
    return <TypeInside style={{backgroundColor: color}}> <img src={symbol} alt="" /> <TypeName>{capitalizeFirstLetter(type.type.name)}</TypeName> </TypeInside>
})

  return (
    <CardStyle style={{backgroundColor: cardColor}}>
      <Left>
        <Number>#{props.pokemon?.id < 10 ? "0" + props.pokemon.id : props.pokemon.id}</Number>
        <Name>{capitalizeFirstLetter(props.pokemon.name)}</Name>
        <Details>Detalhes</Details>
        <Type>
          {types}
        </Type>
      </Left>
      <Right>
        <Capturar>Capturar!</Capturar>
        <Back src={back} alt="" />
        <Pokemon src={props.pokemon.sprites.other["official-artwork"].front_default} />
      </Right>
    </CardStyle>
  )
}
