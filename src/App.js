import React, { Component } from 'react'
import ErrorBound from './components/ErrorBound/index';

function CompA() {
    return (
        <div style={{
            width: "90%",
            height: 400,
            border: "1px solid #000"
        }}>
            <h1>组件A</h1>
            <CompB />
        </div>
    )
}

function CompB() {
    throw new Error("error")
    return (
        <div style={{
            width: "50%",
            height: 300,
            border: "1px solid #000"
        }}>
            <h1>组件B</h1>
        </div>
    )
}

function CompC() {
    return (
        <div style={{
            width: "90%",
            height: 400,
            border: "1px solid #000"
        }}>
            <h1>组件C</h1>
        </div>
    )
}

export default class App extends Component {
    render() {
        return (
            <div>
                <ErrorBound>
                    <CompA />
                </ErrorBound>
                <CompC />
            </div>
        )
    }
}
