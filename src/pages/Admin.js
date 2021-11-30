import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from '../components/Layout/index'
import Header from '../components/Header/index'
import Aside from '../components/Aside/index'
import Welcome from './Welcome'
import Student from './Student/Student'
import AddCourse from './Course/AddCourse'
import Course from './Course/Course'
import AddStudent from './Student/AddStudent'
import StudentDetail from './Student/StudentDetail'

export default function Admin() {
    return (
        <Layout 
            header={<Header />}
            aside={<Aside />}
        >
            <Switch>
                <Route path="/" exact component={Welcome}></Route>
                <Route path="/student" exact component={Student}></Route>
                <Route path="/student/add" exact component={AddStudent}></Route>
                <Route path="/course" exact component={Course}></Route>
                <Route path="/course/add" exact component={AddCourse}></Route>
                <Route path="/student/:sNo" exact component={StudentDetail}></Route>
            </Switch>
        </Layout>
    )
}
