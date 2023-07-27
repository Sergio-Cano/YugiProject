import Form from "../../components/Form";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

import { Link, useLocation } from "wouter";
import { useAuth, useLogin } from "../../hooks";
import { validation } from "../../constants";

const Register = () => {
    const { data } = useLogin();
    const { register } = useAuth();
    const [ , setLocation] = useLocation();

    if(data?.success) setLocation("/");
    
    return (
        <>
            <Title title="Register"/>
            <Form onSubmit={register} button="Sign up">
                <Input name="username" placeholder="Username" validation={ validation.required } />
                <Input name="email" placeholder="email@domain.com" validation={ validation.required } />
                <Input name="password" type="password" placeholder="********" validation={ validation } />
            </Form>

            <Footer>
                <Link to="/login">If you have an account, click here to login</Link>
            </Footer>
        </>
    )
}

export default Register;