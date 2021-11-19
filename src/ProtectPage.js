import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Store from './Store'

export default function ProtectPage({component: Component, render, ...rest}) {
    return (
        <Route {...rest} render={(e) => {
            if(Store.state.isLogin) {
                return <Component />;
            }else {
                // return <Redirect to={{
                //     pathname: "/login",
                //     search: "?returnurl=" + e.location.pathname
                // }} />
                return <Redirect to={{
                    pathname: "/login",
                    state: e.location.pathname
                }} />
            }
        }}></Route>
    )
}
