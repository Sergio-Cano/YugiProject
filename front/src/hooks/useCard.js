import { useQuery } from "react-query";
import { card } from "../services";
import { useState } from "react";

export const useCard = () => {
    const [cardList, setCardList] = useState([])
  
    const getCard = (cardSearch = {}) => {
        const [search, setSearch] = useState(cardSearch);
        
        const getSearch = (searchObj) => {
            setSearch(searchObj);
        }
        
        useQuery({
            queryKey: ["card", search],
            queryFn: Object.values(search).length > 0 ? card.getCard : card.getAllCards,
            onSuccess: res => setCardList(res.data)
        })        

        return { getSearch };
    }

    const { data: banlist } = useQuery({
        queryKey: ["banlist"],
        queryFn: card.getBanlist
    }) 

    return { cardList, getCard, banlist }
}