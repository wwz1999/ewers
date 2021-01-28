/*
 * @Description: personal page of the SPA
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 21:51:05
 * @LastEditTime: 2021-01-29 02:23:54
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\PersonalPage.tsx
 */

import { Component } from "react";
import { Row, Col, Card } from "antd";
class PersonalPage extends Component {
  render() {
    return (
      <div>
        <Row justify="center">
          <Col xs={{ span: 24 }} xl={{ span: 16 }}>
            <Card >personal</Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export { PersonalPage };
