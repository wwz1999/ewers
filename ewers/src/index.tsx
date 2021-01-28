/*
 * @Description: root tsx
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 17:40:05
 * @LastEditTime: 2021-01-29 02:15:00
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
//style file
import "./index.css";
import "antd/dist/antd.css";
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
