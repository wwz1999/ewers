/*
 * @Description: login page of the SPA
 * @Author: Wang Wenzheng
 * @Date: 2021-01-29 23:35:05
 * @LastEditTime: 2021-02-03 01:45:01
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\LoginPage.tsx
 */
import { Card, Col, Row } from "antd";
import { Component } from "react";
import { LoginCard } from "../components/Card/LoginCard";
import { PictureCarousel } from "../components/Carousel/PictureCarousel";
import { PictureItem } from "../components/Carousel/PictureCarouselInterface";

const pics: PictureItem[] = [
  {
    picUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    description: "女人",
  },
  {
    picUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    description: "antd",
  },
  {
    picUrl:
      "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
    description: "react",
  },
];

class LoginPage extends Component {
  /**
   * @Description: try to login with the username and password
   * @Author: Wang Wenzheng
   * @Date: 2021-02-01 00:47:35
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {string} username
   * @param {string} password
   * @return {*}
   */
  tryLogin(username: string, password: string) {
    //todo: replace with real data
    console.log(username, password);
    if (username === "123" && password === "123") {
      window.location.href = "/";
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <Row justify="center">
          <Col xs={{ span: 24 }} xl={{ span: 16 }}>
            <Card>
              <Row>
                <Col xs={{ span: 0 }} xl={{ span: 16 }}>
                  <PictureCarousel items={pics} />
                </Col>
                <Col xs={{ span: 24 }} xl={{ span: 8 }}>
                  <LoginCard loginFunction={this.tryLogin} />
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
