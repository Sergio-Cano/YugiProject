import { styled } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 15px;
  max-width: 252px;

  > * {
    font-size: 21px;
    padding: 0 12px;
  }
`;

const Label = styled.label``;

const Input = styled.input`
  height: 25px;
  border-radius: 5px;
  padding: 10px;
`;

const Error = styled.p`
  margin: 0;
  color: red;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default {
  Wrapper,
  Input,
  Error,
  Label,
};