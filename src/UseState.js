import React, {useState} from 'react'

export default function UseState() {

    let [data, setData] = useState(0)
    let [visiable, setVisiable] = useState(true);

    return (
        <div>
            <div style={{
                display: visiable ? "" : "none"
            }}>
                <button onClick={() => {
                    setData(data-1)
                }}>-</button>
                {data}
                <button onClick={() => {
                    setData(data+1)
                }}>+</button>
            </div>
            <button onClick={()=>{
                setVisiable(!visiable)
            }}>显示/隐藏</button>
        </div>
    )
}
