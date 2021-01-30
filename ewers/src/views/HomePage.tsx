/*
 * @Description:
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 18:51:00
 * @LastEditTime: 2021-01-29 23:39:26
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\HomePage.tsx
 */

import { Component } from "react";

import { Button } from "antd";

class HomePage extends Component {
  handleClick() {
    console.log("asd", "asd");
  }
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Button
          type="primary"
          onClick={() => {
            this.handleClick();
          }}
        >
          就这？
        </Button>
      </div>
    );
  }
}

export { HomePage };
