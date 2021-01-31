import { Rule } from "antd/lib/form";

/*
 * @Description: interfaces needed in form card
 * @Author: Wang Wenzheng
 * @Date: 2021-02-01 00:20:35
 * @LastEditTime: 2021-02-01 01:41:10
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\FormCardInterface.tsx
 */
export interface FormCardItem {
  name: string;
  label: string;
  rules?: Rule[];
  dependencies?: string[];
}
export interface FormCardInfo {
  items: FormCardItem[];
}
