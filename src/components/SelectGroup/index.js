import React, { Component } from 'react'
import commonValidate from '../../util/commonValidate'
import PropTypes from 'prop-types'
import withInputGroup from '../HOC/withInputGroup'

class Option extends Component {
    static propTypes = {
        info: commonValidate.singleData.isRequired,
    }

    render() {
        return (<option value={this.props.info.value}>{this.props.info.text}</option>)
    }
}

const OptionGroup = withInputGroup(Option);

class Select extends Component {
    static propTypes = {
        name: commonValidate.name,
        selected: PropTypes.string,
        onchange: PropTypes.func
    }

    handleChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
    }

    render() {
        return <select name={this.props.name} value={this.props.selected} onChange={this.handleChange}>
            <OptionGroup {...this.props}/>
        </select>
    }
}

export default Select;
