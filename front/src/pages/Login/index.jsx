import Styled from "./styles";

const Login = () => {
    return (
        <>
            <Styled.Section>
                <Styled.Input {...{ id: "email", placeholder: "Email" }} />
                <Styled.Input {...{ id: "password", placeholder: "Password" }} />
                <Styled.Button>Sign in</Styled.Button>
            </Styled.Section>
        </>
    )
}

export default Login;