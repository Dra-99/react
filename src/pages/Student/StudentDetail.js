import React from 'react'

export default function StudentDetail(props) {
    return (
        <div>
            <h1>学生学号: {props.match.params.sNo}</h1>
        </div>
    )
}
