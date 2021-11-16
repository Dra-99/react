import React, {useRef, useState, useEffect} from 'react'

export default function RefHook() {
    const [n, setN] = useState(10);
    const ref = useRef(n);

    useEffect(() => {
        const timer = setInterval(() => {
            ref.current--;
            setN(ref.current);
            if(ref.current === 0) {
                clearInterval(timer)
            }
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <h1>{n}</h1>
        </div>
    )
}
