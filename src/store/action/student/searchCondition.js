export const actionTypes = {
    CHANGE: Symbol("change")
};

export function createConditionAction(newCondition) {
    return {
        type: actionTypes.CHANGE,
        payload: newCondition
    }
}