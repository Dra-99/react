import {connect} from 'react-redux'
import {createIncreaseAction, createDecreaseAction, createAutoIncreaseAction, createCancelAutoIncreaseAction} from '../store/action/counter'

function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onIncreaseAction}>+</button>
            <button onClick={props.onDecreaseAction}>-</button>
            <button onClick={props.onAutoIncreaseAction}>自动+</button>
            <button onClick={props.onCancelIncreaseAction}>停止自动</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state);
    return {
        number: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseAction() {
            dispatch(createIncreaseAction())
        },
        onDecreaseAction() {
            dispatch(createDecreaseAction())
        },
        onAutoIncreaseAction() {
            dispatch(createAutoIncreaseAction())
        },
        onCancelIncreaseAction() {
            dispatch(createCancelAutoIncreaseAction())
        }
    }
}

const hoc = connect(mapStateToProps, mapDispatchToProps);


export default hoc(Counter);