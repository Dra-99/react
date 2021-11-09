import React, { Component } from 'react'

export default class interval extends Component {
    constructor(props) {
        super();
        this.state = {
            num: props.num
        }
        this.timer = setInterval(() => {
            this.setState({
                num: this.state.num-1
            })
            if(this.state.num === 0) {
                clearInterval(this.timer);
                this.props.onOver && this.props.onOver();
            }
        }, 1000)
    }

    render() {
        return (
            <h1 onClick={this.props.onClick}>
                倒计时: {this.state.num}
            </h1>
        )
    }
}
