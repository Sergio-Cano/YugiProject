import { styled } from "styled-components";

const Container = styled.section`
    height: 99vh;
    display: flex;
    justify-content: space-between;
`

const Section = styled.section`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export default {
    Container,
    Section
}