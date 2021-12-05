import React from 'react'

export default function index(props) {
    return (
        <div>
            <h1>这是通用布局头部</h1>
            {props.children}
            <h1>这是通用布局底部</h1>
        </div>   
    )  
}
 