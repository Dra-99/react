/**
 * title: 欢迎页
 * Routes: 
 *      - ./src/routes/privateRoute.js
 */
import React from 'react'

export default function welcome(props) {
    const name = localStorage.getItem("loginId");

        return (
            <div>
                <h1>欢迎登录, {name}</h1>
                <button onClick={() => {
                    localStorage.removeItem("loginId");
                    props.history.push("/")
                }}>注销</button>
            </div>
        )
}
