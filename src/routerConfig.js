import React from 'react'
import Counter from './components/Counter'
import { routerRedux, Route, Switch, NavLink} from "dva/router"



function Home() {
    return (
        <h1>首页</h1>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({history}) {
    return (
        <routerRedux.ConnectedRouter history={history}>
            <div>
                <div>
                    <p>
                        <NavLink to="/">首页</NavLink>
                    </p>
                    <p>
                        <NavLink to="counter">计数器</NavLink>
                    </p>
                </div>
                <Switch>
                    <Route path="/counter" component={Counter}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </div>
        </routerRedux.ConnectedRouter>
    )
}