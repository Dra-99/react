import {searchStudent} from '../../../service/getStudent'

export const actionTypes = {
    SETSTUDENTTOTALANDDATAS: Symbol("set-student-total-and-datas"),
    SETLOADING: Symbol("set-loading")
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

export function fetchDatas() {
    return async function(dispatch, getState) {
        dispatch(createSetLoading(true));
        const condition = getState().student.searchCondition;
        const resp = await searchStudent(condition);
        dispatch(createStudentTotalAndDatas(resp.datas, resp.cont));
        dispatch(createSetLoading(false));
    }
}