import React, { Component } from 'react'
import Pager from './Pager'
export default class PagerTest extends Component {
    state = {
        limit: 10,
        current: 1,
        total: 500,
        pageSize: 5
    }

    handlePageChange = (newPage) => {
        this.setState({
            current: newPage
        })
    }   

    render() {
        return (
            <div>
                <Pager {...this.state} handlePageChange={this.handlePageChange} />
            </div>
        )
    }
}
