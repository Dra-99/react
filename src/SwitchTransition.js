import { SwitchTransition, CSSTransition } from "react-transition-group";
import React, {useState} from "react";
// import "./switchTransition.css"
import "animate.css"

const duration = 1000;

export default function App() {

    const [show, setShow] = useState(true)

    return (
        <div>
            <SwitchTransition>
                <CSSTransition timeout={duration} key={show} classNames={{
                    enter: "animate__bounceIn",
                    exit: "animate__bounceOut"
                }}>
                    <h1 className="animate__animated">{show ? "title1" : "title2"}</h1>
                </CSSTransition>
            </SwitchTransition>
            <button onClick={() => setShow(!show)}>切换</button>
        </div>
    )
}