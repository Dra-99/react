import React, { Component } from 'react'
import "./index.css"

export default class MouseMove extends Component {

    state = {
        x: 0,
        y: 0
    }

    container = el => {
        this.div = el;
    }

    handleMouseMove = (e) => {
        const mouseX = e.clientX - this.div.getBoundingClientRect().left;
        const mouseY = e.clientY - this.div.getBoundingClientRect().top;
        this.setState({
            x: mouseX,
            y: mouseY
        })
    }

    render() {
        return (
            <div ref={this.container} onMouseMove={this.handleMouseMove}  className="container">
                {this.props.children({
                    x: this.state.x,
                    y: this.state.y
                })}
            </div>
        )
    }
}
