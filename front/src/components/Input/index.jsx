import Styled from './styles'

const Input = ({label, name, register, validation, errors, ...rest }) => {
  return (
    <Styled.Wrapper>
        <Styled.Label htmlFor={name}>{label}</Styled.Label>
        <Styled.Input {...{ id: name, ...register(name, validation), ...rest }} />
        <Styled.Error>{errors?.message}</Styled.Error>
    </Styled.Wrapper>
  );
};

export default Input;