import React, { Component } from 'react'

export default class Page1 extends Component {

    state = {
        val: ""
    }

    render() {
        return (
            <div>
                <textarea cols="30" rows="10" value={this.state.val} onChange={(e) => {
                    this.setState({
                        val: e.target.value
                    })
                }}></textarea>
            </div>
        )
    }
}
