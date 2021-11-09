import React from 'react'
import "./modal.css"

export default function Modal(props) {
    if(!props.show) {
        return null;
    }
    return (
        <div className="text">
            <h1>加载中...</h1>
        </div>
    )
}
