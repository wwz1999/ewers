/*
 * @Description: interfaces needed in avatar card
 * @Author: Wang Wenzheng
 * @Date: 2021-01-31 01:08:02
 * @LastEditTime: 2021-01-31 01:17:22
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Carousel\PictureCarouselInterface.tsx
 */
export interface PictureItem {
  picUrl: string;
  linkUrl?: string;
  description: string;
}

export interface PictureCarouselInfo {
  items: PictureItem[];
}
