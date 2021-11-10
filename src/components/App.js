import React, { Component } from 'react'
import ThreeLayout from './ThreeLayout/index'

export default class App extends Component {
    state = {
        show: false
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <>
                <ThreeLayout leftContent={<h1>这是leftContent内容</h1>} rightContent={<h1>这是rightContent内容</h1>}>
                    <h1>这是main区域</h1>
                </ThreeLayout>
            </>
        )
    }
}
