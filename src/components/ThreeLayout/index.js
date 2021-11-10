import React from 'react'
import "./index.css"

export default function ThreeLayout(props) {

    const datas = {
        leftWidth: 200,
        rightWidth: 300,
        minWidth: 800
    }

    const newProps = Object.assign({}, datas, props);

    return (
        <div className="odiv">
            <div className="main" style={{
                minWidth: newProps.minWidth
            }}>
                {newProps.children}
            </div>
            <div className="left" style={{
                width: newProps.leftWidth
            }}>
                {newProps.leftContent}
            </div>
            <div className="right" style={{
                width: newProps.rightWidth
            }}>
                {newProps.rightContent}
            </div>
        </div>
    )
}
