import {  delay, take, put, fork, cancel, cancelled } from "redux-saga/effects";
import { actionTypes, createIncreaseAction } from "../action/counter";
// eslint-disable-next-line import/no-anonymous-default-export


function* autoIncrease() {
    while(true) {
        yield take(actionTypes.AUTOINCREASE);
        const task = yield fork(function* () {
            try {
                while(true) {
                    yield delay(2000);
                    yield put(createIncreaseAction());
                }
            } finally {
                // cancelled用来判断任务是否被取消掉了
                if(cancelled) {
                    console.log("任务被取消掉了");
                }
            }
        })
        yield take(actionTypes.CANCELAUTOINCREASE);
        yield cancel(task);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield fork(autoIncrease);
    console.log("counterTask 执行了")
}