import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routers/Coin";
import Coins from "./routers/Coins";

interface IRouterProps {}
function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        {/*Switch 한번에 하나의 Route를 렌더링할 수 있는 방법 */}
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
