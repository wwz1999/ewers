/*
 * @Description: the nav of the SPA
 * @Author: Wang Wenzheng
 * @Date: 2021-01-23 12:43:16
 * @LastEditTime: 2021-02-03 01:33:36
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Navbar\Navbar.tsx
 */

import { Col, Row, Image } from "antd";
import { Component } from "react";

import styled from "styled-components";
import { GLOBAL } from "../../global";
import { LinkMenu } from "../Menu/LinkMenu";
import { LinkMenuItem, LinkMenuItemStyle } from "../Menu/LinkMenuInterface";
//import data structure
import { NavbarInfo } from "./NavbarInterface";

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
    content: GLOBAL.title,
    style: {
      fontSize: "2.5rem",
    },
  },
  //* attributes of sublinks
  subLinks: {
    fontStyle: {
      fontColor: "#000000",
      fontSize: "16px",
      textAlign: "right",
      padding: "0.125rem 1rem",
    },
    items: [
      {
        title: "个人中心",
        url: "/personalpage",
      },
      {
        title: "登录",
        url: "/loginpage",
      },
    ],
  },
  mainLinks: {
    fontStyle: {
      fontColor: "#0066ff",
      fontSize: "24px",
      textAlign: "left",
      padding: "0.5rem 4rem",
    },
    items: [
      {
        title: "找大佬",
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
    const Title = styled.div`
      font-size: ${this.state.title.style.fontSize};
      padding: 0 1rem;
    `;
    return <Title>{this.state.title.content}</Title>;
  }
  /**
   * @Description:
   * @Author: Wang Wenzheng
   * @Date: 2021-01-28 01:18:03
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {LinkMenuItem[]} items
   * @param {LinkMenuItemStyle} fontStyle
   * @return {JSX.Element}
   */
  addMenu(items: LinkMenuItem[], fontStyle: LinkMenuItemStyle): JSX.Element {
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
    const NavbarContainer = styled.div`
      background: #fff;
      color: #0066ff;
      margin: 0 0 16px 0;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.24);
    `;

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
              <Row align="middle">
                <Col span={2}>{logo}</Col>
                <Col span={22}>{title}</Col>
              </Row>
            </div>
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 12 }}>
            <div>
              <Row justify="end" align="middle">
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
