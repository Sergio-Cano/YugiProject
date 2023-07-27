import NavBar from "../../components/NavBar";
import DeckPreview from "../../components/DeckPreview";
import Styled from "./styles";
import { useDeck, useLogin } from "../../hooks";
import { useForm } from "react-hook-form";
import { Link } from "wouter";

const Decklists = ({params}) => {
    const { data: logged } = useLogin();
    const { decks = [], userDecks = [], getDeck } = useDeck();

    const { user } = params || null;

    const userDeckData = userDecks?.data || [];

    const { getSearch } = getDeck();
    const { register, handleSubmit } = useForm();

    const deckSet = user ? [...new Set(userDeckData.map(deck => {
        return JSON.stringify({ deckName: deck.deck_name, user: deck.username })
    }))] 
        :   [...new Set(decks.map(deck => {
                return JSON.stringify({ deckName: deck.deck_name, user: deck.username })
            }))]

    const deckLists = deckSet.map(deck => JSON.parse(deck))
    
    return (
        <>
            <NavBar />
            <Styled.Container>
                <Styled.Section>
                    <Styled.Form onSubmit={handleSubmit(getSearch)}>
                        <Styled.Input placeholder="Search deck by name..." {...register("deckName")} />
                    </Styled.Form>
                    <Styled.DeckSection>                      
                        {deckLists[0]?.deckName && deckLists?.map((deck, index) => {
                            return <DeckPreview key={index} deckName={deck.deckName} user={deck.user} />
                        })}
                    </Styled.DeckSection>
                </Styled.Section>
                <Link to={logged ? "/editor/create" : "/login"}><Styled.Button>Create new deck</Styled.Button></Link>
            </Styled.Container>
        </>
    )
}

export default Decklists;