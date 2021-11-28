import { createActions, handleActions } from "redux-actions";

const actions = createActions({
    CHANGE: newCondition => newCondition
})

export const {change} = actions;

export default handleActions({
    [change]: (state, {payload}) => ({
        ...state,
        ...payload
    })
}, {
   key: "",
   page: 1,
   limit: 10,
   sex: -1 
})

