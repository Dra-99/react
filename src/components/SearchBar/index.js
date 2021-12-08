import React, {useState} from 'react'
import style from "./index.css"

export default function index(props) {

    const [condition, setCondition] = useState({
        key: "",
        sex: -1,
        ...props.defaultValue
    })

    function handleChange (newVal) {
        setCondition({
            ...condition,
            sex: newVal
        })
    }

    function handleSearch() {
        props.searchStudent && props.searchStudent(condition);
    }

    return (
        <div>
            <label className={style.condition}>
                查询条件: <input type="text" onChange={(e) => {
                    setCondition({
                        ...condition,
                        key: e.target.value
                    })
                }} value={condition.key} placeholder="请输入查询条件" />
            </label>
            性别: 
            <label>
                <input type="radio" value={-1} checked={condition.sex === -1} onChange={(e) => {
                    handleChange(parseInt(e.target.value))
                }} />不限
            </label>
            <label>
                <input type="radio" value={0} checked={condition.sex === 0} onChange={(e) => {
                    handleChange(parseInt(e.target.value))
                }}/>男
            </label>
            <label>
                <input type="radio" value={1} checked={condition.sex === 1} onChange={(e) => {
                    handleChange(parseInt(e.target.value))
                }} />女
            </label>
            <button className={style.btn} onClick={handleSearch}>查询</button>
        </div>
    )
}
