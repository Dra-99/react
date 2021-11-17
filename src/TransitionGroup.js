import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, {useState} from 'react';
import {v4} from 'uuid'
import "./transitionGroup.css"

export default function App() {

    const [task, setTask] = useState([
        {id: v4(), name: "任务1"},
        {id: v4(), name: "任务2"}
    ])

    const [name, setName] = useState();

    return (
        <div>
            <TransitionGroup component="ul">
                {task.map(item => <CSSTransition key={item.id} timeout={500}>
                    <li>
                        {item.name}
                        <button onClick={() => {
                            setTask(task.filter(it => it.id !== item.id))
                        }}>删除</button>
                    </li>
                </CSSTransition> )}
                <input type="name" value={name} onChange={(e) => {
                    setName(e.target.value);
                }} />
                <button onClick={() => {
                    setTask([...task, {
                        id: v4(),
                        name
                    }])
                }}>添加任务</button>
            </TransitionGroup>
        </div>
    )
}