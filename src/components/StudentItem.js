import React from 'react'

export default function StudentItem(props) {
    return (
        <li>
            【姓名】{props.name}
            【地址】{props.address}
            【邮箱】{props.email}
            【性别】{props.sex === 1 ? "男" : "女"}
        </li>
    )
}
