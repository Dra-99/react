import React, {useRef} from 'react'
import style from "./index.css"
export default function index(props) {

    const idRef = useRef();
    const pwdRef = useRef();

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.title}>
                    <h1>学生管理后台</h1>
                </div>
                <div className={style.inpItem}>
                    <label>
                        账号:
                        <input ref={idRef} type="text" placeholder="请输入账号" />
                    </label>
                </div>
                <div className={style.inpItem}>
                    <label>
                        密码:
                        <input ref={pwdRef} type="password" placeholder="请输入密码" />
                    </label>
                </div>
                <div className={style.btn}>
                    <button onClick={() => {
                        const loginId = idRef.current.value;
                        const loginPwd = pwdRef.current.value;
                        props.onLogin && props.onLogin(loginId, loginPwd)
                    }}>登录</button>
                </div>
            </div>
        </div>
    )
}
