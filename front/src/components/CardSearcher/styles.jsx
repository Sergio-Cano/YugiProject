import { styled } from "styled-components";

const Container = styled.div`
    max-height: 40%;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: wrap;
    gap: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`

const Input = styled.input`
    width: 80%;
    margin: 2%;
`

const Label = styled.label``

const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 30%;
`

const Select = styled.select`
    height: max-content;
    width: 100px;
`

export default {
    Container,
    Form,
    Input,
    Label,
    SelectContainer,
    Select
}