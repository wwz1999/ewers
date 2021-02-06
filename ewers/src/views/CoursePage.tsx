/*
 * @Description: course page of the iq tax children program
 * @Author: Wang Wenzheng
 * @Date: 2021-02-06 23:20:00
 * @LastEditTime: 2021-02-07 00:20:55
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\views\CoursePage.tsx
 */
import { Component } from "react";
import { CourseCard } from "../components/Card/CourseCard";
import { CourseList } from "../components/Card/CourseCardInterface";
interface CoursePageInfo {
  courses: CourseList[];
}
const courses: CourseList[] = [
  {
    topic: "Python",
    content: [
      {
        label: "不会还有人不会python吧",
        url: "http://www.baidu.com",
      },
      {
        label: "python还用学？",
        url: "http://www.baidu.com",
      },
      {
        label: "python？狗都不学",
        url: "http://www.baidu.com",
      },
    ],
  },
  {
    topic: "JavaScript",
    content: [
      {
        label: "TypeScript yyds",
        url: "http://www.baidu.com",
      },
      {
        label: "JavaScript 垃圾东西",
        url: "http://www.baidu.com",
      },
    ],
  },
];
//todo: get  courses by request to make it OCP

class CoursePage extends Component<object, CoursePageInfo> {
  constructor(props: object) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  /**
   * @Description: get course info from server
   * @Author: Wang Wenzheng
   * @Date: 2021-02-06 23:44:14
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {*}
   * @return {*}
   */
  initCourse(): void {
    this.setState({
      courses: courses,
    });
  }
  componentWillMount() {
    this.initCourse();
  }
  addCourseCard(courses: CourseList, key: number): JSX.Element {
    return (
      <CourseCard
        key={key}
        topic={courses.topic}
        content={courses.content}
      ></CourseCard>
    );
  }
  render(): JSX.Element {
    const courses: JSX.Element[] = this.state.courses.map((value, index) => {
      return this.addCourseCard(value, index);
    });
    return <div>{courses}</div>;
  }
}

export { CoursePage };
