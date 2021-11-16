import React, {useReducer} from 'react'
// import { useReducer } from './useReducer';

function reducer(state, action) {
    switch (action.type) {
        case "increase":
            return state+1;
        case "decrease": 
            return state-1;
        default:
            return state;
    }
}

function fun(arg) {
    console.log(arg)
    return 100
}

export default function ReducerHook() {
    const [num, dispatch] = useReducer(reducer, 10, fun);
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "decrease"
                })
            }}>-</button>
            <span>{num}</span>
            <button onClick={() => {
                dispatch({
                    type: "increase"
                })
            }}>+</button>
        </div>
    )
}
