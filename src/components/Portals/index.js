import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function A() {
    return ReactDOM.createPortal( (<>
        <h1>组件A</h1>
        <B />
    </>), document.querySelector("#model"))
}

// 虽然使用ReactDOM可以改变React虚拟节点在真实DOM中挂载的位置，但是元素的冒泡事件还是根据虚拟DOM顺序来的

function B() {
    return (
        <h1>组件B</h1>
    )
}


export default class Portals extends Component {
    render() {
        return (
            <div>
                <A/>
            </div>
        )
    }
}
