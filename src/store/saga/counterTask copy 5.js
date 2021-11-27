import {  delay, take, put, fork, cancel, cancelled, race, call } from "redux-saga/effects";
import { actionTypes, createIncreaseAction, createDecreaseAction } from "../action/counter";
// eslint-disable-next-line import/no-anonymous-default-export

function asyncAction() {
    // 随机生成1-5秒的数值
    const duration = Math.floor(Math.random() * 4000 + 1000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve(createIncreaseAction())
            }else {
                resolve(createDecreaseAction())
            }
        }, duration)
    })
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    var result = yield race({
        action1: call(asyncAction),
        action2: call(asyncAction)
    })
    console.log(result);
}