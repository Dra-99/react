import React, { PureComponent } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask';

export default class Test extends PureComponent {

    state = {
        taskArr: []
    }

    componentDidMount() {
        let tempArr = [];
        for (let index = 0; index < 10; index++) {
            tempArr.push({
                name: `任务${index + 1}`,
                isFinally: Math.random() > 0.5
            })
        }
        this.setState({
            taskArr: tempArr
        })
    }

    addTask = (data) => {
        this.setState({
            taskArr: [...this.state.taskArr, data]
        })
    }
    

    render() {
        console.log("Test is Render");
        return (
            <div>
                <AddTask addTask={this.addTask} />
                <TaskList taskArr={this.state.taskArr} />
            </div>
        )
    }
}
