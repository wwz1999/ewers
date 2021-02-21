/*
 * @Description:
 * @Author: Wang Wenzheng
 * @Date: 2021-02-21 19:21:42
 * @LastEditTime: 2021-02-21 21:16:00
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\VideoCard.tsx
 */
import { Card } from "antd";
import { Component } from "react";
import styled from "styled-components";
import { VideoCardInfo } from "./VideoCardInterface";
class VideoCard extends Component<VideoCardInfo, {}> {
  constructor(props: VideoCardInfo) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    const VideoContainer = styled.div`
      height: 40rem;
      width: 100%;
    `;
    return (
      <Card>
        <VideoContainer>
          <video height="640px" width="100%" controls>
            <source src={this.props.videoUrl} type="video/mp4" />
          </video>
        </VideoContainer>
      </Card>
    );
  }
}

export { VideoCard };
