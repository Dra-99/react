import React from 'react'
import "./index.css"

export default function StudentTable(props) {

    const trs = props.stuArr.map(item => <tr key={item.id}>
        <td>{item.sNo}</td>
        <td>{item.name}</td>
        <td>{item.sex === 0 ? "男" : "女"}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
        <td>{item.birth}</td>
        <td>{item.email}</td>
        <td>
            <a href={`student/${item.sNo}`}>详情</a>
        </td>
    </tr>)

    return (
        <table className="tb">
            <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>电话</th>
                    <th>地址</th>
                    <th>生日</th>
                    <th>邮箱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {trs}
            </tbody>
        </table>
    )
}
