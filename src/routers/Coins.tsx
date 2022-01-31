import { useParams } from "react-router-dom";

interface Params {
  coinId: string;
}

function Coins() {
  const { coinId } = useParams<Params>();
  return <h1>Coin: {coinId}</h1>;
}
export default Coins;
