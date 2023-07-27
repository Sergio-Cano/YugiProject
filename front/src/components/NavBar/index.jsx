import { useLogin } from "../../hooks";
import Styled from "./styles";
import { Link } from "wouter";

const NavBar = () => {
    const { data: user } = useLogin();
    
    return (
        <Styled.Section>
            <Styled.NavOption>
                <Link to="/" >Card Database</Link>
            </Styled.NavOption>
            <Styled.NavOption>
                <Link to={user?.success ? `/decks/${user?.data}` : "/login"}>My Decks</Link>
            </Styled.NavOption>
            <Styled.NavOption>
                <Link to="/decks">Decklists</Link>
            </Styled.NavOption> 
            <Styled.NavOption>
                <Link to="/banlist">Banlist</Link>
            </Styled.NavOption>                 
            {user?.success ? <Styled.User>{user?.data}</Styled.User> : <Link to="/login">Login</Link>}
        </Styled.Section>
    )
}

export default NavBar;