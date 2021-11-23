
// eslint-disable-next-line import/no-anonymous-default-export
export default function (action, dispatch) {
    if(typeof action === "function") {
        return getAutoDispatchAction(action, dispatch);
    }else if(typeof action === "object") {
        let result = {};
        for (const key in action) {
            if (action.hasOwnProperty(key)) {
                if(typeof action[key] === "function") {
                    result[key] = getAutoDispatchAction(action[key], dispatch);
                }
            }
        }
        return result;
    }
    throw new Error("action must is a function or object")
}

/**
 * 
 * @param {function} action 
 * @param {function} dispatch 
 */
function getAutoDispatchAction(action, dispatch) {
    return function(...args) {
        const fun = action(...args);
        dispatch(fun);
    }
}