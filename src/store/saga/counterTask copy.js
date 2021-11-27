import { takeEvery, delay, put, takeLatest } from "redux-saga/effects";
import { actionTypes, createIncreaseAction } from "../action/counter";
// eslint-disable-next-line import/no-anonymous-default-export

// 使用takeLatest可以实现下面一样的功能
// let task;
// function* autoIncrease() {
//     while(true) {
//         yield take(actionTypes.AUTOINCREASE);
//         if(task) {
//             yield cancel(task)
//         }
//         task = yield fork(function* () {
//             while(true) {
//                 yield delay(2000);
//                 yield put(createIncreaseAction())
//             }
//         })
//     }
// }

// 这是一种方式，用来停止前一个定时器任务
let isStop = false;
function* autoIncrease() {
    isStop = false;
    while(true) {
        if(isStop) {
            break;
        }
        yield delay(2000);
        yield put(createIncreaseAction())
    }
}
function* handleStop() {
    isStop = true;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield takeLatest(actionTypes.AUTOINCREASE, autoIncrease);
    yield takeEvery(actionTypes.CANCELAUTOINCREASE, handleStop)
}