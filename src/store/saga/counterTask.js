import {  delay, take, put, fork, cancel, race, call } from "redux-saga/effects";
import { actionTypes, createIncreaseAction } from "../action/counter";
// eslint-disable-next-line import/no-anonymous-default-export


function* autoIncrease() {
    while(true) {
        yield take(actionTypes.AUTOINCREASE);
        yield race({
            autoIncrease: call(function* () {
                while(true) {
                    yield delay(2000);
                    yield put(createIncreaseAction());
                }
            }),
            cancel: take(actionTypes.CANCELAUTOINCREASE)
        })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield fork(autoIncrease);
    console.log("counterTask 执行了")
}