const logger = store => next => action => {
    console.log("logger 旧状态", store);
    next(action);
    console.log("logger 新状态", store);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    onAction: logger
}