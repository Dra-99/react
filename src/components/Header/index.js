import React from 'react'
import style from  "./index.css"

export default function index(props) {
    return (
        <div className={style.container}>
            <h3 className={style.title}>学生管理系统</h3>
            <div>
                <span>欢迎您</span>
                <span className={style.username}>{props.loginId}</span>
                <button className={style.btn} onClick={() => {
                    props.loginOut && props.loginOut()
                }}>退出</button>
            </div>
        </div>
    )
}
