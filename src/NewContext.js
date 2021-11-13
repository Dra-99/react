import React, { Component } from 'react'


const ctx = React.createContext();

function A() {
    return (
        <ctx.Consumer>
            {value => (<>
                <div>
                    <h1>组件A</h1>
                    <h2>a: {value.a},b: {value.b}</h2>
                    <B />
                </div>
            </>)}
        </ctx.Consumer>
    )
}

class B extends Component {

    static contextType = ctx;

    render() {
        return (
            <div>
                <h1>组件B</h1>
                <h2>组件B的a: {this.context.a}, 组件B的b: {this.context.b}</h2>
            </div>
        )
    }
}



export default class NewContext extends Component {

    state = {
        a: 1,
        b: "123"
    }

    render() {
        return (
            <ctx.Provider value={this.state}>
                <div>
                    <A />
                </div>
            </ctx.Provider>
        )
    }
}
