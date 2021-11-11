import React, { Component } from 'react'
import CheckBoxGroup from './index'

export default class Test extends Component {

    state = {
        datas: [
            {text: "足球", value: "footBall"},
            {text: "篮球", value: "basketBall"},
            {text: "乒乓球", value: "pingpang"}
        ],
        name: "loves",
        selected: []
    }

    handleChange = (newArr, name, e) => {
        this.setState({
            selected: newArr
        })
    }

    render() {
        return (
            <div>
                <CheckBoxGroup {...this.state} onChange={this.handleChange} />
                <button onClick={() => {
                    console.log(this.state.selected)
                }}>点击获取</button>
            </div>
        )
    }
}
