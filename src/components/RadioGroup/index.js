import React, { Component } from 'react'
import commonValidate from '../../util/commonValidate'
import PropTypes from 'prop-types'
import withInputGroup from '../HOC/withInputGroup'


class RadioGroup extends Component {
    static propTypes = {
        info: commonValidate.singleData.isRequired,
        selected: PropTypes.string,
        name: commonValidate.name,
        onChange: PropTypes.func
    }

    handleChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    render() {
        return (
        <label>
            <input name={this.props.name} type="radio" 
                value={this.props.info.value} 
                onChange={this.handleChange}
                checked={this.props.selected === this.props.info.value}/>
                    {this.props.info.text}
        </label>)
    }
}

export default withInputGroup(RadioGroup)