import { styled } from "styled-components";

const Section = styled.section`
    height: 90vh;
    width: 90vw;

    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Input = styled.input`
    height: 25px;
    width: 90%;

    border-radius: 5%;
`

const Button = styled.button`
    height: 10%;
    width: max-content;
`

export default {
    Section,
    Input,
    Button
}