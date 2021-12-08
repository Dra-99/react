export default {
    state: null,
    reducers: {
        setLoginState(state, {payload}) {
            return payload;
        }
    },
    subscriptions: {
        onRefresh({dispatch}) {
            const loginId = localStorage.getItem("loginId");
            if(loginId) {
                dispatch({
                    type: "setLoginState",
                    payload: loginId
                })
            }
        }
    },
    effects: {
        *login({payload}, {put}) {
            const {loginId, loginPwd} = payload;
            if(loginId === "admin" && loginPwd === "123123") {
                yield put({
                    type: "setLoginState",
                    payload: loginId
                })
                localStorage.setItem("loginId", loginId);
                return true;
            }
            return false;
        },
        *loginOut(action, {put}) {
            yield put({
                type: "setLoginState",
                payload: null
            })
            localStorage.removeItem("loginId")
        }
    }
}