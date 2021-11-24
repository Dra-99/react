import store from "./index";
import {createConditionAction} from './action/student/searchCondition'
import {fetchDatas} from './action/student/searchResult'

store.dispatch(createConditionAction({
    limit: 20
}))

store.dispatch(fetchDatas());
