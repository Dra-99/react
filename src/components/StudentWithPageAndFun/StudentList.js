import React from 'react'
import PropTypes from 'prop-types'

export default function StudentList(props) {

    const {studentArr} = props;

    const lis = studentArr.map(item => <li key={item.id}>【姓名】{item.name}【地址】{item.address}</li>)

    return (
        <ul>
            {lis}
        </ul>
    )
}

StudentList.propTypes = {
    studentArr: PropTypes.array.isRequired
}