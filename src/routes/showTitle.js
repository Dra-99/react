import React from 'react'

export default function showTitle(props) {
    document.title = props.route.title
    return (
        <div>
            {props.children}
        </div>
    )
}
