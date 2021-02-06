/*
 * @Description:
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 18:51:00
 * @LastEditTime: 2021-02-06 23:44:50
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\HomePage.tsx
 */

import { Component } from "react";

import { PictureCarousel } from "../components/Carousel/PictureCarousel";
import {
  PictureItem,
  PictureStyle,
} from "../components/Carousel/PictureCarouselInterface";

//todo: get  pics by request to make it OCP
const picStyle: PictureStyle = {
  width: "100%",
  height: "30rem",
  color: "#000000",
  fontSize: "1.5rem",
};
const pics: PictureItem[] = [
  {
    picUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    description: "女人",
  },
  {
    picUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    description: "antd",
  },
  {
    picUrl:
      "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
    description: "react",
  },
];
interface HomePageInfo {
  pics: PictureItem[];
}
class HomePage extends Component<object, HomePageInfo> {
  constructor(props: object) {
    super(props);
    this.state = {
      pics: [],
    };
  }

  /**
   * @Description: get carousel info from server
   * @Author: Wang Wenzheng
   * @Date: 2021-02-06 23:44:32
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {*}
   * @return {*}
   */
  initCarousel(): void {
    this.setState({
      pics: pics,
    });
  }
  componentWillMount() {
    this.initCarousel();
  }
  render() {
    return (
      <div>
        <PictureCarousel items={this.state.pics} style={picStyle} />
        <h1>HomePage</h1>
      </div>
    );
  }
}

export { HomePage };
