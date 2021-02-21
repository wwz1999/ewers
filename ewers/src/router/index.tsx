/*
 * @Description: router of the SPA
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 23:17:19
 * @LastEditTime: 2021-02-21 21:39:26
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\router\index.tsx
 */
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { HomePage } from "../views/HomePage";
import { PersonalPage } from "../views/PersonalPage";
import { LoginPage } from "../views/LoginPage";
import { RegisterPage } from "../views/RegisterPage";
import { CourseTitlePage } from "../views/CourseTitlePage";
import { CourseVideoPage } from "../views/CourseVideoPage";
import { FreePracticePage } from "../views/FreePracticePage";
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
        <Route
          exact
          path="/coursetitlepage"
          component={CourseTitlePage}
        ></Route>
        <Route
          exact
          path="/coursevideopage/:courseTitle"
          component={CourseVideoPage}
        ></Route>
        <Route exact path="/personalpage" component={PersonalPage}></Route>
        <Route exact path="/freepracticepage" component={FreePracticePage}></Route>
        <Route exact path="/loginpage" component={LoginPage}></Route>
        <Route exact path="/registerpage" component={RegisterPage}></Route>
      </Switch>
    </Router>
  );
};
export { RouterConfig };
