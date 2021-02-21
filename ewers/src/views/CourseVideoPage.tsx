/*
 * @Description: a page to show video of the course
 * @Author: Wang Wenzheng
 * @Date: 2021-02-21 16:26:47
 * @LastEditTime: 2021-02-21 21:16:21
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\CourseVideoPage.tsx
 */
import { Card, Col, Row } from "antd";
import { Component } from "react";
import { RouteChildrenProps } from "react-router";
import { VideoCard } from "../components/Card/VideoCard";
import { MenuItem } from "../components/Menu/LinkMenuInterface";
import { ListMenu } from "../components/Menu/ListMenu";
//datatype of state
interface CourseVideoPageInfo {
  currentVideo: string;
}
class CourseVideoPage extends Component<
  object & RouteChildrenProps,
  CourseVideoPageInfo
> {
  courseTitle: string;
  courseVideoList: MenuItem[];
  constructor(props: object & RouteChildrenProps) {
    super(props);
    this.state = {
      currentVideo: "",
    };
    this.courseTitle = "";
    this.courseVideoList = [];
  }

  getVideoList(courseTitle: string): MenuItem[] {
    //todo: get url and title in by mysql
    const videoList: MenuItem[] = [
      {
        title: "python 狗都不学1",
        url:
          "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4",
      },
      {
        title: "python 狗都不学2",
        url:
          "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4",
      },
    ];
    return videoList;
  }
  /**
   * @Description: get params of the page before rendering
   * @Author: Wang Wenzheng
   * @Date: 2021-02-21 17:32:16
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {*}
   * @return {*}
   */
  componentWillMount(): void {
    //get course title
    const params = this.props.match?.params;
    if (params) {
      this.courseTitle = params["courseTitle"];
    }
    //get video list by course title
    //todo
    this.courseVideoList = this.getVideoList(this.courseTitle);
    this.setState({
      currentVideo: this.courseVideoList[0].url,
    });
  }
  handleClick(e) {
    this.setState({
      currentVideo: e.target.id,
    });
  }
  render(): JSX.Element {
    return (
      <div>
        <Row justify="center">
          {/*视频部分 */}
          <Col xs={{ span: 24 }} xl={{ span: 16 }}>
            <VideoCard videoUrl={this.state.currentVideo} />
          </Col>
          {/*选集列表部分 */}
          <Col xs={{ span: 24 }} xl={{ span: 4 }}>
            <Card>
              <ListMenu
                menuTitle={"课程视频列表"}
                itemList={this.courseVideoList}
                handleClick={(e) => this.handleClick(e)}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export { CourseVideoPage };
