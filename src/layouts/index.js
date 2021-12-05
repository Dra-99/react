import React from 'react'
import NavLink from "umi/navlink"
import "./index.css"

export default function index(props) {
    return (
        <div>
            <div>
                <NavLink to="/">首页</NavLink>
                <NavLink to="/welcome">欢迎页</NavLink>
                <NavLink to="/login">登录</NavLink>
            </div>
            <div>
                {props.children}  
            </div>
        </div>
    )
}
