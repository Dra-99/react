import reducer from './reducer'
import {createStore, applyMiddleware} from "redux"
// import {createStore, bindActionCreators} from '../Redux'
import {createLogger} from 'redux-logger'
import thunk from "redux-thunk"

const logger = createLogger({
    collapsed: false
})


export default createStore(reducer, applyMiddleware(thunk, logger));



