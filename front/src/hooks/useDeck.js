import { useState } from "react"
import { useMutation, useQuery } from "react-query";
import { deck } from "../services";
import axios from "axios";

export const useDeck = (options = {}) => {
    const [decks, setDecks] = useState([]);
    
    const getDeck = (deckName = {}) => {
        const [search, setSearch] = useState(deckName);
        
        const getSearch = (searchObj) => {
            setSearch(searchObj);
        }

        useQuery({
            queryKey: ["decks", search],
            queryFn: Object.values(search).length > 0 ? deck.getDeckByName : deck.getAllDecks,
            onSuccess: res => setDecks(res.data),
            ...options
        })

        return { getSearch }
    }

    /* const getCost = (deck) => {
        for(let card of deck){
            useQuery({
                queryKey: ["cost"],
                queryFn: () => axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(card.card_name)}`).then(res => res.data),
                onSuccess: res => setCost(cost + res.card_prices[0].tcgplayer_price)
            })
        }
    } */

    const { data: userDecks } = useQuery({
        queryKey: ["User decks"],
        queryFn: deck.getDeckByUser
    }) 

    const { mutate: createDeck } = useMutation({
        mutationFn: deck.createDeck,
        onSettled: res => console.log(res)
    })

    const { mutate: updateDeck } = useMutation({
        mutationFn: deck.updateDeck,
        onSettled: res => console.log(res)
    })

    const { mutate: deleteDeck } = useMutation({
        mutationFn: deck.deleteDeck,
        onSettled: res => console.log(res)
    })

    return { decks, setDecks, getDeck, userDecks, createDeck, updateDeck, deleteDeck }
}