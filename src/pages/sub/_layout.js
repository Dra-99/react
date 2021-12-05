import React from 'react'

export default function _layout(props) {
    return (
        <div>
            <h1>这是pages文件中头部</h1>
            {props.children}
            <h1>这是pages文件中底部</h1>
        </div>
    )
}
