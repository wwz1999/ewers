/*
 * @Description: the register page of the spa
 * @Author: Wang Wenzheng
 * @Date: 2021-02-01 00:04:57
 * @LastEditTime: 2021-02-01 01:41:37
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\RegisterPage.tsx
 */
import { Component } from "react";
import { FormCard } from "../components/Card/FormCard";
import { Row, Col } from "antd";
import {
  FormCardInfo,
  FormCardItem,
} from "../components/Card/FormCardInterface";

//info needed in register
// used to make form as config
const registerNeededInfo: FormCardItem[] = [
  {
    name: "username",
    label: "用户名",
    rules: [
      {
        required: true,
        message: "请输入用户名",
      },
    ],
  },
  {
    name: "password",
    label: "密码",
    rules: [
      {
        required: true,
        message: "请输入密码",
      },
    ],
  },
  {
    name: "confirmPassword",
    label: "确认密码",
    dependencies: ["password"],
    rules: [
      {
        required: true,
        message: "请确认密码",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject("密码不一致");
        },
      }),
    ],
  },
];

class RegisterPage extends Component<FormCardInfo, {}> {
  constructor(props: FormCardInfo) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    return (
      <Row justify="center">
        <Col xs={{ span: 24 }} xl={{ span: 16 }}>
          <FormCard items={registerNeededInfo} />
        </Col>
      </Row>
    );
  }
}

export { RegisterPage };
