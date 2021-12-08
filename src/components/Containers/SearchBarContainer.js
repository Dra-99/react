import SearchBar from "../SearchBar"
import {connect} from "dva"

const mapStateToProps = state => {
    return {
        defaultValue: {
            key: state.searchStudent.condition.key,
            sex: state.searchStudent.condition.sex
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchStudent(condition) {
            condition.page = 1;
            dispatch({
                type: "searchStudent/setCondition",
                payload: condition
            })
            dispatch({
                type: "searchStudent/fetchData",
                payload: condition
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);