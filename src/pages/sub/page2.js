import React from 'react'

export default function page2(props) {
    console.log(props)
    return (
        <div>
            <button onClick={() => {
                props.history.push("/page1")
            }}>跳转到page1页面</button>
            <h1>sub/page2</h1>
        </div>
    )
}
