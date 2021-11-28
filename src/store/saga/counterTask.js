import {  delay, take, put, fork, race, call } from "redux-saga/effects";
import { autoIncrease, cancelAutoIncrease, increase} from "../action/counter";
// eslint-disable-next-line import/no-anonymous-default-export


function* autoIncreaseSaga() {
    while(true) {
        yield take(autoIncrease.toString());
        yield race({
            autoIncrease: call(function* () {
                while(true) {
                    yield delay(2000);
                    yield put(increase());
                }
            }),
            cancel: take(cancelAutoIncrease.toString())
        })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield fork(autoIncreaseSaga);
    console.log("counterTask 执行了")
}