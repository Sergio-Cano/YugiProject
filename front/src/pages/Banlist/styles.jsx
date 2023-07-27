import { styled } from "styled-components";

const Container = styled.section`
    height: 99vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2%;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    align-items: center;
    border: 1px solid black;
`

const Title = styled.h1``

export default {
    Container,
    Section,
    Title
}