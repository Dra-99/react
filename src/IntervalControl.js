import React, { Component } from 'react'
import Interval from './Interval'


export default class InterControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isInterval: true,
            num: 10
        }
    }

    handleOver = () => {
        this.setState({
            isInterval: false
        })
    }

    render() {

        return (
            <div>
                <Interval onClick={() => {
                    console.log("点击了");
                }} num={this.state.num} onOver={this.handleOver} />
                <h2>
                    {this.state.isInterval ? "倒计时中" : "倒计时结束"}
                </h2>
            </div>
        )
    }
}
