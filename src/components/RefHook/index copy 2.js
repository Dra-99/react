import React, {useRef, useState, useEffect} from 'react'

export default function RefHook() {
    const [n, setN] = useState(10);
    const ref = useRef();

    useEffect(() => {
        ref.current = setTimeout(() => {
            if(n === 0) {
                return;
            }
            setN(n - 1);
        }, 1000)
        return () => {
            clearTimeout(ref.current);
        }
    })

    return (
        <div>
            <h1>{n}</h1>
        </div>
    )
}
