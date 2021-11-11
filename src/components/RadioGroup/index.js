import React, { Component } from 'react'
import commonValidate from '../../util/commonValidate'
import PropTypes from 'prop-types'

export default class RadioGroup extends Component {

    static defaultProps = {
        datas: [],
        selected: ""
    }

    static propTypes = {
        datas: commonValidate.datas.isRequired,
        selected: PropTypes.string,
        name: commonValidate.name
    }

    getRadioArr = () => {
        return this.props.datas.map(item => (<label key={item.value}>
            <input name={this.props.name} type="radio" 
                value={item.value} 
                onChange={this.handleChange}
                checked={item.value === this.props.selected}/>
                    {item.text}
        </label>))
    }
    
    handleChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }
    render() {
        const radioArr = this.getRadioArr();
        return (
            <div>
                {radioArr}
            </div>
        )
    }
}
