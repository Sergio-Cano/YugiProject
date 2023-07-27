import Styled from "./styles";

const CardModal = ({card}) => {

    return (
        <Styled.Container>
            <Styled.CardImg src={`/src/images/crop/${card.card_id}.jpg`} alt={card.card_name} />
            <Styled.DataSection>
                <Styled.Title>{card.card_name}</Styled.Title>
                <Styled.Text>Level/Rank/Link {card.link_rating || card.level_rank}</Styled.Text>
                <Styled.Text>{card.card_description}</Styled.Text>
                <Styled.Text>ATK/{card.attack}  DEF/{card.defense}</Styled.Text>
            </Styled.DataSection>
        </Styled.Container>
    )
}

export default CardModal;