/*
 * @Description:
 * @Author: Wang Wenzheng
 * @Date: 2021-02-06 23:41:57
 * @LastEditTime: 2021-02-21 17:15:36
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\CourseCardInterface.tsx
 */
export interface CourseItem {
  label: string;
  url: string;
}
export interface CourseList {
  topic: string;
  content: CourseItem[];
}
