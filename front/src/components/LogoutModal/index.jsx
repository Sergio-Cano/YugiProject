import Styled from "./styles";
import { useAuth } from "../../hooks";

const Modal = ({ handleModal }) => {
    const { logout } = useAuth();

    return (
      <Styled.Section vertical="center">
        <Styled.Title>
          You are about to leave!
        </Styled.Title>
        <Styled.Title>Are you sure?</Styled.Title>
        <Styled.Button onClick={() => handleModal(false)}>No</Styled.Button>
        <p onClick={logout}>Yes</p>
      </Styled.Section>
    );
};

export default Modal;