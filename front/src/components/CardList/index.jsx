import Styled from "./styles";
import Card from "../Card";

const Cardlist = ({cardList = [], set}) => {
    
    const onClickFn = (card) => {
        set(card);
    }
    
    return (
        <Styled.Section>
            {cardList.map((card, index) => {
                return <Card key={`${index} - ${card.card_name}`} card={card} onClick={onClickFn}/>
            })}
        </Styled.Section>
    )
}

export default Cardlist;