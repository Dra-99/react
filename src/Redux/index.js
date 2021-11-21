import {createStore} from "redux"

// 创建reducer函数，来处理仓库数据
function reducer(state, action) {
    if(action.type === "increase") {
        return state + 1;
    }else if(action.type === "decrease") {
        return state - 1;
    }else {
        return state;
    }
}

// 创建仓库
const store = createStore(reducer, 10);

console.log(store.getState());
// 创建action
const action = {
    type: "decrease"
}
// 分发action
store.dispatch(action);

console.log(store.getState());