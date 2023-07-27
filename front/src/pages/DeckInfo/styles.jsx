import { styled } from "styled-components";

const Container = styled.section`
    display: flex;
    height: 90vh;
`

const Section = styled.section`
    width: 50%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const DeckName = styled.h1``

const DeckData = styled.h3``

const Button = styled.button``

export default {
    Container,
    Section,
    DeckName,
    DeckData,
    Button
}