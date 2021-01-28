/*
 * @Description: interfaces needed in linkmenu
 * @Author: Wang Wenzheng
 * @Date: 2021-01-28 19:42:23
 * @LastEditTime: 2021-01-28 20:01:11
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Menu\LinkMenuInterface.tsx
 */
export interface LinkMenuItem {
  title: string;
  url: string;
}

export interface LinkMenuInfo {
  items: LinkMenuItem[];
  fontStyle: {
    fontSize: string;
    fontColor: string;
    textAlign: string;
  };
}
