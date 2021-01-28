/*
 * @Description: interfaces needed in navbar
 * @Author: Wang Wenzheng
 * @Date: 2021-01-28 19:33:38
 * @LastEditTime: 2021-01-29 00:56:39
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Navbar\NavbarInterface.tsx
 */

import { LinkMenuInfo } from "../Menu/LinkMenuInterface";
//define data structure here
interface Logo {
  src: string;
  alt: string;
  preview: boolean;
}
interface Title {
  content: string;
  style: object;
}

export interface NavbarInfo {
  logo: Logo;
  title: Title;
  subLinks: LinkMenuInfo;
  mainLinks: LinkMenuInfo;
}
