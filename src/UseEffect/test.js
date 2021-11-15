import React, {useEffect, useState} from 'react'
let timer = null;
export default function UseEffect() {

    let [num, setNum] = useState(10);

    useEffect(() => {
        setTimeout(() => {
            if(num === 0) {
                return;
            }
            setNum(num-1);
        }, 1000)
    }, [num])

    return (
        <div>
            <h1>{num}</h1>
        </div>
    )
}
