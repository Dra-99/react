import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga"
import test from "./saga";
import {routerMiddleware} from "connected-react-router"
import history from "./history";
import {composeWithDevTools} from "redux-devtools-extension"

const routerMid = routerMiddleware(history)

const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

export default createStore(reducer, composeWithDevTools(applyMiddleware(routerMid, sagaMid, logger)));

sagaMid.run(test);