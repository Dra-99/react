import React from 'react'

export default function CheckBoxGroup(props) {

    /**
     * 传递过来的props中用来展示多选的数据应该是一个数组
     * 还应该有一个事件，我们需要在组件里来触发它
     * [
     *  {text: "足球", value: "footBall"},
     *  {text: "篮球", value: "basketBall"},
     *  {text: "乒乓球", value: "pingpang"}
     * ]
     */
    let checkBox;
    function getCheckBox() {
        checkBox = props.datas.map(item => (<label key={item.value}>
            <input type="checkbox" 
                value={item.value} 
                checked={props.selected.includes(item.value)}
                onChange={handleChange}
                name={props.name} />
                {item.text}
        </label>))
    }

    function handleChange(e) {
        let newArr;
        if(e.target.checked) {
            newArr = [...props.selected, e.target.value];
        }else {
            newArr = props.selected.filter(item => item !== e.target.value)
        }
        props.onChange && props.onChange(newArr, props.name, e);
    }

    getCheckBox();

    return (
        <div>
            {checkBox}
        </div>
    )
}
