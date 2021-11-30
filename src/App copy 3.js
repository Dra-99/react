import React from 'react'
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Person from './Person'
import ProtectPage from './ProtectPage'

export default function App() {
    return (
        <div>
            <Router>
                <ul>
                    <li><NavLink to="/">首页</NavLink></li>
                    <li><NavLink to="/login">登录</NavLink></li>
                    <li><NavLink to="/person">个人中心</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <ProtectPage path="/person" component={Person}></ProtectPage>
                </Switch>
            </Router> 
        </div>
    )
}
