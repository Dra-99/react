import React, { Component } from 'react'
import style from "./index.css"

export default class Modal extends Component {
    render() {
        if(this.props.isShow) {
            return (
                <div className={style.container}>
                    <div className={style.text}>
                        {this.props.children}
                    </div>
                </div>
            )
        }else {
            return null;
        }
    }
}
