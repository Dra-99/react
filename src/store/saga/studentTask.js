import {takeEvery, put, call, select} from "redux-saga/effects"
import {fetchData, setLoading, setStudentTotalAndDatas} from "../action/student/searchResult"
import {searchStudent} from '../../service/getStudent'

function getError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve("运行成功")
            }else {
                reject(new Error("error"))
            }
        }, 2000)
    })
}

function mockStudent(condition, cb) {
    console.log("mockStudent函数执行", condition);
    setTimeout(() => {
        if(Math.random() > 0.5) {
            cb(null, {
                cont: 12,
                datas: [
                    {name: "贾勒"},
                    {name: "大傻蛋"}
                ]
            })
        }else {
            cb(new Error("出错啦"), null);
        }
    }, 3000)
}

// eslint-disable-next-line import/no-anonymous-default-export
function* fetchDataSaga() {
    yield put(setLoading(true))
    const condition = yield select(state => state);
    console.log(condition)
    const result = yield call(searchStudent, condition);
    yield put(setStudentTotalAndDatas(result.datas, result.cont));
    yield put(setLoading(false))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    console.log("studentTask触发了");
    const result = yield takeEvery(fetchData.toString(), fetchDataSaga);
    console.log("fetchData函数执行", result);
}