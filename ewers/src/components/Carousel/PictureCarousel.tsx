/*
 * @Description: a carousel of pictures
 * @Author: Wang Wenzheng
 * @Date: 2021-01-31 01:06:12
 * @LastEditTime: 2021-02-01 00:51:55
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Carousel\PictureCarousel.tsx
 */
import { Component } from "react";
import { Carousel, Image } from "antd";
import { PictureCarouselInfo, PictureItem } from "./PictureCarouselInterface";

class PictureCarousel extends Component<PictureCarouselInfo, {}> {
  constructor(props: PictureCarouselInfo) {
    super(props);
    this.state = {};
  }
  addPicItems(item: PictureItem, key: number): JSX.Element {
    return (
      <div key={key}>
        <Image src={item.picUrl} />
        {item.description}
      </div>
    );
  }
  render(): JSX.Element {
    const pics = this.props.items.map((value, index) => {
      return this.addPicItems(value, index);
    });
    return (
      <Carousel autoplay effect="fade">
        {pics}
      </Carousel>
    );
  }
}

export { PictureCarousel };
