import { styled } from "styled-components";

const Container = styled.section`
    width: 99vw;
    height: 90vh;
    display: flex;
`

const Form = styled.form`
    width: 100%;
`

const Input = styled.input`
    width: 80%;
    height: 30px;
    margin: 2%;
`

const Button = styled.button`
    margin: 5%;
    height: 50px;
`

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DeckSection = styled.section`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`

export default {
    Container,
    Form,
    Input,
    Button,
    Section,
    DeckSection
}