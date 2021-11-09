import React from 'react';
import ReactDOM from 'react-dom';
import ShowStudentWidthPage from './components/ShowStudentWidthPage'
import {fetchData} from './util/fetchData'


fetchData().then(res => {
    console.log(res)
})


ReactDOM.render(<ShowStudentWidthPage /> , document.getElementById("root") )





