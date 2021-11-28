import {  createActions, handleActions } from "redux-actions"

const actions = createActions({
    SET_STUDENT_TOTAL_AND_DATAS: (datas, total) => ({
        total,
        datas
    }),
    SET_LOADING: isLoading => isLoading,
    FETCH_DATA: null
})

export const {setStudentTotalAndDatas, setLoading, fetchData} = actions;

export default handleActions({
    [setStudentTotalAndDatas]: (state, {payload}) => ({
        ...state,
        ...payload
    }),
    [setLoading]: (state, {payload}) => ({
        ...state,
        isLoading: payload
    })
}, {
    total: 0,
    datas: [],
    isLoading: false
})


