/*
 * @Description: root tsx
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 17:40:05
 * @LastEditTime: 2021-01-29 14:00:42
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
//style file
import "antd/dist/antd.css";
import "./index.css";
//components
import { RouterConfig } from "./router/index";
import { Navbar } from "./components/Navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <RouterConfig />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
