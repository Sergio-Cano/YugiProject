import Styled from "./styles";

const Card = ({card, onClick}) => {

    const onClickListener = () => {
        onClick(card)
    }

    return (
        <Styled.Container onClick={onClickListener}>
            <Styled.CardImage src={`/src/images/normal/${card.card_id}.jpg`} alt="Img" />
            <Styled.DataSection>
                <Styled.CardName >{card.card_name}</Styled.CardName>
            </Styled.DataSection>
        </Styled.Container>
    )
}

export default Card;