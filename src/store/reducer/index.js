import student from './student'
import { combineReducers } from 'redux'
import counter from './counter'
import {connectRouter} from "connected-react-router"
import history from '../history'

export default combineReducers({
    student,
    counter,
    router: connectRouter(history)
})