/*
 * @Description: login page of the SPA
 * @Author: Wang Wenzheng
 * @Date: 2021-01-29 23:35:05
 * @LastEditTime: 2021-01-30 17:38:35
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\LoginPage.tsx
 */
import { Card, Col, Row } from "antd";
import { Component } from "react";
import { LoginCard } from "../components/Card/LoginCard";

class LoginPage extends Component {
  
  render(): JSX.Element {
    return (
      <div>
        <Row justify="center">
          <Col xs={{ span: 24 }} xl={{ span: 16 }}>
            <Card>
              <Row>
                <Col xs={{ span: 0 }} xl={{ span: 16 }}>
                  <LoginCard />
                </Col>
                <Col xs={{ span: 24 }} xl={{ span: 8 }}>
                  <LoginCard />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export { LoginPage };
