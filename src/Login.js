import React from 'react'
import Store from './Store'
import qs from "query-string"

export default function Login(props) {
    return (
        <div>
            <h1>这是登录页</h1>
            {/* <button onClick={() => {
                const returnurl = qs.parse(props.location.search).returnurl;
                Store.login();
                if(returnurl) {
                    props.history.push(returnurl)
                }else {
                    props.history.push("/");
                }
            }}>登录</button> */}

            <button onClick={() => {
                Store.login();
                if(props.location.state) {
                    props.history.push(props.location.state)
                }else {
                    props.history.push("/")
                }
            }}>登录</button>
        </div>
    )
}
