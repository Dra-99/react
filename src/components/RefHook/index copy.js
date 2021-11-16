import React, {useRef, useState} from 'react'
window.inpArr = [];

export default function RefHook() {

    const inpRef = useRef();
    const [val, setVal] = useState(0);

    window.inpArr.push(inpRef);

    return (
        <div>
            <input ref={inpRef} />
            <button onClick={() => {
                console.log(inpRef.current.value);
            }}>点击获取</button>
            <input value={val} type="number" onChange={e => {
                setVal(e.target.value);
            }} />
        </div>
    )
}
