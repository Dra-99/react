import Pager from "../Pager"
import {connect} from "dva"

const mapStateToProps = state => {
    return {
        total: state.searchStudent.result.total,
        limit: state.searchStudent.condition.limit,
        current: state.searchStudent.condition.page,
        pageSize: 5
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlePageChange(newPage) {
            dispatch({
                type: "searchStudent/setCondition",
                payload: {
                    page: newPage
                }
            })
            dispatch({
                type: "searchStudent/fetchData"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pager)