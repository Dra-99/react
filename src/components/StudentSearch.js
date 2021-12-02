import SearchStudentBar from "./SearchStudentBar";
import React, { Component } from 'react'
import {createConditionAction} from '../store/action/student/searchCondition'
import {connect} from 'react-redux'
import {createFetchData} from '../store/action/student/searchResult'
import StudentTable from './StudentTable/index'
import Pager from '../components/Pager/index'
import store from '../store/index'
import ShowModal from './ShowModal'

// 链接searchBar
let mapStateToProps = (state) => {
    return {
        key: state.student.searchCondition.key,
        sex: state.student.searchCondition.sex
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSearch(newCondition) {
            newCondition = {
                ...newCondition,
                page: 1
            }
            console.log(newCondition)
            dispatch(createConditionAction(newCondition));
            dispatch(createFetchData())
        }
    }
}
const SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchStudentBar)

// 链接studentTable
mapStateToProps = (state) => {
    return {
        stuArr: state.student.searchResult.datas
    }
}
const StudentTableList = connect(mapStateToProps)(StudentTable)

// 链接pager
mapStateToProps = (state) => {
    return {
        total: state.student.searchResult.total,
        limit: state.student.searchCondition.limit,
        current: state.student.searchCondition.page,
        pageSize: 5
    }
}
mapDispatchToProps = (dispatch) => {
    return {
        handlePageChange(newPage) {
            dispatch(createConditionAction({
                page: newPage
            }))
            dispatch(createFetchData())
        }
    }
}

const PagerC = connect(mapStateToProps, mapDispatchToProps)(Pager)

// 链接modal
mapStateToProps = (state) => {
    return {
        show: state.student.searchResult.isLoading,
    }
}

const Modal = connect(mapStateToProps)(ShowModal)


export default class StudentSearch extends Component {

    componentDidMount() {
        store.dispatch(createFetchData())
    }
    

    render() {
        return (
            <div>
                <SearchBar />
                <StudentTableList />
                <PagerC />
                <Modal>
                    加载中...
                </Modal>
            </div>
        )
    }
}
