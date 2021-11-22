import * as usersAction from '../action/usersAction'
import {v4} from 'uuid'

const initState = [
    {id: v4(), name: "张三", age: 18},
    {id: v4(), name: "李四", age: 20}
]

export default function users(state = initState, {type, payload}) {
    switch (type) {
        case usersAction.ADDUSER:
            return [...state, payload];
        case usersAction.DELETEUSER: 
            return state.filter(item => item.id !== payload);
        case usersAction.UPDATEUSER: 
            return state.map(item => item.id === payload.id ? {...item, ...payload} : item);
        default:
            return state;
    }
}