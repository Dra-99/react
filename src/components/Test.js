import React, { Component } from 'react'
import Modal from './Modal'

export default class Test extends Component {
    state = {
        show: false
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div>
                <img src="https://img1.baidu.com/it/u=1719063513,2559625643&fm=26&fmt=auto" alt="" />
                {this.state.show ? (<Modal onClose={this.handleClose}>
                    <p>这是一个提示框</p>
                    <button onClick={this.handleShow}>关闭蒙层</button>
                </Modal>) : null}
                <button onClick={this.handleShow}>显示蒙层</button>
            </div>
        )
    }
}
