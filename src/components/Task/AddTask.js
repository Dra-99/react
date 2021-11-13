import React, { PureComponent } from 'react'

export default class AddTask extends PureComponent {

    state = {
        name: ""
    }

    handleClick = () => {
        this.props.addTask && this.props.addTask({
            name: this.state.name,
            isFinally: false
        })
    }

    render() {
        console.log("AddTask is Render")
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    })
                }} />
                <button onClick={this.handleClick}>添加</button>
            </div>
        )
    }
}
