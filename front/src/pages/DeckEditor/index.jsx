import Styled from "./styles";
import NavBar from "../../components/NavBar";
import CardSearcher from "../../components/CardSearcher";
import CardList from "../../components/CardList";
import CardGrid from "../../components/CardGrid";
import { cardParser } from "../../utils/cardParser"
import { useCard, useDeck } from "../../hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";

const DeckEditor = ({params = {}}) => {
    const deckName = params.deck || null;
    const { register, handleSubmit } = useForm();

    const [newDeck, setNewDeck] = useState([]);

    const { decks = [], setDecks, getDeck, createDeck, updateDeck } = useDeck({ refetchOnWindowFocus: false});
    deckName && getDeck({deckName: deckName});

    const { cardList, getCard } = useCard();
    const { getSearch } = getCard();

    const addCard = (card) => {
        deckName ? setDecks([...decks, card]) : setNewDeck([...newDeck, card])
    }
    
    const update = ({currentDeckName}) => {
        const parsedDecklist = cardParser(decks);

        for(let card of parsedDecklist){
            card.deckName = currentDeckName;
        }

        const payload = {
            originalDeckName: deckName,
            deckList: parsedDecklist
        }

        updateDeck(payload);
    }

    const create = ({currentDeckName}) => {
        const parsedDecklist = cardParser(newDeck);

        for(let card of parsedDecklist){
            card.deckName = currentDeckName;
        }

        const payload = {
            deckList: parsedDecklist
        }

        createDeck(payload)
    }
    
    return (
        <>
            <NavBar />
            <Styled.Container>
                <Styled.EditorSection>
                    <Styled.Form onSubmit={deckName ? handleSubmit(update) : handleSubmit(create)}>
                        <Styled.Input placeholder="Deck Name" defaultValue={params.deck || ""} {...register("currentDeckName")} />
                        <Styled.Button type="submit">Save Changes</Styled.Button>
                    </Styled.Form>
                    <CardGrid cardList={deckName ? decks : newDeck} set={deckName ? setDecks : setNewDeck} editable={true} />
                    <Styled.Text>Deck Prize: 100</Styled.Text>
                </Styled.EditorSection>
                <Styled.SearcherSection>
                    <CardSearcher onSubmit={getSearch} />
                    <CardList cardList={cardList} set={addCard}/>
                </Styled.SearcherSection>
            </Styled.Container>
        </>
    )
}

export default DeckEditor;