import React, { Component } from 'react'
import "./index.css"

export default class index extends Component {

    handleChange = (e) => {
        this.props.handleMove && this.props.handleMove(e.target.className);
    }

    render() {
        return (
            <div className="arrow">
                <span className="left" onClick={this.handleChange}>
                    &lt;
                </span>
                <span className="right" onClick={this.handleChange}>
                    &gt;
                </span>
            </div>
        )
    }
}
