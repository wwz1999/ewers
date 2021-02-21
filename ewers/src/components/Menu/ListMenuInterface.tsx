/*
 * @Description:  interfaces needed in listmenu
 * @Author: Wang Wenzheng
 * @Date: 2021-02-21 20:05:22
 * @LastEditTime: 2021-02-21 20:51:46
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Menu\ListMenuInterface.tsx
 */
import { MenuItem } from "./LinkMenuInterface";
export interface ListMenuInfo {
  menuTitle: string;
  itemList: MenuItem[];
  handleClick: (e) => void;
}
