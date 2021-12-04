import {connect} from "dva"
import {useRef} from "react"

function Counter(props) {
    const inp = useRef();
    return (
        <>
            <input type="number" ref={inp}  />
            <h1>{props.counter}</h1>
            <button onClick={props.onIncrease}>increase</button>
            <button onClick={props.onDecrease}>decrease</button>
            <button onClick={() => {
                const n = parseInt(inp.current.value);
                props.onAdd(n)
            }}>add</button>
            <button onClick={props.onAsyncIncrease}>asyncIncrease</button>
            <button onClick={props.onAsyncDecrease}>asyncDecrease</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatcToProps = (dispatch) => {
    return {
        onIncrease() {
            dispatch({
                type: "counter/increase"
            })
        },
        onDecrease() {
            dispatch({
                type: "counter/decrease"
            })
        },
        onAdd(num) {
            dispatch({
                type: "counter/add",
                payload: num
            })
        },
        onAsyncIncrease() {
            dispatch({
                type: "counter/asyncIncrease"
            })
        },
        onAsyncDecrease() {
            dispatch({
                type: "counter/asyncDecrease"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(Counter);