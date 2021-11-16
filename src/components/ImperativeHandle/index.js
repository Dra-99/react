import React, {useRef, useImperativeHandle} from 'react'

function Test(props, ref) {
    useImperativeHandle(ref, () => {
        return {
            method() {
                console.log("Test 出发了")
            }
        }
    })
    return (
        <h1>这是组建Test</h1>
    )
}

const NewTest = React.forwardRef(Test);

export default function ImperativeHandle() {

    const ref = useRef();

    return (
        <div>
            <NewTest ref={ref} />
            <button onClick={() => {
                ref.current.method();
            }}>点击触发</button>
        </div>
    )
}
