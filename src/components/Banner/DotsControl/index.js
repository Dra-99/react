import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./index.css"

export default class index extends Component {

    static propTypes = {
        num: PropTypes.number,
        handleMove: PropTypes.func,
        curIndex: PropTypes.number
    }


    render() {
        const spanArr = [];
        for(let i = 0; i < this.props.num; i++) {
            spanArr.push(<span key={i} 
                className={this.props.curIndex === i ? 'active' : ""}
                onClick={() => {
                    this.props.handleMove && this.props.handleMove(i)
                }}
            ></span>)
        }
        return (
            <div className="dots">
                {spanArr}
            </div>
        )
    }
}
