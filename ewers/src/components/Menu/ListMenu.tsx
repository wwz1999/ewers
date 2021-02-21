/*
 * @Description: a menu to contain a list of item include url and title
 * @Author: Wang Wenzheng
 * @Date: 2021-02-21 20:01:33
 * @LastEditTime: 2021-02-21 21:11:26
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Menu\ListMenu.tsx
 */
import { Component } from "react";
import styled from "styled-components";
import { ListMenuInfo } from "./ListMenuInterface";
class ListMenu extends Component<ListMenuInfo, {}> {
  constructor(props: ListMenuInfo) {
    super(props);
    this.state = {};
  }
  /**
   * @Description: add items of the menu
   * @Author: Wang Wenzheng
   * @Date: 2021-02-21 20:33:16
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {*}
   * @return {*}
   */
  addMenuItems(): JSX.Element {
    const ItemContainer = styled.li`
      list-style: none;
      &:hover {
        color: white;
        background-color: #0066ff;
      }
    `;
    const items = this.props.itemList.map((item, index) => {
      return (
        <ItemContainer key={index} id={item.url}>
          {index + 1} {item.title}
        </ItemContainer>
      );
    });
    return <ul>{items}</ul>;
  }

  render(): JSX.Element {
    const items = this.addMenuItems();

    return (
      <div>
        {this.props.menuTitle}
        <div onClick={(e) => this.props.handleClick(e)}>{items}</div>
      </div>
    );
  }
}
export { ListMenu };
