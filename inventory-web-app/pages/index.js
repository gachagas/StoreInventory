import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export default function Home() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex justify-center h-screen ">
        <div className=" w-auto">123</div>

        <div
          className="flex justify-center flex-col "
          style={{ width: "540px" }}
        >
          <div>4512312336</div>
          <div className="mx-24">
            <Form
              name="basic"
              // labelCol={{ span: 8 }}
              // wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Username" prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                // wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" size="middle" htmlType="submit" block>
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div>456</div>
        </div>

        <div className=" w-auto">123</div>
      </div>
    </>
  );
}
