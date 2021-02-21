/*
 * @Description: funcs help to jump to different url
 * @Author: Wang Wenzheng
 * @Date: 2021-01-24 19:59:56
 * @LastEditTime: 2021-02-21 16:58:46
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\tools\RouterJump.tsx
 */

import { Route } from "react-router";

const jumpByPushTo = (url: string) => {
  window.location.href = url;
};

const withRouter = (Component) => () => <Route component={Component} />;
export { jumpByPushTo, withRouter };
