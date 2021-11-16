import {useState} from 'react';

export function useReducer(reducer, initVal, fun) {
    const [num, setNum] = useState(fun ? fun(initVal) : initVal);
    function dispatch(action) {
        const newNum = reducer(num, action);
        console.log(`日志记录: ${num} => ${newNum}`)
        setNum(newNum);
    }
    return [num, dispatch];
}