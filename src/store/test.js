import store from "./index";
import {createFetchData} from './action/student/searchResult'
import {createDecreaseAction, createIncreaseAction, createAutoIncreaseAction, createCancelAutoIncreaseAction} from './action/counter'

window.increase = () => {
    store.dispatch(createIncreaseAction())
}

window.decrease = () => {
    store.dispatch(createDecreaseAction());
}

window.fetchData = () => {
    store.dispatch(createFetchData())
}

window.autoIncrease = () => {
    store.dispatch(createAutoIncreaseAction());
}

window.cancelIncrease = () => {
    store.dispatch(createCancelAutoIncreaseAction());
}