import * as numberAction from './number-action'

export function getIncreaseAction() {
    return {
        type: numberAction.INCREASE
    }
}

export function getDecreaseAction() {
    return {
        type: numberAction.DECREASE
    }
}

export function getSetAction(payload) {
    return {
        type: numberAction.SET,
        payload
    }
}