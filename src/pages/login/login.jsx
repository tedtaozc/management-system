import React, {Component} from "react";
import { Form, Icon, Input, Button ,message} from 'antd';
import {Redirect} from 'react-router-dom';

import {reqLogin} from "../../api";
import storageUtils from "../../utils/storageUtils";

import logo from "../../assets/logo.png";

import './login.less';




class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                const result = await reqLogin(values.username, values.password);

                if (result.status === 0) {
                    message.success("successfully log in");

                    const user = result.data;
                    storageUtils.setUser(user);

                    this.props.history.replace('/');


                } else {
                    message.error(result.msg);
                }
            }
        });


    };

    validatePassword = (rule, value, callback) => {
        if (!value) {
            callback('Please input your password!');
        } else if (value.length < 4) {
            callback('Minimum length is 4 characters');
        } else if (value.length > 12) {
            callback('Maxinum length is 12 characters');
        } else if (!/^[A-Za-z0-9_]+$/.test(value)) {
            callback('Password should consists of letters, numbers and underlines');
        }
        callback();
    }

    render() {
        const user = storageUtils.getUser();
        if (user !== null || user.id !== null) {
            return <Redirect to="/" />;
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>Backstage Management System</h1>
                </header>
                <section className="login-content">
                    <h2>User Login</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: 'Please input your username!' },
                                    { min: 4, message: 'Minimum length  is 4 characters'},
                                    { max: 12, message: 'Maximum length is 12 characters'},
                                    { pattern: /^[A-Za-z0-9_]+$/, message: 'Username should consists of letters, numbers and underlines'}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                            /*
                               in {}, this.validatePassword cannot be this.valudatePassword()
                               because {} will parse the value first.
                            */
                                rules: [{ validator: this.validatePassword }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;