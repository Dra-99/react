import React from 'react'
import "./login.css"
export default function Login() {
    return (
        <div className="login-page">
            <div className="login-area">
                <p>
                    <label>
                        账号:
                        <input type="text" placeholder="请输入账号" />
                    </label>
                </p>
                <p>
                    <label>
                        密码:
                        <input type="password" placeholder="请输入密码" />
                    </label>
                </p>
                <button className="login">登录</button>
            </div>
        </div>
    )
}
