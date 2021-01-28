/*
 * @Description: a tool to add attribute on tsx tag
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 23:51:13
 * @LastEditTime: 2021-01-22 23:59:17
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\tools\AddAttribute.ts
 */

/**
 * @Description: add attri to the item with value
 * @Author: Wang Wenzheng
 * @Date: 2021-01-22 23:56:11
 * @LastEditTime: Do not edit
 * @LastEditors: Wang Wenzheng
 * @param {any} item
 * @param {String} attri
 * @param {any} value
 * @return {*}
 */
const addAttribute = (item: any, attri: String, value: any) => {
  console.log(item, attri, value);
};

const addStyle = (item: any, value: any) => {
  return addAttribute(item, "style", value);
};

export { addStyle };
