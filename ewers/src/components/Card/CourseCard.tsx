/*
 * @Description: a card container of courses and links
 * @Author: Wang Wenzheng
 * @Date: 2021-02-06 23:40:46
 * @LastEditTime: 2021-02-07 00:20:27
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\CourseCard.tsx
 */
import { Component } from "react";
import { Button, Card } from "antd";
import { CourseItem, CourseList } from "./CourseCardInterface";
import styled from "styled-components";
import { jumpByPushTo } from "../../tools/RouterJump";

class CourseCard extends Component<CourseList, {}> {
  constructor(props: CourseList) {
    super(props);
    this.state = {};
  }
  joinCourse(url: string) {
    jumpByPushTo(url);
  }
  /**
   * @Description: make course item card
   * @Author: Wang Wenzheng
   * @Date: 2021-02-07 00:17:49
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {CourseItem} course
   * @param {number} key
   * @return {*}
   */
  addCourse(course: CourseItem, key: number): JSX.Element {
    const Course = styled.div`
      height: 10rem;
    `;
    const CardContainer = styled.div`
      margin: 0.5rem 0;
    `;
    return (
      <CardContainer key={key}>
        <Card hoverable={true}>
          <Course>
            {course.label}
            <Button
              type="primary"
              onClick={() => {
                return this.joinCourse(course.url);
              }}
            >
              加入学习
            </Button>
          </Course>
        </Card>
      </CardContainer>
    );
  }
  render(): JSX.Element {
    //make courses
    const courses = this.props.content.map((value, index) => {
      return this.addCourse(value, index);
    });
    const Title = styled.div`
      font-size: 1.5rem;
      color: #0066ff;
    `;
    return (
      <Card>
        <Title>{this.props.topic}</Title>
        {courses}
      </Card>
    );
  }
}

export { CourseCard };
