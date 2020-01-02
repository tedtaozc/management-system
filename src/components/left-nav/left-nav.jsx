import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import logo from '../../assets/logo.png'
import { Menu, Icon } from 'antd';

import menuList from '../../config/menuConfig';

import './left-nav.less'

const { SubMenu } = Menu;

class LeftNav extends Component {

    buildMenu = (menuList) => {
        const path = this.props.location.pathname;
        return menuList.map((item) => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                if (item.children.find(child => child.key === path)) {
                    this.openKeys = item.key;
                }

                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
                        }
                    >
                        {this.buildMenu(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    componentWillMount() {
        this.menuNodes = this.buildMenu(menuList);
    }

    render() {
        const path = this.props.location.pathname;
        return (<div className='left-nav'>
                    <Link to='/' className='left-nav-header'>
                        <img src={logo} alt='logo' />
                        <h1>Management System</h1>
                    </Link>

            <Menu theme="dark" selectedKeys={[path]} defaultOpenKeys={[this.openKeys]} mode="inline">
                {/*
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Home Page</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                  <Icon type="user" />
                  <span>Commodities</span>
                </span>
                    }
                >
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Classification</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="desktop" />
                        <span>Management</span>
                    </Menu.Item>
                </SubMenu>
                */}
                {this.menuNodes}
            </Menu>
        </div>)
    }
}

const WrappedLeftNav = withRouter(LeftNav);
export default WrappedLeftNav;