import { styled } from "styled-components";

const Container = styled.section`
    height: 700px;
    width: 600px;
    display: flex;
    justify-content: space-evenly;
    border: 1px solid black;
    z-index: 1;
`

const CardImg = styled.img``

const DataSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`

const Text = styled.p``

const Title = styled.h3``

export default {
    Container,
    DataSection,
    CardImg,
    Text,
    Title
}