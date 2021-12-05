import React from 'react'

export default function $id(props) {
    return (
        <div>
            {props.match.params.id}
            <h1>这是动态路由页面</h1>
        </div>
    )
}
