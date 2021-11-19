import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import RouteGuard from './RouteGuard'

function Page1() {
    return (
        <h1>Page1</h1>
    )
}
 
function Page2() {
    return (
        <h1>Page2</h1>
    )
}


export default function App() {
    return (
        <div>
            <RouteGuard onChange={(prevLocation, location, action, unListen) => {
                console.log(`日志:从${prevLocation.pathname}跳转到${location.pathname}页面,跳转方式:${action}`)
            }}
                onBeforeChange={(prevLocation, location, action, unBlock, cb, msg) => {
                    console.log(`页面从${prevLocation.pathname}跳转到${location.pathname},跳转方式为${action}`);
                    console.log(msg);
                    cb(true);
                }}
            >
                <ul>
                    <li><NavLink to="/page1">Page1</NavLink></li>
                    <li><NavLink to="/page2">Page2</NavLink></li>
                </ul>

                    <Route path="/page1" component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
            </RouteGuard>
        </div>
    )
}
