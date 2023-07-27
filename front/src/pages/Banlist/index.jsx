import CardGrid from "../../components/CardGrid";
import NavBar from "../../components/NavBar";
import { useCard } from "../../hooks";
import Styled from "./styles";

const Banlist = () => {
    const forbidden = [];
    const limited = [];
    const semilimited = [];

    const { banlist } = useCard();

    const ban = banlist?.data || [];

    for(let card of ban){
        if(card.status === "Banned") forbidden.push(card);
        if(card.status === "Limited") limited.push(card);
        if(card.status === "Semi-Limited") semilimited.push(card);
    }

    return (
        <>
            <NavBar />
            <Styled.Container>
                <Styled.Section>
                    <Styled.Title>Forbidden</Styled.Title>
                    <CardGrid cardList={forbidden}/>
                </Styled.Section>
                <Styled.Section>
                    <Styled.Title>Limited</Styled.Title>
                    <CardGrid cardList={limited} />
                </Styled.Section>
                <Styled.Section>
                    <Styled.Title>Semi-Limited</Styled.Title>
                    <CardGrid cardList={semilimited}/>
                </Styled.Section>
            </Styled.Container>
        </>
    )
}

export default Banlist;