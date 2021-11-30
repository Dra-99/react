import React from 'react'
import commonValidate from '../../util/commonValidate';
import PropTypes from 'prop-types'
import withInputGroup from '../HOC/withInputGroup';
import { Component } from 'react'

class CheckBoxGroup extends Component {

    static propTypes = {
       info: commonValidate.singleData.isRequired,
       name: commonValidate.name,
       onChange: PropTypes.func.isRequired,
       selected: PropTypes.arrayOf(PropTypes.string)
    }

    handleChange = (e) => {
        let newArr;
        if(e.target.checked) {
            newArr = [...this.props.selected, e.target.value];
        }else {
            newArr = this.props.selected.filter(item => item !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr, this.props.name, e);
    }

    render() {
        return (
            (<label>
                <input type="checkbox" 
                    value={this.props.info.value} 
                    checked={this.props.selected.includes(this.props.info.value)}
                    onChange={this.handleChange}
                    name={this.props.name} />
                    {this.props.info.text}
            </label>)
        )
    }
}

export default withInputGroup(CheckBoxGroup);

