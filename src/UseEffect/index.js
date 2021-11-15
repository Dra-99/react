import React, {useState, useEffect} from 'react'
const container = React.createRef();
let timer = null;

function stop() {
    clearInterval(timer);
    timer = null;
}

export default function UseEffect() {

    // let [position, setPosition] = useState({
    //     x: 0,
    //     y: 0
    // })

    const [, forceUpdata] = useState({})

    let [x, setX] = useState(0);
    let [y, setY] = useState(0);


    // 在每次重新渲染时都会调用副作用函数，并且在每次重新渲染时会将之前的副作用函数进行销毁，所以我们可以在销毁函数中书写清除定时器函数
    useEffect(() => {
        const everyX = x / 100;
        const everyY = y / 100;
        const div = container.current;
        let currentNum = 0;
        console.log("副租用函数运行了")
        timer = setInterval(() => {
            currentNum++;
            let newLeft = currentNum * everyX;
            let newTop = currentNum * everyY;
            div.style.left = newLeft + "px";
            div.style.top = newTop + "px";
            if(currentNum === 100) {
               stop();
            }
        }, 10)

        return stop;
    }, [x, y])

    return (
        <>
            <div ref={container} style={{
                width: 100,
                height: 100,
                background: "#008c8c",
                position: "absolute",
                top: 0,
                left: 0,
                marginTop: 100
            }}>
            </div>
            x: <input value={x} onChange={(e) => {
                setX(e.target.value)
            }} />
            y: <input value={y} onChange={(e) => {
                setY(e.target.value)
            }} />
            <button onClick={() => {
                forceUpdata({})
            }}>设置坐标</button>
        </>
    )
}
