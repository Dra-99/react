// 将不同的reducer合并为一个
import userLogin from './userLogin'
import users from './users'
import { combineReducers } from 'redux'

// eslint-disable-next-line import/no-anonymous-default-export
// export default (state = {}, action) => {
//     const newState = {
//         userLogin: userLogin(state.userLogin, action),
//         users: users(state.users, action)
//     }
//     return newState;
// }

export default combineReducers({
    userLogin,
    users
})