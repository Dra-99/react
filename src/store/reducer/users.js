import * as usersAction from '../action/usersAction'

const initState = {
    datas: [],
    isLoading: false
}

export default function users(state = initState, {type, payload}) {
    switch (type) {
        case usersAction.ADDUSER:
            return {
                ...state,
                datas: [...state.datas, payload]
            }
        case usersAction.DELETEUSER: 
            return {
                ...state,
                datas: state.datas.filter(item => item.id !== payload)
            };
        case usersAction.UPDATEUSER: 
            return {
                ...state,
                datas: state.datas.map(item => item.id === payload.id ? {...item, ...payload} : item)
            };
        case usersAction.SETUSER:
            return {
                ...state,
                datas: payload
            };
        case usersAction.SETLOADING: 
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state;
    }
}