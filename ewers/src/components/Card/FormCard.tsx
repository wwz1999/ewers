/*
 * @Description: a card to contain form with input boxes
 * @Author: Wang Wenzheng
 * @Date: 2021-02-01 00:16:12
 * @LastEditTime: 2021-02-01 01:40:02
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\components\Card\FormCard.tsx
 */
import { Component } from "react";
import { Card, Input, Form } from "antd";
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

  render(): JSX.Element {
    const items = this.props.items.map((value, index) => {
      return this.addItem(value, index);
    });

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
              console.log(values);
            }}
          >
            {items}
          </Form>
        </div>
      </Card>
    );
  }
}

export { FormCard };
