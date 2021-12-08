import StudentTable from "../StudentTable";
import {connect} from "dva"

const mapStateToProps = state => {
    return {
        stus: state.searchStudent.result.datas
    }
}

export default connect(mapStateToProps, null)(StudentTable);