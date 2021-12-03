import React from 'react'
import store from './store/index'
import {Provider} from 'react-redux'
import Admin from './pages/Admin'
import Login from "./pages/Login"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {ConnectedRouter} from "connected-react-router"
import history from './store/history'

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}
