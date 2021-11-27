import {all} from "redux-saga/effects"
import counterTask from "./counterTask"
import studentTask from "./studentTask"

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([counterTask(), studentTask()]);
    console.log("saga 完成");
}