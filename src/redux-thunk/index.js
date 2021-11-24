/**
 * 
 * @returns 该函数返回一个thunk中间件
 */
function getThunk(extra) {
    return store => next => action => {
        if(typeof action === "function") {
            return action(store.dispatch, store.getState, extra);
        }
        return next(action);
    }
}


const thunk = getThunk();

thunk.withExtraArgument = getThunk;

export default thunk;