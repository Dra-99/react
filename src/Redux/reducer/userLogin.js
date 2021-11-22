import { SETLOGINUSRACTION } from "../action/userLoginAction"

export default function userLogin(state = null, { type, payload }) {
    switch (type) {
        case SETLOGINUSRACTION:
            return payload
        default:
            return state
    }
}
