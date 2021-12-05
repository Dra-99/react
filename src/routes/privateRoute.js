import React from 'react'
import NavLink from "umi/navlink"

export default function privateRoute(props) {
    const loginId = localStorage.getItem("loginId");
    if(loginId) {
        return props.children
    }else {
        return (
            <p>
               登录过期或未登录， <NavLink to="/login">去登录</NavLink>
            </p>
        )
    }
}
