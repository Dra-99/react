import Task from ".";
import PropTypes from "prop-types"
import React, { PureComponent } from 'react'

export default class TaskList extends PureComponent {

    static propTypes = {
        taskArr: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            isFinally: PropTypes.bool
        }))
    }

    render() {
        console.log("TaskList is Render")
        const liArr = this.props.taskArr.map(item => <Task {...item} key={item.name}/>)
        return (
            <ul>
                {liArr}
            </ul>
        )
    }
}
