import React, { Component } from 'react'

export default class ImgContainer extends Component {

    static defaultProps = {
        imgArr: [],
        width: 500,
        height: 280,
        duration: 2
    }

    container = (el) => {
        this.div = el;
    }

    switchTo = (index) => {
        if(index < 0) {
            index = 0
        }
        if(index > this.props.imgArr.length - 1) {
            index = 0;
        }
        // 计时器时间
        const intervalTick = 16;
        const moveMarginLeft = -index * this.props.width;
        let currentMarginLeft = parseInt(window.getComputedStyle(this.div).marginLeft);
        // 移动的距离
        const moveDis = moveMarginLeft - currentMarginLeft;
        // 移动的次数
        const num = Math.ceil(this.props.duration * 1000 / intervalTick);
        // 每次移动的距离
        const everyDis = moveDis / num;
        // 当前运动的次数
        let currentNum = 0;

        let timer = null;
        clearInterval(timer);
        timer = setInterval(() => {
            currentNum++;
            currentMarginLeft += everyDis;
            this.div.style.marginLeft = currentMarginLeft + "px";
            if(currentNum === num) {
                this.div.style.marginLeft = moveMarginLeft + "px";
                clearInterval(timer);
            }
        }, intervalTick)
    }

    render() {
        const img = this.props.imgArr.map(src => <img 
            style={{
                width: this.props.width,
                height: "100%",
                float: 'left'
            }}
            src={src} alt="" 
            key={src}></img>
        )
        return (
            <div ref={this.container} style={{
                width: this.props.width * this.props.imgArr.length,
                height: this.props.height,
            }}>
                {img}
            </div>
        )
    }
}
