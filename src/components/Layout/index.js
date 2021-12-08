import React from 'react'
import style from "./index.css"

console.log(style)

export default function index(props) {
    return (
        <>
            <div className={style.header}>{props.header}</div>
            <div className={style.main}>
                <div className={style.left}>{props.left}</div>
                <div className={style.right}>{props.right}</div>
            </div>
        </>
    )
}
