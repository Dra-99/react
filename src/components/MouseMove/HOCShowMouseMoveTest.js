import withShowMouseMove from "./withShowMouseMove";

import React from 'react'

function ShowPosition(props) {
    return (
        <h1>x: {props.x}, y: {props.y}</h1>
    )
}


function ShowSquare(props) {
    return (
        <div style={{
            width: 100,
            height: 100,
            left: props.x - 50,
            top: props.y - 50,
            background: "#008c8c",
            position: "absolute"
        }}>
        </div>
    )
}

const MousePosition = withShowMouseMove(ShowPosition)
const MouseSquare = withShowMouseMove(ShowSquare)

export default function HOCShowMouseMoveTest() {
    return (
        <>
            <MousePosition />
            <MouseSquare />
        </>
    )
}