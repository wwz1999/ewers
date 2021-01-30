/*
 * @Description: a component to display avatar and username
 * @Author: Wang Wenzheng
 * @Date: 2021-01-29 14:09:32
 * @LastEditTime: 2021-01-29 20:08:14
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\AvatarCard.tsx
 */
import { Component } from "react";
import { Card, Avatar, Row, Col } from "antd";
import { AvatarInfo } from "./AvatarCardInterface";
import styled from "styled-components";
class AvatarCard extends Component<AvatarInfo, {}> {
  constructor(props: AvatarInfo) {
    super(props);
    this.state = {};
  }

  addAvatar(url: string): JSX.Element {
    return <Avatar shape="square" size={128} src={url} />;
  }

  addUsername(username: string): JSX.Element {
    const Username = styled.div`
      font-size: 24px;
      padding-top: 60px;
    `;
    return <Username>{username}</Username>;
  }

  addIntroduction(introduction: string): JSX.Element {
    const Intro = styled.div`
      padding: 4px 0 4px 0;
    `;
    return (
      <Intro>
        <strong>{introduction}</strong>
      </Intro>
    );
  }

  render(): JSX.Element {
    const avatar = this.addAvatar(this.props.avatarURL);
    const username = this.addUsername(this.props.username);
    const introduction = this.addIntroduction(this.props.introduction);
    return (
      <Card hoverable={true} style={{ margin: "0.25rem 0" }}>
        <div>
          <Row>
            <Col xs={{ span: 4 }}>{avatar}</Col>
            <Col xs={{ span: 16 }}>
              {username}
              <div>{introduction}</div>
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export { AvatarCard };
