import { styled } from "styled-components";

const Section = styled.section`
    height: 100%;
    width: 90%;
    display: flex;
    flex-flow: wrap;
    padding: 2%;
    gap: 10px;
    border: 1px solid black;
    overflow-y: scroll;
`

const CardImg = styled.img`
    height: 90px;
    width: 60px;
`

export default {
    Section,
    CardImg
}