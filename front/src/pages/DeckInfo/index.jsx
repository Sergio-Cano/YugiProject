import Styled from "./styles";
import NavBar from "../../components/NavBar";
import CardGrid from "../../components/CardGrid";
import { useDeck, useLogin } from "../../hooks";
import { Link } from "wouter";

const DeckInfo = ({params}) => {
    const deckName = params.deck;
    const { decks = [], getDeck, deleteDeck } = useDeck();
    getDeck({deckName: deckName});

    const deckUser = decks[0]?.username;
    const { data: user } = useLogin();

    const removeDeck = (event) => {
        const deckName = event.target.value
        deleteDeck({deckName: deckName})
    }

    return (
        <>
            <NavBar />
            <Styled.Container>
                <Styled.Section>
                    <Styled.DeckName>{deckName}</Styled.DeckName>
                    <CardGrid cardList={decks} />
                </Styled.Section>
                <Styled.Section>
                    <Styled.DeckData>Deck from {deckUser}</Styled.DeckData>
                    <Styled.DeckData>Deck price: </Styled.DeckData>
                    <Styled.DeckData>Cards: {decks.length}</Styled.DeckData>
                    {user?.data === deckUser && <>
                        <Link to={`/editor/${deckName}`}><Styled.Button>Edit Deck</Styled.Button></Link>
                        <Styled.Button value={deckName} onClick={removeDeck}>Delete Deck</Styled.Button>
                    </>}
                </Styled.Section>
            </Styled.Container>
        </>
    )
}

export default DeckInfo;