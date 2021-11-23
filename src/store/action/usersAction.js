import {
    getAllStudent
} from '../../service/getStudent'

export const ADDUSER = Symbol("add-user")
export const DELETEUSER = Symbol("delete-user")
export const UPDATEUSER = Symbol("delete-user")
export const SETUSER = Symbol("set-user")
export const SETLOADING = Symbol("set-loading")



export function createAddUserAction(user) {
    return {
        type: ADDUSER,
        payload: user
    }
}

export function createDeleteUserAction(id) {
    return {
        type: DELETEUSER,
        payload: id
    }
}

export function createUpdateUserAction(id, newUser) {
    return {
        type: UPDATEUSER,
        payload: {
            ...newUser,
            id
        }
    }
}

export function createSetUserAction(user) {
    return {
        type: SETUSER,
        payload: user
    }
}

export function createSetLoading(isLoading) {
    return {
        type: SETLOADING,
        payload: isLoading
    }
}

export function fetchData() {
    return function (dispatch) {
        dispatch(createSetLoading(true));
        getAllStudent().then(resp => {
            dispatch(createSetUserAction(resp));
            dispatch(createSetLoading(false));
        })
    }
}