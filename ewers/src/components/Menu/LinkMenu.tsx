/*
 * @Description: menu with buttons that jump to different views
 * @Author: Wang Wenzheng
 * @Date: 2021-01-23 21:04:32
 * @LastEditTime: 2021-01-29 23:15:20
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Menu\LinkMenu.tsx
 */
import { Component } from "react";
import { jumpByPushTo } from "../../tools/RouterJump";
import { LinkMenuInfo } from "./LinkMenuInterface";

import styled from "styled-components";

class LinkMenu extends Component<LinkMenuInfo, {}> {
  constructor(props: LinkMenuInfo) {
    super(props);
    this.state = {};
  }
  makeItem(): JSX.Element[] {
    const Item = styled.li`
      display: inline;
    `;
    const Button = styled.button`
      background-color: rgba(0, 0, 0, 0);
      border-radius: 4px;
      border: none;
      font-size: ${this.props.fontStyle.fontSize};
      color: ${this.props.fontStyle.fontColor};
      padding: ${this.props.fontStyle.padding};
      &:hover {
        border: none;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.24);
      }
    `;
    const items = this.props.items.map((item) => {
      return (
        <Item key={item.url}>
          <Button
            onClick={() => {
              jumpByPushTo(item.url);
            }}
          >
            {item.title}
          </Button>
        </Item>
      );
    });
    return items;
  }
  render() {
    const MenuContainer = styled.div`
      background-color: rgba(0, 0, 0, 0);
      text-align: ${this.props.fontStyle.textAlign};
      padding: 0 10px 0;
    `;
    const List = styled.ul`
      margin: 0 auto;
      list-style: none;
    `;
    const items = this.makeItem();
    return (
      <MenuContainer>
        <List>{items}</List>
      </MenuContainer>
    );
  }
}

export { LinkMenu };
