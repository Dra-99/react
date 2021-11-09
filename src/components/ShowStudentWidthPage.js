import React, { Component } from 'react'
import StudentList from './StudentList'
import Pager from './Pager'
import { fetchData } from '../util/fetchData'
import Modal from './Modal'

export default class ShowStudentWidthPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            limit: 10,
            pageSize: 5,
            total: 0,
            studentList: []
        } 
        this.getData()
    }

    async getData() {
        const result = await fetchData(this.state.current, this.state.limit);
        this.setState({
            total: result.cont,
            studentList: result.findByPage
        })
    }

    handlePageChange = (newPage) => {
        this.setState({
            current: newPage
        })
        this.getData();
    }

    render() {
        return (
            <div>
                <Modal show={this.state.studentList.length === 0 ? true : false} />
                <StudentList stuArr={this.state.studentList} />
                <Pager 
                    {...this.state}
                    handlePageChange={this.handlePageChange}
                />
            </div>
        )
    }
}
