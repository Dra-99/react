import React, { Component } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import "./test.css"

export default class Test extends Component {
    render() {
        return (
            <Router getUserConfirmation={(msg, cb) => {
                cb(window.confirm(msg))
            }}>
                <div className="bar">
                    <NavLink to="/page1">页面1</NavLink>
                    <NavLink to="/page2">页面2</NavLink>
                </div>
                <div className="page">
                    <Route path="/page1" component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
                </div>
            </Router>
        )
    }
}
