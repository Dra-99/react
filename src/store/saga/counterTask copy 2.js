import { takeEvery, delay, take, put, fork, cancel } from "redux-saga/effects";
import { actionTypes, createIncreaseAction } from "../action/counter";
// eslint-disable-next-line import/no-anonymous-default-export

// 使用takeLatest可以实现下面一样的功能
let task;

function* cancelTask() {
    if(task) {
        yield cancel(task);
    }
}

// 手写takeLatest，使用外部变量来管理是否取消
function* autoIncrease() {
    while(true) {
        yield take(actionTypes.AUTOINCREASE);
        yield* cancelTask();
        task = yield fork(function* () {
            while(true) {
                yield delay(2000);
                yield put(createIncreaseAction())
            }
        })
    }
}

function* handleCancel() {
    yield cancelTask();
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield fork(autoIncrease);
    yield takeEvery(actionTypes.CANCELAUTOINCREASE, handleCancel)
}