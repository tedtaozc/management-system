import React, {Component} from "react";

import fechaObj from "fecha";

import './header.less';

import memoryUtils from "../../utils/memoryUtils";

import weather from './images/weather.png'


export default class Header extends Component {

    state = {
        systemTime: fechaObj.format(new Date()),
        weatherPicture: '',
        weather: '',
    }

    updateSystemTime = () => {
        let systemTime = fechaObj.format(new Date());
        this.setState({systemTime});
    }

    componentDidMount() {
        setInterval(() => {
            this.updateSystemTime();
        }, 1000)
    }

    render() {
        const user = memoryUtils.user;
        const {systemTime} = this.state
        return (
            <div className={"header"}>
                <div className={"header-top"}>
                    <span>Welcome, {user.username}</span>
                    <a href="javascript:">log out</a>
                </div>
                <div className={"header-bottom"}>
                    <div className={"header-bottom-left"}>Home</div>
                    <div className={"header-bottom-right"}>
                        <span>{systemTime}</span>
                        <img src={weather} alt={"weather"} />
                        <span>Cloudy</span>
                    </div>
                </div>
            </div>
        )
    }
}