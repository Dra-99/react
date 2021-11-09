import React, { Component } from 'react'
import "./moveBar.css"

export default class MoveBar extends Component {

    
/**
 * 
 * @param {*} props 
 * props.speedX   props.speedY  这是速度每秒钟
 */
    constructor(props) {
        super(props);
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            speedX: props.speedX,
            speedY: props.speedY
        }

        const duration = 16; //间隔的毫秒数
        this.timer = setInterval(() => {
            const xDis = this.state.speedX * duration / 1000;
            const yDis = this.state.speedY * duration / 1000;
            this.setState({
                left: this.state.left + xDis,
                top: this.state.top + yDis
            })
            if(this.state.left >= document.documentElement.clientWidth - 100 || this.state.left < 0) {
                this.setState({
                    speedX: -this.state.speedX
                })
            }
            if(this.state.top >= document.documentElement.clientHeight - 100 || this.state.top < 0) {
                this.setState({
                    speedY: -this.state.speedY
                })
            }
        }, duration)
    }

    render() {
        return (
            <div className="bar" style={{
                backgroundColor: this.props.bgcolor,
                left: this.state.left,
                top: this.state.top
            }}>
                
            </div>
        )
    }
}
