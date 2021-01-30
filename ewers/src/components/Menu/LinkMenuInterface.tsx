/*
 * @Description: interfaces needed in linkmenu
 * @Author: Wang Wenzheng
 * @Date: 2021-01-28 19:42:23
 * @LastEditTime: 2021-01-29 21:35:40
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Menu\LinkMenuInterface.tsx
 */
export interface LinkMenuItem {
  title: string;
  url: string;
}
export interface LinkMenuItemStyle {
  fontSize: string;
  fontColor: string;
  textAlign: string;
  padding: string;
}
export interface LinkMenuInfo {
  items: LinkMenuItem[];
  fontStyle: LinkMenuItemStyle;
}
