import Styled from "./styles";
import { ATTRIBUTES, CARD_TYPES, TYPES, LEVEL_RANK, LINK, SCALE } from "../../constants";
import { useForm } from "react-hook-form";
import { forwardRef, useEffect, useRef, useState } from "react";

const CustomSelect = forwardRef(({register, label, name, values}, reference) => {
    return (
        <Styled.SelectContainer>
            <Styled.Label htmlFor={name}>{label}</Styled.Label>
            <Styled.Select key={name} id={name} name={name} ref={reference} {...register(name)}>
                {values.map(element => {
                    return (
                        <option key={element} value={element}>{element}</option>
                    )
                })}
            </Styled.Select>
        </Styled.SelectContainer>
    )
})

const CardSearcher = ({onSubmit}) => {
    const { register, handleSubmit } = useForm();
    const reference = useRef(null);

    const handleForm = (data) => {
        const formArr = Object.entries(data);
        const filledEntries = [];
        for(let field of formArr){
            if(field[1] !== "") filledEntries.push(field)
        }
        const filledForm = Object.fromEntries(filledEntries);
        return filledForm;
    }

    const submit = (data) => {
        onSubmit(handleForm(data));
    }
        
    return (
        <Styled.Form onSubmit={handleSubmit(submit)}>
            <Styled.Input name="cardName" placeholder="Search card by name..." {...register("cardName")}/>
                <Styled.Container>
                    <CustomSelect ref={reference} label="Card Type" name="cardType" values={CARD_TYPES} register={register}/>
                    <CustomSelect ref={reference} label="Monster Type" name="type" values={TYPES} register={register}/>
                    <CustomSelect ref={reference} label="Attribute" name="attribute" values={ATTRIBUTES} register={register}/>
                    <CustomSelect ref={reference} label="Level/Rank" name="levelRank" values={LEVEL_RANK} register={register}/>
                    <CustomSelect ref={reference} label="Link Rating" name="linkRating" values={LINK} register={register}/>
                    <CustomSelect ref={reference} label="Scale" name="scale" values={SCALE} register={register}/>
                </Styled.Container>
            <Styled.Input name="archetype" placeholder="Or search by archetype..." {...register("archetype")}/>
            <button type="submit">Search</button>
        </Styled.Form>
    )
}

export default CardSearcher;