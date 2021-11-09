import React, { Component } from 'react'
import {getRandom} from '../util/random'
import MoveBar from './MoveBar';

export default class BarList extends Component {
    constructor() {
        super();
        this.state = {
            barList: []
        }
        this.timer = setInterval(() => {
            const barObj = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                bgcolor: `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(3, 10)})`,
                speedX: getRandom(60, 200),
                speedY: getRandom(60, 200)
            }
            this.setState({
                barList: [...this.state.barList, barObj]
            })
            if(this.state.barList.length > 30) {
                clearInterval(this.timer);
            }
        }, 1000)
    }
    render() {
        const barArr = this.state.barList.map((item, index) => <MoveBar {...item} key={index} />)
        return (
            <div>
                {barArr}
            </div>
        )
    }
}
