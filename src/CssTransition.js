import { CSSTransition } from "react-transition-group";
import React, {useState} from "react";
import "./cssTransition.css"
import "animate.css"

const duration = 500;

function Transition({visiable, children}) {
    return (<CSSTransition in={visiable} mountOnEnter appear timeout={duration} classNames={{
        enterActive: "animate__fadeInRight",
        exitActive: "animate__fadeOutLeft",
        exitDone: "exit-done",
        appearActive: "animate__fadeInRight"
    }}>
        {children}
    </CSSTransition>)
}

function Comp1() {
    return <h1 className="animate__animated">组件1</h1>
}

function Comp2() {
    return <h1 className="animate__animated">组件2</h1>
}

export default function App() {
    const [visiable, setVisiable] = useState(true)

    return (
        <div className="container">
            <Transition visiable={visiable}>
                <Comp1></Comp1>
            </Transition>
            <Transition visiable={!visiable}>
                <Comp2></Comp2>
            </Transition>
            <button onClick={() => setVisiable(!visiable)}>转换</button>
        </div>
    )
}