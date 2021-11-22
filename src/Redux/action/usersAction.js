export const ADDUSER = Symbol("add-user")
export const DELETEUSER = Symbol("delete-user")
export const UPDATEUSER = Symbol("delete-user")

export function createAddUserActio(user) {
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