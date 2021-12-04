// eslint-disable-next-line import/no-anonymous-default-export
export default {
    namespace: "counter",
    state: 0,
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
        add(state, {payload}) {
            console.log(payload)
            return state + payload
        }
    },
    effects: {
        *asyncIncrease(action, {call, put}) {
            yield call(delay, 2000);
            yield put({
                type: "increase"
            })
        },
        *asyncDecrease(action, {call, put}) {
            yield call(delay, 2000);
            yield put({
                type: "decrease"
            })
        }
    },
    subscriptions: {
        resize({dispatch, history}) {
            window.onresize = () => {
                dispatch({
                    type: "increase"
                })
            }
        },
        routeChange({dispatch, history}) {
            history.listen(() => {
                dispatch({
                    type: "decrease"
                })
            })
        }
    }
}

function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration)
    })
}