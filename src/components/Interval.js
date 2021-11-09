import React, { Component } from 'react'

export default class interval extends Component {

    // 状态可以写在constructor外面，也可以写在constructor里面
    state = {
        num : 10
    }

    constructor(props) {
        super();
        this.timer = setInterval(() => {
            this.setState({
                num: this.state.num-1
            })
            if(this.state.num === 0) {
                clearInterval(this.timer)
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                倒计时: {this.state.num}
            </div>
        )
    }
}
