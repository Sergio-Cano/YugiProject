import { Link, useLocation } from "wouter";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

import { validation } from "../../constants";
import { useAuth, useLogin } from "../../hooks";

const Login = () => {
    const { data, isLoading } = useLogin();
    const { login } = useAuth();
    const [ , setLocation] = useLocation();

    if(isLoading) return <h3>Loading...</h3>

    data?.success && setLocation("/");

    return (
        <>
            <Title title="Login"/>
            <Form onSubmit={login} button="Sign in">
                <Input name="email" placeholder="email@domain.com" validation={ validation.required } />
                <Input name="password" type="password" placeholder="********" validation={ validation } />
            </Form>

            <Footer>
                <Link to="/register">If you don't have an account yet, click here to sign up</Link>
            </Footer>
        </>
    )
}

export default Login;