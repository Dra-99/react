import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import "animate.css"

export default function RouteAnimate(props) {
    const {component : Component, ...rest} = props
    return (
        <Route {...rest}>
            {({match}) => {
                return <CSSTransition
                    in={match ? true : false}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    timeout={2000}  
                    classNames={{
                        enter: "animate__animated animate__fadeInRight",
                        exit: "animate__animated animate__fadeOutLeft",
                    }}  
                >
                    {Component}
                </CSSTransition>
            }}
        </Route>
    )
}
