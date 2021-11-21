import React, { Component } from 'react'
// import Prompt from './Prompt';
import { Prompt } from 'react-router';

export default class Page2 extends Component {

    state = {
        val: ""
    }

    // prevent = (value) => {
    //     if(value) {
    //         this.unBlock = this.props.history.block("跳转之后文本内容将清空")
    //     }else {
    //         this.unBlock && this.unBlock();
    //     }
    // }

    // componentWillUnmount() {
    //     this.unBlock && this.unBlock()
    // }
    

    render() {
        return (
            <div>
                <Prompt when={this.state.val ? true : false} message="是否跳转" />
                <textarea cols="30" rows="10" value={this.state.val} onChange={(e) => {
                    this.setState({
                        val:e.target.value
                    });
                }}></textarea>
            </div>
        )
    }
}
