import Modal from "../Modal";
import {connect} from "dva"

const mapStateToProps = state => {
    return {
        isShow: state.loading.effects["searchStudent/fetchData"]
    }
}

export default connect(mapStateToProps, null)(Modal);