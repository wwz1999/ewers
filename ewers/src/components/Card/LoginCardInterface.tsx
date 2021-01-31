/*
 * @Description: interfaces needed in avatar card
 * @Author: Wang Wenzheng
 * @Date: 2021-01-29 23:50:45
 * @LastEditTime: 2021-02-01 00:49:13
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\LoginCardInterface.tsx
 */
export interface LoginInfo {
  username: string;
  password: string;
}
export interface LoginFunction {
  loginFunction: (username: string, password: string) => void;
}
