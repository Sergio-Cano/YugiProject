import Styled from "./styles";

const Register = () => {
    return (
        <>
            <Styled.Section>
                <Styled.Input {...{ id: "username", placeholder: "Username" }} />
                <Styled.Input {...{ id: "email", placeholder: "Email" }} />
                <Styled.Input {...{ id: "password", placeholder: "Password" }} />
                <Styled.Button>Sign up</Styled.Button>
            </Styled.Section>
        </>
    )
}

export default Register;