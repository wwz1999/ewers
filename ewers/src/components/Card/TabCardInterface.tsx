/*
 * @Description: interfaces needed in avatar card
 * @Author: Wang Wenzheng
 * @Date: 2021-01-29 15:55:34
 * @LastEditTime: 2021-01-29 16:50:43
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\TabCardInterface.tsx
 */
interface ContentItem {
  title: string;
}
export interface TabCardInfo {
  tabs: { key: string; tab: string }[];
  dataGetter: (tabKey: string) => ContentItem[];
}
export interface TabCardState {
  key: string;
  content: ContentItem[];
}
