import { useState } from "react";
import Styled from "./styles";

const CardGrid = ({cardList = [], set, editable = false }) => {
    const [refreshState, setRefreshState] = useState(0);
    
    const currentCards = cardList;

    const editFn = (event) => {
        if(editable){
            const cardName = event.target.alt;
            for(let card of currentCards){
                if(card.card_name === cardName){
                    currentCards.splice(currentCards.indexOf(card), 1);
                    set(currentCards);
                    setRefreshState(refreshState + 1);
                    break;
                }
            }
        }
    }

    return (
        <Styled.Section>
            {cardList?.map((card, index) => {
                return <Styled.CardImg key={index} src={`/src/images/small/${card.card_id || card.id}.jpg`} alt={card.card_name || card.name} onClick={editFn} />
            })}
        </Styled.Section>
    )
}

export default CardGrid;