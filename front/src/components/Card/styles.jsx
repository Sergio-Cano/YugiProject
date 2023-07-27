import { styled } from "styled-components";

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2%;
    border-bottom: 1px solid black;
`

const CardImage = styled.img`
    width: 100px;
    height: 150px;
`

const DataSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10%;
`

const CardName = styled.h3``

export default {
    Container,
    CardImage,
    DataSection,
    CardName
}