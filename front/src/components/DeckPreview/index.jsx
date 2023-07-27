import { Link } from "wouter";
import Styled from "./styles";

const DeckPreview = ({deckName, user}) => {

    return (
        <Link to={`/deck/${deckName}`}>
            <Styled.Container>
                <Styled.Section>
                    <Styled.DataText>Deck: {deckName}</Styled.DataText>
                    <Styled.DataText>Creator: {user}</Styled.DataText>
                    <Styled.DataText>Price: </Styled.DataText>
                </Styled.Section>
                
            </Styled.Container>
        </Link>
    )
}

export default DeckPreview;