import React, {useState, useMemo} from 'react'

function CompA(props) {
    return (
        <li>{props.num}</li>
    )
}

export default function MemoHook() {

    const [val, setVal] = useState(0)
    const [range] = useState({
        min: 0,
        max: 10000
    })

    const lis = useMemo(() => {
        let lis = [];
        for (let i = range.min; i < range.max; i++) {
            lis.push(<CompA key={i} num={i} />)
        }
        return lis;
    }, [range]);
    return (
        <div>
            <ul>
                {lis}
            </ul>
            <input type="number" value={val} onChange={e => {
                setVal(e.target.value);
            }} />
        </div>
    )
}
