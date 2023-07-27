import { styled } from "styled-components";

const Container = styled.section`
    width: 95vw;
    height: 99vw;
    display: flex;
`

const Form = styled.form``

const Input = styled.input`
    width: 80%;
    margin: 2%;
`

const EditorSection = styled.section`
    height: 90%;
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Text = styled.h3``

const Button = styled.button``

const SearcherSection = styled.section`
    height: 90%;
    width: 50%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default {
    Container,
    EditorSection,
    Form,
    Input,
    Text,
    Button,
    SearcherSection
}

