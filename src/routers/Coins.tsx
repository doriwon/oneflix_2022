import styled from "styled-components";
import { useParams } from "react-router-dom";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
interface Params {
  coinId: string;
}

function Coins() {
  const { coinId } = useParams<Params>();
  return <Title>Coin: {coinId}</Title>;
}
export default Coins;
