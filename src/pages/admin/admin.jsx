import React, {Component} from "react";
import memoryUtils from "../../utils/memoryUtils";
import {Redirect, Switch, Route} from 'react-router-dom';
import { Layout } from 'antd';
import './admin.less';

import LeftNav from "../../components/left-nav/left-nav";
import Header from "../../components/header/header";

import Category from "../category/category";
import BarChart from "../charts/bar-chart";
import LineChart from "../charts/line-chart";
import PieChart from "../charts/pie-chart";
import Home from "../home/home";
import Product from "../product/product";
import Role from "../role/role";
import User from "../user/user";

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        if (user === null || user.id === null) {
            return <Redirect to="/login" />;
        }

        return (<div style={{height: '100%'}}>
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/product' component={Product} />
                            <Route path='/user' component={User} />
                            <Route path={'/role'} component={Role} />
                            <Route path={'/charts/line'} component={LineChart} />
                            <Route path={'/charts/pie'} component={PieChart} />
                            <Route path={'/charts/bar'} component={BarChart} />
                            <Redirect to={'/home'} />
                        </Switch>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>);
    }
}