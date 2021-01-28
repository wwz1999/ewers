/*
 * @Description: menu with buttons that jump to different views
 * @Author: Wang Wenzheng
 * @Date: 2021-01-23 21:04:32
 * @LastEditTime: 2021-01-29 02:03:18
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Menu\LinkMenu.tsx
 */
import { Component } from "react";
import { jumpByPushTo } from "../../tools/RouterJump";
import { LinkMenuInfo } from "./LinkMenuInterface";

//style of the link menu
import styled from "styled-components";
const MenuContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  text-align: right;
  padding: 0 10px 0;
`;
const List = styled.ul`
  margin: 0 auto;
  list-style: none;
`;
const Item = styled.li`
  display: inline;
`;
const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 4px;
  border: none;
  &:hover {
    border: none;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.24);
  }
`;
class LinkMenu extends Component<LinkMenuInfo, {}> {
  constructor(props: LinkMenuInfo) {
    super(props);
    this.state = {};
  }
  makeItem(): JSX.Element[] {
    const style = this.props.fontStyle;
    const items = this.props.items.map((item) => {
      return (
        <Item key={item.url}>
          <Button
            style={{
              fontSize: style.fontSize,
              color: style.fontColor,
            }}
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
    const items = this.makeItem();
    return (
      <MenuContainer>
        <List>{items}</List>
      </MenuContainer>
    );
  }
}

export { LinkMenu };
