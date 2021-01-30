/*
 * @Description: a function to make form item
 * @Author: Wang Wenzheng
 * @Date: 2021-01-30 17:27:44
 * @LastEditTime: 2021-01-30 18:01:00
 * @LastEditors: Wang Wenzheng
 * @FilePath: \ewers\src\tools\FormItemMaker.tsx
 */
import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
export const addFormItem = (item: any, index: number): JSX.Element => {
  let input: JSX.Element;
  const type = item.type;
  if (type === "username") {
    input = (
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder={item.label}
      />
    );
  }
  if (type === "password") {
    input = <Input.Password />;
  }
  //default
  input = item?.inline === true ? <Input /> : <Input />;
  return (
    <Form.Item
      key={index}
      label={item.label}
      name={item.name}
      rules={item.rules}
    >
      {input}
    </Form.Item>
  );
};
