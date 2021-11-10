import React from 'react'
import "./index.css"

export default function Modal(props) {

    const defaultProps = {
        bgColor: "rgba(0, 0, 0, .6)",
        text: "加载中..."
    }

    const data = Object.assign({}, defaultProps, props);

    return (
        <div onClick={(e) => {
            if(e.target.className === "modal") {
                data.onClose();
            }
        }} className="modal" style={{
            background: data.bgColor
        }}>
            <div className="modal-center">
            {data.children}
            </div>
        </div>
    )
}
