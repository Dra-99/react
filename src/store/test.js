import store from './index'
import {fetchData} from './action/usersAction'

store.dispatch(fetchData());

console.log(store.getState())