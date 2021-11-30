import React from 'react'
import "./index.css"

export default class SearchStudentBar extends React.Component {

    constructor(props) {
        super(props);
        const def = {
            key: "",
            sex: -1
        }
        this.state = Object.assign({}, def, this.props.defaultVal);
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            sex: +e.target.value
        })
    }

    handleSearch = () => {
        this.props.onSearch && this.props.onSearch(this.state)
    }

    render() {
        return (
            <div className="search-area">
                关键字:<input type="text" value={this.state.key} onChange={(e) => {
                    this.setState({
                        ...this.state,
                        key: e.target.value
                    });
                }} placeholder="请输入关键字" />
                性别:<label>
                    <input type="radio" checked={this.state.sex === -1} onChange={this.handleChange} value={-1} />不限
                </label>
                <label>
                    <input type="radio" checked={this.state.sex === 0} onChange={this.handleChange} value={0} />男
                </label>
                <label>
                    <input type="radio" checked={this.state.sex === 1} onChange={this.handleChange} value={1} />女
                </label>
                <button onClick={this.handleSearch}>搜索</button>
            </div>
        )
    }
}
