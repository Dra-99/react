import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(reducer, applyMiddleware(thunk, logger));