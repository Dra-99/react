import {actionTypes} from '../../action/student/searchCondition'
const initialState = {
    key: "", //查询的关键字
    page: 1, //当前页码
    limit: 10, // 每页显示的条数
    sex: -1  //性别
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case actionTypes.CHANGE:
        return {
            ...state,
            ...payload
        }
    default:
        return state
    }
}
