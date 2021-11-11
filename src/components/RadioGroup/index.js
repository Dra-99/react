import React, { Component } from 'react'

export default class RadioGroup extends Component {


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
