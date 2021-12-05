import React from 'react'
import NavLink from "umi/navlink"

export default function page1() {
    return (
        <div>
            <NavLink to="/page2">跳转到page2</NavLink>
            <h1>page1</h1>
        </div>
    )
}
