import React from 'react'
import Student from './Student'

export default function StudentList(props) {

    const studentArr = props.stuArr.map(item => <Student {...item} key={item.id} />)
    return (
        <ul>
            {studentArr}
        </ul>
    )
}
