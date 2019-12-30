import React, {Component} from "react";

import logo from './images/logo.png';

import './login.less';

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>Backstage Management System</h1>
                </header>
                <section className="login-content">
                    <h2>User Login</h2>
                    <div>form</div>
                </section>
            </div>
        );
    }
}