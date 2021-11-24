import { actionTypes } from "../../action/student/searchResult"

const initialState = {
    total: 0, //总数
    datas: [], //学生数组
    isLoading: false, //是否在加载中
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case actionTypes.SETSTUDENTTOTALANDDATAS:
        return {
            ...state,
            ...payload
        }
    case actionTypes.SETLOADING: 
        return {
            ...state,
            isLoading: payload
        }
    default:
        return state
    }
}
