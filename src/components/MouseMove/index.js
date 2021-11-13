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
        console.log(mouseX, mouseY)
    }

    render() {
        return (
            <div ref={this.container} onMouseMove={this.handleMouseMove}  className="container">
                <div style={{
                    width: 100,
                    height: 100,
                    left: this.state.x - 50,
                    top: this.state.y - 50,
                    background: "#008c8c",
                    position: "absolute"
                }}>
                </div>
            </div>
        )
    }
}
