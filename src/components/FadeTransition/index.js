import React from 'react'
import {CSSTransition} from "react-transition-group"
import "./index.css"

export default function index(props) {

    function handleShow(dom, timeout) {
        dom.style.transition = `opacity ${timeout}ms`;
    }



    return (
        <CSSTransition {...props} classNames="fade" 
            onEntering={(dom) => handleShow(dom, props.timeout)}
            onExiting={dom => handleShow(dom)}
        ></CSSTransition>
    )
}

index.defaultProps = {
    timeout: 500
}
