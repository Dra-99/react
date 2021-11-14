import React, { Component } from 'react'

export default class ErrorBound extends Component {


    state = {
        isError: false
    }

    static getDerivedStateFromError() {
        return {
            isError: true
        }
    }

    render() {
        if(this.state.isError) {
            return <h1>发生错误了</h1>
        }
        return this.props.children;
    }
}
