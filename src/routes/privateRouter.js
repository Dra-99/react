import {routerRedux, connect} from "dva"

function privateRouter(props) {
    if(props.loginId) {
        return props.children
    }else {
        props.noLogin && props.noLogin();
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        loginId: state.userLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        noLogin() {
            dispatch(routerRedux.push("/login"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(privateRouter)
