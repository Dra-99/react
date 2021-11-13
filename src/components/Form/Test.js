import React, { Component } from 'react'
import Form from './index'

export default class Test extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={(data) => {
                    console.log(data);
                }}>
                    <p>
                        账号:
                        <Form.Input name="loginId"></Form.Input>
                    </p>
                    <p>
                        密码:
                        <Form.Input name="loginPwd" type="password"></Form.Input>
                    </p>
                    <Form.Button>提交</Form.Button>
                </Form>
            </div>
        )
    }
}
