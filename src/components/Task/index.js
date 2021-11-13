import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import "./index.css"
// import { filterCommon } from '../../util/filterCommon'

// export default class Task extends PureComponent {

//     static propTypes = {
//         name: PropTypes.string,
//         isFinally: PropTypes.bool
//     }

//     static defaultProps = {
//         isFinally: false
//     }
    

//     render() {
//         console.log("Task is Render");
//         return (
//             <li className={this.props.isFinally ? "finally" : ""}>{this.props.name}</li>
//         )
//     }
// }


// 函数组件使用React.memo函数来将其变为一个纯组件
function Task(props) {
    
    console.log("Task is Render");

    return (
        <li className={props.isFinally ? "finally" : ""}>{props.name}</li>
    )
}

export default React.memo(Task);

Task.defaultProps = {
    isFinally: false
}

Task.propTypes = {
    name: PropTypes.string,
    isFinally: PropTypes.bool
}
