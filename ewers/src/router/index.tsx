/*
 * @Description: router of the SPA
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 23:17:19
 * @LastEditTime: 2021-01-23 13:15:52
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\router\index.tsx
 */
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { HomePage } from "../views/HomePage";
import { PersonalPage } from "../views/PersonalPage";

const history = createBrowserHistory();
/**
 * @Description:
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 23:47:38
 * @LastEditTime: Do not edit
 * @LastEditors: Wang Wenzheng
 * @param {*}
 * @return {*}
 */
const RouterConfig: React.FC<{}> = (): any => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/personalpage" component={PersonalPage}></Route>
      </Switch>
    </Router>
  );
};
export { RouterConfig };
