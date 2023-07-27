import React from "react";
import { useForm } from "react-hook-form";
import Styled from "./styles";

const Form = ({ onSubmit, children, button }) => {
  const { handleSubmit, register, formState } = useForm();

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Styled.Fields>
        {React.Children.map(children, (child) => {
          const { name } = child.props;

          if (!name) return child;

          return React.createElement(child.type, {
            ...{
              ...child.props,
              register: register,
              errors: formState.errors[name],
              key: name
            },
          });
        })}
      </Styled.Fields>

      <button type="submit">{button}</button>
    </Styled.Form>
  );
};

export default Form;