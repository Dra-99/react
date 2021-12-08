import Header from "../Header/index"
import {connect, routerRedux} from "dva"


const mapStateToProps = (state) => {
    return {
        loginId: state.userLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginOut() {
            dispatch({
                type: "userLogin/loginOut"
            })
            dispatch(routerRedux.push("/login"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);