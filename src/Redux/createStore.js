/**
 * 实现createStore功能
 */

// 用来判断action是否为平面对象
function isPlainObj(obj) {
    if(typeof obj !== "object") {
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}

// 得到一个随机数
function getRandom(length) {
    return Math.random().toString(36).slice(2, length).split("").join(".");
}

let listeners = [];

export default function createStore(reducer, defaultState) {

    let currentReducer = reducer,
        currentState = defaultState;

    function dispatch(action) {
        if(!isPlainObj(action)) {
            throw new Error("action must is a plain object");
        } 
        if(action.type === undefined) {
            throw new Error("action must have a props of type");
        }
        currentState = currentReducer(currentState, action);

        for (const listener of listeners) {
            listener();
        }
    }

    function getState() {
        return currentState;
    }

    function subscribe(listener) {
        listeners.push(listener);
        let isCancel = false;
        return function unlisten() {
            if(isCancel) {
                return;
            }
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
            isCancel = true;
        }
    }

    dispatch({
        type: `@@Redux/INIT${getRandom(7)}`
    })

    return {
        dispatch,
        getState,
        subscribe
    }
}