/**
 * title: 登录页
 * Routes: 
 *      - ./src/routes/showTitle.js
 */
import React, {useRef} from 'react'


export default function login(props) {
    const inpT = useRef();
    const inpP = useRef();

    return (
        <div>  
            <p>
                账号: <input type="text" ref={inpT}/>
            </p>
            <p>
                密码: <input type="password" ref={inpP} />
            </p>
            <button onClick={() => {
                const count = inpT.current.value;
                const psd = inpP.current.value;
                if(psd === "123123") {
                    localStorage.setItem("loginId", count);
                    props.history.push("/welcome")
                }else {
                    alert("账号或密码错误");
                }
            }}>登录</button>
        </div>
    )
}
