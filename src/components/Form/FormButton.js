import React from 'react'
import { Consumer } from './context'

export default function FormButton(props) {
    return (
        <Consumer>
            {ctx => {
                return (
                    <button onClick={() => {
                        ctx.submit && ctx.submit();
                    }}>{props.children}</button>
                )
            }}
        </Consumer>
    )
}
