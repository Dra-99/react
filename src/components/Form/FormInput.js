import React, { Component } from 'react'
import ctx from './context'
import PropTypes from 'prop-types'

export default class FormInput extends Component {

    static contextType = ctx;

    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }

    static defaultProps = {
        type: "text"
    }

    handleChange = (e) => {
        this.context.changeFormData && this.context.changeFormData(this.props.name, e.target.value);
    }

    render() {
        return (
            <input type={this.props.type} value={this.context.formData[this.props.name] || ""} onChange={this.handleChange}></input>
        )
    }
}
