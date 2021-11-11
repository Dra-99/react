import React, { Component } from 'react'
import commonValidate from '../../util/commonValidate'
import PropTypes from 'prop-types'

export default class SelectGroup extends Component {

    static defaultProps = {
        datas: [],
        selected: ""
    }

    static propTypes = {
        datas: commonValidate.datas.isRequired,
        selected: PropTypes.string,
        name: commonValidate.name
    }

    getSelectArr = () => {
        return this.props.datas.map(item => (<option key={item.value} value={item.value}>{item.text}</option>))
    }
    
    handleChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }
    render() {
        const selectArr = this.getSelectArr();
        return (
            <select name={this.props.name} value={this.props.selected} onChange={this.handleChange}>
                {selectArr}
            </select>
        )
    }
}
