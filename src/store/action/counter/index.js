import {createActions, handleActions} from 'redux-actions'

const actions = createActions({
    INCREASE: null,
    DECREASE: null,
    AUTO_INCREASE: null,
    CANCEL_AUTO_INCREASE: null,
    ADD: number => number 
})

export const {increase, decrease, autoIncrease, cancelAutoIncrease, add} = actions;

export default handleActions({
    [increase]: state => state + 1,
    [decrease]: state => state - 1,
    [add]: (state, {payload}) => state + payload
}, 10)