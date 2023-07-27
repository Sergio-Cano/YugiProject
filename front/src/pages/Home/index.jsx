import Cardlist from "../../components/CardList";
import CardSearcher from "../../components/CardSearcher";
import Styled from "./styles";
import { useCard } from "../../hooks";
import NavBar from "../../components/NavBar";

const Home = () => {
    const { cardList, getCard } = useCard();

    const { getSearch } = getCard();

    return (
      <>
        <NavBar />
        <Styled.Container>
          <Styled.Section>
            <CardSearcher onSubmit={getSearch} />
            <Cardlist cardList={cardList} />
          </Styled.Section>
        </Styled.Container>
      </>
    );
};

export default Home;