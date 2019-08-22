import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { withAuth } from '../../authContext';

const { Text } = Typography;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleSubmit(values)
      }

    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" className="demo__content">
        <Col span={8}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{
                  required: true,
                  message: 'Please input your username!'
                }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: 'Please input your Password!'
                }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
            </Form.Item>
            <Row>
              <Text type="danger">{this.props.authError}</Text>
            </Row>
            <Row>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default withAuth(WrappedLoginForm);
