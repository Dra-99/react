import { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Prompt extends Component {

    static defaultProps = {
        when: false, //什么时候触发阻塞
        message: "" // 阻塞提示消息
    }

    componentDidMount() {
        this.prevent();
    }

    componentWillUpdate(nextProps, nextState) {
        this.prevent();
    }
    
    

    prevent = () => {
        if(this.props.when) {
            this.unBlock = this.props.history.block(this.props.msg);
        }else {
            this.unBlock && this.unBlock();
        }
    }

    componentWillUnmount() {
        this.unBlock && this.unBlock();
    }
    

    render() {
        return null;
    }
}

export default withRouter(Prompt)