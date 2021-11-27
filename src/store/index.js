import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga"
import test from "./saga";

const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

export default createStore(reducer, applyMiddleware(sagaMid, logger));

sagaMid.run(test);