import React from 'react'
import NavLink from "umi/navlink"
import style from "./index.css"

export default function index() {
    return (
        <ul className={style.list}>
            <li><NavLink exact activeClassName={style.active} to="/">后台管理系统首页</NavLink></li>
            <li><NavLink exact activeClassName={style.active} to="/student">学生查询</NavLink></li>
            <li><NavLink exact activeClassName={style.active} to="/student/add">添加学生</NavLink></li>
            <li><NavLink exact activeClassName={style.active} to="/student/:id">删除学生</NavLink></li>
        </ul>
    )
}
