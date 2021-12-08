/**
 * title: 修改学生
 * Routes: 
 *      - src/routes/privateRouter.js
 */
import React from 'react'

export default function $id(props) {
    return (
        <div>
            <h1>修改学生</h1>
            <h1>{props.match.params.id}</h1>
        </div>
    )
}
