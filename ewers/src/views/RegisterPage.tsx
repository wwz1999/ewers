/*
 * @Description: the register page of the spa
 * @Author: Wang Wenzheng
 * @Date: 2021-02-01 00:04:57
 * @LastEditTime: 2021-02-03 01:54:06
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
import styled from "styled-components";
import { jumpByPushTo } from "../tools/RouterJump";
//title of this page
const pageTitle: string = "新用户注册";
const buttonContent: string = "立即注册";
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
  {
    name: "email",
    label: "电子邮箱",
    rules: [
      {
        type: "email",
        message: "请输入正确的邮箱地址",
      },
      {
        required: true,
        message: "请输入您的邮箱地址",
      },
    ],
  },
];

class RegisterPage extends Component<FormCardInfo, {}> {
  constructor(props: FormCardInfo) {
    super(props);
    this.state = {};
  }
  /**
   * @Description: make the title of the page
   * @Author: Wang Wenzheng
   * @Date: 2021-02-03 01:37:38
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {string} title
   * @return {*}
   */
  addPageTitle(title: string): JSX.Element {
    const Title = styled.div`
      font-size: 1.5rem;
      text-align: center;
      padding-bottom: 1rem;
    `;
    return <Title>{title}</Title>;
  }
  /**
   * @Description: func try to register a new account,play as props of form card
   * @Author: Wang Wenzheng
   * @Date: 2021-02-03 01:47:32
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {any} values
   * @return {*}
   */
  tryRegister(values: any) {
    console.log(values);
    jumpByPushTo("/");
  }
  render(): JSX.Element {
    const title = this.addPageTitle(pageTitle);
    return (
      <Row justify="center">
        <Col xs={{ span: 24 }} xl={{ span: 16 }}>
          {title}
          <FormCard
            items={registerNeededInfo}
            onFinishFunction={this.tryRegister}
            buttonContent={buttonContent}
          />
        </Col>
      </Row>
    );
  }
}

export { RegisterPage };
