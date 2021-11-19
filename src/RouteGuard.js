import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

let prevLocation;
let curLocation;
let oAction;
let unBlock;

class ReouteGuardHelper extends Component {
    componentDidMount() {
        this.unListen = this.props.history.listen((location, action) => {
            const prevLocation = this.props.location;
            this.props.onChange && this.props.onChange(prevLocation, location, action, this.unListen);
        })

        // 添加阻塞
        unBlock = this.props.history.block((location, action) => {
            prevLocation = this.props.location;
            curLocation = location;
            oAction = action;
            return "阻塞发生了"
        })
    }
    componentWillUnmount() {
        this.unListen();
        // 清除阻塞
        unBlock();
    }

    render() {
        return null;
    }
    
}

const WithReouteGuardHelper = withRouter(ReouteGuardHelper);

class RouteGuard extends Component {

    userComfirmation = (msg, cb) => {
        this.props.onBeforeChange && this.props.onBeforeChange(prevLocation, curLocation, oAction, unBlock, cb, msg);
    }

    render() {
        return (
            <Router getUserConfirmation={this.userComfirmation}>
                <WithReouteGuardHelper onChange={this.props.onChange} />
                {this.props.children}
            </Router>
        )
    }
}

export default RouteGuard;