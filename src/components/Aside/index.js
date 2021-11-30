import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"

export default function index() {
    return (
        <ul className="aside-menu">
            <li><NavLink to="/student">学生列表</NavLink></li>
            <li><NavLink to="/student/add">添加学生</NavLink></li>
            <li><NavLink to="/course">课程列表</NavLink></li>
            <li><NavLink to="/course/add">添加课程</NavLink></li>
        </ul>
    )
}
