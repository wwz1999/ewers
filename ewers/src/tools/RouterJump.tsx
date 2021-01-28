/*
 * @Description: funcs help to jump to different url
 * @Author: Wang Wenzheng
 * @Date: 2021-01-24 19:59:56
 * @LastEditTime: 2021-01-24 20:02:07
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\tools\RouterJump.tsx
 */

const jumpByPushTo = (url: string) => {
  window.location.href = url;
};

export { jumpByPushTo };
