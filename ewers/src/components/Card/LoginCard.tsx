/*
 * @Description: a card to realize login function
 * @Author: Wang Wenzheng
 * @Date: 2021-01-29 23:44:23
 * @LastEditTime: 2021-02-01 00:50:51
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\LoginCard.tsx
 */

import { Component } from "react";
import { Card, Form, Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginFunction, LoginInfo } from "./LoginCardInterface";

class LoginCard extends Component<LoginFunction, LoginInfo> {
  constructor(props: LoginFunction) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  addUsernameInput(): JSX.Element {
    return (
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名"
        />
      </Form.Item>
    );
  }
  addPasswordInput(): JSX.Element {
    return (
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
    );
  }

  render(): JSX.Element {
    const usernameInput = this.addUsernameInput();
    const passwordInput = this.addPasswordInput();
    return (
      <Card bordered={false}>
        <div>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={(values: any) => {
              this.props.loginFunction(values.username, values.password);
            }}
          >
            {usernameInput}
            {passwordInput}
            <Form.Item>
              <Button
                type="primary"
                style={{ width: "100%" }}
                htmlType="submit"
              >
                登录
              </Button>
              <span>
                或<a href="/registerpage">立即注册!</a>
              </span>
            </Form.Item>
          </Form>
        </div>
      </Card>
    );
  }
}

export { LoginCard };
