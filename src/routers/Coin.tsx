import { useLocation, useParams } from "react-router";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
        {/* 상세페이지로 바로 유입될 씨 로딩 문구 노출 (전 페이지에서 name이란 state를 못가져왔으니) */}
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}{" "}
    </Container>
  );
}
export default Coin;
