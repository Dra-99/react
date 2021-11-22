import reducer from './reducer'
import {createStore} from "redux"
import * as userAction from './action/usersAction'
import { v4 } from 'uuid';


const store = createStore(reducer);
console.log(store.getState());
store.dispatch(userAction.createAddUserActio({
    id: v4(),
    name: "贾乐",
    age: 100
}))
console.log(store.getState());