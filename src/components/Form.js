import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        loginId: "",
        loginPwd: "",
        selectLoves: [
            {desc: "打游戏", value: "game"},
            {desc: "足球", value: "footBall"},
            {desc: "篮球", value: "basketBall"},
            {desc: "乒乓球", value: "pingpang"},
            {desc: "看电影", value: "movie"}
        ],
        loves: [],
        city: "henan",
        sex: "male"
    }
    handleChange = (e) => {
        let val = e.target.value;
        const name = e.target.name;
        if(e.target.type === "checkbox") {
            if(e.target.checked) {
                val = [...this.state.loves, val];
            }else {
                val = this.state.loves.filter(item => item !== val);
            }
        }
        this.setState({
            [name]: val
        })
    }
    getLoveCheckBox = () => {
        return this.state.selectLoves.map(item => (<label key={item.value}>
            <input type="checkbox" value={item.value} 
                name="loves"
                checked={this.state.loves.includes(item.value)}
                onChange={this.handleChange}
            ></input>{item.desc}
        </label>))
    }
    render() {
        const arr = this.getLoveCheckBox();
        return (
            <div>
                <p>
                   账号: <input type="text" value={this.state.loginId} name="loginId" onChange={this.handleChange} />
                </p>        
                <p>
                   密码: <input type="password" value={this.state.loginPwd} name="loginPwd" onChange={this.handleChange} />
                </p>
                <p>
                    <select name="city" value={this.state.city} onChange={this.handleChange}>
                        <option value="henan">河南</option>
                        <option value="anhui">安徽</option>
                        <option value="shandong">山东</option>
                    </select>
                </p>
                <p>
                    <label>
                        <input type="radio" name="sex" value="male" checked={this.state.sex === "male"} onChange={this.handleChange} />男
                    </label>
                    <label>
                        <input type="radio" name="sex" value="female" checked={this.state.sex === "female"} onChange={this.handleChange} />女
                    </label>
                </p>
                <p>
                    {arr}
                </p>
                <button onClick={() => {
                    console.log(this.state)
                }}>打印</button>
            </div>
        )
    }
}
