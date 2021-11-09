import React, { Component } from 'react'
import StudentItem from './StudentItem'

export default class StudentList extends Component {

    render() {
        const studentList = this.props.studentArr.map((item, index) => <StudentItem {...item} key={index}/> )
        return (
            <ul>
                {studentList}
            </ul>
        )
    }
}
