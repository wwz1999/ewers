/*
 * @Description: a container of tabs and their contend list
 * @Author: Wang Wenzheng
 * @Date: 2021-01-29 15:48:25
 * @LastEditTime: 2021-01-29 20:08:23
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\TabCard.tsx
 */

import { Component } from "react";
import { Card } from "antd";
import { TabCardInfo, TabCardState } from "./TabCardInterface";
class TabCard extends Component<TabCardInfo, TabCardState> {
  constructor(props: TabCardInfo) {
    super(props);
    this.state = {
      key: this.props.tabs[0].key,
      content: [],
    };
  }
  componentWillMount() {
    this.setState({
      content: this.props.dataGetter(this.state.key),
    });
  }
  render(): JSX.Element {
    const list = this.state.content.map((value, index) => {
      return <div key={index}>{value.title}</div>;
    });
    return (
      <Card
        hoverable={true}
        style={{ margin: "0.25rem 0", height: "400px" }}
        tabList={this.props.tabs}
        activeTabKey={this.state.key}
        onTabChange={(key) => {
          const content = this.props.dataGetter(key);
          this.setState({
            key: key,
            content: content,
          });
        }}
      >
        {list}
      </Card>
    );
  }
}

export { TabCard };
