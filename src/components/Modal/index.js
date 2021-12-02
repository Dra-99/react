import React, { Component } from 'react'
import "./index.css"

export default class Modal extends Component {
    render() {
        return (
            <div className="container">
                <div className="text">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
