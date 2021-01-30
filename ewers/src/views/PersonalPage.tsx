/*
 * @Description: personal page of the SPA
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 21:51:05
 * @LastEditTime: 2021-01-29 19:56:45
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\PersonalPage.tsx
 */

import { Component } from "react";
import { Row, Col } from "antd";
import { AvatarCard } from "../components/Card/AvatarCard";
import { AvatarInfo } from "../components/Card/AvatarCardInterface";
import { TabCard } from "../components/Card/TabCard";
import { TabCardInfo } from "../components/Card/TabCardInterface";
interface PersonalInfo {
  avatarInfo: AvatarInfo;
}
class PersonalPage extends Component<object, PersonalInfo> {
  constructor(props: object) {
    super(props);
    this.state = {
      avatarInfo: {
        username: "",
        avatarURL: "",
        introduction: "",
      },
    };
  }
  addAvatarCard(): JSX.Element {
    const { avatarInfo } = this.state;
    return (
      <AvatarCard
        avatarURL={avatarInfo.avatarURL}
        username={avatarInfo.username}
        introduction={avatarInfo.introduction}
      ></AvatarCard>
    );
  }
  addTabCard(tabCardInfo: TabCardInfo): JSX.Element {
    const { tabs, dataGetter } = tabCardInfo;
    return <TabCard tabs={tabs} dataGetter={dataGetter}></TabCard>;
  }
  getTabContend(tabKey: string, username: string) {
    console.log(username + tabKey);
    return [
      {
        title: username + "asd" + tabKey,
      },
      {
        title: username + "www" + tabKey,
      },
      {
        title: username + "qqq" + tabKey,
      },
    ];
  }
  //todo: replace data with real data
  componentWillMount() {
    this.setState({
      avatarInfo: {
        username: "阿斯忒瑞亚",
        avatarURL:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        introduction: "就这？不会吧不会吧",
      },
    });
  }

  render(): JSX.Element {
    //add an avatar card
    const avatarCatd = this.addAvatarCard();
    //add an tab card
    const tabCardInfo: TabCardInfo = {
      tabs: [
        { key: "team", tab: "我的队伍" },
        { key: "comment", tab: "我的评价" },
      ],
      dataGetter: (tabKey) => {
        return this.getTabContend(tabKey, this.state.avatarInfo.username);
      },
    };
    const tabCard = this.addTabCard(tabCardInfo);
    return (
      <div>
        <Row justify="center">
          <Col xs={{ span: 24 }} xl={{ span: 16 }}>
            {avatarCatd}
            <Row gutter={8}>
              <Col xs={{ span: 24 }} xl={{ span: 16 }}>
                {tabCard}
              </Col>
              <Col xs={{ span: 24 }} xl={{ span: 8 }}>
                {tabCard}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export { PersonalPage };
