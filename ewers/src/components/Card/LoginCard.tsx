/*
 * @Description: a card to realize login function
 * @Author: Wang Wenzheng
 * @Date: 2021-01-29 23:44:23
 * @LastEditTime: 2021-01-30 17:57:57
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\LoginCard.tsx
 */

import { Component } from "react";
import { Card, Form, Button } from "antd";
import { addFormItem } from "../../tools/FormItemMaker";
import { LoginInfo } from "./LoginCardInterface";

const formItems = [
  {
    type: "username",
    inline: true,
    label: "用户名",
    name: "username",
    rules: [{ required: true, message: "请输入用户名" }],
  },
  {
    type: "password",
    inline: true,
    label: "密码",
    name: "password",
    rules: [{ required: true, message: "请输入密码" }],
  },
];

class LoginCard extends Component<object, LoginInfo> {
  constructor(props: object) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  /**
   * @Description: try to log in with the usernam and pwd
   * @Author: Wang Wenzheng
   * @Date: 2021-01-30 16:59:47
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {string} username
   * @param {string} password
   * @return {*}
   */
  tyrLogin(username: string, password: string) {
    //todo: replace with real data
    console.log(username, password);
    if (username === "123" && password === "123") {
      window.location.href = "/";
    }
  }
  render(): JSX.Element {
    const items = formItems.map((value, index) => {
      return addFormItem(value, index);
    });
    return (
      <Card bordered={false}>
        <div>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={(values: any) => {
              this.tyrLogin(values.username, values.password);
            }}
          >
            {items}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    );
  }
}

export { LoginCard };
