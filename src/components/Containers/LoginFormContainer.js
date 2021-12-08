import Form from "../Form/index"
import {connect} from "dva"
import {routerRedux} from "dva"

const mapDispatchToProps = (dispatch) => {
    return {
        async onLogin(loginId, loginPwd) {
            const state = await dispatch({
                type: "userLogin/login",
                payload: {
                    loginId,
                    loginPwd
                }
            })
            if(state) {
                dispatch(routerRedux.push("/"))
            }else {
                window.alert("账号密码错误")
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(Form);