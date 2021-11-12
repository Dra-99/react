import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./index.css"
import ImgContainer from './ImgContainer/index'
import ArrowControl from './ArrowControl/index'
import DotsControl from './DotsControl/index'

export default class Banner extends Component {

    static defaultProps = {
        width: 500,
        height: 280,
        imgArr: [],
        duration: 1
    }

    state = {
        currentIdx: 0
    }

    timer = null;
    componentDidMount() {  
        this.autoMove()
    }

    autoMove = () => {
        let cur = this.state.currentIdx;
        this.timer = setInterval(() => {
            cur++;
            if(cur > this.props.imgArr.length - 1) {
                cur = 0;
            }
            this.setState({
                currentIdx: cur
            })
            this.handleClick(cur);
        }, 4000)
    }


    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        imgArr: PropTypes.arrayOf(PropTypes.string)
    }

    imgContainer = (el) => {
        this.imgComp = el;
    }

    handleMove = (type) => {
        let cur = this.state.currentIdx;
        if(type === "right") {
            cur++;
            if(cur > this.props.imgArr.length - 1) {
                cur = 0;
            }
        }
        if(type === "left") {
            cur--;
            if(cur < 0) {
                cur = this.props.imgArr.length - 1;
            }
        }
        this.setState({
            currentIdx: cur
        })
        this.handleClick(cur)
    }

    handleClick = (index) => {
        this.setState({
            currentIdx: index
        })
        this.imgComp.switchTo(index)
    }

    render() {
        return (
            <div className="container" ref={this.container} onMouseEnter={() => {
                clearInterval(this.timer)
            }} onMouseLeave={() => {
                this.autoMove()
            }} style={{
                width: this.props.width,
                height: this.props.height
            }}>
                <ImgContainer ref={this.imgContainer} duration={this.props.duration} imgArr={this.props.imgArr} />
                <ArrowControl handleMove={this.handleMove} />
                <DotsControl num={this.props.imgArr.length} handleMove={this.handleClick} curIndex={this.state.currentIdx} />
            </div>

        )
    }
}
