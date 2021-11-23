export const SETLOGINUSRACTION = Symbol("set-login-user");

export function createSetLoginUser(user) {
    return {
        type: SETLOGINUSRACTION,
        payload: user
    }
}