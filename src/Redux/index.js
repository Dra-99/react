import {createStore, bindActionCreators} from "redux"
import * as numberAction from './action/number-action'
import * as getAction from './action/getAction'

// 创建reducer函数，来处理仓库数据
function reducer(state, action) {
    if(action.type === numberAction.INCREASE) {
        return state + 1;
    }else if(action.type === numberAction.DECREASE) {
        return state - 1;
    }else if(action.type === numberAction.SET) {
        return action.payload;
    }else {
        return state;
    }
}

// 创建仓库
const store = createStore(reducer, 10);

console.log(store.getState());

const actionCreator = bindActionCreators(getAction, store.dispatch);
actionCreator.getIncreaseAction();

console.log(store.getState());