import React, {useState} from 'react'
import FadeTransition from './components/FadeTransition/index.js'
import { SwitchTransition, TransitionGroup } from 'react-transition-group'
import { v4 } from 'uuid'

export default function App() {

    const [show, setShow] = useState(true)

    const [task, setTask] = useState([
        {id: v4(), name: "任务1"},
        {id: v4(), name: "任务2"}
    ])

    const [name, setName] = useState("");

    return (
        <div>
            {/* <SwitchTransition>
                <FadeTransition appear key={show} timeout={2000}>
                    <h1>这是一个淡入淡出</h1>
                </FadeTransition>
            </SwitchTransition>
            <button onClick={() => setShow(!show)}>切换</button> */}
            <TransitionGroup component="ul">
                {task.map(item => <FadeTransition key={item.id} timeout={2000}>
                    <li>
                        {item.name}
                        <button onClick={() => {
                            setTask(task.filter(it => it.id !== item.id))
                        }}>删除任务</button>
                    </li>
                </FadeTransition>)}
            </TransitionGroup>
            <input type="text" value={name} onChange={e => {
                setName(e.target.value);
            }} />
            <button onClick={() => {
                setTask([...task, {
                    id: v4(),
                    name,
                }])
            }}>添加任务</button>
        </div>
    )
}
