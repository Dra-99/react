import {searchStudents} from "../services/student"
import {routerRedux} from "dva"

export default {
    state: {
        condition: {
            page: 1,
            key: "",
            sex: -1,
            limit: 10
        },
        result: {
            total: 0,
            datas: []
        }
    },
    reducers: {
        changeCondition(state, {payload}) {
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...payload
                }
            }
        },
        setResult(state, {payload}) {
            return {
                ...state,
                result: {
                    ...state.result,
                    ...payload
                }
            }
        }
    },
    effects: {
        *fetchData(action, {put, select, call}) {
            const condition = yield select(state => state.searchStudent.condition);
            const result = yield call(searchStudents, condition);
            yield put({
                type: "setResult",
                payload: {
                    total: result.cont,
                    datas: result.datas
                }
            })
        },
        *setCondition({payload}, {put, select}) {
            let condition = yield select(state => state.searchStudent.condition);
            condition = {
                ...condition,
                ...payload
            }
            yield put(routerRedux.push(`?page=${condition.page}&sex=${condition.sex}&limit=${condition.limit}&key=${condition.key}`))
        }
    },
    subscriptions: {
        urlListen({dispatch, history}) {
            history.listen((state) => {
                if(state.pathname !== "/student") {
                    return;
                }
                state.query.page = state.query.page && +state.query.page;
                state.query.limit = state.query.limit && +state.query.limit;
                state.query.sex = state.query.sex && +state.query.sex;


                dispatch({
                    type: "changeCondition",
                    payload: state.query
                })

                dispatch({
                    type: "fetchData"
                })
            })
        }
    }
}