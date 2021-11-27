export const actionTypes = {
    INCREASE: Symbol("increase"),
    DECREASE: Symbol("decrease"),
    ASYNCINCREASE: Symbol("async-increase"),
    ASYNCDECREASE: Symbol("async-decrease"),
    AUTOINCREASE: Symbol("auto-increase"),
    CANCELAUTOINCREASE: Symbol("cancel-auto-increase")
}

export function createIncreaseAction() {
    return {
        type: actionTypes.INCREASE
    }
}

export function createDecreaseAction() {
    return {
        type: actionTypes.DECREASE
    }
}

export function createAsyncIncreaseAction() {
    return {
        type: actionTypes.ASYNCINCREASE
    }
}

export function createAsyncDecreaseAction() {
    return {
        type: actionTypes.ASYNCDECREASE
    }
}

export function createAutoIncreaseAction() {
    return {
        type: actionTypes.AUTOINCREASE
    }
}

export function createCancelAutoIncreaseAction() {
    return {
        type: actionTypes.CANCELAUTOINCREASE
    }
}