import React from 'react'
import withRouter from "umi/withRouter"

function A(props) {
    // console.log(props)
    return (
        <div>
            <button onClick={() => {
                props.history.push("/")
            }}>跳转到首页</button>
            <h1>这是A组件</h1>
        </div>
    )
}


export default withRouter(A)