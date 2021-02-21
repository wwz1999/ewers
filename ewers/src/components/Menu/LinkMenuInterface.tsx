/*
 * @Description: interfaces needed in linkmenu
 * @Author: Wang Wenzheng
 * @Date: 2021-01-28 19:42:23
 * @LastEditTime: 2021-02-21 20:08:33
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Menu\LinkMenuInterface.tsx
 */
export interface MenuItem {
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
  items: MenuItem[];
  fontStyle: LinkMenuItemStyle;
}
