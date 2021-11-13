import React, { Component } from 'react'
import FormInput from './FormInput'
import { Provider } from './context';
import FormButton from './FormButton';
import PropTypes from 'prop-types'

export default class Form extends Component {

    state = {
        formData: {},
        changeFormData: (key, value) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [key]: value
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

Form.Input = FormInput;
Form.Button = FormButton;

