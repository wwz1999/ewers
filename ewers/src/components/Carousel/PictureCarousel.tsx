/*
 * @Description: a carousel of pictures
 * @Author: Wang Wenzheng
 * @Date: 2021-01-31 01:06:12
 * @LastEditTime: 2021-02-04 00:03:46
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Carousel\PictureCarousel.tsx
 */
import { Component } from "react";
import { Carousel, Image } from "antd";
import { PictureCarouselInfo, PictureItem } from "./PictureCarouselInterface";
import styled from "styled-components";

class PictureCarousel extends Component<PictureCarouselInfo, {}> {
  constructor(props: PictureCarouselInfo) {
    super(props);
    this.state = {};
  }
  addPicItems(item: PictureItem, key: number): JSX.Element {
    const Description = styled.div`
      color: ${this.props.style.color};
      font-size: ${this.props.style.fontSize};
      text-align: center;
    `;
    const Container = styled.div`
      padding-bottom: 2rem;
    `;
    return (
      <Container key={key}>
        <div>
          <Image
            src={item.picUrl}
            width={this.props.style.width}
            height={this.props.style.height}
            preview={false}
          />
        </div>
        <Description>{item.description}</Description>
      </Container>
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
