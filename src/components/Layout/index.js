import React, { Component } from 'react'
import "./index.css"
import PropTypes from 'prop-types'

export default class Layout extends Component {

    static propTypes = {
        header: PropTypes.element.isRequired,
        aside: PropTypes.element.isRequired,
        children: PropTypes.element.isRequired
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    {this.props.header}
                </div>
                <div className="body">
                    <div className="aside">
                        {this.props.aside}
                    </div>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
