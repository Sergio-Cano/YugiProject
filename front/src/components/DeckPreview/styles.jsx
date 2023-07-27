import { styled } from "styled-components";

const Container = styled.section`
    width: 100%;
    display: flex;
    padding: 2%;
    margin-left: 10%;
    border-bottom: 1px solid black;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const DataText = styled.h3``

export default {
    Container,
    Section,
    DataText
}