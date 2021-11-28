import store from "./index";
import {fetchData} from './action/student/searchResult'
import {decrease, increase, autoIncrease, cancelAutoIncrease} from './action/counter'

window.increase = () => {
    store.dispatch(increase())
}

window.decrease = () => {
    store.dispatch(decrease());
}

window.fetchData = () => {
    store.dispatch(fetchData())
}

window.autoIncrease = () => {
    store.dispatch(autoIncrease());
}

window.cancelIncrease = () => {
    store.dispatch(cancelAutoIncrease());
}