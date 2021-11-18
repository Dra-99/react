import React from 'react'
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

function User(props) {
    return (
        <div>
            <NavLink to={`${props.match.url}/set`}>用户设置</NavLink>
            <NavLink to={`${props.match.url}/pay`}>用户支付</NavLink>
            <div style={{
            width: 400,
            height: 400,
            background: "#008c8c"
            }}>
                <Route path={`${props.match.url}/set`} component={UserSet}></Route>
                <Route path={`${props.match.url}/pay`} component={UserPay}></Route>
            </div>
        </div>
    )
}

function UserSet() {
    return (
        <h1>用户设置</h1>
    )
}

function UserPay() {
    return (
        <h1>用户支付</h1>
    )
}

export default function App() {
    return (
        <Router>
            <Route path="/user" component={User}></Route>
        </Router>
    )
}
