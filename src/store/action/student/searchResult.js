export const actionTypes = {
    SETSTUDENTTOTALANDDATAS: Symbol("set-student-total-and-datas"),
    SETLOADING: Symbol("set-loading"),
    FETCHDATA: Symbol("fetch-data")
} 

export function createStudentTotalAndDatas(datas, total) {
    return {
        type: actionTypes.SETSTUDENTTOTALANDDATAS,
        payload: {
            total,
            datas
        }
    }
}

export function createSetLoading(isLoading) {
    return {
        type: actionTypes.SETLOADING,
        payload: isLoading
    }
}


export function createFetchData() {
    return {
        type: actionTypes.FETCHDATA
    }
}
