/*
 * @Description: the nav of the SPA
 * @Author: Wang Wenzheng
 * @Date: 2021-01-23 12:43:16
 * @LastEditTime: 2021-01-29 02:15:54
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Navbar\Navbar.tsx
 */

import { Col, Row, Image } from "antd";
import { Component } from "react";

import styled from "styled-components";
import { LinkMenu } from "../Menu/LinkMenu";
//import data structure
import { NavbarInfo } from "./NavbarInterface";

//style of the navbar
const NavbarContainer = styled.div`
  background: #f03726;
  color: #ffffff;
  margin: 0 0 16px 0;
`;

//needed info of the navbar
const navInfo: NavbarInfo = {
  //* attributes of logo Image
  logo: {
    src:
      "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
    alt: "logo ",
    preview: false,
  },
  //* attributes of title
  title: {
    content: "TITLE",
    style: {
      fontSize: "40px",
      verticalAlign: "middle",
      display: "table-cell",
    },
  },
  //* attributes of sublinks
  subLinks: {
    fontStyle: {
      fontColor: "#000000",
      fontSize: "16px",
      textAlign: "right",
    },
    items: [
      {
        title: "title1",
        url: "/",
      },
      {
        title: "title2",
        url: "/personalpage",
      },
    ],
  },
  mainLinks: {
    fontStyle: {
      fontColor: "#ffffff",
      fontSize: "24px",
      textAlign: "left",
    },
    items: [
      {
        title: "title1",
        url: "/",
      },
      {
        title: "title2",
        url: "/personalpage",
      },
    ],
  },
};
class Navbar extends Component<object, NavbarInfo> {
  /**
   * @Description: constructor
   * @Author: Wang Wenzheng
   * @Date: 2021-01-23 14:26:42
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {object} props
   * @return {*}
   */
  constructor(props: object) {
    super(props);
    this.state = navInfo;
  }

  /**
   * @Description: config logo image
   * @Author: Wang Wenzheng
   * @Date: 2021-01-23 15:20:35
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {*}
   * @return {JSX.Element}
   */
  addLogo(): JSX.Element {
    const logo = this.state.logo;
    return <Image preview={logo.preview} alt={logo.alt} src={logo.src} />;
  }

  /**
   * @Description: config title of the SPA
   * @Author: Wang Wenzheng
   * @Date: 2021-01-23 16:56:28
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {*}
   * @return {JSX.Element}
   */
  addTitle(): JSX.Element {
    return <div style={this.state.title.style}>{this.state.title.content}</div>;
  }
  /**
   * @Description:
   * @Author: Wang Wenzheng
   * @Date: 2021-01-28 01:18:03
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {object} items
   * @param {object} fontStyle
   * @return {JSX.Element}
   */
  addMenu(
    items: { title: string; url: string }[],
    fontStyle: { fontSize: string; fontColor: string; textAlign: string }
  ): JSX.Element {
    return <LinkMenu items={items} fontStyle={fontStyle} />;
  }

  /**
   * @Description: render the navbar
   * @Author: Wang Wenzheng
   * @Date: 2021-01-23 14:23:06
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {*}
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    //add a logo
    const logo = this.addLogo();
    //add a title
    const title = this.addTitle();
    //add a submenu
    const subMenu = this.addMenu(
      this.state.subLinks.items,
      this.state.subLinks.fontStyle
    );
    const mainMenu = this.addMenu(
      this.state.mainLinks.items,
      this.state.mainLinks.fontStyle
    );
    return (
      <NavbarContainer>
        <Row gutter={8} align="middle">
          <Col xs={{ span: 24 }} xl={{ span: 12 }}>
            <div>
              <Row>
                <Col span={2}>{logo}</Col>
                <Col span={22}>{title}</Col>
              </Row>
            </div>
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 12 }}>
            <div>
              <Row justify="end">
                <Col span={24}>{subMenu}</Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }}>{mainMenu}</Col>
        </Row>
      </NavbarContainer>
    );
  }
}

export { Navbar };
