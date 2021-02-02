/*
 * @Description: a card to contain form with input boxes
 * @Author: Wang Wenzheng
 * @Date: 2021-02-01 00:16:12
 * @LastEditTime: 2021-02-03 01:58:43
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\FormCard.tsx
 */
import { Component } from "react";
import { Card, Input, Form, Button } from "antd";
import { FormCardInfo, FormCardItem } from "./FormCardInterface";
class FormCard extends Component<FormCardInfo, {}> {
  constructor(props: FormCardInfo) {
    super(props);
    this.state = {};
  }

  /**
   * @Description: make items by item config
   * @Author: Wang Wenzheng
   * @Date: 2021-02-01 01:00:10
   * @LastEditTime: Do not edit
   * @LastEditors: Wang Wenzheng
   * @param {FormCardItem} item
   * @param {number} index
   * @return {*}
   */
  addItem(item: FormCardItem, index: number): JSX.Element {
    const input = (
      <Form.Item
        name={item.name}
        label={item.label}
        key={index}
        rules={item.rules}
        dependencies={item.dependencies}
      >
        <Input />
      </Form.Item>
    );

    return input;
  }
  addConfirmButton(): JSX.Element {
    const buttonStyle = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Form.Item {...buttonStyle}>
        <Button type="primary" htmlType="submit">
          {this.props.buttonContent}
        </Button>
      </Form.Item>
    );
  }
  render(): JSX.Element {
    const items = this.props.items.map((value, index) => {
      return this.addItem(value, index);
    });
    const button = this.addConfirmButton();
    const itemStyle = {
      labelCol: {
        xs: { span: 24 },
        xl: { span: 4, offset: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        xl: { span: 12 },
      },
    };
    return (
      <Card bordered={false}>
        <div>
          <Form
            {...itemStyle}
            name="basic"
            initialValues={{ remember: true }}
            labelAlign={"left"}
            scrollToFirstError
            onFinish={(values: any) => {
              this.props.onFinishFunction(values);
            }}
          >
            {items}
            {button}
          </Form>
        </div>
      </Card>
    );
  }
}

export { FormCard };
